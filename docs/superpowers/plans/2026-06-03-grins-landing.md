# GrinS Landing Page Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Build a single-page bilingual (RU/LV) sales landing site for GrinS 4 and GrinS 5 accounting software, with a contact form that submits leads to Web3Forms and falls back to localStorage.

**Architecture:** Static site — pure HTML/CSS/vanilla-JS, no build step, no npm. JS uses IIFE with `translations` object and DOM `data-i18n` attributes for i18n. Form POSTs to Web3Forms endpoint; on failure or before send, leads saved to `localStorage`.

**Tech Stack:** HTML5, CSS3 (custom properties, mobile-first), vanilla JavaScript (ES2020+), Web3Forms API.

**Spec:** `C:\sellGrins\docs\superpowers\specs\2026-06-03-grins-landing-design.md`

---

## File Structure

```
C:\sellGrins\
├── index.html              # Page structure with data-i18n attributes
├── styles.css              # All styles
├── script.js               # i18n, form, scroll logic
├── README.md               # Setup + Web3Forms key instructions
├── .gitignore              # OS/editor noise
└── docs\
    └── superpowers\
        ├── specs\2026-06-03-grins-landing-design.md
        └── plans\2026-06-03-grins-landing.md  (this file)
```

**Responsibilities:**
- `index.html` — semantic structure + all visible text (with `data-i18n`)
- `styles.css` — design tokens, layout, components, responsive rules
- `script.js` — translations, language switching, form validation/submission, scroll, localStorage
- `README.md` — how to get Web3Forms key and run the site

---

## Task 1: Initialize project & git

**Files:**
- Create: `C:\sellGrins\.gitignore`
- Create: `C:\sellGrins\README.md`

- [ ] **Step 1: Init git repo**

Run:
```bash
cd C:\sellGrins && git init
```
Expected: `Initialized empty Git repository in C:/sellGrins/.git/`

- [ ] **Step 2: Create .gitignore**

Write `C:\sellGrins\.gitignore` with content:
```
.DS_Store
Thumbs.db
.vscode/
.idea/
*.log
node_modules/
```

- [ ] **Step 3: Initial commit**

Run:
```bash
cd C:\sellGrins && git add .gitignore && git commit -m "chore: initialize project with .gitignore"
```
Expected: commit created.

---

## Task 2: HTML skeleton + Header + Hero

**Files:**
- Create: `C:\sellGrins\index.html`
- Create: `C:\sellGrins\styles.css` (empty placeholder)
- Create: `C:\sellGrins\script.js` (empty placeholder)

- [ ] **Step 1: Create empty styles.css and script.js placeholders**

Write `C:\sellGrins\styles.css`:
```css
/* GrinS Landing — styles loaded in Task 6 */
```

Write `C:\sellGrins\script.js`:
```js
/* GrinS Landing — script loaded in Task 8 */
```

- [ ] **Step 2: Create index.html with full structure (header + hero + product cards shell)**

Write `C:\sellGrins\index.html`:
```html
<!DOCTYPE html>
<html lang="ru">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <meta name="description" content="GrinS — профессиональные решения для бухгалтерского учёта. GrinS 4 и GrinS 5.">
  <title>GrinS — Профессиональные решения для бухгалтерского учёта</title>
  <link rel="stylesheet" href="styles.css">
</head>
<body>
  <header class="header">
    <div class="container header__inner">
      <a href="#hero" class="logo" aria-label="GrinS">
        <span class="logo__mark">GrinS</span>
      </a>
      <nav class="nav" aria-label="Главная навигация">
        <a href="#products" class="nav__link" data-i18n="nav.products">Продукты</a>
        <a href="#features" class="nav__link" data-i18n="nav.features">Преимущества</a>
        <a href="#compare" class="nav__link" data-i18n="nav.compare">Сравнение</a>
        <a href="#contact" class="nav__link" data-i18n="nav.contact">Связаться</a>
      </nav>
      <div class="lang-switch" role="group" aria-label="Переключатель языка">
        <button type="button" class="lang-btn lang-btn--active" data-lang="ru" aria-pressed="true">RU</button>
        <button type="button" class="lang-btn" data-lang="lv" aria-pressed="false">LV</button>
      </div>
      <a href="#contact" class="btn btn--accent header__cta" data-i18n="nav.contactCta">Связаться</a>
    </div>
  </header>

  <main>
    <section id="hero" class="hero">
      <div class="container">
        <h1 class="hero__title" data-i18n="hero.title">Профессиональные решения для бухгалтерского учёта</h1>
        <p class="hero__subtitle" data-i18n="hero.subtitle">GrinS — это модульная система автоматизации для бухгалтерии, склада, зарплаты и управления предприятием. Доверяют более 1500 компаний в Латвии.</p>
        <div class="hero__ctas">
          <a href="#products" class="btn btn--primary btn--lg" data-i18n="hero.ctaProducts">Выбрать продукт</a>
          <a href="#contact" class="btn btn--outline btn--lg" data-i18n="hero.ctaDemo">Заказать демо</a>
        </div>
      </div>
    </section>
  </main>

  <script src="script.js"></script>
</body>
</html>
```

- [ ] **Step 3: Verify file opens in browser**

Open `C:\sellGrins\index.html` in browser. Expected: blank page with header and hero text visible (unstyled — colors/positioning will be added in Tasks 6-7).

- [ ] **Step 4: Commit**

Run:
```bash
cd C:\sellGrins && git add index.html styles.css script.js && git commit -m "feat(html): add skeleton with header and hero"
```

---

## Task 3: HTML — Products, Features, Comparison sections

**Files:**
- Modify: `C:\sellGrins\index.html`

- [ ] **Step 1: Insert Products section after hero (inside `<main>`)**

Replace the closing `</main>` line with the new sections, then add closing `</main>`. Insert this before `</main>`:

```html
    <section id="products" class="products">
      <div class="container">
        <h2 class="section-title" data-i18n="products.title">Наши продукты</h2>
        <div class="products__grid">
          <article class="card product-card">
            <div class="product-card__badge" data-i18n="products.grins4.badge">Проверенная версия</div>
            <h3 class="product-card__title">GrinS 4</h3>
            <p class="product-card__tagline" data-i18n="products.grins4.tagline">Профессиональная бухгалтерия для предприятий любого размера</p>
            <ul class="product-card__features">
              <li data-i18n="products.grins4.f1">Модульная система</li>
              <li data-i18n="products.grins4.f2">Всегда актуальна — соответствует законам ЛР</li>
              <li data-i18n="products.grins4.f3">Низкие системные требования</li>
              <li data-i18n="products.grins4.f4">Работает в 1500+ компаниях</li>
            </ul>
            <div class="product-card__price"><span data-i18n="products.priceFrom">от</span> 110 EUR</div>
            <button type="button" class="btn btn--accent product-card__cta" data-product="grins4" data-i18n="products.orderDemo">Заказать демо</button>
          </article>

          <article class="card product-card product-card--featured">
            <div class="product-card__badge product-card__badge--accent" data-i18n="products.grins5.badge">Новое поколение</div>
            <h3 class="product-card__title">GrinS 5</h3>
            <p class="product-card__tagline" data-i18n="products.grins5.tagline">Гибкое решение для управления предприятием нового поколения</p>
            <ul class="product-card__features">
              <li data-i18n="products.grins5.f1">Гибкая модульная система</li>
              <li data-i18n="products.grins5.f2">Интеграция с интернет-магазином</li>
              <li data-i18n="products.grins5.f3">Мобильное приложение для агентов</li>
              <li data-i18n="products.grins5.f4">Мощная аналитика и отчёты</li>
              <li data-i18n="products.grins5.f5">Облачная версия</li>
            </ul>
            <div class="product-card__price"><span data-i18n="products.priceFrom">от</span> 120 EUR</div>
            <button type="button" class="btn btn--accent product-card__cta" data-product="grins5" data-i18n="products.orderDemo">Заказать демо</button>
          </article>
        </div>
      </div>
    </section>

    <section id="features" class="features">
      <div class="container">
        <h2 class="section-title" data-i18n="features.title">Преимущества GrinS</h2>
        <div class="features__grid">
          <div class="card feature"><div class="feature__icon">🧩</div><h3 class="feature__title" data-i18n="features.modular.title">Модульность</h3><p class="feature__text" data-i18n="features.modular.text">Покупайте только нужные модули: финансы, склад, зарплата, персонал, производство.</p></div>
          <div class="card feature"><div class="feature__icon">🛠️</div><h3 class="feature__title" data-i18n="features.support.title">Поддержка 24/7</h3><p class="feature__text" data-i18n="features.support.text">Профессиональные консультанты, обучение персонала и техническая поддержка.</p></div>
          <div class="card feature"><div class="feature__icon">🏦</div><h3 class="feature__title" data-i18n="features.bank.title">Банковская интеграция</h3><p class="feature__text" data-i18n="features.bank.text">Импорт/экспорт платёжных документов из любого банка Латвии.</p></div>
          <div class="card feature"><div class="feature__icon">🌍</div><h3 class="feature__title" data-i18n="features.lang.title">Мультиязычность</h3><p class="feature__text" data-i18n="features.lang.text">Интерфейс на латышском, русском и английском языках.</p></div>
          <div class="card feature"><div class="feature__icon">📊</div><h3 class="feature__title" data-i18n="features.reports.title">Отчёты VID</h3><p class="feature__text" data-i18n="features.reports.text">Автоматическое формирование всех необходимых отчётов для СГД.</p></div>
          <div class="card feature"><div class="feature__icon">☁️</div><h3 class="feature__title" data-i18n="features.cloud.title">Облачная версия</h3><p class="feature__text" data-i18n="features.cloud.text">Возможность аренды программы — без необходимости в собственной IT-инфраструктуре.</p></div>
        </div>
      </div>
    </section>

    <section id="compare" class="compare">
      <div class="container">
        <h2 class="section-title" data-i18n="compare.title">Какой GrinS выбрать?</h2>
        <div class="compare__wrap">
          <table class="compare__table">
            <thead><tr><th data-i18n="compare.featureCol">Параметр</th><th>GrinS 4</th><th>GrinS 5</th></tr></thead>
            <tbody>
              <tr><td data-i18n="compare.price">Цена</td><td data-i18n="compare.grins4Price">от 110 EUR</td><td data-i18n="compare.grins5Price">от 120 EUR</td></tr>
              <tr><td data-i18n="compare.bestFor">Подходит для</td><td data-i18n="compare.grins4BestFor">Малый и средний бизнес</td><td data-i18n="compare.grins5BestFor">Любой размер, сложные процессы</td></tr>
              <tr><td data-i18n="compare.modules">Модули</td><td data-i18n="compare.grins4Modules">Базовый набор + доп. модули</td><td data-i18n="compare.grins5Modules">Полностью модульная архитектура</td></tr>
              <tr><td data-i18n="compare.eshop">Интеграция с интернет-магазином</td><td>—</td><td data-i18n="compare.yes">Да</td></tr>
              <tr><td data-i18n="compare.mobile">Мобильное приложение</td><td>—</td><td data-i18n="compare.yes">Да</td></tr>
              <tr><td data-i18n="compare.cloud">Облачная версия</td><td data-i18n="compare.yes">Да</td><td data-i18n="compare.yes">Да</td></tr>
            </tbody>
          </table>
        </div>
      </div>
    </section>
```

- [ ] **Step 2: Verify in browser**

Open `C:\sellGrins\index.html` — verify all three new sections render with text content.

- [ ] **Step 3: Commit**

Run:
```bash
cd C:\sellGrins && git add index.html && git commit -m "feat(html): add products, features and comparison sections"
```

---

## Task 4: HTML — Contact form + Footer

**Files:**
- Modify: `C:\sellGrins\index.html`

- [ ] **Step 1: Insert Contact form section before closing `</main>`**

Insert before `</main>`:

```html
    <section id="contact" class="contact">
      <div class="container">
        <h2 class="section-title" data-i18n="form.title">Связаться с нами</h2>
        <p class="contact__lead" data-i18n="form.lead">Оставьте заявку — мы свяжемся с вами и подберём оптимальное решение для вашего бизнеса.</p>
        <form id="contact-form" class="contact-form" novalidate>
          <div class="form-row">
            <label class="form-field">
              <span class="form-field__label" data-i18n="form.name">Имя</span>
              <input type="text" name="name" required autocomplete="name" data-i18n-attr="placeholder|form.namePh" placeholder="Ваше имя">
              <span class="form-field__error" data-error="name"></span>
            </label>
            <label class="form-field">
              <span class="form-field__label" data-i18n="form.email">Email</span>
              <input type="email" name="email" required autocomplete="email" data-i18n-attr="placeholder|form.emailPh" placeholder="you@example.com">
              <span class="form-field__error" data-error="email"></span>
            </label>
          </div>
          <label class="form-field">
            <span class="form-field__label" data-i18n="form.product">Интересующий продукт</span>
            <select name="product" required>
              <option value="" data-i18n="form.productPlaceholder">— выберите —</option>
              <option value="grins4">GrinS 4</option>
              <option value="grins5">GrinS 5</option>
              <option value="consult" data-i18n="form.productConsult">Нужна консультация</option>
            </select>
            <span class="form-field__error" data-error="product"></span>
          </label>
          <label class="form-field">
            <span class="form-field__label" data-i18n="form.message">Сообщение</span>
            <textarea name="message" rows="4" data-i18n-attr="placeholder|form.messagePh" placeholder="Расскажите о вашем бизнесе и задачах..."></textarea>
          </label>
          <button type="submit" class="btn btn--primary btn--lg contact-form__submit" data-i18n="form.submit">Отправить заявку</button>
          <div class="contact-form__success" role="status" aria-live="polite" hidden>
            <div class="success-icon">✓</div>
            <p class="success-text" data-i18n="form.success">Заявка отправлена! Мы свяжемся с вами в ближайшее время.</p>
          </div>
          <div class="contact-form__error" role="alert" hidden>
            <p data-i18n="form.error">Не удалось отправить. Попробуйте позже или свяжитесь с нами по телефону.</p>
          </div>
        </form>
      </div>
    </section>
```

- [ ] **Step 2: Insert Footer after `</main>`**

Insert after `</main>`, before `<script>`:

```html
  <footer class="footer">
    <div class="container footer__inner">
      <div class="footer__col">
        <div class="logo logo--footer"><span class="logo__mark">GrinS</span></div>
        <p class="footer__about" data-i18n="footer.about">Профессиональные программные решения для бизнеса. Разработчик — LatInSoft.</p>
      </div>
      <div class="footer__col">
        <h4 class="footer__title" data-i18n="footer.contactsTitle">Контакты</h4>
        <p data-i18n="footer.address">Mihoelsa iela 56, Daugavpils, LV-5401</p>
        <p><a href="tel:+37165407217">+371 65407217</a></p>
        <p><a href="tel:+37129712981">+371 29712981</a></p>
        <p data-i18n="footer.supportLabel">Поддержка: <a href="tel:+37165407220">+371 65407220</a></p>
      </div>
      <div class="footer__col">
        <h4 class="footer__title" data-i18n="footer.buyTitle">Покупка и демо</h4>
        <p><a href="tel:+37165407217">+371 65407217</a></p>
        <p><a href="tel:+37165422370">+371 65422370</a></p>
        <p><a href="tel:+37129712981">+371 29712981</a></p>
      </div>
    </div>
    <div class="footer__bottom">
      <p data-i18n="footer.copyright">© 2026 LatInSoft. Все права защищены.</p>
    </div>
  </footer>
```

- [ ] **Step 3: Verify in browser**

Open `C:\sellGrins\index.html` — verify form fields, labels, and footer render.

- [ ] **Step 4: Commit**

Run:
```bash
cd C:\sellGrins && git add index.html && git commit -m "feat(html): add contact form and footer"
```

---

## Task 5: JS — translations object

**Files:**
- Modify: `C:\sellGrins\script.js`

- [ ] **Step 1: Write the translations object in script.js**

Replace `C:\sellGrins\script.js` content with:

```js
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

  // Placeholder: language switcher will be added in Task 6.
  window.__grinsTranslations = translations;
})();
```

- [ ] **Step 2: Verify no console errors**

Open `index.html` in browser, open DevTools console. Expected: no errors. `window.__grinsTranslations` should be defined and have `ru` and `lv` keys.

- [ ] **Step 3: Commit**

Run:
```bash
cd C:\sellGrins && git add script.js && git commit -m "feat(js): add RU/LV translations object"
```

---

## Task 6: JS — language switcher

**Files:**
- Modify: `C:\sellGrins\script.js`

- [ ] **Step 1: Add language switcher logic**

Replace the comment `// Placeholder: language switcher will be added in Task 6.` with:

```js
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
```

- [ ] **Step 2: Wire init into DOMContentLoaded**

Append at the end of the IIFE (just before `})();`):

```js
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initLanguage);
  } else {
    initLanguage();
  }
```

- [ ] **Step 3: Add `data-i18n-option` to product-placeholder & product-consult options**

In `C:\sellGrins\index.html`, update the two options inside the form select:

```html
            <select name="product" required>
              <option value="" data-i18n-option="form.productPlaceholder">— выберите —</option>
              <option value="grins4">GrinS 4</option>
              <option value="grins5">GrinS 5</option>
              <option value="consult" data-i18n-option="form.productConsult">Нужна консультация</option>
            </select>
```

- [ ] **Step 4: Manual test in browser**

Open `index.html`:
- Click "LV" → all text changes to Latvian, `<html lang>` becomes `lv`, button gets `lang-btn--active` class.
- Click "RU" → back to Russian.
- Reload page → language persists from previous selection.

- [ ] **Step 5: Commit**

Run:
```bash
cd C:\sellGrins && git add script.js index.html && git commit -m "feat(js): implement language switcher with localStorage persistence"
```

---

## Task 7: JS — form validation & submission

**Files:**
- Modify: `C:\sellGrins\script.js`

- [ ] **Step 1: Add Web3Forms config and validation/submission logic**

Append inside the IIFE, before the DOMContentLoaded wiring:

```js
  const WEB3FORMS_ACCESS_KEY = 'YOUR_ACCESS_KEY_HERE';
  const PENDING_LEADS_KEY = 'grins_pending_leads';
  const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  function t(key) {
    const lang = (document.documentElement.getAttribute('lang') === 'lv') ? 'lv' : 'ru';
    return translations[lang][key] || key;
  }

  function getField(name) {
    const form = document.getElementById('contact-form');
    return form ? form.elements[name] : null;
  }

  function validateField(name) {
    const field = getField(name);
    if (!field) return true;
    const value = (field.value || '').trim();
    const errEl = document.querySelector(`[data-error="${name}"]`);
    let message = '';
    if (!value) {
      message = t('form.errRequired');
    } else if (name === 'email' && !EMAIL_RE.test(value)) {
      message = t('form.errEmail');
    }
    if (errEl) errEl.textContent = message;
    field.classList.toggle('form-field__input--invalid', Boolean(message));
    return !message;
  }

  function validateForm() {
    return ['name', 'email', 'product'].every(validateField);
  }

  function savePendingLead(lead) {
    try {
      const raw = localStorage.getItem(PENDING_LEADS_KEY);
      const arr = raw ? JSON.parse(raw) : [];
      arr.push(lead);
      localStorage.setItem(PENDING_LEADS_KEY, JSON.stringify(arr));
    } catch (e) { /* ignore quota / disabled */ }
  }

  async function flushPendingLeads() {
    try {
      const raw = localStorage.getItem(PENDING_LEADS_KEY);
      if (!raw) return;
      const arr = JSON.parse(raw);
      const remaining = [];
      for (const lead of arr) {
        try {
          const ok = await submitLead(lead, { silent: true });
          if (!ok) remaining.push(lead);
        } catch (e) {
          remaining.push(lead);
        }
      }
      if (remaining.length) {
        localStorage.setItem(PENDING_LEADS_KEY, JSON.stringify(remaining));
      } else {
        localStorage.removeItem(PENDING_LEADS_KEY);
      }
    } catch (e) { /* ignore */ }
  }

  async function submitLead(data, opts) {
    opts = opts || {};
    const payload = {
      access_key: WEB3FORMS_ACCESS_KEY,
      subject: 'Новая заявка GrinS',
      from_name: 'GrinS Landing',
      name: data.name,
      email: data.email,
      product: data.product,
      message: data.message || ''
    };
    try {
      const res = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify(payload)
      });
      const json = await res.json().catch(() => ({}));
      return Boolean(json && json.success);
    } catch (e) {
      return false;
    }
  }

  function showSuccess() {
    const form = document.getElementById('contact-form');
    if (!form) return;
    form.querySelector('.contact-form__success').hidden = false;
    form.querySelector('.contact-form__error').hidden = true;
  }

  function showError() {
    const form = document.getElementById('contact-form');
    if (!form) return;
    form.querySelector('.contact-form__error').hidden = false;
  }

  function hideMessages() {
    const form = document.getElementById('contact-form');
    if (!form) return;
    form.querySelector('.contact-form__success').hidden = true;
    form.querySelector('.contact-form__error').hidden = true;
  }

  function initForm() {
    const form = document.getElementById('contact-form');
    if (!form) return;
    ['name', 'email', 'product'].forEach((n) => {
      const f = form.elements[n];
      if (f) f.addEventListener('blur', () => validateField(n));
    });
    form.addEventListener('submit', async (e) => {
      e.preventDefault();
      if (!validateForm()) return;
      const submitBtn = form.querySelector('.contact-form__submit');
      const originalText = submitBtn.textContent;
      submitBtn.disabled = true;
      submitBtn.textContent = t('form.submitting');
      hideMessages();
      const data = {
        name: form.elements.name.value.trim(),
        email: form.elements.email.value.trim(),
        product: form.elements.product.value,
        message: (form.elements.message.value || '').trim(),
        timestamp: new Date().toISOString()
      };
      savePendingLead(data);
      const ok = await submitLead(data);
      if (ok) {
        try { localStorage.removeItem(PENDING_LEADS_KEY); } catch (e) {}
        form.reset();
        showSuccess();
      } else {
        showError();
      }
      submitBtn.disabled = false;
      submitBtn.textContent = originalText;
    });
    flushPendingLeads();
  }
```

- [ ] **Step 2: Wire `initForm` into DOMContentLoaded**

Replace the existing DOMContentLoaded block with:

```js
  function initAll() {
    initLanguage();
    initForm();
  }
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initAll);
  } else {
    initAll();
  }
```

- [ ] **Step 3: Manual test**

Open `index.html`:
- Submit empty form → red error messages appear under each required field
- Enter invalid email → "Введите корректный email" appears
- Enter valid data with key `YOUR_ACCESS_KEY_HERE` → expect error block to show (real Web3Forms will reject the placeholder key). The lead should still be saved in `localStorage` under `grins_pending_leads`.
- Open DevTools → Application → Local Storage → `grins_pending_leads` should contain the lead JSON.

- [ ] **Step 4: Commit**

Run:
```bash
cd C:\sellGrins && git add script.js && git commit -m "feat(js): add form validation, Web3Forms submission and localStorage backup"
```

---

## Task 8: JS — scroll, demo-button pre-select

**Files:**
- Modify: `C:\sellGrins\script.js`

- [ ] **Step 1: Add initScroll function and wire it**

Append inside the IIFE (before the `initAll` block):

```js
  function initScroll() {
    document.querySelectorAll('a[href^="#"]').forEach((a) => {
      a.addEventListener('click', (e) => {
        const id = a.getAttribute('href');
        if (id.length < 2) return;
        const target = document.querySelector(id);
        if (!target) return;
        e.preventDefault();
        target.scrollIntoView({ behavior: 'smooth', block: 'start' });
        history.replaceState(null, '', id);
      });
    });
    document.querySelectorAll('[data-product]').forEach((btn) => {
      btn.addEventListener('click', () => {
        const product = btn.getAttribute('data-product');
        const select = document.querySelector('select[name="product"]');
        if (select) {
          select.value = product;
          validateField('product');
        }
        const contact = document.getElementById('contact');
        if (contact) contact.scrollIntoView({ behavior: 'smooth', block: 'start' });
      });
    });
  }
```

- [ ] **Step 2: Call initScroll from initAll**

Replace `initAll` with:

```js
  function initAll() {
    initLanguage();
    initForm();
    initScroll();
  }
```

- [ ] **Step 3: Manual test**

Open `index.html`:
- Click "Заказать демо" on GrinS 4 card → page smoothly scrolls to form, product select shows "GrinS 4"
- Click "Заказать демо" on GrinS 5 card → same with "GrinS 5"
- Click nav "Контакты" → smooth scroll to contact section

- [ ] **Step 4: Commit**

Run:
```bash
cd C:\sellGrins && git add script.js && git commit -m "feat(js): smooth scroll anchors and product pre-select on demo buttons"
```

---

## Task 9: CSS — design tokens, reset, base layout

**Files:**
- Modify: `C:\sellGrins\styles.css`

- [ ] **Step 1: Replace styles.css with full base**

Replace `C:\sellGrins\styles.css` content with:

```css
:root {
  --color-primary: #4F46E5;
  --color-primary-dark: #3730A3;
  --color-accent: #F59E0B;
  --color-accent-dark: #D97706;
  --color-bg: #F9FAFB;
  --color-card: #FFFFFF;
  --color-text: #111827;
  --color-text-secondary: #6B7280;
  --color-success: #10B981;
  --color-error: #EF4444;
  --color-border: #E5E7EB;
  --shadow-sm: 0 1px 2px 0 rgba(0,0,0,0.05);
  --shadow-md: 0 4px 6px -1px rgba(0,0,0,0.1), 0 2px 4px -1px rgba(0,0,0,0.06);
  --shadow-lg: 0 10px 25px -3px rgba(0,0,0,0.1), 0 4px 6px -2px rgba(0,0,0,0.05);
  --radius-sm: 8px;
  --radius-md: 12px;
  --radius-lg: 16px;
  --font-sans: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
  --container-max: 1200px;
  --section-py: 80px;
}

*, *::before, *::after { box-sizing: border-box; }
html { scroll-behavior: smooth; }
body {
  margin: 0;
  font-family: var(--font-sans);
  font-size: 16px;
  line-height: 1.6;
  color: var(--color-text);
  background: var(--color-bg);
  -webkit-font-smoothing: antialiased;
}
h1, h2, h3, h4 { margin: 0 0 16px; line-height: 1.2; }
h1 { font-size: 48px; font-weight: 800; letter-spacing: -0.02em; }
h2 { font-size: 36px; font-weight: 700; }
h3 { font-size: 24px; font-weight: 600; }
h4 { font-size: 18px; font-weight: 600; }
p { margin: 0 0 16px; }
a { color: var(--color-primary); text-decoration: none; }
a:hover { text-decoration: underline; }
ul { margin: 0; padding-left: 20px; }
img { max-width: 100%; display: block; }
button { font: inherit; cursor: pointer; }

.container {
  max-width: var(--container-max);
  margin: 0 auto;
  padding: 0 24px;
}

.section-title {
  text-align: center;
  margin-bottom: 48px;
}

/* Buttons */
.btn {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  padding: 12px 24px;
  border: 2px solid transparent;
  border-radius: var(--radius-sm);
  font-weight: 600;
  text-decoration: none;
  cursor: pointer;
  transition: transform 0.15s ease, box-shadow 0.15s ease, background 0.15s ease;
  background: transparent;
  color: var(--color-text);
}
.btn:hover { transform: translateY(-1px); box-shadow: var(--shadow-md); text-decoration: none; }
.btn--primary { background: var(--color-primary); color: #fff; border-color: var(--color-primary); }
.btn--primary:hover { background: var(--color-primary-dark); border-color: var(--color-primary-dark); }
.btn--accent { background: var(--color-accent); color: #fff; border-color: var(--color-accent); }
.btn--accent:hover { background: var(--color-accent-dark); border-color: var(--color-accent-dark); }
.btn--outline { background: transparent; color: var(--color-primary); border-color: var(--color-primary); }
.btn--outline:hover { background: var(--color-primary); color: #fff; }
.btn--lg { padding: 16px 32px; font-size: 18px; }
.btn:disabled { opacity: 0.6; cursor: not-allowed; transform: none; box-shadow: none; }

/* Cards */
.card {
  background: var(--color-card);
  border-radius: var(--radius-lg);
  padding: 32px;
  box-shadow: var(--shadow-md);
  transition: transform 0.2s ease, box-shadow 0.2s ease;
}
.card:hover { transform: translateY(-4px); box-shadow: var(--shadow-lg); }
```

- [ ] **Step 2: Manual check**

Open `index.html` in browser — verify body has light-gray bg, headings are dark, hero text is large.

- [ ] **Step 3: Commit**

Run:
```bash
cd C:\sellGrins && git add styles.css && git commit -m "feat(css): design tokens, reset, base typography, buttons, cards"
```

---

## Task 10: CSS — Header

**Files:**
- Modify: `C:\sellGrins\styles.css`

- [ ] **Step 1: Append header styles**

Append to `C:\sellGrins\styles.css`:

```css
/* Header */
.header {
  position: sticky;
  top: 0;
  z-index: 100;
  background: rgba(255,255,255,0.85);
  backdrop-filter: saturate(180%) blur(12px);
  -webkit-backdrop-filter: saturate(180%) blur(12px);
  border-bottom: 1px solid var(--color-border);
}
.header__inner {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 24px;
  height: 72px;
}
.logo__mark {
  font-size: 24px;
  font-weight: 800;
  letter-spacing: -0.02em;
  color: var(--color-primary);
}
.nav {
  display: flex;
  gap: 24px;
  flex: 1;
  margin-left: 32px;
}
.nav__link {
  color: var(--color-text);
  font-weight: 500;
  text-decoration: none;
  padding: 8px 4px;
  border-bottom: 2px solid transparent;
  transition: color 0.15s ease, border-color 0.15s ease;
}
.nav__link:hover { color: var(--color-primary); border-bottom-color: var(--color-primary); text-decoration: none; }
.lang-switch {
  display: inline-flex;
  background: var(--color-bg);
  border-radius: var(--radius-sm);
  padding: 4px;
  border: 1px solid var(--color-border);
}
.lang-btn {
  background: transparent;
  border: none;
  padding: 6px 12px;
  border-radius: 6px;
  font-weight: 600;
  font-size: 14px;
  color: var(--color-text-secondary);
  transition: background 0.15s ease, color 0.15s ease;
}
.lang-btn--active { background: var(--color-primary); color: #fff; }
.header__cta { white-space: nowrap; }
```

- [ ] **Step 2: Manual check**

Open `index.html` — header sticks to top, language switcher has active state on RU, CTA button visible.

- [ ] **Step 3: Commit**

Run:
```bash
cd C:\sellGrins && git add styles.css && git commit -m "feat(css): sticky header with blur, nav, language switcher"
```

---

## Task 11: CSS — Hero, Products, Features

**Files:**
- Modify: `C:\sellGrins\styles.css`

- [ ] **Step 1: Append section styles**

Append:

```css
/* Hero */
.hero {
  padding: 96px 0 64px;
  background: linear-gradient(135deg, #EEF2FF 0%, #FFFFFF 60%);
  text-align: center;
}
.hero__title { max-width: 800px; margin: 0 auto 24px; }
.hero__subtitle {
  max-width: 720px;
  margin: 0 auto 40px;
  font-size: 20px;
  color: var(--color-text-secondary);
}
.hero__ctas { display: flex; gap: 16px; justify-content: center; flex-wrap: wrap; }

/* Products */
.products { padding: var(--section-py) 0; }
.products__grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 32px;
}
.product-card { display: flex; flex-direction: column; position: relative; }
.product-card--featured { border: 2px solid var(--color-primary); }
.product-card__badge {
  display: inline-block;
  background: var(--color-bg);
  color: var(--color-text-secondary);
  padding: 4px 12px;
  border-radius: 999px;
  font-size: 12px;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 0.05em;
  margin-bottom: 16px;
  align-self: flex-start;
}
.product-card__badge--accent { background: var(--color-accent); color: #fff; }
.product-card__title { font-size: 32px; margin-bottom: 8px; }
.product-card__tagline { color: var(--color-text-secondary); margin-bottom: 24px; }
.product-card__features { margin-bottom: 24px; flex: 1; }
.product-card__features li { margin-bottom: 8px; }
.product-card__price {
  font-size: 28px;
  font-weight: 700;
  color: var(--color-primary);
  margin-bottom: 24px;
}
.product-card__cta { width: 100%; }

/* Features */
.features { padding: var(--section-py) 0; background: var(--color-card); }
.features__grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 24px;
}
.feature { text-align: center; padding: 32px 24px; }
.feature__icon {
  width: 64px;
  height: 64px;
  border-radius: 50%;
  background: linear-gradient(135deg, var(--color-primary), var(--color-primary-dark));
  color: #fff;
  font-size: 32px;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 20px;
}
.feature__title { font-size: 20px; margin-bottom: 12px; }
.feature__text { color: var(--color-text-secondary); margin: 0; }
```

- [ ] **Step 2: Manual check**

Open `index.html` — verify hero gradient, 2 product cards in row, 6 features in 3-column grid.

- [ ] **Step 3: Commit**

Run:
```bash
cd C:\sellGrins && git add styles.css && git commit -m "feat(css): hero gradient, products grid, features grid"
```

---

## Task 12: CSS — Comparison, Contact form, Footer

**Files:**
- Modify: `C:\sellGrins\styles.css`

- [ ] **Step 1: Append styles**

Append:

```css
/* Compare */
.compare { padding: var(--section-py) 0; }
.compare__wrap { overflow-x: auto; }
.compare__table {
  width: 100%;
  border-collapse: collapse;
  background: var(--color-card);
  border-radius: var(--radius-md);
  overflow: hidden;
  box-shadow: var(--shadow-md);
}
.compare__table th, .compare__table td {
  padding: 16px 20px;
  text-align: left;
  border-bottom: 1px solid var(--color-border);
}
.compare__table th {
  background: var(--color-primary);
  color: #fff;
  font-weight: 600;
}
.compare__table tbody tr:last-child td { border-bottom: none; }
.compare__table tbody tr:hover { background: var(--color-bg); }

/* Contact */
.contact { padding: var(--section-py) 0; background: var(--color-card); }
.contact__lead {
  text-align: center;
  font-size: 18px;
  color: var(--color-text-secondary);
  max-width: 640px;
  margin: 0 auto 40px;
}
.contact-form { max-width: 640px; margin: 0 auto; }
.form-row { display: grid; grid-template-columns: 1fr 1fr; gap: 16px; }
.form-field { display: block; margin-bottom: 20px; }
.form-field__label {
  display: block;
  font-weight: 600;
  margin-bottom: 8px;
  font-size: 14px;
}
.form-field input, .form-field select, .form-field textarea {
  width: 100%;
  padding: 12px 16px;
  border: 1px solid var(--color-border);
  border-radius: var(--radius-sm);
  font: inherit;
  background: #fff;
  color: var(--color-text);
  transition: border-color 0.15s ease, box-shadow 0.15s ease;
}
.form-field input:focus, .form-field select:focus, .form-field textarea:focus {
  outline: none;
  border-color: var(--color-primary);
  box-shadow: 0 0 0 3px rgba(79, 70, 229, 0.15);
}
.form-field__input--invalid { border-color: var(--color-error) !important; }
.form-field__error {
  display: block;
  color: var(--color-error);
  font-size: 13px;
  margin-top: 4px;
  min-height: 18px;
}
.contact-form__submit { width: 100%; }
.contact-form__success {
  margin-top: 24px;
  padding: 24px;
  background: #ECFDF5;
  border: 1px solid #A7F3D0;
  border-radius: var(--radius-md);
  text-align: center;
}
.success-icon {
  width: 48px; height: 48px; border-radius: 50%;
  background: var(--color-success); color: #fff;
  font-size: 28px; font-weight: 700;
  display: inline-flex; align-items: center; justify-content: center;
  margin-bottom: 12px;
}
.contact-form__error {
  margin-top: 24px;
  padding: 16px;
  background: #FEF2F2;
  border: 1px solid #FECACA;
  border-radius: var(--radius-md);
  color: var(--color-error);
  text-align: center;
}
.success-text, .contact-form__error p { margin: 0; }

/* Footer */
.footer {
  background: #111827;
  color: #D1D5DB;
  padding: 64px 0 24px;
}
.footer__inner {
  display: grid;
  grid-template-columns: 2fr 1fr 1fr;
  gap: 48px;
  margin-bottom: 48px;
}
.footer__col p { margin: 0 0 8px; }
.footer__col a { color: #D1D5DB; }
.footer__col a:hover { color: #fff; }
.footer .logo__mark { color: #fff; }
.footer__title { color: #fff; margin-bottom: 16px; }
.footer__about { color: #9CA3AF; }
.footer__bottom {
  text-align: center;
  padding-top: 24px;
  border-top: 1px solid #374151;
  color: #9CA3AF;
  font-size: 14px;
}
```

- [ ] **Step 2: Manual check**

Open `index.html` — comparison table, contact form (white inputs with focus ring), dark footer all rendered correctly.

- [ ] **Step 3: Commit**

Run:
```bash
cd C:\sellGrins && git add styles.css && git commit -m "feat(css): comparison table, contact form, dark footer"
```

---

## Task 13: CSS — Responsive (mobile + tablet)

**Files:**
- Modify: `C:\sellGrins\styles.css`

- [ ] **Step 1: Append responsive rules**

Append:

```css
/* Responsive */
@media (max-width: 1023px) {
  h1 { font-size: 40px; }
  h2 { font-size: 32px; }
  .features__grid { grid-template-columns: repeat(2, 1fr); }
  .footer__inner { grid-template-columns: 1fr 1fr; }
}

@media (max-width: 767px) {
  :root { --section-py: 56px; }
  h1 { font-size: 32px; }
  h2 { font-size: 26px; }
  .header__inner { flex-wrap: wrap; height: auto; padding: 12px 0; gap: 12px; }
  .nav { order: 3; flex-basis: 100%; margin-left: 0; justify-content: center; flex-wrap: wrap; gap: 12px; }
  .header__cta { display: none; }
  .hero { padding: 56px 0 40px; }
  .hero__subtitle { font-size: 17px; }
  .products__grid { grid-template-columns: 1fr; }
  .features__grid { grid-template-columns: 1fr; }
  .form-row { grid-template-columns: 1fr; }
  .compare__table { font-size: 14px; }
  .compare__table th, .compare__table td { padding: 12px; }
  .footer__inner { grid-template-columns: 1fr; gap: 32px; }
  .container { padding: 0 16px; }
  .btn--lg { padding: 14px 24px; font-size: 16px; }
}
```

- [ ] **Step 2: Manual test in DevTools**

Open DevTools → toggle device toolbar:
- iPhone SE (375px): cards stack, nav wraps below logo, table is scrollable
- iPad (768px): 2-column features, 1-column products (under 1024px)
- Desktop (1280px): full layout

- [ ] **Step 3: Commit**

Run:
```bash
cd C:\sellGrins && git add styles.css && git commit -m "feat(css): responsive breakpoints for tablet and mobile"
```

---

## Task 14: README with Web3Forms setup

**Files:**
- Modify: `C:\sellGrins\README.md`

- [ ] **Step 1: Write README content**

Replace `C:\sellGrins\README.md` with:

```markdown
# GrinS Landing Page

A single-page bilingual (RU / LV) sales landing site for **GrinS 4** and **GrinS 5** accounting software by LatInSoft.

## Quick start

1. Double-click `index.html` — the site opens in your browser. (Most features work without a server; some browsers may block `fetch` from `file://` — see "Local server" below.)

2. To collect real form submissions, set your Web3Forms key:
   - Open https://web3forms.com
   - Enter your email and click "Create Access Key"
   - Open `script.js`
   - Replace `YOUR_ACCESS_KEY_HERE` with your key:
     ```js
     const WEB3FORMS_ACCESS_KEY = 'your-actual-key-xxxxxxxx';
     ```

3. Lead submissions will arrive in your inbox and appear in the Web3Forms dashboard.

## Local server (optional)

If your browser blocks `fetch` from `file://` URLs, run a tiny static server:

```bash
# Python 3
python -m http.server 8000

# Node.js (npx)
npx serve
```

Then open http://localhost:8000

## Project structure

```
├── index.html      # Page structure with data-i18n attributes
├── styles.css      # All styles (design tokens, layout, responsive)
├── script.js       # Translations, language switcher, form, scroll
└── README.md       # This file
```

## Adding a new language

1. In `script.js`, add a new key to the `translations` object (e.g., `en: { ... }`) with the same nested shape as `ru` / `lv`.
2. Add a new button in the `lang-switch` div in `index.html`:
   ```html
   <button type="button" class="lang-btn" data-lang="en" aria-pressed="false">EN</button>
   ```

## Lead backup (localStorage)

If Web3Forms is unreachable, submitted leads are saved to `localStorage` under `grins_pending_leads` and retried on the next page load. To clear the backup, open DevTools → Application → Local Storage and delete the key.
```

- [ ] **Step 2: Commit**

Run:
```bash
cd C:\sellGrins && git add README.md && git commit -m "docs: add README with Web3Forms setup and project info"
```

---

## Task 15: Final smoke test

**Files:** none (read-only verification)

- [ ] **Step 1: Manual test checklist**

Open `C:\sellGrins\index.html` in a fresh browser tab. Verify each item:

- [ ] Page loads with no console errors
- [ ] All 7 sections render (header, hero, products, features, comparison, contact, footer)
- [ ] Click "LV" → all text changes to Latvian, `<html lang="lv">`
- [ ] Reload → language persists
- [ ] Click "Заказать демо" on GrinS 5 card → form scrolls into view, product is pre-selected
- [ ] Submit empty form → 3 error messages (name, email, product)
- [ ] Submit with invalid email → "Введите корректный email"
- [ ] Resize to 375px → no horizontal scroll, cards stack, nav wraps
- [ ] Resize to 1280px → full 2-column / 3-column layout

- [ ] **Step 2: If any check fails, fix and commit the fix**

If everything passes, mark this task done. No commit needed.

---

## Self-Review

**Spec coverage check:**
- Bilingual RU/LV ✓ (Task 5+6)
- 7 sections in order ✓ (Tasks 2, 3, 4)
- Form: name, email, product, message ✓ (Task 4)
- Web3Forms submission ✓ (Task 7)
- localStorage backup + flush ✓ (Task 7)
- Pre-select product on demo click ✓ (Task 8)
- Smooth scroll ✓ (Task 8)
- Mobile-first responsive ✓ (Task 13)
- Sticky header with blur ✓ (Task 10)
- Color palette / design tokens ✓ (Task 9)
- README + Web3Forms instructions ✓ (Task 14)
- All translation keys for every visible text ✓ (Task 5)

**Placeholder scan:** No TBD/TODO/fill-in steps. Every code block is complete.

**Type/name consistency:** `setLanguage`, `initLanguage`, `initForm`, `initScroll`, `initAll`, `submitLead`, `validateField`, `validateForm`, `savePendingLead`, `flushPendingLeads`, `showSuccess`, `showError`, `hideMessages`, `t` — all defined in Task 7 and used consistently.
