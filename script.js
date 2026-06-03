(function () {
  'use strict';

  const translations = {
    ru: {
      'html.lang': 'ru',
      'nav.products': 'Продукты',
      'nav.features': 'Преимущества',
      'nav.compare': 'Сравнение',
      'nav.contact': 'Связаться',
      'nav.contactCta': 'Связаться',
      'hero.title': 'Профессиональные решения для бухгалтерского учёта',
      'hero.subtitle': 'GrinS — это модульная система автоматизации для бухгалтерии, склада, зарплаты и управления предприятием. Доверяют более 1500 компаний в Латвии.',
      'hero.ctaProducts': 'Выбрать продукт',
      'hero.ctaDemo': 'Заказать демо',
      'products.title': 'Наши продукты',
      'products.priceFrom': 'от',
      'products.orderDemo': 'Заказать демо',
      'products.grins4.badge': 'Проверенная версия',
      'products.grins4.tagline': 'Профессиональная бухгалтерия для предприятий любого размера',
      'products.grins4.f1': 'Модульная система',
      'products.grins4.f2': 'Всегда актуальна — соответствует законам ЛР',
      'products.grins4.f3': 'Низкие системные требования',
      'products.grins4.f4': 'Работает в 1500+ компаниях',
      'products.grins5.badge': 'Новое поколение',
      'products.grins5.tagline': 'Гибкое решение для управления предприятием нового поколения',
      'products.grins5.f1': 'Гибкая модульная система',
      'products.grins5.f2': 'Интеграция с интернет-магазином',
      'products.grins5.f3': 'Мобильное приложение для агентов',
      'products.grins5.f4': 'Мощная аналитика и отчёты',
      'products.grins5.f5': 'Облачная версия',
      'features.title': 'Преимущества GrinS',
      'features.modular.title': 'Модульность',
      'features.modular.text': 'Покупайте только нужные модули: финансы, склад, зарплата, персонал, производство.',
      'features.support.title': 'Поддержка 24/7',
      'features.support.text': 'Профессиональные консультанты, обучение персонала и техническая поддержка.',
      'features.bank.title': 'Банковская интеграция',
      'features.bank.text': 'Импорт/экспорт платёжных документов из любого банка Латвии.',
      'features.lang.title': 'Мультиязычность',
      'features.lang.text': 'Интерфейс на латышском, русском и английском языках.',
      'features.reports.title': 'Отчёты VID',
      'features.reports.text': 'Автоматическое формирование всех необходимых отчётов для СГД.',
      'features.cloud.title': 'Облачная версия',
      'features.cloud.text': 'Возможность аренды программы — без необходимости в собственной IT-инфраструктуре.',
      'compare.title': 'Какой GrinS выбрать?',
      'compare.featureCol': 'Параметр',
      'compare.price': 'Цена',
      'compare.grins4Price': 'от 110 EUR',
      'compare.grins5Price': 'от 120 EUR',
      'compare.bestFor': 'Подходит для',
      'compare.grins4BestFor': 'Малый и средний бизнес',
      'compare.grins5BestFor': 'Любой размер, сложные процессы',
      'compare.modules': 'Модули',
      'compare.grins4Modules': 'Базовый набор + доп. модули',
      'compare.grins5Modules': 'Полностью модульная архитектура',
      'compare.eshop': 'Интеграция с интернет-магазином',
      'compare.mobile': 'Мобильное приложение',
      'compare.cloud': 'Облачная версия',
      'compare.yes': 'Да',
      'form.title': 'Связаться с нами',
      'form.lead': 'Оставьте заявку — мы свяжемся с вами и подберём оптимальное решение для вашего бизнеса.',
      'form.name': 'Имя',
      'form.namePh': 'Ваше имя',
      'form.email': 'Email',
      'form.emailPh': 'you@example.com',
      'form.product': 'Интересующий продукт',
      'form.productPlaceholder': '— выберите —',
      'form.productConsult': 'Нужна консультация',
      'form.message': 'Сообщение',
      'form.messagePh': 'Расскажите о вашем бизнесе и задачах...',
      'form.submit': 'Отправить заявку',
      'form.submitting': 'Отправка...',
      'form.success': 'Заявка отправлена! Мы свяжемся с вами в ближайшее время.',
      'form.error': 'Не удалось отправить. Попробуйте позже или свяжитесь с нами по телефону.',
      'form.errRequired': 'Это поле обязательно',
      'form.errEmail': 'Введите корректный email',
      'footer.about': 'Профессиональные программные решения для бизнеса. Разработчик — LatInSoft.',
      'footer.contactsTitle': 'Контакты',
      'footer.address': 'Mihoelsa iela 56, Daugavpils, LV-5401',
      'footer.supportLabel': 'Поддержка: ',
      'footer.buyTitle': 'Покупка и демо',
      'footer.copyright': '© 2026 LatInSoft. Все права защищены.'
    },
    lv: {
      'html.lang': 'lv',
      'nav.products': 'Produkti',
      'nav.features': 'Priekšrocības',
      'nav.compare': 'Salīdzinājums',
      'nav.contact': 'Sazināties',
      'nav.contactCta': 'Sazināties',
      'hero.title': 'Profesionāli grāmatvedības uzskaites risinājumi',
      'hero.subtitle': 'GrinS — moduļu sistēma grāmatvedības, noliktavas, algu un uzņēmuma vadības automatizācijai. Uzticas vairāk nekā 1500 uzņēmumu Latvijā.',
      'hero.ctaProducts': 'Izvēlēties produktu',
      'hero.ctaDemo': 'Pasūtīt demonstrāciju',
      'products.title': 'Mūsu produkti',
      'products.priceFrom': 'no',
      'products.orderDemo': 'Pasūtīt demonstrāciju',
      'products.grins4.badge': 'Pārbaudīta versija',
      'products.grins4.tagline': 'Profesionāla grāmatvedība jebkura lieluma uzņēmumiem',
      'products.grins4.f1': 'Moduļu sistēma',
      'products.grins4.f2': 'Vienmēr aktuāla — atbilst LR normām',
      'products.grins4.f3': 'Zemas sistēmas prasības',
      'products.grins4.f4': 'Darbojas 1500+ uzņēmumos',
      'products.grins5.badge': 'Jauna paaudze',
      'products.grins5.tagline': 'Elastīgs risinājums jaunās paaudzes uzņēmuma vadībai',
      'products.grins5.f1': 'Elastīga moduļu sistēma',
      'products.grins5.f2': 'Integrācija ar interneta veikalu',
      'products.grins5.f3': 'Mobilā aplikācija aģentiem',
      'products.grins5.f4': 'Spēcīga analītika un atskaites',
      'products.grins5.f5': 'Mākoņversija',
      'features.title': 'GrinS priekšrocības',
      'features.modular.title': 'Moduļveidība',
      'features.modular.text': 'Pērciet tikai nepieciešamos moduļus: finanses, noliktavu, algu, personālu, ražošanu.',
      'features.support.title': 'Atbalsts 24/7',
      'features.support.text': 'Profesionāli konsultanti, personāla apmācība un tehniskais atbalsts.',
      'features.bank.title': 'Banku integrācija',
      'features.bank.text': 'Maksājuma dokumentu imports/eksports no jebkuras Latvijas bankas.',
      'features.lang.title': 'Daudzvalodība',
      'features.lang.text': 'Interfeiss latviešu, krievu un angļu valodās.',
      'features.reports.title': 'VID atskaites',
      'features.reports.text': 'Automātiska visu nepieciešamo atskaišu veidošana VID.',
      'features.cloud.title': 'Mākoņversija',
      'features.cloud.text': 'Programmas nomas iespēja — bez nepieciešamības pēc sava IT.',
      'compare.title': 'Kuru GrinS izvēlēties?',
      'compare.featureCol': 'Parametrs',
      'compare.price': 'Cena',
      'compare.grins4Price': 'no 110 EUR',
      'compare.grins5Price': 'no 120 EUR',
      'compare.bestFor': 'Piemērots',
      'compare.grins4BestFor': 'Mazam un vidējam biznesam',
      'compare.grins5BestFor': 'Jebkuram izmēram, sarežģītiem procesiem',
      'compare.modules': 'Moduļi',
      'compare.grins4Modules': 'Bāzes komplekts + papildu moduļi',
      'compare.grins5Modules': 'Pilnībā moduļu arhitektūra',
      'compare.eshop': 'Integrācija ar interneta veikalu',
      'compare.mobile': 'Mobilā aplikācija',
      'compare.cloud': 'Mākoņversija',
      'compare.yes': 'Jā',
      'form.title': 'Sazināties ar mums',
      'form.lead': 'Atstājiet pieteikumu — mēs sazināsimies un palīdzēsim izvēlēties piemērotāko risinājumu.',
      'form.name': 'Vārds',
      'form.namePh': 'Jūsu vārds',
      'form.email': 'E-pasts',
      'form.emailPh': 'jusu@epasts.lv',
      'form.product': 'Interesējošais produkts',
      'form.productPlaceholder': '— izvēlieties —',
      'form.productConsult': 'Nepieciešama konsultācija',
      'form.message': 'Ziņojums',
      'form.messagePh': 'Pastāstiet par savu uzņēmumu un uzdevumiem...',
      'form.submit': 'Nosūtīt pieteikumu',
      'form.submitting': 'Nosūta...',
      'form.success': 'Pieteikums nosūtīts! Mēs sazināsimies ar jums tuvākajā laikā.',
      'form.error': 'Neizdevās nosūtīt. Lūdzu, mēģiniet vēlāk vai zvaniet mums.',
      'form.errRequired': 'Šis lauks ir obligāts',
      'form.errEmail': 'Lūdzu, ievadiet derīgu e-pastu',
      'footer.about': 'Profesionāli programmatūras risinājumi biznesam. Izstrādātājs — LatInSoft.',
      'footer.contactsTitle': 'Kontakti',
      'footer.address': 'Mihoelsa iela 56, Daugavpils, LV-5401',
      'footer.supportLabel': 'Atbalsts: ',
      'footer.buyTitle': 'Pirkšana un demonstrācija',
      'footer.copyright': '© 2026 LatInSoft. Visas tiesības aizsargātas.'
    }
  };

  window.__grinsTranslations = translations;

  const STORAGE_KEY = 'grins_lang';

  function getSavedLang() {
    try {
      const saved = localStorage.getItem(STORAGE_KEY);
      if (saved === 'ru' || saved === 'lv') return saved;
    } catch (e) { /* localStorage may be blocked */ }
    return 'ru';
  }

  function setLanguage(lang) {
    const dict = translations[lang];
    if (!dict) return;
    document.documentElement.setAttribute('lang', dict['html.lang'] || lang);
    document.querySelectorAll('[data-i18n]').forEach((el) => {
      const key = el.getAttribute('data-i18n');
      const value = dict[key];
      if (value !== undefined) el.textContent = value;
    });
    document.querySelectorAll('[data-i18n-attr]').forEach((el) => {
      const spec = el.getAttribute('data-i18n-attr');
      const [attr, key] = spec.split('|');
      const value = dict[key];
      if (attr && value !== undefined) el.setAttribute(attr, value);
    });
    document.querySelectorAll('[data-i18n-option]').forEach((opt) => {
      const key = opt.getAttribute('data-i18n-option');
      const value = dict[key];
      if (value !== undefined) opt.textContent = value;
    });
    document.querySelectorAll('.lang-btn').forEach((btn) => {
      const isActive = btn.getAttribute('data-lang') === lang;
      btn.classList.toggle('lang-btn--active', isActive);
      btn.setAttribute('aria-pressed', String(isActive));
    });
    try { localStorage.setItem(STORAGE_KEY, lang); } catch (e) { /* ignore */ }
  }

  function initLanguage() {
    const lang = getSavedLang();
    setLanguage(lang);
    document.querySelectorAll('.lang-btn').forEach((btn) => {
      btn.addEventListener('click', () => {
        setLanguage(btn.getAttribute('data-lang'));
      });
    });
  }

  window.__grinsSetLanguage = setLanguage;

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initLanguage);
  } else {
    initLanguage();
  }
})();
