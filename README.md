<div align="center">

<img src="public/icon-192.png" alt="BreweryX Recipe Generator" width="96" height="96" />

# BreweryX Recipe Generator

**Craft perfect YAML recipes for the [BreweryX](https://github.com/BreweryTeam/BreweryX) Minecraft plugin — right in your browser.**

[![Next.js](https://img.shields.io/badge/Next.js-16-black?logo=next.js&logoColor=white)](https://nextjs.org)
[![TypeScript](https://img.shields.io/badge/TypeScript-5-3178C6?logo=typescript&logoColor=white)](https://www.typescriptlang.org)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-4-06B6D4?logo=tailwindcss&logoColor=white)](https://tailwindcss.com)
[![License: MIT](https://img.shields.io/badge/License-MIT-green.svg)](LICENSE)
[![PRs Welcome](https://img.shields.io/badge/PRs-welcome-brightgreen.svg)](https://github.com/VintlGvard/breweryx-recipe-gen/pulls)

No installs. No backend. No YAML headaches. Just open, click, brew. 🍺

[Features](#-features) • [Quick Start](#-quick-start) • [Usage](#-usage) • [Project Structure](#-project-structure) • [Tech Stack](#-tech-stack) • [FAQ](#-faq) • [Contributing](#-contributing)

</div>

---

## 🧪 Why?

Writing BreweryX recipes by hand means fighting YAML indentation, memorizing item IDs, and reloading your server to find a typo. This tool turns that into a form with live preview — you see the exact config as you type, validated and ready to paste.

## ✨ Features

| | |
|---|---|
| ⚡ **Live preview** | YAML regenerates as you type with debounced instant feedback |
| 📦 **Multi-recipe workspace** | Build, switch and manage several recipes in one session |
| 🔍 **Smart search** | Autocomplete over hundreds of Minecraft items and potion effects |
| 🎨 **Full color support** | `&` color codes guide, named colors, HEX / RGB picker with live swatch |
| ↩️ **YAML import/export** | Paste an existing recipe to populate the form; copy to clipboard or download `.yml` |
| ✅ **Validation & warnings** | Required fields, format checks, unknown-item warnings — before anything breaks in game |
| 🌐 **Localized routes** | Bilingual UI (EN/RU) with App Router `/{lang}` routes and automatic `/ru` redirect |
| 🌗 **Light & dark themes** | Theme preference stored in a cookie (read after hydration); localStorage used as fallback |
| 💾 **Auto-save** | Recipes persist in the browser between sessions via localStorage |
| 📋 **Recipe catalog** | Browse pre-made recipes at `/{lang}/recipes`; open any recipe directly in the generator |
| 📖 **Recipe guide** | Full BreweryX field reference at `/{lang}/guide` |
| 🔎 **SEO** | Per-page metadata, Open Graph, Twitter Cards, JSON-LD (WebSite, HowTo, FAQ, BreadcrumbList, ItemList) |
| 🗺 **Sitemap & robots** | Auto-generated `sitemap.xml` and `robots.txt` for both locales |
| 📱 **PWA manifest** | Web app manifest with icons for home-screen install |
| 🚀 **No backend** | No API routes, no server-side logic — all data processing happens in the browser |

## 🚀 Quick Start

> **Prerequisites:** Node.js ≥ 20.9.0 and npm / pnpm / yarn

```bash
# clone
git clone https://github.com/VintlGvard/breweryx-recipe-gen.git
cd breweryx-recipe-gen

# install & run
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) — you will be redirected to `/ru` and can switch to English from the top bar.

### Available scripts

```bash
npm run dev      # start development server
npm run lint     # run ESLint
npm run build    # production build
npm start        # start production server
```

### Environment variable

| Variable | Description | Default |
|---|---|---|
| `NEXT_PUBLIC_SITE_URL` | Canonical site URL used in metadata, sitemap and JSON-LD | `http://localhost:3000` |

Set it in `.env.local` (or via your hosting dashboard):

```
NEXT_PUBLIC_SITE_URL=https://breweryx.vintlgvard.com
```

<details>
<summary><b>Production build & deploy</b></summary>

```bash
npm run build
npm start
```

Deploy to [Vercel](https://vercel.com), Netlify, or any Node.js runtime hosting provider. Run `npm run build && npm start` to serve the production build. The `NEXT_PUBLIC_SITE_URL` variable is resolved at build time for sitemap and metadata.

</details>

## 📖 Usage

1. **Fill in the basics** — recipe ID, display name, ingredients, cooking time and difficulty
2. **Tune the details** — distilling, barrel aging, wood type, color, alcohol, potion effects, commands and more
3. **Watch the preview** — valid BreweryX YAML is generated live on the right
4. **Export** — copy the config or download a ready-to-use `.yml` file
5. **Drop it into your server** — paste into your BreweryX `recipes` config and reload

You can also browse pre-made recipes at `/{lang}/recipes`, open one in the generator to customize it, or use the guide at `/{lang}/guide` as a field-by-field reference.

Example output:

```yaml
my_beer:
  name: '&6Craft Beer'
  lore:
    - 'Tasty beer'
    - 'Refreshing'
  ingredients:
    - WHEAT/6
    - WATER_BUCKET/1
  cookingtime: 5
  color: WHITE
  difficulty: 6
```

## 📂 Project Structure

```
breweryx-recipe-gen/
├── app/
│   ├── page.tsx                # root redirect → /ru
│   ├── layout.tsx              # root layout: global CSS, viewport, WebApplication JSON-LD
│   ├── globals.css             # design system (light/dark themes)
│   ├── robots.ts               # robots.txt (uses NEXT_PUBLIC_SITE_URL)
│   ├── sitemap.ts              # sitemap.xml (main routes and predefined recipe slugs for both locales)
│   ├── manifest.ts             # PWA web app manifest
│   └── [lang]/
│       ├── layout.tsx          # locale layout: per-page SEO metadata, TopBar, footer
│       ├── page.tsx            # landing page: hero, intro, FAQ, embedded generator
│       ├── lang-setter.tsx     # sets document.documentElement.lang after hydration
│       ├── guide/
│       │   └── page.tsx        # full BreweryX recipe-format reference
│       └── recipes/
│           ├── page.tsx        # catalog of pre-made recipes
│           └── [slug]/
│               └── page.tsx    # individual recipe detail page with YAML preview
├── components/
│   ├── RecipeApp.tsx           # main generator — client component (form, preview, import/export)
│   ├── TopBar.tsx              # top navigation bar with language/theme switcher
│   └── ChipInput.tsx           # searchable chip input for items and effects
├── lib/
│   ├── content.ts              # typed i18n content (landing, guide, recipe pages, YAML examples)
│   ├── i18n.ts                 # UI translation strings (EN/RU)
│   ├── recipes.ts              # YAML generation, validation, import, item/effect/color data
│   └── seo.ts                  # JSON-LD builders (WebSite, HowTo, FAQ, BreadcrumbList, ItemList)
├── public/
│   ├── icon-192.png
│   ├── icon-512.png
│   ├── apple-touch-icon.png
│   └── og.png
├── data.json                   # Minecraft items, potion effects, colors, wood types
├── recipes.json                # pre-made recipe data (displayed in catalog and detail pages)
├── postcss.config.mjs          # PostCSS / Tailwind CSS 4 plugin setup
├── eslint.config.mjs           # ESLint flat config
├── next.config.ts
├── tsconfig.json
└── package.json
```

### How localization works

- `app/page.tsx` — always redirects to `/ru`.
- `app/[lang]/layout.tsx` — generates per-locale metadata (`generateMetadata`) and renders the `LangSetter` component.
- `app/[lang]/page.tsx` — validates the `lang` param against `["ru", "en"]`; returns 404 for unknown locales.
- `app/[lang]/lang-setter.tsx` — client component that sets `document.documentElement.lang` after hydration so the browser reflects the active locale.
- Static params are pre-rendered for both locales at build time via `generateStaticParams`.

## 🛠 Tech Stack

| Layer | Choice |
|---|---|
| **Framework** | [Next.js 16](https://nextjs.org) — App Router, localized `[lang]` routes |
| **Language** | [TypeScript](https://www.typescriptlang.org) — strict mode |
| **Styling** | [Tailwind CSS 4](https://tailwindcss.com) + custom design system |
| **YAML** | [js-yaml](https://github.com/nodeca/js-yaml) |
| **Data** | `data.json` (items, colors, wood_types, effects) + `recipes.json` (pre-made recipes); examples in `lib/content.ts` |
| **Storage** | localStorage (recipes) + cookie (theme, with localStorage fallback) |

## ❓ FAQ

<details>
<summary><b>Does it send my recipes anywhere?</b></summary>

No. Everything runs in your browser. Recipes are stored in your browser's localStorage only.
</details>

<details>
<summary><b>Which BreweryX versions are supported?</b></summary>

The generator follows the current BreweryX recipe format described in the [official guide](https://breweryx.breweryteam.dev/docs/for-server-owners/config/recipes/). Generated configs use `&` color codes and single-quoted strings, as recommended.
</details>

<details>
<summary><b>Can I edit an existing recipe?</b></summary>

Yes — click **Import**, paste your YAML, and the form will be populated with all supported fields. You can also open any pre-made recipe from the catalog directly in the generator.
</details>

<details>
<summary><b>My item isn't in the autocomplete list. Can I still use it?</b></summary>

Yes. Type it manually — you'll get a warning that the item is unknown, but it will be included in the config.
</details>

<details>
<summary><b>How does the theme (light/dark) persist?</b></summary>

The selected theme is saved to a cookie on change. After hydration the cookie value is read to set the theme. If the cookie is absent, localStorage is checked as a fallback. The user's recipe data is stored separately in localStorage.
</details>

<details>
<summary><b>Where do the pre-made recipes come from?</b></summary>

They live in `recipes.json` and are displayed on the `/recipes` catalog and detail pages. You can open any of them in the generator to edit and export your own version.
</details>

## 🤝 Contributing

Contributions are welcome!

1. Fork the repository
2. Create your feature branch: `git checkout -b feature/amazing-feature`
3. Commit your changes: `git commit -m "Add amazing feature"`
4. Push to the branch: `git push origin feature/amazing-feature`
5. Open a Pull Request

Found a bug or have an idea? [Open an issue](https://github.com/VintlGvard/breweryx-recipe-gen/issues).

## 📄 License

This project is licensed under the MIT License — see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- [BreweryX](https://github.com/BreweryTeam/BreweryX) — the plugin this tool is built for
- [BreweryX Recipe Guide](https://breweryx.breweryteam.dev/docs/for-server-owners/config/recipes/) — official recipe documentation

---

<div align="center">

**If this tool saved you time, consider giving it a ⭐**

Made with 🍺 for the Minecraft community

</div>
