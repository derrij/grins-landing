# GrinS Landing Page — Design Spec

**Date:** 2026-06-03
**Status:** Approved
**Author:** Brainstorming session

## Goal

A single-page sales landing site promoting two accounting software products from LatInSoft:
- **GrinS 4** — proven accounting system running in 1500+ Latvian companies (from 110 EUR)
- **GrinS 5** — next-generation modular system (from 120 EUR)

The page must collect leads via a form and send them to a real backend (Web3Forms).

## Target Audience

Latvian business owners and accountants looking for accounting / ERP software. Primary language: Russian (significant Russian-speaking business community in Latvia). Secondary: Latvian.

## Functional Requirements

### 1. Bilingual (RU / LV)
- Language switcher in the header (two flags or RU/LV buttons).
- Stored in `localStorage` so choice persists across reloads.
- Default language: Russian (based on user prompt).
- All visible text (headings, body, buttons, form labels, placeholders, success/error messages) must be translated.

### 2. Page Structure (top to bottom)
1. **Header** — sticky, with logo "GrinS", nav anchors, language switcher, CTA button "Связаться" / "Sazināties"
2. **Hero** — H1, subheadline ("Профессиональные решения для бухгалтерского учёта" / "Profesionāli grāmatvedības uzskaites risinājumi"), 2 anchor buttons to product cards
3. **Products** — 2 cards side-by-side on desktop (stacked on mobile):
   - GrinS 4 (от 110 EUR / no 110 EUR) — bullets: модули, надёжность, низкие требования
   - GrinS 5 (от 120 EUR / no 120 EUR) — bullets: модульность, мультиязычность, облако, интеграция с интернет-магазином
   - Each card has "Заказать демо" button that scrolls to the contact form and pre-selects the product
4. **Features** — 6 icon cards highlighting key benefits (модульность / поддержка / банковская интеграция / мультиязычность / отчёты VID / облако)
5. **Comparison Table** — "Какой GrinS выбрать?" with rows: Цена, Модули, Подходит для, Интеграция с интернет-магазином, Мультиязычность, Облачная версия
6. **Contact Form** — fields: Имя (name), Email (email, required, validated), Продукт (select: GrinS 4 / GrinS 5 / Консультация), Сообщение (textarea). Submit button.
7. **Footer** — LatInSoft contact info: phones (65407217, 65422370, 29712981), address (Mihoelsa iela 56, Daugavpils)

### 3. Contact Form Behavior
- **Validation:** required name, valid email regex, required product, optional message
- **Submission:**
  - On submit, prevent default browser behavior
  - Show loading state on button ("Отправка..." / "Nosūta...")
  - POST to Web3Forms endpoint with `access_key`, `subject`, `from_name`, plus the 4 form fields
  - On success: show success animation "✓ Заявка отправлена! Мы свяжемся с вами в ближайшее время." with green checkmark; reset form
  - On error: show inline error message in red, keep form values
- **Backup storage:** before sending, save a copy of `{name, email, product, message, timestamp}` to `localStorage` under key `grins_pending_leads` (array). On page load, attempt to flush pending leads.
- **Pre-selection:** clicking "Заказать демо" on a product card pre-selects that product in the form select and scrolls smoothly to the form section

### 4. Web3Forms Configuration
- Endpoint: `https://api.web3forms.com/submit`
- Access key stored as constant `WEB3FORMS_ACCESS_KEY` in `script.js` (top of file)
- User must register at https://web3forms.com (free) with their email to get the key
- README.md explains how to obtain and replace the key

## Non-Functional Requirements

- **No build step:** pure HTML/CSS/JS, opens by double-clicking `index.html` (or via simple static server)
- **No external dependencies:** no npm packages, no frameworks, no CDN-loaded libraries (vanilla JS only)
- **No images from network:** use emoji and CSS-drawn icons (gradients, SVG inline) to avoid 404s
- **Responsive:** mobile-first; breakpoints at 640px (tablet) and 1024px (desktop)
- **Accessibility:** semantic HTML5, proper labels for form fields, keyboard-navigable, sufficient color contrast
- **Performance:** single HTML page < 50KB, CSS < 30KB, JS < 15KB
- **Browser support:** modern evergreen browsers (Chrome, Edge, Firefox, Safari)

## Visual Design

### Color Palette
- **Primary:** `#4F46E5` (indigo) — buttons, links, accents
- **Primary dark:** `#3730A3` — hover states
- **Accent:** `#F59E0B` (amber) — CTA buttons, "Заказать демо"
- **Accent dark:** `#D97706` — hover states
- **Background:** `#F9FAFB` (light gray)
- **Card background:** `#FFFFFF`
- **Text primary:** `#111827`
- **Text secondary:** `#6B7280`
- **Success:** `#10B981`
- **Error:** `#EF4444`
- **Border:** `#E5E7EB`

### Typography
- Font stack: `'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif`
- H1: 48px (mobile 32px), weight 800
- H2: 36px (mobile 28px), weight 700
- H3: 24px, weight 600
- Body: 16px, weight 400, line-height 1.6
- Small: 14px

### Spacing & Layout
- Container max-width: 1200px, centered, padding 24px
- Section vertical padding: 80px (mobile 48px)
- Border radius: 12px (cards), 8px (buttons, inputs), 16px (large cards)
- Shadows: `0 4px 6px -1px rgba(0,0,0,0.1), 0 2px 4px -1px rgba(0,0,0,0.06)` for cards

### Components
- **Buttons:** primary (indigo filled), accent (amber filled), outline (indigo border). Padding 12px 24px, radius 8px, font-weight 600, transition on hover (lift + shadow).
- **Cards:** white background, 16px padding, 12px radius, soft shadow, hover lift effect.
- **Form inputs:** 1px border `#E5E7EB`, 8px radius, 12px 16px padding, focus ring indigo.
- **Icons:** 48px circle with gradient background, emoji centered (📊 📈 💼 🔧 🌍 📑), used in features section and product cards.

## Technical Architecture

### File Structure
```
C:\sellGrins\
├── index.html              # Page structure with data-i18n attributes
├── styles.css              # All styles (CSS variables, mobile-first)
├── script.js               # Language switcher, form handler, scroll
├── README.md               # Setup instructions (Web3Forms key)
└── docs\
    └── superpowers\
        └── specs\
            └── 2026-06-03-grins-landing-design.md  # this file
```

### index.html
- Semantic HTML5: `<header>`, `<main>`, `<section>`, `<footer>`
- All text content wrapped in elements with `data-i18n="key"` attribute
- Form has `id="contact-form"`, inputs have `name` attributes matching Web3Forms field names
- Inline SVG for logo (simple "GrinS" wordmark)

### styles.css
- CSS custom properties at `:root` for colors, spacing, typography
- Mobile-first media queries
- BEM-like class naming (`.card`, `.card__title`, `.btn`, `.btn--accent`)
- Sticky header with backdrop-filter blur

### script.js
Module structure (IIFE):
- `translations` object with `ru` and `lv` keys, each containing nested objects: `nav`, `hero`, `products`, `features`, `compare`, `form`, `footer`
- `setLanguage(lang)` function — iterates all `[data-i18n]` elements, updates `textContent`
- `initLanguage()` — reads `localStorage.grins_lang`, defaults to `ru`
- `initForm()` — submit handler with validation, Web3Forms POST, success/error UI
- `initScroll()` — smooth scroll for anchor links, pre-select product on demo buttons
- DOMContentLoaded → calls all init functions

### Translations Object Shape
```js
const translations = {
  ru: {
    nav: { features: 'Преимущества', products: 'Продукты', contact: 'Связаться' },
    hero: { title: '...', subtitle: '...', cta1: '...', cta2: '...' },
    products: { grins4: { ... }, grins5: { ... } },
    features: { modular: '...', support: '...', ... },
    compare: { ... },
    form: { name: '...', email: '...', product: '...', ... },
    footer: { ... }
  },
  lv: { /* same shape, Latvian text */ }
}
```

## Testing Strategy

Manual testing checklist (run after implementation):
1. Open `index.html` in browser
2. Verify all 7 sections render correctly in Russian
3. Click LV switcher → verify all text changes to Latvian
4. Reload page → verify language persists
5. Resize to 375px width → verify mobile layout (cards stack, no horizontal scroll)
6. Resize to 1280px → verify desktop layout (2 product cards side-by-side)
7. Click "Заказать демо" on GrinS 5 card → verify form scrolls into view and product is pre-selected
8. Submit form with empty fields → verify validation errors
9. Submit form with invalid email → verify email error
10. Submit form with valid data (using test Web3Forms key) → verify success message
11. Check `localStorage` in DevTools → verify pending lead saved
12. Keyboard test: Tab through form, submit with Enter

## Out of Scope (YAGNI)

- Multi-step form
- Admin panel for viewing leads (use Web3Forms dashboard)
- Blog / news section
- User authentication
- Product comparison beyond the simple table
- Integration with real CRM
- Dark mode
- Analytics integration (can be added later)
- A/B testing

## Setup Instructions (for README.md)

1. Open https://web3forms.com
2. Enter your email address to receive the access key
3. Copy the access key
4. Open `script.js`, replace `YOUR_ACCESS_KEY_HERE` with your key
5. Open `index.html` in any browser — site is ready

To run with a local server (optional, only needed if browser blocks fetch from `file://`):
```bash
npx serve
# or
python -m http.server 8000
```

## Open Questions

None — all design decisions confirmed with user.
