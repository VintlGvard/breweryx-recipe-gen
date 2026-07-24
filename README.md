<div align="center">

<img src="public/icon-192.png" alt="BreweryX Recipe Generator" width="96" height="96" />

# BreweryX Recipe Generator

**Craft perfect YAML recipes for the [BreweryX](https://github.com/BreweryTeam/BreweryX) Minecraft plugin — right in your browser.**

[![Next.js](https://img.shields.io/badge/Next.js-16-black?logo=next.js&logoColor=white)](https://nextjs.org)
[![TypeScript](https://img.shields.io/badge/TypeScript-5-3178C6?logo=typescript&logoColor=white)](https://www.typescriptlang.org)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-4-06B6D4?logo=tailwindcss&logoColor=white)](https://tailwindcss.com)
[![License](https://img.shields.io/badge/License-MIT-green.svg)](LICENSE)

[Features](#-features) • [Getting Started](#-getting-started) • [Usage](#-usage) • [Tech Stack](#-tech-stack) • [Contributing](#-contributing)

</div>

---

## ✨ Features

- ⚡ **Live preview** — YAML regenerates as you type, with debounced instant feedback
- 📦 **Multi-recipe workspace** — build, switch and manage several recipes in one session
- 🔍 **Smart ingredient & effect search** — autocomplete over hundreds of Minecraft items and potion effects
- 🎨 **Full color support** — `&` color codes guide, named colors, HEX and RGB custom colors with a live swatch
- ↩️ **YAML import** — paste an existing recipe and get a fully populated form back
- ✅ **Validation & warnings** — required fields, format checks and unknown-item warnings before anything breaks in game
- 🌐 **Bilingual UI** — English and Russian, switchable in one click
- 🌗 **Light & dark themes** — preference saved in cookies and restored on return
- 💾 **Auto-save** — your recipes persist in the browser between sessions
- 📤 **One-click export** — copy to clipboard or download `.yml` (all recipes or just the current one)
- 🚀 **100% static** — no backend, no API calls; everything runs client-side and deploys anywhere for free

## 🚀 Getting Started

### Prerequisites

- Node.js 18+
- npm / pnpm / yarn

### Installation

```bash
git clone https://github.com/VintlGvard/breweryx-recipe-gen.git
cd breweryx-recipe-gen
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) and start brewing.

### Production build

```bash
npm run build
npm start
```

### Deploy

The app is fully static — deploy it to [Vercel](https://vercel.com), Netlify, GitHub Pages or any static host in seconds. Set `NEXT_PUBLIC_SITE_URL` to your production URL for correct SEO metadata.

## 📖 Usage

1. **Fill in the basics** — recipe ID, display name, ingredients, cooking time and difficulty
2. **Tune the details** — distilling, barrel aging, wood type, color, alcohol, potion effects, commands and more
3. **Watch the preview** — valid BreweryX YAML is generated live on the right
4. **Export** — copy the config or download a ready-to-use `.yml` file
5. **Drop it into your server** — paste the recipe into your BreweryX `recipes` config and reload

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

## 🛠 Tech Stack

| | |
|---|---|
| **Framework** | [Next.js 16](https://nextjs.org) (App Router, static output) |
| **Language** | [TypeScript](https://www.typescriptlang.org) |
| **Styling** | [Tailwind CSS 4](https://tailwindcss.com) + custom design system |
| **YAML** | [js-yaml](https://github.com/nodeca/js-yaml) |

## 🤝 Contributing

Contributions are welcome!

1. Fork the repository
2. Create your feature branch: `git checkout -b feature/amazing-feature`
3. Commit your changes: `git commit -m "Add amazing feature"`
4. Push to the branch: `git push origin feature/amazing-feature`
5. Open a Pull Request

## 📄 License

Distributed under the MIT License.

## 🙏 Acknowledgments

- [BreweryX](https://github.com/BreweryTeam/BreweryX) — the plugin this tool is built for
- [BreweryX Recipe Guide](https://brewery.lumamc.net/en/guide/recipes/) — official recipe documentation

---

<div align="center">

Made with 🍺 for the Minecraft community

</div>
