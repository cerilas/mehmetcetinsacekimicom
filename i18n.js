(() => {
  const supported = ["tr", "en", "ar", "ru"];

  // Turkish source, English, Arabic, Russian
  const rows = [
    ["Ana sayfa", "Home", "الصفحة الرئيسية", "Главная"],
    ["Ana menü", "Main menu", "القائمة الرئيسية", "Главное меню"],
    ["Sosyal medya", "Social media", "وسائل التواصل الاجتماعي", "Социальные сети"],
    ["Dil seçin", "Select language", "اختر اللغة", "Выбрать язык"],
    ["Kapat", "Close", "إغلاق", "Закрыть"],
    ["Çerez tercihleri", "Cookie preferences", "تفضيلات ملفات تعريف الارتباط", "Настройки cookie"],
    ["Google Haritalar kapalı", "Google Maps is disabled", "خرائط Google معطلة", "Google Карты отключены"],
    ["Haritayı görüntülemek için harici medya izni vermelisiniz.", "Allow external media to display the map.", "لعرض الخريطة، يرجى السماح بالوسائط الخارجية.", "Чтобы увидеть карту, разрешите внешние медиа."],
    ["Tercihleri aç", "Open preferences", "فتح التفضيلات", "Открыть настройки"],
    ["Gizlilik tercihleriniz", "Your privacy choices", "خيارات الخصوصية", "Ваши настройки конфиденциальности"],
    ["Kontrol sizde.", "You are in control.", "التحكم بيدك.", "Вы контролируете выбор."],
    ["Siteyi çalıştırmak ve dil tercihinizi hatırlamak için gerekli depolamayı kullanıyoruz. Google Haritalar yalnızca izin verirseniz yüklenir.", "We use necessary storage to operate the site and remember your language. Google Maps loads only with your permission.", "نستخدم التخزين الضروري لتشغيل الموقع وتذكر لغتك. لا يتم تحميل خرائط Google إلا بإذنك.", "Мы используем необходимое хранилище для работы сайта и сохранения языка. Google Карты загружаются только с вашего разрешения."],
    ["Tümünü kabul et", "Accept all", "قبول الكل", "Принять все"],
    ["İsteğe bağlıları reddet", "Reject optional", "رفض الاختياري", "Отклонить необязательные"],
    ["Tercihler ve detaylar", "Preferences and details", "التفضيلات والتفاصيل", "Настройки и подробности"],
    ["Çerez ve depolama ayrıntıları", "Cookie and storage details", "تفاصيل ملفات تعريف الارتباط والتخزين", "Cookie и локальное хранилище"],
    ["Gizlilik tercihlerinizi yönetin", "Manage your privacy choices", "إدارة خيارات الخصوصية", "Управление конфиденциальностью"],
    ["Zorunlu depolama her zaman etkindir. Harici medya tercihinizi dilediğiniz zaman değiştirebilirsiniz.", "Necessary storage is always active. You can change your external media choice at any time.", "يبقى التخزين الضروري فعالاً دائماً، ويمكنك تغيير خيار الوسائط الخارجية في أي وقت.", "Необходимое хранилище всегда активно. Настройку внешних медиа можно изменить в любое время."],
    ["Aydınlatma bilgisi", "Information notice", "إشعار المعلومات", "Информационное уведомление"],
    ["Veri sorumlusu Mehmet Çetin’dir. Tercihler; siteyi seçtiğiniz dilde sunmak, rıza kaydınızı saklamak ve izin verdiğinizde Google Haritalar içeriğini göstermek amacıyla işlenir.", "The data controller is Mehmet Çetin. Preferences are processed to present the site in your chosen language, store your consent record and display Google Maps when permitted.", "مسؤول البيانات هو محمد تشيتين. تُعالج التفضيلات لعرض الموقع بلغتك وحفظ سجل موافقتك وعرض خرائط Google عند السماح.", "Ответственным за данные является Мехмет Четин. Настройки используются для выбранного языка, хранения решения о согласии и показа Google Карт при разрешении."],
    ["Her zaman etkin", "Always active", "فعال دائماً", "Всегда активно"],
    ["Zorunlu depolama", "Necessary storage", "التخزين الضروري", "Необходимое хранилище"],
    ["site-cookie-consent: Seçiminizi 180 gün saklar. site-language: Seçtiğiniz dili cihazınızda saklar. Her ikisi de birinci taraf yerel depolamadır.", "site-cookie-consent: stores your choice for 180 days. site-language: stores your selected language on your device. Both are first-party local storage.", "site-cookie-consent: يحفظ اختيارك لمدة 180 يوماً. site-language: يحفظ اللغة المحددة على جهازك. كلاهما تخزين محلي للطرف الأول.", "site-cookie-consent: хранит выбор 180 дней. site-language: сохраняет выбранный язык на устройстве. Оба используют локальное хранилище первой стороны."],
    ["İsteğe bağlı", "Optional", "اختياري", "Необязательно"],
    ["Harici medya", "External media", "وسائط خارجية", "Внешние медиа"],
    ["Google Haritalar etkinleştirildiğinde IP adresi ve teknik bilgiler Google’a aktarılabilir; Google üçüncü taraf çerezleri kullanabilir. Süreler Google’ın politikasına göre değişebilir.", "When Google Maps is enabled, your IP address and technical data may be transferred to Google, which may use third-party cookies. Retention periods depend on Google's policy.", "عند تفعيل خرائط Google، قد يُنقل عنوان IP والبيانات التقنية إلى Google وقد تستخدم ملفات تعريف ارتباط لطرف ثالث. تختلف المدد وفق سياسة Google.", "При включении Google Карт IP-адрес и технические данные могут передаваться Google; возможны сторонние cookie. Сроки зависят от политики Google."],
    ["Bu sitede analiz, performans veya reklam çerezi kullanılmamaktadır.", "This site does not use analytics, performance or advertising cookies.", "لا يستخدم هذا الموقع ملفات تعريف ارتباط للتحليلات أو الأداء أو الإعلانات.", "Этот сайт не использует аналитические, рекламные или performance-cookie."],
    ["Seçimlerimi kaydet", "Save my choices", "حفظ خياراتي", "Сохранить выбор"],
    ["Gaziantep saç ekimi - Mehmet Çetin profesyonel portresi, sertifikalar ve ödüller", "Gaziantep hair transplant - Mehmet Çetin portrait, certificates and awards", "زراعة الشعر في غازي عنتاب - صورة محمد تشيتين والشهادات والجوائز", "Пересадка волос в Газиантепе — портрет Мехмета Четина, сертификаты и награды"],
    ["FUE saç ekimi hakkında bilgi alın", "Learn about FUE hair transplant", "تعرف على زراعة الشعر FUE", "Узнать о пересадке FUE"],
    ["Gold saç ekimi hakkında bilgi alın", "Learn about Gold hair transplant", "تعرف على زراعة الشعر Gold", "Узнать о пересадке Gold"],
    ["PRP uygulaması hakkında bilgi alın", "Learn about PRP treatment", "تعرف على تطبيق PRP", "Узнать о PRP"],
    ["Saç ekimi öncesi ve sonrası danışan sonucu", "Client result before and after hair transplant", "نتيجة عميل قبل وبعد زراعة الشعر", "Результат клиента до и после пересадки"],
    ["Doğal saç çizgisi öncesi ve sonrası", "Natural hairline before and after", "خط شعر طبيعي قبل وبعد", "Естественная линия роста до и после"],
    ["Saç ekimi gelişim sonucu", "Hair transplant growth result", "نتيجة نمو الشعر المزروع", "Результат роста пересаженных волос"],
    ["Mehmet Çetin kliniğinde", "Mehmet Çetin at the clinic", "محمد تشيتين في المركز", "Мехмет Четин в клинике"],
    ["Gaziantep konum haritası", "Gaziantep location map", "خريطة الموقع في غازي عنتاب", "Карта расположения в Газиантепе"],
    ["WhatsApp'tan iletişime geçin", "Contact us on WhatsApp", "تواصل معنا عبر واتساب", "Связаться по WhatsApp"],
    ["Uygulamalar", "Treatments", "الخدمات", "Процедуры"],
    ["Süreç", "Process", "المراحل", "Процесс"],
    ["Sonuçlar", "Results", "النتائج", "Результаты"],
    ["Hakkımda", "About", "من أنا", "Обо мне"],
    ["SSS", "FAQ", "الأسئلة الشائعة", "Вопросы"],
    ["Gaziantep'te Doğal Saç Ekimi", "Natural Hair Transplant in Gaziantep", "زراعة شعر طبيعية في غازي عنتاب", "Естественная пересадка волос в Газиантепе"],
    ["FUE ve Gold teknikleriyle kişiye özel planlama, doğal sonuç.", "Personalized planning and natural results with FUE and Gold techniques.", "تخطيط مخصص ونتائج طبيعية بتقنيات FUE وGold.", "Индивидуальное планирование и естественный результат с методами FUE и Gold."],
    ["Yüzünüze ve saç yapınıza uygun, size özel bir süreç.", "A process tailored to your face and hair structure.", "رحلة مصممة لتناسب ملامح وجهك وبنية شعرك.", "Процесс, адаптированный к вашему лицу и структуре волос."],
    ["Ücretsiz analiz isteyin", "Request a free analysis", "اطلب تحليلاً مجانياً", "Получить бесплатный анализ"],
    ["Hemen arayın", "Call now", "اتصل الآن", "Позвонить сейчас"],
    ["danışan deneyimi", "client experiences", "تجربة عميل", "клиентов"],
    ["yıl", "years", "عامًا", "лет"],
    ["uygulama tecrübesi", "of experience", "من الخبرة", "опыта"],
    ["Sürecin her aşamasında birebir takip", "Personal follow-up at every stage", "متابعة شخصية في كل مرحلة", "Личное сопровождение на каждом этапе"],
    ["Doğal saç çizgisi", "Natural hairline", "خط شعر طبيعي", "Естественная линия роста"],
    ["Yüze özel tasarım", "Designed for your face", "تصميم يناسب الوجه", "Дизайн с учетом лица"],
    ["Kişiye özel analiz", "Personalized analysis", "تحليل مخصص", "Индивидуальный анализ"],
    ["Tek tip plan yok", "No one-size-fits-all plan", "لا توجد خطة موحدة للجميع", "Без шаблонных решений"],
    ["Uzman takibi", "Specialist follow-up", "متابعة متخصصة", "Сопровождение специалиста"],
    ["Yakın ve şeffaf takip", "Close and transparent follow-up", "متابعة دقيقة وشفافة", "Внимательное и прозрачное сопровождение"],
    ["Doğal yön & açı", "Natural direction & angle", "اتجاه وزاوية طبيعيان", "Естественное направление и угол"],
    ["Yüzünüze uyumlu çizgi", "A hairline suited to your face", "خط متناسق مع وجهك", "Линия, гармоничная с лицом"],
    ["Operasyon sonrası", "After the procedure", "ما بعد الإجراء", "После процедуры"],
    ["Planlı bakım desteği", "Planned aftercare support", "دعم عناية منظم", "Плановый уход и поддержка"],
    ["Gaziantep Saç Ekimi Hizmetleri", "Hair Transplant Services in Gaziantep", "خدمات زراعة الشعر في غازي عنتاب", "Услуги по пересадке волос в Газиантепе"],
    ["İhtiyaca göre doğru yöntem,", "The right method for your needs,", "الطريقة المناسبة لاحتياجاتك،", "Подходящий метод для ваших потребностей,"],
    ["tek bir hedef:", "with one goal:", "بهدف واحد:", "с одной целью:"],
    ["doğallık.", "a natural look.", "مظهر طبيعي.", "естественность."],
    ["Gaziantep'te sunduğumuz saç ekimi yöntemleri: FUE Saç Ekimi, Gold Saç Ekimi ve PRP uygulaması. Her yöntem herkes için doğru değildir. Donör alanınızı, dökülme tipinizi ve hedefinizi birlikte değerlendirir; size uygun yöntemi belirleriz.", "We offer FUE Hair Transplant, Gold Hair Transplant and PRP in Gaziantep. Not every method is right for everyone. We assess your donor area, hair-loss pattern and goals together to choose the most suitable approach.", "نقدم في غازي عنتاب زراعة الشعر بتقنية FUE وGold وتطبيق PRP. ليست كل طريقة مناسبة للجميع؛ نقيّم المنطقة المانحة ونمط التساقط وأهدافك معاً لاختيار النهج الأنسب.", "В Газиантепе мы предлагаем пересадку волос FUE, Gold и PRP. Не каждый метод подходит всем: мы оцениваем донорскую зону, тип выпадения и ваши цели, чтобы выбрать оптимальный подход."],
    ["En çok tercih edilen", "Most preferred", "الأكثر تفضيلاً", "Самый популярный"],
    ["FUE Saç Ekimi Gaziantep", "FUE Hair Transplant Gaziantep", "زراعة الشعر FUE في غازي عنتاب", "Пересадка волос FUE в Газиантепе"],
    ["Gaziantep'te en popüler saç ekimi yöntemi. Saç köklerinin tek tek alınarak doğal çıkış yönüne uygun biçimde yerleştirildiği modern FUE tekniği ile doğal sonuç.", "A popular hair transplant method in Gaziantep. With modern FUE, follicles are extracted individually and placed in line with their natural growth direction.", "إحدى أشهر طرق زراعة الشعر في غازي عنتاب. تُستخرج البصيلات بشكل فردي وتوضع وفق اتجاه نموها الطبيعي بتقنية FUE الحديثة.", "Популярный метод пересадки волос в Газиантепе. При современной FUE фолликулы извлекаются по одному и размещаются с учетом естественного направления роста."],
    ["Hassas uygulama", "Precision technique", "تطبيق دقيق", "Точная техника"],
    ["Gold Saç Ekimi", "Gold Hair Transplant", "زراعة الشعر Gold", "Пересадка волос Gold"],
    ["Gaziantep'te özel uçlarla yapılan Gold Saç Ekimi. Doku hassasiyetini gözeten özel uçlarla kontrollü kanal ve greft planlaması ile maksimum başarı.", "Gold Hair Transplant in Gaziantep uses specialized tips for controlled channel and graft planning while respecting tissue sensitivity.", "تُجرى زراعة الشعر Gold في غازي عنتاب باستخدام رؤوس خاصة لتخطيط القنوات والبصيلات بدقة مع مراعاة حساسية الأنسجة.", "При пересадке Gold в Газиантепе используются специальные наконечники для контролируемого планирования каналов и графтов с учетом чувствительности тканей."],
    ["Destekleyici bakım", "Supportive care", "عناية داعمة", "Поддерживающий уход"],
    ["PRP Uygulaması Gaziantep", "PRP Treatment Gaziantep", "تطبيق PRP في غازي عنتاب", "PRP в Газиантепе"],
    ["Gaziantep'te saç ekimi sonrası ve saç dökülmesi tedavisinde kullanılan PRP. Saç köklerini ve operasyon sonrası iyileşme sürecini destekleyen kişisel bakım protokolü.", "PRP is used in Gaziantep to support hair roots and recovery after hair transplantation as part of a personalized care protocol.", "يُستخدم PRP في غازي عنتاب لدعم بصيلات الشعر والتعافي بعد الزراعة ضمن بروتوكول عناية مخصص.", "PRP в Газиантепе применяется для поддержки волосяных фолликулов и восстановления после пересадки в рамках индивидуального ухода."],
    ["Süreç nasıl ilerliyor?", "How does the process work?", "كيف تسير العملية؟", "Как проходит процесс?"],
    ["Belirsizliği azaltan,", "A clear roadmap", "خريطة طريق واضحة", "Понятный план,"],
    ["net bir yol haritası.", "with less uncertainty.", "تقلل الغموض.", "который устраняет неопределенность."],
    ["İlk mesajınızdan operasyon sonrası kontrole kadar ne olacağını, neden yapıldığını ve sizi neyin beklediğini açıkça bilirsiniz.", "From your first message through post-procedure follow-up, you know what will happen, why it is done and what to expect.", "من رسالتك الأولى وحتى المتابعة بعد الإجراء، ستعرف بوضوح ما سيحدث ولماذا وما الذي تتوقعه.", "От первого сообщения до последующего контроля вы будете знать, что происходит, зачем и чего ожидать."],
    ["Sürecinizi planlayalım", "Let's plan your process", "لنخطط لرحلتك", "Спланировать процесс"],
    ["Fotoğraflı ön analiz", "Photo pre-assessment", "تقييم أولي بالصور", "Предварительный анализ по фото"],
    ["Saç ve donör alan fotoğraflarınızla ilk değerlendirmeyi yaparız.", "We make an initial assessment using photos of your hair and donor area.", "نجري التقييم الأولي باستخدام صور الشعر والمنطقة المانحة.", "Проводим первичную оценку по фотографиям волос и донорской зоны."],
    ["Yüz yüze planlama", "In-person planning", "تخطيط حضوري", "Очное планирование"],
    ["Saç çizgisi, greft ihtiyacı ve uygun yöntem birlikte netleşir.", "Together we clarify the hairline, graft requirement and suitable method.", "نحدد معاً خط الشعر وعدد البصيلات والطريقة المناسبة.", "Вместе определяем линию роста, количество графтов и подходящий метод."],
    ["Uygulama günü", "Procedure day", "يوم الإجراء", "День процедуры"],
    ["Planlanan çizgi ve yoğunluk doğrultusunda kontrollü işlem yapılır.", "The procedure follows the planned hairline and density.", "يُنفذ الإجراء وفق خط الشعر والكثافة المخطط لهما.", "Процедура выполняется в соответствии с запланированной линией и плотностью."],
    ["Takip & bakım", "Follow-up & care", "المتابعة والعناية", "Наблюдение и уход"],
    ["Yıkama, iyileşme ve gelişim dönemleri düzenli olarak takip edilir.", "Washing, recovery and growth stages are followed regularly.", "تتم متابعة مراحل الغسل والتعافي والنمو بانتظام.", "Этапы мытья, восстановления и роста регулярно контролируются."],
    ["Gerçek danışan sonuçları", "Real client results", "نتائج عملاء حقيقية", "Реальные результаты клиентов"],
    ["Değişim dikkat çeker.", "The change stands out.", "التغيير يلفت الأنظار.", "Перемены заметны."],
    ["İşlem belli olmaz.", "The procedure does not.", "أما الإجراء فلا.", "А процедура — нет."],
    ["Her sonuç; kişinin donör kapasitesine, saç yapısına ve iyileşme sürecine göre değişir.", "Every result varies with donor capacity, hair structure and the individual recovery process.", "تختلف كل نتيجة حسب قدرة المنطقة المانحة وبنية الشعر وسرعة التعافي.", "Результат зависит от донорского ресурса, структуры волос и индивидуального восстановления."],
    ["Öncesi", "Before", "قبل", "До"],
    ["Sonrası", "After", "بعد", "После"],
    ["* Görseller danışan onayıyla paylaşılmıştır. Sonuçlar kişiden kişiye farklılık gösterebilir.", "* Images are shared with client consent. Results may vary from person to person.", "* تمت مشاركة الصور بموافقة العملاء. قد تختلف النتائج من شخص لآخر.", "* Фотографии опубликованы с согласия клиентов. Результаты могут отличаться."],
    ["Yaklaşımım", "My approach", "منهجي", "Мой подход"],
    ["İyi sonuç, doğru çizgiden önce", "A good result begins", "النتيجة الجيدة تبدأ", "Хороший результат начинается"],
    ["doğru dinlemekle", "with listening well,", "بالاستماع الجيد،", "с умения слушать,"],
    ["başlar.", "before drawing the right line.", "قبل رسم الخط الصحيح.", "а уже потом — с правильной линии."],
    ["“Amacım yalnızca daha yoğun saç değil; aynaya baktığınızda yüzünüze yabancı gelmeyen bir sonuç üretmek.”", "“My goal is not simply denser hair, but a result that feels natural when you look in the mirror.”", "«هدفي ليس مجرد شعر أكثر كثافة، بل نتيجة تبدو طبيعية ومتناسقة عندما تنظر في المرآة.»", "«Моя цель — не просто густые волосы, а естественный результат, который гармонично выглядит в зеркале.»"],
    ["Her danışanın yüz oranı, mevcut saç yönü ve donör kapasitesi farklıdır. Bu yüzden planlamanın tamamını kişiye özel yapar, süreci ilk görüşmeden iyileşme dönemine kadar yakından takip ederim.", "Every client has different facial proportions, hair direction and donor capacity. That is why I personalize the entire plan and follow the process closely from the first consultation through recovery.", "تختلف نسب الوجه واتجاه الشعر وقدرة المنطقة المانحة من شخص لآخر؛ لذلك أخصص الخطة بالكامل وأتابع الرحلة عن قرب من الاستشارة الأولى حتى التعافي.", "Пропорции лица, направление волос и донорский ресурс у каждого различаются. Поэтому весь план составляется индивидуально, а процесс внимательно отслеживается от первой консультации до восстановления."],
    ["Biyomedikal · Saç Ekim Uzmanı", "Biomedical · Hair Transplant Specialist", "الطب الحيوي · متخصص زراعة الشعر", "Биомедицина · Специалист по пересадке волос"],
    ["Saç ekimi hakkında merak edilenler", "What people ask about hair transplantation", "أهم الأسئلة عن زراعة الشعر", "Частые вопросы о пересадке волос"],
    ["Sıkça sorulan", "Frequently asked", "الأسئلة", "Часто задаваемые"],
    ["sorular.", "questions.", "الشائعة.", "вопросы."],
    ["Fiyat, greft sayısı, uygulama günü ve iyileşme süreci hakkında en çok sorulan sorulara kısa ve açık yanıtlar.", "Clear, concise answers about prices, graft counts, procedure day and recovery.", "إجابات واضحة ومختصرة عن الأسعار وعدد البصيلات ويوم الإجراء وفترة التعافي.", "Краткие и понятные ответы о стоимости, количестве графтов, дне процедуры и восстановлении."],
    ["Gaziantep saç ekimi fiyatları ne kadar, kaç para?", "How much does a hair transplant cost in Gaziantep?", "كم تبلغ تكلفة زراعة الشعر في غازي عنتاب؟", "Сколько стоит пересадка волос в Газиантепе?"],
    ["Saç ekimi fiyatı; ihtiyaç duyulan greft sayısına, donör alanın durumuna, uygulanacak tekniğe ve seans planına göre değişir. Net fiyat için saç fotoğraflarıyla kişiye özel ön değerlendirme yapılır.", "The price depends on the number of grafts needed, donor area, technique and session plan. A personalized photo assessment is required for an exact quote.", "تعتمد التكلفة على عدد البصيلات وحالة المنطقة المانحة والتقنية وخطة الجلسات. يلزم تقييم شخصي بالصور لتحديد السعر.", "Стоимость зависит от количества графтов, состояния донорской зоны, метода и плана сеансов. Точная цена определяется после оценки по фотографиям."],
    ["Fiyat sorun", "Ask for a price", "اسأل عن السعر", "Узнать цену"],
    ["Saç ekimi kimlere uygundur?", "Who is suitable for a hair transplant?", "لمن تناسب زراعة الشعر؟", "Кому подходит пересадка волос?"],
    ["Kalıcı veya genetik saç kaybı bulunan, donör alanı yeterli ve beklentileri gerçekçi kişiler saç ekimi için uygun olabilir. Saç kaybının nedeni ve donör kapasitesi kişiye özel değerlendirilmelidir.", "People with permanent or genetic hair loss, adequate donor hair and realistic expectations may be suitable. The cause of hair loss and donor capacity must be assessed individually.", "قد تناسب من لديهم تساقط دائم أو وراثي ومنطقة مانحة كافية وتوقعات واقعية. يجب تقييم سبب التساقط وقدرة المنطقة المانحة لكل شخص.", "Процедура может подойти людям с постоянным или наследственным выпадением, достаточной донорской зоной и реалистичными ожиданиями. Требуется индивидуальная оценка."],
    ["Uygunluğunuzu sorun", "Check your suitability", "تحقق من ملاءمتك", "Проверить возможность"],
    ["Saç ekimi acıtır mı?", "Does a hair transplant hurt?", "هل زراعة الشعر مؤلمة؟", "Больно ли делать пересадку волос?"],
    ["İşlem lokal anestezi altında planlanır. İlk uygulama sırasında kısa süreli batma, sonrasında ise geçici hassasiyet hissedilebilir; deneyim kişiden kişiye değişir.", "The procedure is planned under local anesthesia. Brief stinging may occur initially and temporary sensitivity afterward; experiences vary.", "يُخطط الإجراء تحت التخدير الموضعي. قد تشعر بوخز قصير في البداية وحساسية مؤقتة لاحقاً، ويختلف الشعور من شخص لآخر.", "Процедура проводится под местной анестезией. Вначале возможно краткое покалывание, затем временная чувствительность; ощущения индивидуальны."],
    ["Detaylı bilgi alın", "Get more information", "احصل على التفاصيل", "Узнать подробнее"],
    ["Saç ekimi kaç saat sürer?", "How long does a hair transplant take?", "كم تستغرق زراعة الشعر؟", "Сколько длится пересадка волос?"],
    ["Süre; greft sayısına, ekim alanının büyüklüğüne ve kullanılan yönteme bağlıdır. Çoğu işlem aynı gün tamamlanır; geniş alanlarda birden fazla seans planlanabilir.", "Duration depends on graft count, treatment area and method. Most procedures finish the same day; larger areas may require multiple sessions.", "تعتمد المدة على عدد البصيلات ومساحة الزراعة والطريقة. تُستكمل معظم الإجراءات في اليوم نفسه، وقد تحتاج المساحات الكبيرة إلى أكثر من جلسة.", "Длительность зависит от числа графтов, площади и метода. Обычно процедура завершается за день; для больших зон может потребоваться несколько сеансов."],
    ["Süreç hakkında yazın", "Ask about the process", "اسأل عن المراحل", "Спросить о процессе"],
    ["Kaç greft saç ekimine ihtiyacım var?", "How many grafts do I need?", "كم بصيلة أحتاج؟", "Сколько графтов мне нужно?"],
    ["Greft ihtiyacı açıklığın genişliği, hedeflenen yoğunluk, saç teli yapısı ve donör kapasitesine göre belirlenir. Fotoğraflı analiz yaklaşık plan verir; kesin sayı yüz yüze değerlendirmede netleşir.", "Graft needs depend on the area, target density, hair structure and donor capacity. Photos provide an estimate; the final number is confirmed in person.", "يتحدد العدد حسب مساحة الفراغ والكثافة المطلوبة وبنية الشعر وقدرة المنطقة المانحة. تعطي الصور تقديراً أولياً ويُحدد العدد النهائي حضورياً.", "Количество зависит от площади, желаемой плотности, структуры волос и донорского ресурса. Фото дают ориентир, точное число определяется очно."],
    ["Greft analizi isteyin", "Request a graft analysis", "اطلب تحليل البصيلات", "Запросить анализ графтов"],
    ["FUE ile Gold saç ekimi arasındaki fark nedir?", "What is the difference between FUE and Gold?", "ما الفرق بين FUE وGold؟", "В чем разница между FUE и Gold?"],
    ["FUE, saç köklerinin tek tek alınmasına dayanan yöntemdir. Gold uygulamasında kanal ve greft planlamasında özel uçlar kullanılır. Uygun yöntem saç yapısı, donör alan ve hedefe göre seçilir.", "FUE extracts follicles individually. Gold uses specialized tips in channel and graft planning. The suitable method depends on hair structure, donor area and goals.", "تعتمد FUE على استخراج البصيلات منفردة، بينما تستخدم Gold رؤوساً خاصة لتخطيط القنوات والبصيلات. تُختار الطريقة حسب بنية الشعر والمنطقة المانحة والهدف.", "При FUE фолликулы извлекаются по одному. В Gold применяются специальные наконечники. Метод выбирается по структуре волос, донорской зоне и цели."],
    ["Yöntemleri sorun", "Ask about the methods", "اسأل عن الطرق", "Спросить о методах"],
    ["Ekilen saçlar ne zaman çıkar?", "When does transplanted hair grow?", "متى ينمو الشعر المزروع؟", "Когда начинают расти пересаженные волосы?"],
    ["İlk haftalardaki geçici dökülmenin ardından yeni saçlar çoğunlukla dördüncü ay civarında görünmeye başlar. Sonucun belirginleşmesi genellikle 10–18 ay sürebilir.", "After temporary shedding in the first weeks, new hair often appears around month four. The result may take 10–18 months to fully develop.", "بعد التساقط المؤقت في الأسابيع الأولى، يبدأ الشعر الجديد غالباً بالظهور قرب الشهر الرابع. قد تستغرق النتيجة النهائية 10–18 شهراً.", "После временного выпадения в первые недели рост обычно начинается примерно на четвертом месяце. Итог формируется за 10–18 месяцев."],
    ["Gelişim sürecini sorun", "Ask about growth", "اسأل عن مراحل النمو", "Спросить о росте"],
    ["Saç ekimi kalıcı mı?", "Is a hair transplant permanent?", "هل زراعة الشعر دائمة؟", "Пересадка волос — это навсегда?"],
    ["Donör bölgeden alınan kökler genellikle dökülmeye daha dirençlidir. Ancak çevredeki mevcut saçlar zamanla seyrelmeye devam edebilir; kalıcılık ve yoğunluk kişisel koşullara bağlıdır.", "Follicles from the donor area are generally more resistant to loss. Existing surrounding hair may continue thinning; permanence and density depend on individual factors.", "تكون بصيلات المنطقة المانحة أكثر مقاومة للتساقط عادة، لكن الشعر المحيط قد يستمر في الترقق. تعتمد الاستمرارية والكثافة على الحالة الفردية.", "Фолликулы из донорской зоны обычно устойчивее к выпадению, но окружающие волосы могут продолжать редеть. Стойкость и плотность индивидуальны."],
    ["Bize sorun", "Ask us", "اسألنا", "Спросить нас"],
    ["Saç ekimi sonrası iyileşme kaç gün sürer?", "How long is recovery after a hair transplant?", "كم تستغرق فترة التعافي؟", "Сколько длится восстановление?"],
    ["İlk günlerde kızarıklık, kabuklanma, şişlik veya hassasiyet görülebilir. Greftlerin özellikle ilk iki hafta korunması önemlidir; günlük yaşama dönüş yapılan işe ve iyileşme hızına göre değişir.", "Redness, scabbing, swelling or sensitivity may occur initially. Protecting grafts for the first two weeks is important; return to daily life varies by work and recovery.", "قد يظهر احمرار أو قشور أو تورم أو حساسية في الأيام الأولى. حماية البصيلات خلال أول أسبوعين مهمة، والعودة للحياة اليومية تختلف حسب العمل وسرعة التعافي.", "В первые дни возможны покраснение, корочки, отек или чувствительность. Первые две недели графты важно беречь; сроки возвращения к обычной жизни индивидуальны."],
    ["İyileşmeyi sorun", "Ask about recovery", "اسأل عن التعافي", "Спросить о восстановлении"],
    ["İlk yıkama ve spor ne zaman yapılır?", "When can I wash my hair and exercise?", "متى يمكن غسل الشعر وممارسة الرياضة؟", "Когда можно мыть голову и заниматься спортом?"],
    ["İlk yıkama ve bakım, kişiye verilen plana göre nazikçe yapılır. Darbe, yoğun terleme ve ağır egzersizden önerilen süre boyunca kaçınmak gerekir; net zamanlama iyileşmeye göre belirlenir.", "Initial washing and care follow a personalized plan. Avoid impact, heavy sweating and intense exercise for the recommended period; timing depends on recovery.", "يتم الغسل الأول والعناية بلطف وفق الخطة الشخصية. يجب تجنب الصدمات والتعرق الشديد والتمارين القوية للمدة الموصى بها.", "Первое мытье и уход выполняются бережно по индивидуальному плану. Следует избегать ударов, сильного потоотделения и нагрузок в рекомендованный период."],
    ["Bakım planını sorun", "Ask for a care plan", "اسأل عن خطة العناية", "Узнать план ухода"],
    ["Kadınlara saç ekimi yapılır mı?", "Can women have hair transplants?", "هل يمكن زراعة الشعر للنساء؟", "Можно ли женщинам делать пересадку волос?"],
    ["Evet, uygun saç kaybı tipi ve yeterli donör kapasitesi bulunan kadınlara da saç ekimi planlanabilir. Yaygın veya geçici dökülmelerde önce saç kaybının nedeni değerlendirilmelidir.", "Yes. It may be planned for women with a suitable hair-loss pattern and sufficient donor capacity. The cause should first be assessed in diffuse or temporary loss.", "نعم، يمكن التخطيط لها للنساء ذوات نمط التساقط المناسب والمنطقة المانحة الكافية. في التساقط المنتشر أو المؤقت يجب تقييم السبب أولاً.", "Да, при подходящем типе выпадения и достаточной донорской зоне. При диффузном или временном выпадении сначала оценивается причина."],
    ["Ön değerlendirme isteyin", "Request an assessment", "اطلب تقييماً أولياً", "Запросить оценку"],
    ["Saç ekimi için ideal yaş kaçtır?", "What is the ideal age for a hair transplant?", "ما العمر المناسب لزراعة الشعر؟", "Какой возраст подходит для пересадки волос?"],
    ["Tek başına yaş belirleyici değildir. Saç dökülmesinin seyri, donör alan, aile öyküsü ve ileride oluşabilecek kayıp birlikte değerlendirilerek uzun vadeli plan yapılır.", "Age alone is not decisive. Hair-loss progression, donor area, family history and possible future loss are assessed for long-term planning.", "العمر وحده ليس العامل الحاسم. يتم تقييم مسار التساقط والمنطقة المانحة والتاريخ العائلي والفقدان المحتمل مستقبلاً لوضع خطة طويلة الأمد.", "Возраст сам по себе не решает. Для долгосрочного плана оцениваются развитие выпадения, донорская зона, семейная история и возможные будущие изменения."],
    ["Yaş ve planlamayı sorun", "Ask about age and planning", "اسأل عن العمر والتخطيط", "Спросить о возрасте"],
    ["Donör alanı zayıf olanlara saç ekimi yapılabilir mi?", "Is transplantation possible with a weak donor area?", "هل يمكن الزراعة مع منطقة مانحة ضعيفة؟", "Возможна ли пересадка при слабой донорской зоне?"],
    ["Donör alanın yoğunluğu ve saç tellerinin niteliği alınabilecek greft sayısını sınırlar. Zayıf donör alanda daha kontrollü yoğunluk, farklı bölge önceliği veya seans planı gerekebilir.", "Donor density and hair quality limit the available grafts. A weak donor area may require controlled density, different area priorities or a staged plan.", "تحدد كثافة المنطقة المانحة وجودة الشعر عدد البصيلات المتاحة. قد تتطلب المنطقة الضعيفة كثافة مدروسة أو ترتيب أولويات أو عدة جلسات.", "Плотность и качество донорских волос ограничивают число графтов. Может потребоваться умеренная плотность, выбор приоритетных зон или поэтапный план."],
    ["Donör analizi isteyin", "Request donor analysis", "اطلب تحليل المنطقة المانحة", "Запросить анализ донорской зоны"],
    ["Doğal saç çizgisi nasıl planlanır?", "How is a natural hairline planned?", "كيف يتم تخطيط خط شعر طبيعي؟", "Как планируется естественная линия роста?"],
    ["Doğal saç çizgisi; yüz oranı, yaş, mevcut saç yönü, açıklık ve donör kapasitesi birlikte değerlendirilerek tasarlanır. Tek tip veya gereğinden fazla düz bir çizgi yerine kişiye uyum hedeflenir.", "A natural hairline considers facial proportions, age, existing direction, hair loss and donor capacity. The goal is individual harmony rather than a uniform, overly straight line.", "يُصمم خط الشعر الطبيعي بناءً على نسب الوجه والعمر واتجاه الشعر ومساحة الفراغ وقدرة المنطقة المانحة، بهدف الانسجام الشخصي لا الخط المستقيم الموحد.", "Естественная линия проектируется с учетом лица, возраста, направления волос, зоны выпадения и донорского ресурса — без шаблонной прямой линии."],
    ["Saç çizginizi konuşalım", "Let's discuss your hairline", "لنتحدث عن خط شعرك", "Обсудить линию роста"],
    ["İlk adımı bugün atın", "Take the first step today", "ابدأ خطوتك الأولى اليوم", "Сделайте первый шаг сегодня"],
    ["Saçınız için doğru planı", "Let's create the right plan", "لنضع الخطة المناسبة", "Создадим правильный план"],
    ["birlikte oluşturalım.", "for your hair together.", "لشعرك معاً.", "для ваших волос вместе."],
    ["Fotoğraflarınızı WhatsApp üzerinden iletin, size özel ön değerlendirmeyi ücretsiz yapalım.", "Send your photos on WhatsApp for a free personalized pre-assessment.", "أرسل صورك عبر واتساب للحصول على تقييم أولي مخصص ومجاني.", "Отправьте фотографии в WhatsApp для бесплатной индивидуальной предварительной оценки."],
    ["WhatsApp’tan fotoğraf gönder", "Send photos on WhatsApp", "أرسل الصور عبر واتساب", "Отправить фото в WhatsApp"],
    ["© 2026 Mehmet Çetin. Tüm hakları saklıdır.", "© 2026 Mehmet Çetin. All rights reserved.", "© 2026 محمد تشيتين. جميع الحقوق محفوظة.", "© 2026 Мехмет Четин. Все права защищены."],
    ["İletişim", "Contact", "التواصل", "Контакты"],
    ["Merak Edilenler", "Popular Questions", "أسئلة شائعة", "Популярные вопросы"],
    ["Gaziantep Saç Ekimi Fiyatları", "Hair Transplant Prices in Gaziantep", "أسعار زراعة الشعر في غازي عنتاب", "Цены на пересадку волос в Газиантепе"],
    ["Saç Ekimi Kimlere Uygun?", "Who Is Hair Transplant Suitable For?", "لمن تناسب زراعة الشعر؟", "Кому подходит пересадка волос?"],
    ["Saç Ekimi Acıtır mı?", "Does Hair Transplant Hurt?", "هل زراعة الشعر مؤلمة؟", "Больно ли делать пересадку?"],
    ["Kaç Greft Saç Ekimi Gerekir?", "How Many Grafts Are Needed?", "كم بصيلة مطلوبة؟", "Сколько графтов нужно?"],
    ["FUE ve Gold Saç Ekimi Farkı", "FUE vs Gold Hair Transplant", "الفرق بين FUE وGold", "Разница между FUE и Gold"],
    ["Saç Ekimi Sonrası İyileşme", "Recovery After Hair Transplant", "التعافي بعد زراعة الشعر", "Восстановление после пересадки"],
    ["Hizmetlerimiz", "Our Services", "خدماتنا", "Наши услуги"],
    ["Gaziantep Saç Ekimi", "Hair Transplant Gaziantep", "زراعة الشعر في غازي عنتاب", "Пересадка волос в Газиантепе"],
    ["FUE Saç Ekimi", "FUE Hair Transplant", "زراعة الشعر FUE", "Пересадка волос FUE"],
    ["Gold Saç Ekimi Gaziantep", "Gold Hair Transplant Gaziantep", "زراعة الشعر Gold في غازي عنتاب", "Пересадка Gold в Газиантепе"],
    ["Doğal Saç Çizgisi", "Natural Hairline", "خط شعر طبيعي", "Естественная линия роста"],
    ["PRP Uygulaması", "PRP Treatment", "تطبيق PRP", "PRP-процедура"],
    ["Saç Dökülmesi Tedavisi", "Hair Loss Treatment", "علاج تساقط الشعر", "Лечение выпадения волос"],
    ["Erkek Tipi Saç Dökülmesi", "Male Pattern Hair Loss", "الصلع الوراثي لدى الرجال", "Мужской тип выпадения"],
    ["Saç Ekimi Danışması", "Hair Transplant Consultation", "استشارة زراعة الشعر", "Консультация по пересадке"],
    ["Kalıcı Saç Çözümü", "Long-Term Hair Solution", "حل طويل الأمد للشعر", "Долговременное решение"],
    ["Saç Ekimi Operasyonu", "Hair Transplant Procedure", "إجراء زراعة الشعر", "Процедура пересадки волос"],
    ["Bizi Ziyaret Edin", "Visit Us", "تفضل بزيارتنا", "Посетите нас"],
    ["Randevu için WhatsApp veya telefon ile iletişime geçiniz.", "Contact us by WhatsApp or phone for an appointment.", "تواصل معنا عبر واتساب أو الهاتف لحجز موعد.", "Для записи свяжитесь с нами по WhatsApp или телефону."],
    ["Yol Tarifi Al", "Get Directions", "الاتجاهات", "Маршрут"],
    ["Randevu Al", "Book an Appointment", "احجز موعداً", "Записаться"]
  ];

  const dictionary = new Map(rows.map(([tr, en, ar, ru]) => [tr, { tr, en, ar, ru }]));
  const originals = new WeakMap();
  const originalAttributes = new WeakMap();

  const meta = {
    tr: {
      title: "Gaziantep Saç Ekimi Uzmanı - Mehmet Çetin | FUE & Gold Tekniği",
      description: "Gaziantep'te FUE, Gold Saç Ekimi ve PRP uygulamaları. Kişiye özel planlama, doğal sonuç ve birebir takip."
    },
    en: {
      title: "Hair Transplant in Gaziantep - Mehmet Çetin | FUE & Gold",
      description: "FUE, Gold Hair Transplant and PRP in Gaziantep. Personalized planning, natural results and individual follow-up."
    },
    ar: {
      title: "زراعة الشعر في غازي عنتاب - محمد تشيتين | FUE وGold",
      description: "زراعة الشعر بتقنيات FUE وGold وتطبيق PRP في غازي عنتاب مع تخطيط مخصص ونتائج طبيعية."
    },
    ru: {
      title: "Пересадка волос в Газиантепе — Мехмет Четин | FUE и Gold",
      description: "Пересадка волос FUE и Gold, а также PRP в Газиантепе. Индивидуальное планирование и естественный результат."
    }
  };

  const timezoneLanguage = () => {
    const zone = Intl.DateTimeFormat().resolvedOptions().timeZone || "";
    if (zone === "Europe/Istanbul") return "tr";
    if (/Moscow|Kaliningrad|Samara|Yekaterinburg|Omsk|Krasnoyarsk|Irkutsk|Yakutsk|Vladivostok|Magadan|Kamchatka|Novosibirsk/.test(zone)) return "ru";
    if (/Riyadh|Dubai|Baghdad|Kuwait|Qatar|Bahrain|Muscat|Amman|Beirut|Damascus|Cairo|Khartoum|Tripoli|Casablanca|Algiers|Tunis|Gaza|Hebron|Aden/.test(zone)) return "ar";
    return "en";
  };

  const detectLanguage = () => {
    const query = new URLSearchParams(location.search).get("lang");
    if (supported.includes(query)) return query;

    const saved = localStorage.getItem("site-language");
    if (supported.includes(saved)) return saved;

    const browserLanguage = String(navigator.language || navigator.languages?.[0] || "")
      .toLowerCase()
      .split("-")[0];
    if (supported.includes(browserLanguage)) return browserLanguage;

    return timezoneLanguage();
  };

  const translateText = (language) => {
    const walker = document.createTreeWalker(document.body, NodeFilter.SHOW_TEXT, {
      acceptNode(node) {
        const parent = node.parentElement;
        if (!parent || ["SCRIPT", "STYLE", "NOSCRIPT"].includes(parent.tagName) || parent.closest(".language-switcher")) {
          return NodeFilter.FILTER_REJECT;
        }
        return node.nodeValue.trim() ? NodeFilter.FILTER_ACCEPT : NodeFilter.FILTER_REJECT;
      }
    });

    const nodes = [];
    while (walker.nextNode()) nodes.push(walker.currentNode);

    nodes.forEach((node) => {
      if (!originals.has(node)) originals.set(node, node.nodeValue);
      const source = originals.get(node);
      const key = source.trim();
      const translated = dictionary.get(key)?.[language] || key;
      node.nodeValue = source.replace(key, translated);
    });
  };

  const translateAttributes = (language) => {
    document.querySelectorAll("[aria-label], [alt], [title]").forEach((element) => {
      if (!originalAttributes.has(element)) {
        originalAttributes.set(element, {
          "aria-label": element.getAttribute("aria-label"),
          alt: element.getAttribute("alt"),
          title: element.getAttribute("title")
        });
      }

      const stored = originalAttributes.get(element);
      Object.entries(stored).forEach(([attribute, source]) => {
        if (!source) return;
        const translated = dictionary.get(source)?.[language];
        element.setAttribute(attribute, translated || source);
      });
    });
  };

  const updateStructuredData = () => {
    const script = [...document.querySelectorAll('script[type="application/ld+json"]')]
      .find((item) => item.textContent.includes('"FAQPage"'));
    if (!script) return;

    const data = JSON.parse(script.textContent);
    data.mainEntity = [...document.querySelectorAll(".faq details")].map((item) => ({
      "@type": "Question",
      name: item.querySelector("summary").textContent.trim(),
      acceptedAnswer: {
        "@type": "Answer",
        text: item.querySelector(".faq-answer p").textContent.trim()
      }
    }));
    script.textContent = JSON.stringify(data);
  };

  const applyLanguage = (language, persist = false) => {
    const selected = supported.includes(language) ? language : "en";
    const publicUrl = `https://mehmetcetinsacekim.com/?lang=${selected}`;
    const locales = { tr: "tr_TR", en: "en_US", ar: "ar_SA", ru: "ru_RU" };
    document.documentElement.lang = selected;
    document.documentElement.dir = selected === "ar" ? "rtl" : "ltr";
    document.title = meta[selected].title;

    const description = document.querySelector('meta[name="description"]');
    const ogTitle = document.querySelector('meta[property="og:title"]');
    const ogDescription = document.querySelector('meta[property="og:description"]');
    const ogUrl = document.querySelector('meta[property="og:url"]');
    const ogLocale = document.querySelector('meta[property="og:locale"]');
    const canonical = document.querySelector('link[rel="canonical"]');
    if (description) description.content = meta[selected].description;
    if (ogTitle) ogTitle.content = meta[selected].title;
    if (ogDescription) ogDescription.content = meta[selected].description;
    if (ogUrl) ogUrl.content = publicUrl;
    if (ogLocale) ogLocale.content = locales[selected];
    if (canonical) canonical.href = publicUrl;

    translateText(selected);
    translateAttributes(selected);
    updateStructuredData();

    document.querySelector(".language-current").textContent = selected.toUpperCase();
    document.querySelectorAll("[data-language]").forEach((button) => {
      button.classList.toggle("is-active", button.dataset.language === selected);
    });

    if (persist) {
      localStorage.setItem("site-language", selected);
      const url = new URL(location.href);
      url.searchParams.set("lang", selected);
      history.replaceState(null, "", url);
    }
  };

  const setupSwitcher = () => {
    const switcher = document.querySelector(".language-switcher");
    const trigger = switcher.querySelector(".language-trigger");

    const close = () => {
      switcher.classList.remove("is-open");
      trigger.setAttribute("aria-expanded", "false");
    };

    trigger.addEventListener("click", () => {
      const open = switcher.classList.toggle("is-open");
      trigger.setAttribute("aria-expanded", String(open));
    });

    switcher.querySelectorAll("[data-language]").forEach((button) => {
      button.addEventListener("click", () => {
        applyLanguage(button.dataset.language, true);
        close();
      });
    });

    document.addEventListener("click", (event) => {
      if (!switcher.contains(event.target)) close();
    });
    document.addEventListener("keydown", (event) => {
      if (event.key === "Escape") close();
    });
  };

  setupSwitcher();
  applyLanguage(detectLanguage());
})();
