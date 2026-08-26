export type Locale = "ru" | "en";
export const LOCALES: Locale[] = ["ru", "en"];

export interface SeoMeta {
  title: string;
  description: string;
  keywords: string[];
}

export interface LandingContent {
  meta: SeoMeta;
  heroH1: string;
  heroSubtitle: string;
  introTitle: string;
  introParagraphs: string[];
  howtoTitle: string;
  howtoSteps: { title: string; text: string }[];
  featuresTitle: string;
  features: { title: string; text: string }[];
  examplesTitle: string;
  examplesText: string;
  faqTitle: string;
  faq: { q: string; a: string }[];
  genTitle: string;
  genSubtitle: string;
}

export interface GuideContent {
  meta: SeoMeta;
  intro: string[];
  sections: {
    heading: string;
    paragraphs?: string[];
    list?: { term: string; def: string }[];
    code?: string;
  }[];
}

export interface RecipePageContent {
  meta: SeoMeta;
  intro: string[];
  installSteps: string[];
}

const YAML_EXAMPLE = `my_beer:
  name: '&6Craft Beer'
  lore:
    - 'Tasty beer'
    - 'Refreshing'
  ingredients:
    - WHEAT/6
    - WATER_BUCKET/1
  cookingtime: 5
  color: WHITE
  difficulty: 6`;

const EFFECTS_EXAMPLE = `effects:
  - SPEED/1/60
  - NAUSEA/1/30

# With quality ranges:
effects:
  - SPEED/1-3/10-60
  - REGENERATION/1-2/5-30`;

const QUALITY_EXAMPLE = `name: '&4Bad Beer/&6Normal Beer/&aGood Beer'
lore:
  - '+Lukewarm beer'
  - '++Pleasant taste'
  - '+++Excellent ale'
customModelData: 1000/1001/1002
effects:
  - SPEED/1-3/10-60
  - REGENERATION/1-2/5-30`;

const FULL_EXAMPLE = `thunder_whiskey:
  name: '&8Thunder Whiskey'
  lore:
    - 'Strong aged whiskey'
    - 'Made in oak barrels'
  ingredients:
    - WHEAT/10
    - WATER_BUCKET/2
    - SUGAR/4
  effects:
    - SPEED/1/60
    - NAUSEA/1/30
  cookingtime: 10
  distillruns: 2
  distilltime: 120
  wood: 2
  age: 5
  color: ORANGE
  difficulty: 7
  alcohol: 30`;

export const LANDING: Record<Locale, LandingContent> = {
  ru: {
    meta: {
      title: "Генератор рецептов BreweryX — YAML-конфиги для Minecraft",
      description: "Бесплатный онлайн-генератор YAML-рецептов для плагина BreweryX (Minecraft). Ингредиенты, дистилляция, выдержка в бочках, эффекты зелий и цветовые коды — с живым предпросмотром, валидацией и экспортом.",
      keywords: [
        "breweryx генератор рецептов",
        "breweryx yaml конфиг",
        "breweryx плагин",
        "как сделать пиво в майнкрафт",
        "breweryx на русском",
        "breweryx рецепты",
        "рецепты пива майнкрафт",
        "plugin brewery",
        "minecraft brewing plugin",
        "yaml recipe generator",
        "breweryx спигот",
        "breweryx paper",
        "breweryx minecraft",
        "breweryx wiki",
        "breweryx документация",
        "breweryx гайд",
        "breweryx инструкция",
        "breweryx как установить",
        "breweryx как настроить",
        "breweryx рецепты скачать",
        "breweryx готовые рецепты",
        "breweryx конфиг",
        "breweryx recipes.yml",
        "breweryx distillation",
        "breweryx barrel aging",
        "breweryx potion effects",
        "breweryx color codes",
        "breweryx custom model data",
        "breweryx rgb цвета",
        "breweryx folia",
        "breweryx 1.21",
        "breweryx 1.20",
        "breweryx 1.19",
        "breweryx 1.18",
        "breweryx 1.17",
        "breweryx 1.16",
        "breweryx 1.15",
        "breweryx 1.14",
        "breweryx 1.13",
        "breweryx 1.12",
        "breweryx 1.11",
        "breweryx 1.10",
        "breweryx 1.9",
        "breweryx 1.8",
        "brewery plugin minecraft",
        "brewery recipes",
        "brewery yaml",
        "brewery config",
        "brewery generator",
        "breweryx vs brewery",
        "breweryx форк",
        "breweryx альтернатива",
        "breweryx лучший плагин пивоварения",
        "minecraft пивоварение",
        "minecraft пиво",
        "minecraft виски",
        "minecraft медовуха",
        "minecraft зелья",
        "minecraft напитки",
        "minecraft алкоголь",
        "minecraft бар",
        "minecraft таверна",
        "minecraft ресторан",
        "minecraft крафт напитков",
        "minecraft варка",
        "minecraft дистилляция",
        "minecraft бочки",
        "minecraft выдержка",
        "minecraft эффекты зелий",
        "minecraft цветовые коды",
        "minecraft yaml конфиг",
        "minecraft plugin recipes",
        "minecraft server plugins",
        "minecraft spigot plugins",
        "minecraft paper plugins",
        "minecraft folia plugins",
        "генератор рецептов brewery",
        "генератор breweryx",
        "breweryx recipe generator",
        "breweryx yaml generator",
        "breweryx config generator",
        "breweryx online generator",
        "breweryx free generator",
        "breweryx генератор онлайн",
        "breweryx генератор бесплатно",
        "breweryx генератор yaml",
        "breweryx генератор конфигов",
        "breweryx генератор minecraft",
        "breweryx генератор spigot",
        "breweryx генератор paper",
        "breweryx генератор folia",
        "breweryx генератор 1.21",
        "breweryx генератор 1.20",
        "breweryx генератор 1.19",
        "breweryx генератор 1.18",
        "breweryx генератор 1.17",
        "breweryx генератор 1.16",
        "breweryx генератор 1.15",
        "breweryx генератор 1.14",
        "breweryx генератор 1.13",
        "breweryx генератор 1.12",
        "breweryx генератор 1.11",
        "breweryx генератор 1.10",
        "breweryx генератор 1.9",
        "breweryx генератор 1.8",
        "brewery",
        "brewery plugin",
        "brewery minecraft",
        "brewery recipes",
        "brewery yaml",
        "brewery config",
        "brewery generator",
        "brewery wiki",
        "brewery documentation",
        "brewery guide",
        "brewery instructions",
        "brewery how to install",
        "brewery how to configure",
        "brewery download recipes",
        "brewery ready recipes",
        "brewery distillation",
        "brewery barrel aging",
        "brewery potion effects",
        "brewery color codes",
        "brewery custom model data",
        "brewery rgb colors",
        "brewery folia",
        "brewery spigot",
        "brewery paper",
        "brewery 1.21",
        "brewery 1.20",
        "brewery 1.19",
        "brewery 1.18",
        "brewery 1.17",
        "brewery 1.16",
        "brewery 1.15",
        "brewery 1.14",
        "brewery 1.13",
        "brewery 1.12",
        "brewery 1.11",
        "brewery 1.10",
        "brewery 1.9",
        "brewery 1.8",
        "brewhaus",
        "brewhaus minecraft",
        "brewhaus plugin",
        "пивоварение minecraft",
        "пивоварня minecraft",
        "бар minecraft",
        "таверна minecraft",
        "ресторан minecraft",
        "напитки minecraft",
        "алкоголь minecraft",
        "зелья minecraft",
        "варка minecraft",
        "дистилляция minecraft",
        "бочки minecraft",
        "выдержка minecraft",
        "рецепты minecraft",
        "конфиг minecraft",
        "yaml minecraft",
        "плагины minecraft",
        "серверные плагины minecraft",
        "spigot плагины",
        "paper плагины",
        "folia плагины",
        "плагины для сервера minecraft",
        "плагины для майнкрафт",
        "плагины пивоварения",
        "плагины напитков",
        "плагины зелий",
        "плагины баров",
        "плагины таверн",
        "плагины ресторанов",
        "плагины крафта",
        "плагины варки",
        "плагины дистилляции",
        "плагины бочек",
        "плагины выдержки",
        "плагины эффектов",
        "плагины цветов",
        "плагины rgb",
        "плагины custom model data",
        "плагины 1.21",
        "плагины 1.20",
        "плагины 1.19",
        "плагины 1.18",
        "плагины 1.17",
        "плагины 1.16",
        "плагины 1.15",
        "плагины 1.14",
        "плагины 1.13",
        "плагины 1.12",
        "плагины 1.11",
        "плагины 1.10",
        "плагины 1.9",
        "плагины 1.8",
      ],
    },
    heroH1: "Генератор рецептов BreweryX для Minecraft",
    heroSubtitle: "Создавайте YAML-конфиги рецептов пива, виски, медовухи и зелий для плагина BreweryX — с живым предпросмотром, валидацией и экспортом в один клик. Бесплатно и без установки.",
    introTitle: "Что такое BreweryX?",
    introParagraphs: [
      "BreweryX — это плагин для Minecraft (Spigot, Paper и Folia), который добавляет в игру полноценное пивоварение: брожение ингредиентов в котле, дистилляцию крепких напитков, выдержку в бочках из разных пород дерева и употребление готовых напитков с эффектами и опьянением. Это активно поддерживаемый форк классического плагина Brewery.",
      "Плагин читает рецепты из YAML-файла recipes.yml: игроки могут варить пиво из пшеницы и воды, гнать виски, настаивать медовуху или создавать фантастические зелья с эффектами. Официальная документация — только на английском, поэтому многие владельцы серверов ищут BreweryX на русском языке — теперь у нас есть полный русскоязычный генератор и справочник.",
      "Наш генератор полностью повторяет формат официальной документации BreweryX: вы задаёте ингредиенты, время варки, количество перегонок, тип бочки, выдержку, цвет, крепость и эффекты — а готовый YAML можно сразу вставить в конфиг сервера или скачать файлом."
    ],
    howtoTitle: "Как создать рецепт за 4 шага",
    howtoSteps: [
      {
        title: "Заполните форму",
        text: "Укажите ID рецепта, название, ингредиенты (например, WHEAT/6), время варки и сложность от 1 до 10.",
      },
      {
        title: "Настройте детали",
        text: "Добавьте дистилляцию, выдержку в бочке, цвет напитка, эффекты зелий, крепость, надписи и команды.",
      },
      {
        title: "Скопируйте или скачайте YAML",
        text: "Конфиг генерируется автоматически с живым предпросмотром справа и проверкой на ошибки.",
      },
      {
        title: "Установите на сервер",
        text: "Вставьте конфиг в recipes.yml в папке plugins/BreweryX и перезагрузите сервер — напиток появится у игроков.",
      },
    ],
    featuresTitle: "Возможности генератора",
    features: [
      {
        title: "Живой предпросмотр YAML",
        text: "Конфиг пересобирается мгновенно, пока вы печатаете — без кнопки обновить.",
      },
      {
        title: "Мультирецептовая рабочая область",
        text: "Создавайте и переключайтесь между несколькими рецептами в одном окне.",
      },
      {
        title: "Умный поиск предметов",
        text: "Автодополнение по сотням предметов Minecraft, эффектов зелий и цветов.",
      },
      {
        title: "Полная поддержка цветов",
        text: "Коды &, именованные цвета и HEX/RGB с живым образцом.",
      },
      {
        title: "Импорт существующего YAML",
        text: "Вставьте готовый рецепт — форма заполнится автоматически.",
      },
      {
        title: "Валидация и предупреждения",
        text: "Проверка обязательных полей, форматов и неизвестных предметов до того, как что-то сломается на сервере.",
      },
      {
        title: "Двуязычный интерфейс",
        text: "Русский и английский языки переключаются в один клик.",
      },
      {
        title: "Автосохранение и экспорт",
        text: "Рецепты хранятся в браузере; скачивайте .yml файл одной кнопкой.",
      },
    ],
    examplesTitle: "Готовые рецепты BreweryX",
    examplesText: "Скачайте готовые YAML-конфиги или откройте их в генераторе, чтобы доработать под свой сервер.",
    faqTitle: "Частые вопросы о BreweryX",
    faq: [
      {
        q: "Что такое BreweryX и чем он отличается от Brewery?",
        a: "BreweryX — активный форк плагина Brewery для Minecraft, который получает обновления под новые версии игры (1.8–1.21+), поддерживает Spigot, Paper и Folia, добавляет RGB-цвета, CustomModelData и аддоны.",
      },
      {
        q: "Как добавить рецепт на сервер?",
        a: "Скопируйте сгенерированный YAML в файл plugins/BreweryX/recipes.yml (или добавьте в конец, если файл уже есть) и выполните команду перезагрузки плагина. Подробнее — в официальной документации.",
      },
      {
        q: "Какой формат у рецептов BreweryX?",
        a: "Рецепт — это YAML-запись с ключами name, lore, ingredients, cookingtime, distillruns, wood, age, color, difficulty и опциональными alcohol, effects, customModelData и командами. Все поля описаны в нашем справочнике.",
      },
      {
        q: "Какие ингредиенты можно использовать?",
        a: "Любые ванильные предметы Minecraft в формате МАТЕРИАЛ/КОЛИЧЕСТВО, например WHEAT/6 или WATER_BUCKET/1, а также предметы с CustomModelData из плагинов вроде ItemsAdder.",
      },
      {
        q: "Что значат цветовые коды вроде &6?",
        a: "Это стандартные коды форматирования Minecraft: &6 — золотой, &c — красный, &l — жирный и так далее. Генератор поддерживает их в названиях, описаниях и надписях, а также HEX-цвета для новых версий.",
      },
      {
        q: "Как работает качество напитка в BreweryX?",
        a: "Качество (плохое/среднее/хорошее) зависит от точности варки: чем выше difficulty, тем сложнее сварить хороший напиток. Можно задать разные надписи, эффекты и CustomModelData для каждого уровня качества.",
      },
      {
        q: "Какие версии Minecraft поддерживаются?",
        a: "BreweryX работает на Spigot, Paper и Folia от 1.8 до актуальных версий. Сгенерированные конфиги используют стандартный формат и совместимы со всеми поддерживаемыми версиями.",
      },
      {
        q: "Где официальная документация BreweryX?",
        a: "Официальный сайт документации — breweryx.breweryteam.dev, исходный код — на GitHub (BreweryTeam/BreweryX). Скачать плагин можно на SpigotMC, Modrinth и Hangar.",
      },
    ],
    genTitle: "Генератор",
    genSubtitle: "Заполните форму — YAML появится автоматически.",
  },

  en: {
    meta: {
      title: "BreweryX Recipe Generator — YAML Configs for Minecraft",
      description: "Free online YAML recipe generator for the BreweryX Minecraft plugin. Ingredients, distillation, barrel aging, potion effects and color codes — with live preview, validation and one-click export.",
      keywords: [
        "breweryx recipe generator",
        "breweryx yaml config",
        "breweryx plugin",
        "minecraft brewing plugin",
        "breweryx recipes",
        "minecraft beer recipe",
        "brewery config generator",
        "spigot brewing",
        "paper plugin recipes",
        "brewery yaml recipe",
        "minecraft craft beer",
        "breweryx wiki",
        "breweryx documentation",
        "breweryx guide",
        "breweryx tutorial",
        "breweryx how to",
        "breweryx install",
        "breweryx setup",
        "breweryx configure",
        "breweryx download recipes",
        "breweryx ready recipes",
        "breweryx pre-made recipes",
        "breweryx recipes.yml",
        "breweryx distillation",
        "breweryx barrel aging",
        "breweryx potion effects",
        "breweryx color codes",
        "breweryx custom model data",
        "breweryx rgb colors",
        "breweryx folia",
        "breweryx spigot",
        "breweryx paper",
        "breweryx 1.21",
        "breweryx 1.20",
        "breweryx 1.19",
        "breweryx 1.18",
        "breweryx 1.17",
        "breweryx 1.16",
        "breweryx 1.15",
        "breweryx 1.14",
        "breweryx 1.13",
        "breweryx 1.12",
        "breweryx 1.11",
        "breweryx 1.10",
        "breweryx 1.9",
        "breweryx 1.8",
        "breweryx fork",
        "breweryx alternative",
        "breweryx vs brewery",
        "breweryx best brewing plugin",
        "brewery plugin minecraft",
        "brewery recipes",
        "brewery yaml",
        "brewery config",
        "brewery generator",
        "brewery wiki",
        "brewery documentation",
        "brewery guide",
        "brewery tutorial",
        "brewery how to",
        "brewery install",
        "brewery setup",
        "brewery configure",
        "brewery download recipes",
        "brewery ready recipes",
        "brewery distillation",
        "brewery barrel aging",
        "brewery potion effects",
        "brewery color codes",
        "brewery custom model data",
        "brewery rgb colors",
        "brewery folia",
        "brewery spigot",
        "brewery paper",
        "brewery 1.21",
        "brewery 1.20",
        "brewery 1.19",
        "brewery 1.18",
        "brewery 1.17",
        "brewery 1.16",
        "brewery 1.15",
        "brewery 1.14",
        "brewery 1.13",
        "brewery 1.12",
        "brewery 1.11",
        "brewery 1.10",
        "brewery 1.9",
        "brewery 1.8",
        "minecraft brewing",
        "minecraft brewery",
        "minecraft bar",
        "minecraft tavern",
        "minecraft restaurant",
        "minecraft drinks",
        "minecraft alcohol",
        "minecraft potions",
        "minecraft beer",
        "minecraft whiskey",
        "minecraft mead",
        "minecraft wine",
        "minecraft vodka",
        "minecraft rum",
        "minecraft gin",
        "minecraft cider",
        "minecraft stout",
        "minecraft porter",
        "minecraft ipa",
        "minecraft lager",
        "minecraft ale",
        "minecraft brewing system",
        "minecraft brewing mechanics",
        "minecraft brewing recipes",
        "minecraft brewing plugin",
        "minecraft brewing server",
        "minecraft brewing spigot",
        "minecraft brewing paper",
        "minecraft brewing folia",
        "minecraft server plugins",
        "minecraft spigot plugins",
        "minecraft paper plugins",
        "minecraft folia plugins",
        "minecraft server brewing",
        "minecraft server bar",
        "minecraft server tavern",
        "minecraft server restaurant",
        "minecraft server drinks",
        "minecraft server alcohol",
        "minecraft server potions",
        "minecraft server beer",
        "minecraft server whiskey",
        "minecraft server mead",
        "minecraft server wine",
        "minecraft server vodka",
        "minecraft server rum",
        "minecraft server gin",
        "minecraft server cider",
        "minecraft server stout",
        "minecraft server porter",
        "minecraft server ipa",
        "minecraft server lager",
        "minecraft server ale",
        "yaml recipe generator",
        "yaml config generator",
        "yaml minecraft",
        "yaml plugin config",
        "yaml server config",
        "online recipe generator",
        "free recipe generator",
        "minecraft recipe generator",
        "minecraft config generator",
        "minecraft yaml generator",
        "minecraft plugin generator",
        "minecraft server generator",
        "minecraft spigot generator",
        "minecraft paper generator",
        "minecraft folia generator",
        "breweryx online",
        "breweryx free",
        "breweryx tool",
        "breweryx utility",
        "breweryx app",
        "breweryx web",
        "breweryx website",
        "breweryx online tool",
        "breweryx free tool",
        "breweryx web tool",
        "breweryx web app",
        "breweryx online app",
        "breweryx free app",
      ],
    },
    heroH1: "BreweryX Recipe Generator for Minecraft",
    heroSubtitle: "Create YAML recipe configs for the BreweryX plugin — beer, whiskey, mead, and potions with live preview, validation and one-click export. Free and no install required.",
    introTitle: "What is BreweryX?",
    introParagraphs: [
      "BreweryX is a Minecraft plugin (Spigot, Paper, and Folia) that adds full brewing to the game: fermenting ingredients in a cauldron, distilling strong spirits, aging in barrels made from different wood types, and consuming finished drinks with effects and intoxication. It is an actively maintained fork of the classic Brewery plugin.",
      "The plugin reads recipes from a YAML file called recipes.yml: players can brew beer from wheat and water, distill whiskey, age mead, or create fantasy potions with custom effects. The official documentation is only in English, which is why many server owners look for BreweryX in their native language — now we have a complete English-language generator and reference guide.",
      "Our generator fully reproduces the official BreweryX documentation format: you specify ingredients, cooking time, number of distillation runs, barrel type, aging duration, color, strength, and effects — and the ready YAML can be pasted into your server config or downloaded as a file."
    ],
    howtoTitle: "Create a Recipe in 4 Steps",
    howtoSteps: [
      {
        title: "Fill in the form",
        text: "Enter the recipe ID, name, ingredients (e.g. WHEAT/6), cooking time and difficulty from 1 to 10.",
      },
      {
        title: "Configure details",
        text: "Add distillation, barrel aging, drink color, potion effects, strength, display name, lore and commands.",
      },
      {
        title: "Copy or download YAML",
        text: "The config is generated automatically with a live preview on the right and error checking.",
      },
      {
        title: "Install on your server",
        text: "Paste the config into recipes.yml in the plugins/BreweryX folder and reload the server — the drink will appear for players.",
      },
    ],
    featuresTitle: "Generator Features",
    features: [
      {
        title: "Live YAML preview",
        text: "The config is rebuilt instantly as you type — no refresh button needed.",
      },
      {
        title: "Multi-recipe workspace",
        text: "Create and switch between multiple recipes in one window.",
      },
      {
        title: "Smart item search",
        text: "Autocomplete across hundreds of Minecraft items, potion effects, and colors.",
      },
      {
        title: "Full color support",
        text: "Ampersand codes, named colors, and HEX/RGB with a live sample.",
      },
      {
        title: "Import existing YAML",
        text: "Paste a ready recipe and the form will populate automatically.",
      },
      {
        title: "Validation and warnings",
        text: "Checks for required fields, formats and unknown items before anything breaks on your server.",
      },
      {
        title: "Bilingual interface",
        text: "Russian and English are toggled with one click.",
      },
      {
        title: "Auto-save and export",
        text: "Recipes are stored in the browser; download a .yml file with one button.",
      },
    ],
    examplesTitle: "Ready-Made BreweryX Recipes",
    examplesText: "Download ready YAML configs or open them in the generator to customize for your server.",
    faqTitle: "Frequently Asked Questions about BreweryX",
    faq: [
      {
        q: "What is BreweryX and how does it differ from Brewery?",
        a: "BreweryX is an active fork of the Brewery plugin for Minecraft that receives updates for new game versions (1.8–1.21+), supports Spigot, Paper, and Folia, and adds RGB colors, CustomModelData, and addons.",
      },
      {
        q: "How do I add a recipe to the server?",
        a: "Copy the generated YAML into the plugins/BreweryX/recipes.yml file (or append it if the file already exists) and run the plugin reload command. See the official documentation for details.",
      },
      {
        q: "What is the format for BreweryX recipes?",
        a: "A recipe is a YAML entry with keys name, lore, ingredients, cookingtime, distillruns, wood, age, color, difficulty, and optional alcohol, effects, customModelData, and commands. All fields are described in our reference guide.",
      },
      {
        q: "Which ingredients can I use?",
        a: "Any vanilla Minecraft item in the MATERIAL/AMOUNT format, e.g. WHEAT/6 or WATER_BUCKET/1, as well as items with CustomModelData from plugins like ItemsAdder.",
      },
      {
        q: "What do color codes like &6 mean?",
        a: "These are standard Minecraft formatting codes: &6 is gold, &c is red, &l is bold, and so on. The generator supports them in names, lore, and display names, plus HEX colors for newer versions.",
      },
      {
        q: "How does drink quality work in BreweryX?",
        a: "Quality (poor/average/good) depends on brewing precision: the higher the difficulty, the harder it is to make a good drink. You can set different display names, lore, effects, and CustomModelData for each quality level.",
      },
      {
        q: "Which Minecraft versions are supported?",
        a: "BreweryX works on Spigot, Paper, and Folia from 1.8 to current versions. Generated configs use the standard format and are compatible with all supported versions.",
      },
      {
        q: "Where is the official BreweryX documentation?",
        a: "The official documentation site is breweryx.breweryteam.dev, source code is on GitHub (BreweryTeam/BreweryX). You can download the plugin from SpigotMC, Modrinth, and Hangar.",
      },
    ],
    genTitle: "Generator",
    genSubtitle: "Fill in the form — YAML will appear automatically.",
  },
};

export const GUIDE: Record<Locale, GuideContent> = {
  ru: {
    meta: {
      title: "Справочник BreweryX — формат рецептов и все поля YAML",
      description: "Полный справочник по формату рецептов BreweryX: все поля YAML, ингредиенты, дистилляция, выдержка в бочках, эффекты зелий, качество напитков и команды. Примеры кода для каждого раздела.",
      keywords: [
        "breweryx справочник",
        "breweryx формат рецептов",
        "breweryx yaml поля",
        "breweryx документация",
        "breweryx ингредиенты",
        "breweryx эффекты",
        "breweryx качество",
        "minecraft brewery plugin reference"
      ],
    },
    intro: [
      "Этот справочник описывает полный формат рецептов BreweryX — YAML-файла, который плагин читает при загрузке. Здесь перечислены все доступные поля, их типы, допустимые значения и примеры использования.",
      "Если вы только начинаете работать с BreweryX, рекомендуем начать с нашего генератора рецептов: он автоматически валидирует все поля и формирует корректный YAML. Справочник пригодится, если вы хотите понять формат глубже или написать рецепты вручную."
    ],
    sections: [
      {
        heading: "Базовая структура рецепта",
        paragraphs: [
          "Каждый рецепт BreweryX — это YAML-запись, где ключом является уникальный ID рецепта (например my_beer или thunder_whiskey). Внутри записи находятся все параметры напитка: название, описание, ингредиенты, время варки и опциональные поля.",
          "Ниже приведён минимальный пример рецепта с основными полями:"
        ],
        code: YAML_EXAMPLE,
      },
      {
        heading: "Обязательные поля",
        list: [
          { term: "recipe_id", def: "Уникальный строковый идентификатор рецепта (например my_beer). Используется как ключ в recipes.yml и для ссылок на рецепт в командах." },
          { term: "name", def: "Отображаемое название напитка с кодами цвета (например &6Craft Beer). Поддерживает коды &, именованные цвета и HEX." },
          { term: "ingredients", def: "Список ингредиентов в формате МАТЕРИАЛ/КОЛИЧЕСТВО. Минимум один ингредиент. Пример: WHEAT/6, WATER_BUCKET/1." },
          { term: "cookingtime", def: "Время варки в минутах. Значение от 0 (мгновенно) до 1000. Определяет, как долго игрок должен стоять у котла." },
          { term: "difficulty", def: "Сложность варки от 1 до 10. Чем выше значение, тем точнее должен быть игрок, чтобы получить качественный напиток." },
        ],
      },
      {
        heading: "Ингредиенты (ingredients)",
        paragraphs: [
          "Ингредиенты задаются списком строк в формате МАТЕРИАЛ/КОЛИЧЕСТВО. Поддерживаются любые ванильные предметы Minecraft. Примеры:"
        ],
        list: [
          { term: "WHEAT/6", def: "6 единиц пшеницы — классический ингредиент для пива." },
          { term: "WATER_BUCKET/1", def: "1 ведро воды — обязательно для большинства напитков." },
          { term: "SUGAR/2", def: "2 единицы сахара — делает напиток слаще, добавляется в медовуху и виски." },
          { term: "HONEY_BOTTLE/1", def: "1 бутылка мёда — основной ингредиент для медовухи." },
          { term: "NETHER_WART/1", def: "1 адский нарост — для зельевидных напитков." },
        ],
      },
      {
        heading: "Варка и сложность (cookingtime, difficulty)",
        list: [
          { term: "cookingtime", def: "Время варки в минутах. Значение от 0 до 1000. При значении 0 напиток варится мгновенно при добавлении всех ингредиентов. Рекомендуемые значения: 3–15 минут для пива, 10–30 для крепких напитков." },
          { term: "difficulty", def: "Сложность от 1 до 10. Определяет, насколько точно игрок должен попасть в целевой интервал времени. При difficulty 1 почти любое время даст хороший результат, при difficulty 10 нужно попасть с точностью до минуты." },
        ],
      },
      {
        heading: "Дистилляция (distillruns, distilltime)",
        paragraphs: [
          "Дистилляция используется для крепких напитков: виски, рома, водки. После варки напиток можно перегнать несколько раз для повышения крепости и улучшения вкуса. Дистилляция выполняется в перегонном кубе.",
          "Поля:"
        ],
        list: [
          { term: "distillruns", def: "Количество перегонок (от 1 до 10). Каждая перегонка повышает крепость напитка. Для виски обычно 2–3 перегонки." },
          { term: "distilltime", def: "Время одной перегонки в секундах (от 1 до 3600). Рекомендуемые значения: 60–300 секунд. При слишком коротком времени напиток может не перегнаться." },
        ],
      },
      {
        heading: "Выдержка в бочках (wood, age)",
        paragraphs: [
          "BreweryX поддерживает выдержку напитков в бочках из разных пород дерева. Каждый тип бочки влияет на вкус и свойства напитка. Выдержка длится указанное количество дней (в игровых днях).",
          "Типы бочек (wood):"
        ],
        list: [
          { term: "0", def: "Любая бочка (Any wood) — автоматически подбирает доступную бочку." },
          { term: "1", def: "Берёзовая бочка (Birch) — лёгкий привкус, подходит для лёгких напитков." },
          { term: "2", def: "Дубовая бочка (Oak) — классический выбор для большинства напитков." },
          { term: "3", def: "Бочка из тропического дерева (Jungle) — тропический аромат для медовухи и фруктовых напитков." },
          { term: "4", def: "Еловая бочка (Spruce) — тёмный, насыщенный вкус, отлично подходит для виски." },
          { term: "5", def: "Акациевая бочка (Acacia) — экзотический привкус для необычных напитков." },
          { term: "6", def: "Тёмно-дубовая бочка (Dark Oak) — интенсивный вкус дуба." },
          { term: "7", def: "Бочка из красного дерева Кримсона (Crimson) — насыщенный грибной аромат." },
          { term: "8", def: "Бочка из дерев Варпа (Warped) — морской оттенок вкуса." },
          { term: "9", def: "Бочка из мангрового дерева (Mangrove) — необычный вкус для экспериментов." },
          { term: "10", def: "Бочка из вишнёвого дерева (Cherry) — сладкий фруктовый аромат." },
          { term: "11", def: "Бочка из бамбука (Bamboo) — лёгкий тропический привкус." },
          { term: "12", def: "Бочка из медной пластины (Cut Copper) — металлический привкус для экспериментов." },
        ],
      },
      {
        heading: "Цвет напитка (color)",
        paragraphs: [
          "Цвет напитка определяет его отображение в инвентаре и в руке игрока. BreweryX поддерживает как стандартные именованные цвета Minecraft, так и HEX-цвета для версий 1.16+.",
          "Именованные цвета:"
        ],
        list: [
          { term: "WHITE", def: "Белый — для светлых напитков и молочных коктейлей." },
          { term: "BRIGHT_GREY", def: "Светло-серый — для прозрачных напитков." },
          { term: "GREY", def: "Серый — для тёмных напитков с углём." },
          { term: "BLACK", def: "Чёрный — для портеров и stout." },
          { term: "DARK_RED", def: "Тёмно-красный — для тёмных крепких напитков." },
          { term: "RED", def: "Красный — для крепких и острых напитков." },
          { term: "BRIGHT_RED", def: "Ярко-красный — для огненных напитков." },
          { term: "ORANGE", def: "Оранжевый — для цитрусовых напитков и виски." },
          { term: "YELLOW", def: "Жёлтый — для пива и медовухи." },
          { term: "GREEN", def: "Зелёный — для травяных напитков." },
          { term: "LIME", def: "Лаймовый — для зелёных напитков." },
          { term: "OLIVE", def: "Оливковый — для крепких травяных настоек." },
          { term: "TEAL", def: "Бирюзовый — для морских напитков." },
          { term: "CYAN", def: "Циановый — для ледяных напитков." },
          { term: "BLUE", def: "Синий — для ледяных и водных напитков." },
          { term: "WATER", def: "Водный — прозрачный голубой для лёгких напитков." },
          { term: "PURPLE", def: "Фиолетовый — для магических зелий." },
          { term: "PINK", def: "Розовый — для цветочных напитков." },
        ],
      },
      {
        heading: "Эффекты (effects)",
        paragraphs: [
          "Эффекты — это стандартные эффекты зелий Minecraft, которые применяются при употреблении напитка. Формат: ЭФФЕКТ/УРОВЕНЬ/ДЛИТЕЛЬНОСТЬ (в секундах).",
          "Можно задать несколько эффектов, а также диапазоны для системы качества (плохое/среднее/хорошее). Примеры:"
        ],
        code: EFFECTS_EXAMPLE,
      },
      {
        heading: "Крепость и свечение (alcohol, glint)",
        list: [
          { term: "alcohol", def: "Крепость напитка в процентах (0–100). Влияет на уровень опьянения игрока. При 0% напиток не вызывает опьянения. Рекомендуемые значения: 5–15% для пива, 20–40% для крепких напитков." },
          { term: "glint", def: "Свечение предмета (true/false). Если true, напиток будет мерцать как зачарованный предмет. Подходит для магических зелий и редких напитков." },
        ],
      },
      {
        heading: "Надписи и сообщения",
        paragraphs: [
          "BreweryX позволяет настраивать отображаемое название (name), описание (lore) и надписи (displayname) для каждого уровня качества. Формат: три значения, разделённые слешем — плохое/среднее/хорошее.",
          "Доступные поля:"
        ],
        list: [
          { term: "name", def: "Название напитка. Можно задать одно для всех качеств или три через слеш: '&4Плохое/&6Нормальное/&aХорошее'." },
          { term: "lore", def: "Описание напитка (список строк). Префиксы качества: '+' — при плохом качестве, '++' — при среднем, '+++' — при хорошем. Без префикса строка отображается всегда." },
          { term: "displayname", def: "Отображаемое имя в инвентаре. Перекрывает name для более точной настройки." },
        ],
      },
      {
        heading: "Команды (servercommands, playercommands)",
        paragraphs: [
          "При употреблении напитка можно выполнить серверные или игрокские команды. Команды выполняются от имени сервера или игрока соответственно.",
          "Доступные поля:"
        ],
        list: [
          { term: "servercommands", def: "Список команд, выполняемых сервером при употреблении. Формат: 'команда'. Пример: 'give %player% diamond 1'." },
          { term: "playercommands", def: "Список команд, выполняемых игроком при употреблении. Формат: 'команда'. Пример: 'me выпил крепкого напитка'." },
          { term: "drinkmessage", def: "Сообщение, отправляемое игроку при употреблении. Поддерживает цветовые коды." },
        ],
      },
      {
        heading: "CustomModelData",
        paragraphs: [
          "Поле customModelData позволяет задать пользовательскую модель для предмета, если установлены ресурспаки. Используется с плагинами вроде ItemsAdder для отображения кастомных текстур.",
          "Формат: одно значение (для всех качеств) или три через слеш для разных качеств: '1000/1001/1002'."
        ],
      },
      {
        heading: "Качество напитков",
        paragraphs: [
          "BreweryX поддерживает три уровня качества: плохое (poor), среднее (medium) и хорошее (good). Качество определяется точностью варки: если игрок снял напиток с котла слишком рано или слишком поздно — качество будет хуже.",
          "Для каждого уровня можно задать уникальные: название, описание, эффекты, CustomModelData и надписи. Формат — три значения через слеш: 'плохое/среднее/хорошее'. Пример:"
        ],
        code: QUALITY_EXAMPLE,
      },
      {
        heading: "Полный пример рецепта",
        paragraphs: [
          "Ниже приведён полный рецепт виски с дистилляцией, выдержкой в бочке, эффектами и крепостью. Этот пример демонстрирует все основные поля:"
        ],
        code: FULL_EXAMPLE,
      },
    ],
  },

  en: {
    meta: {
      title: "BreweryX Reference — Recipe Format and All YAML Fields",
      description: "Complete reference for the BreweryX recipe format: all YAML fields, ingredients, distillation, barrel aging, potion effects, drink quality and commands. Code examples for every section.",
      keywords: [
        "breweryx reference",
        "breweryx recipe format",
        "breweryx yaml fields",
        "breweryx documentation",
        "breweryx ingredients",
        "breweryx effects",
        "breweryx quality",
        "minecraft brewery plugin reference"
      ],
    },
    intro: [
      "This reference describes the full BreweryX recipe format — the YAML file the plugin reads on load. It lists all available fields, their types, valid values and usage examples.",
      "If you are just getting started with BreweryX, we recommend using our recipe generator first: it automatically validates all fields and produces correct YAML. The reference is useful if you want to understand the format in depth or write recipes by hand."
    ],
    sections: [
      {
        heading: "Basic Recipe Structure",
        paragraphs: [
          "Every BreweryX recipe is a YAML entry where the key is a unique recipe ID (e.g. my_beer or thunder_whiskey). Inside the entry are all the drink's parameters: name, description, ingredients, cooking time and optional fields.",
          "Below is a minimal recipe example with the main fields:"
        ],
        code: YAML_EXAMPLE,
      },
      {
        heading: "Required Fields",
        list: [
          { term: "recipe_id", def: "A unique string identifier for the recipe (e.g. my_beer). Used as the key in recipes.yml and for command references." },
          { term: "name", def: "The display name of the drink with color codes (e.g. &6Craft Beer). Supports & codes, named colors and HEX." },
          { term: "ingredients", def: "A list of ingredients in the MATERIAL/AMOUNT format. At least one ingredient required. Examples: WHEAT/6, WATER_BUCKET/1." },
          { term: "cookingtime", def: "Cooking time in minutes. Values from 0 (instant) to 1000. Determines how long a player must stand by the cauldron." },
          { term: "difficulty", def: "Crafting difficulty from 1 to 10. Higher values require more precise timing to produce a quality drink." },
        ],
      },
      {
        heading: "Ingredients (ingredients)",
        paragraphs: [
          "Ingredients are specified as a list of strings in the MATERIAL/AMOUNT format. Any vanilla Minecraft item is supported. Examples:"
        ],
        list: [
          { term: "WHEAT/6", def: "6 wheat — the classic beer ingredient." },
          { term: "WATER_BUCKET/1", def: "1 water bucket — required for most drinks." },
          { term: "SUGAR/2", def: "2 sugar — makes the drink sweeter, used in mead and whiskey." },
          { term: "HONEY_BOTTLE/1", def: "1 honey bottle — the primary mead ingredient." },
          { term: "NETHER_WART/1", def: "1 nether wart — for potion-like drinks." },
        ],
      },
      {
        heading: "Cooking and Difficulty (cookingtime, difficulty)",
        list: [
          { term: "cookingtime", def: "Cooking time in minutes. Values from 0 to 1000. At 0 the drink brews instantly when all ingredients are added. Recommended: 3–15 minutes for beer, 10–30 for spirits." },
          { term: "difficulty", def: "Difficulty from 1 to 10. Determines how precisely the player must hit the target time window. At difficulty 1 almost any timing yields a good result; at 10 you need minute-level precision." },
        ],
      },
      {
        heading: "Distillation (distillruns, distilltime)",
        paragraphs: [
          "Distillation is used for strong spirits: whiskey, rum, vodka. After brewing, a drink can be distilled multiple times to increase strength and improve flavor. Distillation happens in the still.",
          "Fields:"
        ],
        list: [
          { term: "distillruns", def: "Number of distillation runs (1–10). Each run increases the drink's strength. For whiskey, typically 2–3 runs." },
          { term: "distilltime", def: "Duration of one distillation run in seconds (1–3600). Recommended: 60–300 seconds. If too short, the drink may not distill properly." },
        ],
      },
      {
        heading: "Barrel Aging (wood, age)",
        paragraphs: [
          "BreweryX supports aging drinks in barrels made from different wood types. Each barrel type affects the drink's flavor and properties. Aging lasts the specified number of in-game days.",
          "Wood types (wood):"
        ],
        list: [
          { term: "0", def: "Any wood barrel — automatically picks an available barrel." },
          { term: "1", def: "Birch barrel — light flavor, good for light drinks." },
          { term: "2", def: "Oak barrel — the classic choice for most drinks." },
          { term: "3", def: "Jungle barrel — tropical aroma for mead and fruit drinks." },
          { term: "4", def: "Spruce barrel — dark, rich flavor, excellent for whiskey." },
          { term: "5", def: "Acacia barrel — exotic taste for unusual drinks." },
          { term: "6", def: "Dark Oak barrel — intense oak flavor." },
          { term: "7", def: "Crimson barrel — rich mushroom aroma." },
          { term: "8", def: "Warped barrel — oceanic undertone." },
          { term: "9", def: "Mangrove barrel — unique flavor for experiments." },
          { term: "10", def: "Cherry barrel — sweet fruity aroma." },
          { term: "11", def: "Bamboo barrel — light tropical taste." },
          { term: "12", def: "Cut Copper barrel — metallic taste for experiments." },
        ],
      },
      {
        heading: "Drink Color (color)",
        paragraphs: [
          "The drink color determines its appearance in the inventory and in the player's hand. BreweryX supports both standard Minecraft named colors and HEX colors for version 1.16+.",
          "Named colors:"
        ],
        list: [
          { term: "WHITE", def: "White — for light drinks and milk cocktails." },
          { term: "BRIGHT_GREY", def: "Light gray — for transparent drinks." },
          { term: "GREY", def: "Gray — for dark drinks with charcoal." },
          { term: "BLACK", def: "Black — for porters and stouts." },
          { term: "DARK_RED", def: "Dark red — for dark strong drinks." },
          { term: "RED", def: "Red — for strong and spicy drinks." },
          { term: "BRIGHT_RED", def: "Bright red — for fiery drinks." },
          { term: "ORANGE", def: "Orange — for citrus drinks and whiskey." },
          { term: "YELLOW", def: "Yellow — for beer and mead." },
          { term: "GREEN", def: "Green — for herbal drinks." },
          { term: "LIME", def: "Lime — for green drinks." },
          { term: "OLIVE", def: "Olive — for strong herbal tinctures." },
          { term: "TEAL", def: "Teal — for ocean drinks." },
          { term: "CYAN", def: "Cyan — for icy drinks." },
          { term: "BLUE", def: "Blue — for icy and water drinks." },
          { term: "WATER", def: "Water — transparent blue for light drinks." },
          { term: "PURPLE", def: "Purple — for magical potions." },
          { term: "PINK", def: "Pink — for floral drinks." },
        ],
      },
      {
        heading: "Effects (effects)",
        paragraphs: [
          "Effects are standard Minecraft potion effects applied when the drink is consumed. Format: EFFECT/LEVEL/DURATION (in seconds).",
          "You can specify multiple effects, as well as ranges for the quality system (poor/medium/good). Examples:"
        ],
        code: EFFECTS_EXAMPLE,
      },
      {
        heading: "Strength and Glow (alcohol, glint)",
        list: [
          { term: "alcohol", def: "Drink strength as a percentage (0–100). Affects the player's intoxication level. At 0% the drink causes no intoxication. Recommended: 5–15% for beer, 20–40% for spirits." },
          { term: "glint", def: "Item glow (true/false). If true, the drink will shimmer like an enchanted item. Suitable for magical potions and rare drinks." },
        ],
      },
      {
        heading: "Display Names and Messages",
        paragraphs: [
          "BreweryX allows you to customize the display name (name), description (lore) and display text (displayname) for each quality level. Format: three values separated by slashes — poor/medium/good.",
          "Available fields:"
        ],
        list: [
          { term: "name", def: "The drink's name. You can set one for all qualities or three with slashes: '&4Poor/&6Normal/&aGood'." },
          { term: "lore", def: "The drink's description (list of strings). Quality prefixes: '+' for bad quality, '++' for normal, '+++ ' for good. Lines without a prefix always show." },
          { term: "displayname", def: "Display name in the inventory. Overrides name for more precise customization." },
        ],
      },
      {
        heading: "Commands (servercommands, playercommands)",
        paragraphs: [
          "When a drink is consumed, server or player commands can be executed. Commands run as the server or the player respectively.",
          "Available fields:"
        ],
        list: [
          { term: "servercommands", def: "List of commands executed by the server on consumption. Format: 'command'. Example: 'give %player% diamond 1'." },
          { term: "playercommands", def: "List of commands executed by the player on consumption. Format: 'command'. Example: 'me drinks a strong spirit'." },
          { term: "drinkmessage", def: "Message sent to the player on consumption. Supports color codes." },
        ],
      },
      {
        heading: "CustomModelData",
        paragraphs: [
          "The customModelData field allows you to set a custom model for the item, if resource packs are installed. Used with plugins like ItemsAdder to display custom textures.",
          "Format: a single value (for all qualities) or three separated by slashes for different qualities: '1000/1001/1002'."
        ],
      },
      {
        heading: "Drink Quality",
        paragraphs: [
          "BreweryX supports three quality levels: poor, medium, and good. Quality is determined by brewing precision: if the player removes the drink from the cauldron too early or too late, the quality decreases.",
          "For each level you can set a unique: name, lore, effects, CustomModelData and display names. Format — three values separated by slashes: 'poor/medium/good'. Example:"
        ],
        code: QUALITY_EXAMPLE,
      },
      {
        heading: "Full Recipe Example",
        paragraphs: [
          "Below is a complete whiskey recipe with distillation, barrel aging, effects and strength. This example demonstrates all the main fields:"
        ],
        code: FULL_EXAMPLE,
      },
    ],
  },
};

export const RECIPES_CONTENT: Record<Locale, Record<string, RecipePageContent>> = {
  ru: {
    honey_ale: {
      meta: {
        title: "Рецепт Медового Золотого Эля для BreweryX — YAML-конфиг",
        description: "Готовый YAML-рецепт медового эля для плагина BreweryX в Minecraft: пшеница, мёд, вода, 6 минут варки, сложность 3, 8% алкоголя.",
        keywords: [
          "медовый эль breweryx",
          "рецепт эля minecraft",
          "breweryx эль yaml",
          "honey ale recipe",
          "minecraft brewery beer",
          "breweryx beer config"
        ],
      },
      intro: [
        "Медовый золотой эль — это базовый рецепт для BreweryX, идеально подходящий для начинающих. Простой состав из пшеницы, мёда и воды, короткое время варки и низкая сложность делают его отличным стартом для изучения плагина.",
        "Напиток имеет золотисто-жёлтый цвет, сладковатый вкус и лёгкий алкогольный эффект. Идеально подходит как стартовый напиток для игроков на вашем сервере."
      ],
      installSteps: [
        "Скопируйте YAML-код медового эля из генератора или скачайте файл.",
        "Откройте файл plugins/BreweryX/recipes.yml на вашем сервере.",
        "Вставьте рецепт в конец файла (или создайте новый файл, если его нет).",
        "Перезагрузите сервер командой /reload или перезапустите его — медовый эль готов!"
      ],
    },
    dragon_whiskey: {
      meta: {
        title: "Рецепт Пламенного Виски для BreweryX — YAML-конфиг",
        description: "Готовый YAML-рецепт пламенного виски для плагина BreweryX в Minecraft: пшеница, огненный порошок, сахар, тройная дистилляция, выдержка в бочке из тёмного дуба, 45% алкоголя.",
        keywords: [
          "пламенное виски breweryx",
          "рецепт виски minecraft",
          "breweryx виски yaml",
          "dragon whiskey recipe",
          "minecraft whiskey plugin",
          "breweryx whiskey config"
        ],
      },
      intro: [
        "Пламенное виски — это крепчайший напиток для BreweryX с тройной дистилляцией и выдержкой в бочке из тёмного дуба. Насыщенный вкус, ярко-красный цвет и эффект огнестойкости делают его одним из самых впечатляющих рецептов.",
        "Рецепт использует четыре ингредиента: пшеницу, огненный порошок, сахар и воду. После варки напиток проходит три перегонки и семь дней выдержки — наградой за терпение становятся 45% алкоголя."
      ],
      installSteps: [
        "Скопируйте YAML-код пламенного виски из генератора или скачайте файл.",
        "Откройте файл plugins/BreweryX/recipes.yml на сервере.",
        "Вставьте рецепт в конец файла.",
        "Перезагрузите сервер — пламенное виски готово к дистилляции!"
      ],
    },
    enchanted_elixir: {
      meta: {
        title: "Рецепт Зачарованного Эликсира для BreweryX — YAML-конфиг",
        description: "Готовый YAML-рецепт зачарованного эликсира для BreweryX в Minecraft: сахар, редстоун, светокаменная пыль, адский нарост, эффекты свечения и удачи, без алкоголя.",
        keywords: [
          "зачарованный эликсир breweryx",
          "рецепт эликсира minecraft",
          "breweryx эликсир yaml",
          "enchanted elixir recipe",
          "minecraft brewery potion",
          "breweryx elixir config"
        ],
      },
      intro: [
        "Зачарованный эликсир — это магический безалкогольный напиток для BreweryX, который дарит игроку свечение и удачу. Варится из сахара, редстоуна, светокаменной пыли и адского нароста.",
        "Зелёный цвет и светящееся описание делают его узнаваемым в инвентаре. Отличная альтернатива стандартным зельям Minecraft с полностью настраиваемым внешним видом."
      ],
      installSteps: [
        "Скопируйте YAML-код зачарованного эликсира из генератора.",
        "Откройте файл plugins/BreweryX/recipes.yml на сервере.",
        "Вставьте рецепт в конец файла.",
        "Перезагрузите сервер — эликсир появится у игроков!"
      ],
    },
    moonlight_milk: {
      meta: {
        title: "Рецепт Лунного Молока для BreweryX — YAML-конфиг",
        description: "Готовый YAML-рецепт лунного молока для BreweryX в Minecraft: молоко, сахар, мёд, без алкоголя, эффект ночного зрения.",
        keywords: [
          "лунное молоко breweryx",
          "рецепт молока minecraft",
          "breweryx молоко yaml",
          "moonlit milk recipe",
          "minecraft brewery milk",
          "breweryx milk config"
        ],
      },
      intro: [
        "Лунное молоко — это нежный безалкогольный напиток для BreweryX, который дарит игроку ночное зрение. Варится всего из трёх ингредиентов: молока, сахара и мёда.",
        "Белоснежный цвет, мягкое описание и отсутствие алкоголя делают его отличным выбором для серверов с молодой аудиторией или как альтернатива алкогольным напиткам."
      ],
      installSteps: [
        "Скопируйте YAML-код лунного молока из генератора.",
        "Откройте файл plugins/BreweryX/recipes.yml на сервере.",
        "Вставьте рецепт в конец файла.",
        "Перезагрузите сервер — лунное молоко готово!"
      ],
    },
    mystic_mead: {
      meta: {
        title: "Рецепт Таинственной Медовухи для BreweryX — YAML-конфиг",
        description: "Готовый YAML-рецепт таинственной медовухи для BreweryX в Minecraft: мёд, сахар, редстоун, дистилляция, выдержка, эффекты регенерации и поглощения, 15% алкоголя.",
        keywords: [
          "таинственная медовуха breweryx",
          "рецепт медовухи minecraft",
          "breweryx медовуха yaml",
          "arcane mead recipe",
          "minecraft brewery mead",
          "breweryx mead config"
        ],
      },
      intro: [
        "Таинственная медовуха — это зачарованный мёд для BreweryX с одной перегонкой и долгой выдержкой. Фиолетовый цвет и эффекты регенерации с поглощением урона делают её ценным напитком для приключений.",
        "Медовуха варится из мёда, сахара и редстоуна, после чего проходит перегонку и десять дней выдержки. Светящееся изнутри вино — награда за терпение."
      ],
      installSteps: [
        "Скопируйте YAML-код таинственной медовухи из генератора.",
        "Откройте файл plugins/BreweryX/recipes.yml на сервере.",
        "Вставьте рецепт в конец файла.",
        "Перезагрузите сервер — таинственная медовуха готова!"
      ],
    },
    dark_stout: {
      meta: {
        title: "Рецепт Полуночного Стаута для BreweryX — YAML-конфиг",
        description: "Готовый YAML-рецепт полуночного стаута для BreweryX в Minecraft: пшеница, какао-бобы, сахар, чёрный цвет, эффект ночного зрения, 10% алкоголя.",
        keywords: [
          "полуночный стаут breweryx",
          "рецепт стаута minecraft",
          "breweryx стаут yaml",
          "midnight stout recipe",
          "minecraft brewery stout",
          "breweryx stout config"
        ],
      },
      intro: [
        "Полуночный стаут — это тёмное пиво для BreweryX с насыщенным вкусом какао и эффектом ночного зрения. Чёрный, как бездна, и бархатистый — отличный выбор для вечерних приключений под луной.",
        "Варится из пшеницы, какао-бобов и сахара всего 8 минут, без дистилляции и выдержки. Умеренная сложность 5 делает его доступным рецептом для игроков среднего уровня."
      ],
      installSteps: [
        "Скопируйте YAML-код полуночного стаута из генератора.",
        "Откройте файл plugins/BreweryX/recipes.yml на сервере.",
        "Вставьте рецепт в конец файла.",
        "Перезагрузите сервер — полуночный стаут готов!"
      ],
    },
    frostbite_ipa: {
      meta: {
        title: "Рецепт Ледяного IPA для BreweryX — YAML-конфиг",
        description: "Готовый YAML-рецепт ледяного IPA для BreweryX в Minecraft: пшеница, ядовитая картофелина, бирюзовый цвет, эффект скорости, 12% алкоголя.",
        keywords: [
          "ледяной ipa breweryx",
          "рецепт ipa minecraft",
          "breweryx ipa yaml",
          "frostbite ipa recipe",
          "minecraft brewery ipa",
          "breweryx india pale ale"
        ],
      },
      intro: [
        "Ледяной IPA — это освежающий горьковатый эль для BreweryX с эффектом скорости. Ядовитая картофелина в составе придаёт характерную хмелевую горчинку, а бирюзовый цвет выделяет напиток на фоне остальных.",
        "Варится 7 минут из пшеницы, сахара и воды. Сложность 6 и 12% алкоголя — напиток для игроков, которые уже освоили базовые рецепты."
      ],
      installSteps: [
        "Скопируйте YAML-код ледяного IPA из генератора.",
        "Откройте файл plugins/BreweryX/recipes.yml на сервере.",
        "Вставьте рецепт в конец файла.",
        "Перезагрузите сервер — ледяной IPA готов!"
      ],
    },
    sunset_sangria: {
      meta: {
        title: "Рецепт Сангрии Заката для BreweryX — YAML-конфиг",
        description: "Готовый YAML-рецепт сангрии заката для BreweryX в Minecraft: яблоки, сладкие ягоды, сахар, оранжевый цвет, эффект регенерации, 7% алкоголя.",
        keywords: [
          "сангрия breweryx",
          "рецепт сангрии minecraft",
          "breweryx сангрия yaml",
          "sunset sangria recipe",
          "minecraft brewery sangria",
          "breweryx fruit drink"
        ],
      },
      intro: [
        "Сангрия заката — это фруктовый напиток для BreweryX из яблок и сладких ягод с эффектом регенерации. Оранжевый цвет и вкус лета делают его отличным летним рецептом для вашего сервера.",
        "Готовится всего за 5 минут со сложностью 2 — один из самых простых рецептов каталога. Идеальный выбор для начинающих виноделов."
      ],
      installSteps: [
        "Скопируйте YAML-код сангрии заката из генератора.",
        "Откройте файл plugins/BreweryX/recipes.yml на сервере.",
        "Вставьте рецепт в конец файла.",
        "Перезагрузите сервер — сангрия заката готова!"
      ],
    },
    shadow_porter: {
      meta: {
        title: "Рецепт Теневого Портера для BreweryX — YAML-конфиг",
        description: "Готовый YAML-рецепт теневого портера для BreweryX в Minecraft: пшеница, какао, адский нарост, тёмно-красный цвет, эффект невидимости, 14% алкоголя.",
        keywords: [
          "теневой портер breweryx",
          "рецепт портера minecraft",
          "breweryx портер yaml",
          "shadow porter recipe",
          "minecraft brewery porter",
          "breweryx invisibility drink"
        ],
      },
      intro: [
        "Теневой портер — это крепкий тёмный напиток для BreweryX с эффектом невидимости. Тёмный, как ночь, и сильный, как сталь — адский нарост в составе добавляет магическую нотку.",
        "Варится 10 минут из пшеницы, какао-бобов, сахара и адского нароста. Высокая сложность 8 и 14% алкоголя требуют от игрока настоящего мастерства пивоварения."
      ],
      installSteps: [
        "Скопируйте YAML-код теневого портера из генератора.",
        "Откройте файл plugins/BreweryX/recipes.yml на сервере.",
        "Вставьте рецепт в конец файла.",
        "Перезагрузите сервер — теневой портер готов!"
      ],
    },
    golden_cider: {
      meta: {
        title: "Рецепт Золотого Урожайного Сидра для BreweryX — YAML-конфиг",
        description: "Готовый YAML-рецепт золотого сидра для BreweryX в Minecraft: яблоки, сахар, пшеница, жёлтый цвет, 6% алкоголя, лёгкая сложность.",
        keywords: [
          "золотой сидр breweryx",
          "рецепт сидра minecraft",
          "breweryx сидр yaml",
          "golden cider recipe",
          "minecraft brewery cider",
          "breweryx apple drink"
        ],
      },
      intro: [
        "Золотой урожайный сидр — это игристый напиток для BreweryX из отборных яблок. Светлый, хрустящий и простой в приготовлении — базовый рецепт для любого питейного меню сервера.",
        "Готовится всего 4 минуты со сложностью 2 и лёгкими 6% алкоголя. Отличный первый рецепт для новичков, осваивающих плагин."
      ],
      installSteps: [
        "Скопируйте YAML-код золотого сидра из генератора.",
        "Откройте файл plugins/BreweryX/recipes.yml на сервере.",
        "Вставьте рецепт в конец файла.",
        "Перезагрузите сервер — золотой сидр готов!"
      ],
    },
    nether_rum: {
      meta: {
        title: "Рецепт Адского Огненного Рома для BreweryX — YAML-конфиг",
        description: "Готовый YAML-рецепт адского рома для BreweryX в Minecraft: сахар, огненный порошок, двойная дистилляция, выдержка в багровом грибе, 40% алкоголя.",
        keywords: [
          "адский ром breweryx",
          "рецепт рома minecraft",
          "breweryx ром yaml",
          "netherfire rum recipe",
          "minecraft brewery rum",
          "breweryx fire resistance drink"
        ],
      },
      intro: [
        "Адский огненный ром — это пряный напиток из глубин Нижнего мира с эффектом огнестойкости. Огненный порошок в составе и выдержка в бочке из багрового гриба делают его идеальным спутником походов в ад.",
        "Рецепт серьёзный: 14 минут варки, две перегонки и четыре дня выдержки. Сложность 7 и 40% алкоголя — награда за терпение стоит каждой минуты."
      ],
      installSteps: [
        "Скопируйте YAML-код адского рома из генератора.",
        "Откройте файл plugins/BreweryX/recipes.yml на сервере.",
        "Вставьте рецепт в конец файла.",
        "Перезагрузите сервер — адский ром готов к выдержке!"
      ],
    },
    thunder_lager: {
      meta: {
        title: "Рецепт Грозового Лагера для BreweryX — YAML-конфиг",
        description: "Готовый YAML-рецепт грозового лагера для BreweryX в Minecraft: пшеница, сахар, вода, серый цвет, эффект скорости, 5% алкоголя.",
        keywords: [
          "грозовой лагер breweryx",
          "рецепт лагера minecraft",
          "breweryx лагер yaml",
          "thunderstorm lager recipe",
          "minecraft brewery lager",
          "breweryx light beer"
        ],
      },
      intro: [
        "Грозовой лагер — это лёгкий освежающий напиток для BreweryX, чистый и хрустящий, как удар молнии. Эффект скорости и всего 5% алкоголя делают его повседневным напитком для игроков.",
        "Простейший состав из пшеницы, сахара и воды, 5 минут варки и сложность 3 — быстрый рецепт на каждый день, который сварит даже новичок."
      ],
      installSteps: [
        "Скопируйте YAML-код грозового лагера из генератора.",
        "Откройте файл plugins/BreweryX/recipes.yml на сервере.",
        "Вставьте рецепт в конец файла.",
        "Перезагрузите сервер — грозовой лагер готов!"
      ],
    },
    berry_blast: {
      meta: {
        title: "Рецепт Ягодного Взрыва для BreweryX — YAML-конфиг",
        description: "Готовый YAML-рецепт ягодного коктейля для BreweryX в Minecraft: сладкие ягоды, сахар, розовый цвет, эффект скорости, 4% алкоголя.",
        keywords: [
          "ягодный коктейль breweryx",
          "рецепт ягодного напитка minecraft",
          "breweryx ягоды yaml",
          "berry burst recipe",
          "minecraft berry drink",
          "breweryx sweet cocktail"
        ],
      },
      intro: [
        "Ягодный взрыв — это взрыв вкуса для BreweryX: сладкий, терпкий и ярко-розовый. Варится всего из трёх ингредиентов — сладких ягод, сахара и воды.",
        "3 минуты варки, сложность 2 и лёгкие 4% алкоголя — самый быстрый рецепт каталога. Отличный десертный напиток и первое знакомство с плагином."
      ],
      installSteps: [
        "Скопируйте YAML-код ягодного взрыва из генератора.",
        "Откройте файл plugins/BreweryX/recipes.yml на сервере.",
        "Вставьте рецепт в конец файла.",
        "Перезагрузите сервер — ягодный взрыв готов!"
      ],
    },
    obsidian_stout: {
      meta: {
        title: "Рецепт Обсидианового Тёмного Эля для BreweryX — YAML-конфиг",
        description: "Готовый YAML-рецепт обсидианового эля для BreweryX в Minecraft: пшеница, какао, обсидиан, чёрный цвет, эффект сопротивления 2 уровня, 16% алкоголя.",
        keywords: [
          "обсидиановый эль breweryx",
          "рецепт тёмного эля minecraft",
          "breweryx эль yaml",
          "obsidian dark ale recipe",
          "minecraft resistance drink",
          "breweryx hard beer"
        ],
      },
      intro: [
        "Обсидиановый тёмный эль — это сверхкрепкий напиток для BreweryX с эффектом сопротивления второго уровня. Твёрдый и тёмный, почти неразрушимый — кусочек обсидиана в составе делает его по-настоящему уникальным.",
        "Рецепт для мастеров: 12 минут варки, сложность 9 и 16% алкоголя. Десять порций пшеницы и четыре какао-бобов — ингредиенты не из дешёвых, но эффект того стоит."
      ],
      installSteps: [
        "Скопируйте YAML-код обсидианового эля из генератора.",
        "Откройте файл plugins/BreweryX/recipes.yml на сервере.",
        "Вставьте рецепт в конец файла.",
        "Перезагрузите сервер — обсидиановый эль готов!"
      ],
    },
    crystal_vodka: {
      meta: {
        title: "Рецепт Хрустальной Водки для BreweryX — YAML-конфиг",
        description: "Готовый YAML-рецепт хрустальной водки для BreweryX в Minecraft: пшеница, вода, сахар, тройная дистилляция, белый цвет, 50% алкоголя.",
        keywords: [
          "хрустальная водка breweryx",
          "рецепт водки minecraft",
          "breweryx водка yaml",
          "crystal vodka recipe",
          "minecraft brewery vodka",
          "breweryx strongest drink"
        ],
      },
      intro: [
        "Хрустальная водка — это чистейший и самый крепкий напиток каталога BreweryX: 50% алкоголя после тройной дистилляции. Прозрачная, как стекло, и гладкая, как лёд.",
        "Минимализм в составе — только пшеница, вода и сахар — компенсируется мастерством: 8 минут варки, три перегонки по 120 секунд и сложность 8. Эталонный рецепт для ценителей крепкого."
      ],
      installSteps: [
        "Скопируйте YAML-код хрустальной водки из генератора.",
        "Откройте файл plugins/BreweryX/recipes.yml на сервере.",
        "Вставьте рецепт в конец файла.",
        "Перезагрузите сервер — хрустальная водка готова к дистилляции!"
      ],
    },
  },
  en: {
    honey_ale: {
      meta: {
        title: "Honey Gold Ale Recipe for BreweryX — YAML Config",
        description: "Ready YAML recipe for honey gold ale for the BreweryX Minecraft plugin: wheat, honey, water, 6 minutes cooking time, difficulty 3, 8% alcohol.",
        keywords: [
          "honey ale breweryx",
          "ale recipe minecraft",
          "breweryx ale yaml",
          "minecraft brewery beer",
          "breweryx beer config",
          "simple beer recipe"
        ],
      },
      intro: [
        "Honey gold ale is a beginner-friendly recipe for BreweryX. A simple composition of wheat, honey, and water, a short cooking time and low difficulty make it an excellent starting point for learning the plugin.",
        "The drink has a golden-yellow color, a sweet taste, and a mild alcohol effect. Perfect as a starter drink for players on your server."
      ],
      installSteps: [
        "Copy the YAML recipe code from the generator or download the file.",
        "Open the plugins/BreweryX/recipes.yml file on your server.",
        "Paste the recipe at the end of the file (or create a new file if none exists).",
        "Reload the server with /reload or restart it — your honey ale is ready!"
      ],
    },
    dragon_whiskey: {
      meta: {
        title: "Inferno Whiskey Recipe for BreweryX — YAML Config",
        description: "Ready YAML recipe for inferno whiskey for BreweryX in Minecraft: wheat, blaze powder, sugar, triple distillation, dark oak barrel aging, 45% alcohol.",
        keywords: [
          "inferno whiskey breweryx",
          "whiskey recipe minecraft",
          "breweryx whiskey yaml",
          "dragon whiskey recipe",
          "minecraft whiskey plugin",
          "breweryx whiskey config",
          "distilled whiskey recipe"
        ],
      },
      intro: [
        "Inferno whiskey is an extremely strong spirit for BreweryX with triple distillation and dark oak barrel aging. Rich flavor, bright-red color and a fire resistance effect make it one of the most impressive recipes.",
        "The recipe uses four ingredients: wheat, blaze powder, sugar, and water. After brewing, the drink undergoes three distillation runs and seven days of aging — rewarding you with 45% alcohol."
      ],
      installSteps: [
        "Copy the YAML code for inferno whiskey from the generator or download the file.",
        "Open the plugins/BreweryX/recipes.yml file on your server.",
        "Paste the recipe at the end of the file.",
        "Reload the server — inferno whiskey is ready for distillation!"
      ],
    },
    enchanted_elixir: {
      meta: {
        title: "Enchanted Elixir Recipe for BreweryX — YAML Config",
        description: "Ready YAML recipe for an enchanted elixir for BreweryX in Minecraft: sugar, redstone, glowstone dust, nether wart, glowing and luck effects, no alcohol.",
        keywords: [
          "enchanted elixir breweryx",
          "elixir recipe minecraft",
          "breweryx elixir yaml",
          "minecraft brewery potion",
          "breweryx elixir config",
          "luck potion recipe"
        ],
      },
      intro: [
        "The enchanted elixir is a magical non-alcoholic drink for BreweryX that grants the player glowing and luck effects. It is brewed from sugar, redstone, glowstone dust, and nether wart.",
        "The green color and glowing description make it recognizable in the inventory. An excellent alternative to standard Minecraft potions with a fully customizable look."
      ],
      installSteps: [
        "Copy the YAML code for the enchanted elixir from the generator.",
        "Open the plugins/BreweryX/recipes.yml file on your server.",
        "Paste the recipe at the end of the file.",
        "Reload the server — the elixir will appear for players!"
      ],
    },
    moonlight_milk: {
      meta: {
        title: "Moonlit Milk Recipe for BreweryX — YAML Config",
        description: "Ready YAML recipe for moonlit milk for BreweryX in Minecraft: milk, sugar, honey, no alcohol, night vision effect.",
        keywords: [
          "moonlit milk breweryx",
          "milk recipe minecraft",
          "breweryx milk yaml",
          "minecraft brewery milk",
          "breweryx milk config",
          "non-alcoholic drink recipe"
        ],
      },
      intro: [
        "Moonlit milk is a gentle non-alcoholic drink for BreweryX that grants the player night vision. It is brewed from just three ingredients: milk, sugar, and honey.",
        "The snow-white color, soothing description, and absence of alcohol make it an excellent choice for servers with a younger audience or as an alternative to alcoholic drinks."
      ],
      installSteps: [
        "Copy the YAML code for moonlit milk from the generator.",
        "Open the plugins/BreweryX/recipes.yml file on your server.",
        "Paste the recipe at the end of the file.",
        "Reload the server — moonlit milk is ready!"
      ],
    },
    mystic_mead: {
      meta: {
        title: "Arcane Mead Recipe for BreweryX — YAML Config",
        description: "Ready YAML recipe for arcane mead for BreweryX in Minecraft: honey, sugar, redstone, distillation, barrel aging, regeneration and absorption effects, 15% alcohol.",
        keywords: [
          "arcane mead breweryx",
          "mead recipe minecraft",
          "breweryx mead yaml",
          "minecraft brewery mead",
          "breweryx mead config",
          "honey mead recipe"
        ],
      },
      intro: [
        "Arcane mead is an enchanted honey drink for BreweryX with one distillation run and long barrel aging. The purple color and regeneration plus absorption effects make it a valuable adventure drink.",
        "The mead is brewed from honey, sugar, and redstone, then distilled and aged for ten days. Wine that glows with inner light is the reward for your patience."
      ],
      installSteps: [
        "Copy the YAML code for arcane mead from the generator.",
        "Open the plugins/BreweryX/recipes.yml file on your server.",
        "Paste the recipe at the end of the file.",
        "Reload the server — arcane mead is ready!"
      ],
    },
    dark_stout: {
      meta: {
        title: "Midnight Stout Recipe for BreweryX — YAML Config",
        description: "Ready YAML recipe for midnight stout for the BreweryX Minecraft plugin: wheat, cocoa beans, sugar, black color, night vision effect, 10% alcohol.",
        keywords: [
          "midnight stout breweryx",
          "stout recipe minecraft",
          "breweryx stout yaml",
          "dark beer recipe minecraft",
          "minecraft brewery stout",
          "breweryx stout config"
        ],
      },
      intro: [
        "Midnight stout is a dark beer for BreweryX with a rich cocoa flavor and a night vision effect. Dark as the void and velvety — an excellent choice for moonlit adventures.",
        "Brewed from wheat, cocoa beans, and sugar in just 8 minutes, with no distillation or aging. Moderate difficulty 5 makes it accessible for mid-level players."
      ],
      installSteps: [
        "Copy the YAML code for midnight stout from the generator.",
        "Open the plugins/BreweryX/recipes.yml file on your server.",
        "Paste the recipe at the end of the file.",
        "Reload the server — midnight stout is ready!"
      ],
    },
    frostbite_ipa: {
      meta: {
        title: "Frostbite IPA Recipe for BreweryX — YAML Config",
        description: "Ready YAML recipe for frostbite IPA for the BreweryX Minecraft plugin: wheat, poisonous potato, cyan color, speed effect, 12% alcohol.",
        keywords: [
          "frostbite ipa breweryx",
          "ipa recipe minecraft",
          "breweryx ipa yaml",
          "india pale ale minecraft",
          "minecraft brewery ipa",
          "breweryx hoppy beer"
        ],
      },
      intro: [
        "Frostbite IPA is a refreshing, hoppy ale for BreweryX with a speed effect. The poisonous potato in the recipe adds a signature bitter note, while the cyan color makes the drink stand out.",
        "Brewed in 7 minutes from wheat, sugar, and water. Difficulty 6 and 12% alcohol — a drink for players who have already mastered the basics."
      ],
      installSteps: [
        "Copy the YAML code for frostbite IPA from the generator.",
        "Open the plugins/BreweryX/recipes.yml file on your server.",
        "Paste the recipe at the end of the file.",
        "Reload the server — frostbite IPA is ready!"
      ],
    },
    sunset_sangria: {
      meta: {
        title: "Sunset Sangria Recipe for BreweryX — YAML Config",
        description: "Ready YAML recipe for sunset sangria for the BreweryX Minecraft plugin: apples, sweet berries, sugar, orange color, regeneration effect, 7% alcohol.",
        keywords: [
          "sunset sangria breweryx",
          "sangria recipe minecraft",
          "breweryx sangria yaml",
          "fruit wine minecraft",
          "minecraft brewery sangria",
          "breweryx fruit drink"
        ],
      },
      intro: [
        "Sunset sangria is a fruity BreweryX drink made from apples and sweet berries with a regeneration effect. The orange color and summer taste make it a great warm-season recipe for your server.",
        "Ready in just 5 minutes with difficulty 2 — one of the simplest recipes in the catalog. A perfect choice for beginner brewers."
      ],
      installSteps: [
        "Copy the YAML code for sunset sangria from the generator.",
        "Open the plugins/BreweryX/recipes.yml file on your server.",
        "Paste the recipe at the end of the file.",
        "Reload the server — sunset sangria is ready!"
      ],
    },
    shadow_porter: {
      meta: {
        title: "Shadow Porter Recipe for BreweryX — YAML Config",
        description: "Ready YAML recipe for shadow porter for the BreweryX Minecraft plugin: wheat, cocoa, nether wart, dark red color, invisibility effect, 14% alcohol.",
        keywords: [
          "shadow porter breweryx",
          "porter recipe minecraft",
          "breweryx porter yaml",
          "invisibility drink minecraft",
          "minecraft brewery porter",
          "breweryx dark beer"
        ],
      },
      intro: [
        "Shadow porter is a strong dark BreweryX drink with an invisibility effect. Dark as night and strong as steel — the nether wart in the recipe adds a magical note.",
        "Brewed for 10 minutes from wheat, cocoa beans, sugar, and nether wart. High difficulty 8 and 14% alcohol demand true brewing mastery."
      ],
      installSteps: [
        "Copy the YAML code for shadow porter from the generator.",
        "Open the plugins/BreweryX/recipes.yml file on your server.",
        "Paste the recipe at the end of the file.",
        "Reload the server — shadow porter is ready!"
      ],
    },
    golden_cider: {
      meta: {
        title: "Golden Harvest Cider Recipe for BreweryX — YAML Config",
        description: "Ready YAML recipe for golden harvest cider for the BreweryX Minecraft plugin: apples, sugar, wheat, yellow color, 6% alcohol, easy difficulty.",
        keywords: [
          "golden cider breweryx",
          "cider recipe minecraft",
          "breweryx cider yaml",
          "apple cider minecraft",
          "minecraft brewery cider",
          "breweryx apple drink"
        ],
      },
      intro: [
        "Golden harvest cider is a sparkling BreweryX drink made from the finest apples. Light, crisp, and simple to make — a staple recipe for any server's drink menu.",
        "Ready in just 4 minutes with difficulty 2 and a light 6% alcohol. An excellent first recipe for newcomers learning the plugin."
      ],
      installSteps: [
        "Copy the YAML code for golden cider from the generator.",
        "Open the plugins/BreweryX/recipes.yml file on your server.",
        "Paste the recipe at the end of the file.",
        "Reload the server — golden cider is ready!"
      ],
    },
    nether_rum: {
      meta: {
        title: "Netherfire Rum Recipe for BreweryX — YAML Config",
        description: "Ready YAML recipe for netherfire rum for the BreweryX Minecraft plugin: sugar, blaze powder, double distillation, crimson fungus barrel aging, 40% alcohol.",
        keywords: [
          "netherfire rum breweryx",
          "rum recipe minecraft",
          "breweryx rum yaml",
          "fire resistance drink minecraft",
          "minecraft brewery rum",
          "breweryx nether drink"
        ],
      },
      intro: [
        "Netherfire rum is a spicy drink from the depths of the Nether with a fire resistance effect. Blaze powder in the recipe and aging in a crimson fungus barrel make it the perfect companion for hell expeditions.",
        "A serious recipe: 14 minutes of brewing, two distillation runs, and four days of aging. Difficulty 7 and 40% alcohol — the reward is worth every minute."
      ],
      installSteps: [
        "Copy the YAML code for netherfire rum from the generator.",
        "Open the plugins/BreweryX/recipes.yml file on your server.",
        "Paste the recipe at the end of the file.",
        "Reload the server — netherfire rum is ready for aging!"
      ],
    },
    thunder_lager: {
      meta: {
        title: "Thunderstorm Lager Recipe for BreweryX — YAML Config",
        description: "Ready YAML recipe for thunderstorm lager for the BreweryX Minecraft plugin: wheat, sugar, water, grey color, speed effect, 5% alcohol.",
        keywords: [
          "thunderstorm lager breweryx",
          "lager recipe minecraft",
          "breweryx lager yaml",
          "light beer minecraft",
          "minecraft brewery lager",
          "breweryx easy beer"
        ],
      },
      intro: [
        "Thunderstorm lager is a light, refreshing BreweryX drink — crisp and clean like a bolt of lightning. The speed effect and just 5% alcohol make it an everyday drink for players.",
        "The simplest composition of wheat, sugar, and water, 5 minutes of brewing and difficulty 3 — a quick daily recipe even a beginner can brew."
      ],
      installSteps: [
        "Copy the YAML code for thunderstorm lager from the generator.",
        "Open the plugins/BreweryX/recipes.yml file on your server.",
        "Paste the recipe at the end of the file.",
        "Reload the server — thunderstorm lager is ready!"
      ],
    },
    berry_blast: {
      meta: {
        title: "Berry Burst Recipe for BreweryX — YAML Config",
        description: "Ready YAML recipe for berry burst cocktail for the BreweryX Minecraft plugin: sweet berries, sugar, pink color, speed effect, 4% alcohol.",
        keywords: [
          "berry burst breweryx",
          "berry drink recipe minecraft",
          "breweryx berries yaml",
          "sweet berry cocktail minecraft",
          "minecraft berry drink",
          "breweryx sweet cocktail"
        ],
      },
      intro: [
        "Berry burst is an explosion of flavor for BreweryX: sweet, tangy, and bright pink. Brewed from just three ingredients — sweet berries, sugar, and water.",
        "3 minutes of brewing, difficulty 2 and a light 4% alcohol — the fastest recipe in the catalog. A great dessert drink and a perfect first taste of the plugin."
      ],
      installSteps: [
        "Copy the YAML code for berry burst from the generator.",
        "Open the plugins/BreweryX/recipes.yml file on your server.",
        "Paste the recipe at the end of the file.",
        "Reload the server — berry burst is ready!"
      ],
    },
    obsidian_stout: {
      meta: {
        title: "Obsidian Dark Ale Recipe for BreweryX — YAML Config",
        description: "Ready YAML recipe for obsidian dark ale for the BreweryX Minecraft plugin: wheat, cocoa, obsidian, black color, resistance II effect, 16% alcohol.",
        keywords: [
          "obsidian dark ale breweryx",
          "dark ale recipe minecraft",
          "breweryx ale yaml",
          "resistance drink minecraft",
          "minecraft hard beer",
          "breweryx obsidian drink"
        ],
      },
      intro: [
        "Obsidian dark ale is an ultra-strong BreweryX drink with a Resistance II effect. Hard and dark, nearly indestructible — the chunk of obsidian in the recipe makes it truly unique.",
        "A recipe for masters: 12 minutes of brewing, difficulty 9 and 16% alcohol. Ten portions of wheat and four cocoa beans — the ingredients are not cheap, but the effect is worth it."
      ],
      installSteps: [
        "Copy the YAML code for obsidian dark ale from the generator.",
        "Open the plugins/BreweryX/recipes.yml file on your server.",
        "Paste the recipe at the end of the file.",
        "Reload the server — obsidian dark ale is ready!"
      ],
    },
    crystal_vodka: {
      meta: {
        title: "Crystal Vodka Recipe for BreweryX — YAML Config",
        description: "Ready YAML recipe for crystal vodka for the BreweryX Minecraft plugin: wheat, water, sugar, triple distillation, white color, 50% alcohol.",
        keywords: [
          "crystal vodka breweryx",
          "vodka recipe minecraft",
          "breweryx vodka yaml",
          "strongest drink minecraft",
          "minecraft brewery vodka",
          "breweryx distilled spirit"
        ],
      },
      intro: [
        "Crystal vodka is the purest and strongest drink in the BreweryX catalog: 50% alcohol after triple distillation. Pure as glass and smooth as ice.",
        "The minimal composition — just wheat, water, and sugar — is balanced by craftsmanship: 8 minutes of brewing, three 120-second distillation runs, and difficulty 8. A benchmark recipe for strong-drink connoisseurs."
      ],
      installSteps: [
        "Copy the YAML code for crystal vodka from the generator.",
        "Open the plugins/BreweryX/recipes.yml file on your server.",
        "Paste the recipe at the end of the file.",
        "Reload the server — crystal vodka is ready for distillation!"
      ],
    },
  },
};
