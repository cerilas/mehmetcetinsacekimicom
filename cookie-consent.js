(() => {
  const storageKey = "site-cookie-consent";
  const version = 1;
  const lifetime = 180 * 24 * 60 * 60 * 1000;

  const banner = document.querySelector(".cookie-banner");
  const modal = document.querySelector(".cookie-modal");
  const externalToggle = document.querySelector(".cookie-external-toggle");
  const mapFrame = document.querySelector(".footer-map-content iframe");
  const mapPlaceholder = document.querySelector(".map-consent-placeholder");
  let lastFocused = null;

  const readConsent = () => {
    try {
      const value = JSON.parse(localStorage.getItem(storageKey));
      if (!value || value.version !== version || Date.now() - value.savedAt > lifetime) return null;
      return value;
    } catch {
      return null;
    }
  };

  const writeConsent = (externalMedia) => {
    const value = { version, externalMedia, savedAt: Date.now() };
    try {
      localStorage.setItem(storageKey, JSON.stringify(value));
    } catch {
      // The choice still applies for the current page when storage is unavailable.
    }
    applyConsent(value);
    banner.classList.remove("is-visible");
  };

  const applyConsent = (value) => {
    const allowed = Boolean(value?.externalMedia);
    externalToggle.checked = allowed;

    if (allowed) {
      if (!mapFrame.hasAttribute("src")) mapFrame.src = mapFrame.dataset.cookieSrc;
      mapFrame.classList.add("is-loaded");
      mapPlaceholder.hidden = true;
    } else {
      mapFrame.removeAttribute("src");
      mapFrame.classList.remove("is-loaded");
      mapPlaceholder.hidden = false;
    }
  };

  const openModal = () => {
    lastFocused = document.activeElement;
    const consent = readConsent();
    externalToggle.checked = Boolean(consent?.externalMedia);
    modal.classList.add("is-open");
    modal.setAttribute("aria-hidden", "false");
    document.body.classList.add("cookie-modal-open");
    requestAnimationFrame(() => modal.querySelector(".cookie-close").focus());
  };

  const closeModal = () => {
    modal.classList.remove("is-open");
    modal.setAttribute("aria-hidden", "true");
    document.body.classList.remove("cookie-modal-open");
    if (lastFocused) lastFocused.focus();
  };

  document.querySelector(".cookie-accept").addEventListener("click", () => writeConsent(true));
  document.querySelector(".cookie-reject").addEventListener("click", () => writeConsent(false));
  document.querySelector(".cookie-save").addEventListener("click", () => {
    writeConsent(externalToggle.checked);
    closeModal();
  });
  document.querySelector(".cookie-dialog-reject").addEventListener("click", () => {
    writeConsent(false);
    closeModal();
  });

  document.querySelectorAll(".cookie-preferences, .cookie-settings-link, .map-consent-button")
    .forEach((button) => button.addEventListener("click", openModal));
  document.querySelectorAll(".cookie-close, .cookie-modal-backdrop")
    .forEach((button) => button.addEventListener("click", closeModal));

  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape" && modal.classList.contains("is-open")) closeModal();
  });

  const consent = readConsent();
  applyConsent(consent);
  if (!consent) requestAnimationFrame(() => banner.classList.add("is-visible"));
})();
