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
