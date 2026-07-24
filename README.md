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
| ↩️ **YAML import** | Paste an existing recipe and get a fully populated form back |
| ✅ **Validation & warnings** | Required fields, format checks, unknown-item warnings — before anything breaks in game |
| 🌐 **Bilingual UI** | English and Russian, switchable in one click |
| 🌗 **Light & dark themes** | Preference saved in cookies and restored on return |
| 💾 **Auto-save** | Recipes persist in the browser between sessions |
| 📤 **One-click export** | Copy to clipboard or download `.yml` — all recipes or just the current one |
| 🚀 **100% static** | No backend, no API calls; runs fully client-side, deploys anywhere for free |

## 🚀 Quick Start

> **Prerequisites:** Node.js 18+ and npm / pnpm / yarn

```bash
# clone
git clone https://github.com/VintlGvard/breweryx-recipe-gen.git
cd breweryx-recipe-gen

# install & run
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) and start brewing.

<details>
<summary><b>Production build & deploy</b></summary>

```bash
npm run build
npm start
```

The app is fully static — deploy to [Vercel](https://vercel.com), Netlify, GitHub Pages or any static host in seconds.

Set the environment variable for correct SEO metadata:

```bash
NEXT_PUBLIC_SITE_URL=https://your-domain.com
```

</details>

## 📖 Usage

1. **Fill in the basics** — recipe ID, display name, ingredients, cooking time and difficulty
2. **Tune the details** — distilling, barrel aging, wood type, color, alcohol, potion effects, commands and more
3. **Watch the preview** — valid BreweryX YAML is generated live on the right
4. **Export** — copy the config or download a ready-to-use `.yml` file
5. **Drop it into your server** — paste into your BreweryX `recipes` config and reload

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
│   ├── page.tsx        # main UI: form, preview, import/export
│   ├── layout.tsx      # metadata, SEO, JSON-LD
│   ├── globals.css     # design system (light/dark themes)
│   ├── robots.ts       # robots.txt
│   ├── sitemap.ts      # sitemap.xml
│   └── manifest.ts     # PWA manifest
├── components/
│   └── ChipInput.tsx   # searchable chip input for items/effects
├── lib/
│   ├── recipes.ts      # YAML generation, validation, import
│   └── i18n.ts         # EN/RU translations
└── data.json           # Minecraft items, effects, colors, examples
```

## 🛠 Tech Stack

| Layer | Choice |
|---|---|
| **Framework** | [Next.js 16](https://nextjs.org) — App Router, fully static output |
| **Language** | [TypeScript](https://www.typescriptlang.org) — strict mode |
| **Styling** | [Tailwind CSS 4](https://tailwindcss.com) + custom design system |
| **YAML** | [js-yaml](https://github.com/nodeca/js-yaml) |

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

Yes — click **Import**, paste your YAML, and the form will be populated with all supported fields.
</details>

<details>
<summary><b>My item isn't in the autocomplete list. Can I still use it?</b></summary>

Yes. Type it manually — you'll get a warning that the item is unknown, but it will be included in the config.
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
