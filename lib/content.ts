export type Locale = "ru" | "en";
export const LOCALES: Locale[] = ["ru", "en"];
export const DEFAULT_LOCALE: Locale = "ru";

export function localePath(locale: Locale, path = "") {
  return `/${locale}${path}`;
}

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
  paramsTable: { label: string; value: string }[];
  installSteps: string[];
}

export const YAML_EXAMPLE = `my_beer:
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

export const EFFECTS_EXAMPLE = `effects:
  - SPEED/1/60
  - NAUSEA/1/30

# With quality ranges:
effects:
  - SPEED/1-3/10-60
  - REGENERATION/1-2/5-30`;

export const QUALITY_EXAMPLE = `name: '&4Bad Beer/&6Normal Beer/&aGood Beer'
lore:
  - '+Lukewarm beer'
  - '++Pleasant taste'
  - '+++Excellent ale'
customModelData: 1000/1001/1002
effects:
  - SPEED/1-3/10-60
  - REGENERATION/1-2/5-30`;

export const FULL_EXAMPLE = `thunder_whiskey:
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
        "breweryx paper"
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
        "breweryx wiki"
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
    golden_beer: {
      meta: {
        title: "Рецепт Золотого Пива для BreweryX — YAML-конфиг",
        description: "Готовый YAML-рецепт золотого пива для плагина BreweryX в Minecraft: пшеница, вода, 5 минут варки, сложность 3, 5% алкоголя.",
        keywords: [
          "золотое пиво breweryx",
          "рецепт пива minecraft",
          "breweryx пиво yaml",
          "golden beer recipe",
          "minecraft brewery beer",
          "breweryx beer config"
        ],
      },
      intro: [
        "Золотое пиво — это базовый рецепт для BreweryX, идеально подходящий для начинающих. Простой состав из пшеницы и воды, минимальное время варки и низкая сложность делают его отличным стартом для изучения плагина.",
        "Напиток имеет золотисто-жёлтый цвет, освежающий вкус и лёгкий алкогольный эффект. Идеально подходит как стартовый напиток для игроков на вашем сервере."
      ],
      paramsTable: [
        { label: "Ингредиенты", value: "WHEAT/6, WATER_BUCKET/1" },
        { label: "Время варки", value: "5 минут" },
        { label: "Сложность", value: "3" },
        { label: "Алкоголь", value: "5%" },
        { label: "Цвет", value: "YELLOW" },
        { label: "ID рецепта", value: "golden_beer" },
      ],
      installSteps: [
        "Скопируйте YAML-код рецепта из генератора или скачайте файл.",
        "Откройте файл plugins/BreweryX/recipes.yml на вашем сервере.",
        "Вставьте рецепт в конец файла (или создайте новый файл, если его нет).",
        "Перезагрузите сервер командой /reload или перезапустите его — золотое пиво готово!"
      ],
    },
    thunder_whiskey: {
      meta: {
        title: "Рецепт Громового Виски для BreweryX — YAML-конфиг",
        description: "Готовый YAML-рецепт громового виски для BreweryX в Minecraft: пшеница, вода, сахар, дистилляция, выдержка в еловой бочке, 30% алкоголя.",
        keywords: [
          "громовое виски breweryx",
          "рецепт виски minecraft",
          "breweryx виски yaml",
          "thunder whiskey recipe",
          "minecraft whiskey plugin",
          "breweryx whiskey config"
        ],
      },
      intro: [
        "Громовое виски — это крепкий напиток для BreweryX с двойной дистилляцией и выдержкой в дубовой бочке. Насыщенный вкус, тёмно-оранжевый цвет и сильный алкогольный эффект делают его одним из самых популярных рецептов.",
        "Рецепт использует три ингредиента: пшеницу, воду и сахар. После варки напиток проходит две перегонки и пять дней выдержки, что придаёт ему глубокий, выдержанный характер."
      ],
      paramsTable: [
        { label: "Ингредиенты", value: "WHEAT/10, WATER_BUCKET/2, SUGAR/4" },
        { label: "Время варки", value: "10 минут" },
        { label: "Дистилляция", value: "2 перегонки, 120 сек каждая" },
        { label: "Бочка", value: "Дубовая (2), 5 дней выдержки" },
        { label: "Алкоголь", value: "30%" },
        { label: "Цвет", value: "ORANGE" },
      ],
      installSteps: [
        "Скопируйте YAML-код громового виски из генератора или скачайте файл.",
        "Откройте файл plugins/BreweryX/recipes.yml на вашем сервере.",
        "Вставьте рецепт в конец файла.",
        "Перезагрузите сервер — громовое виски готово к дистилляции!"
      ],
    },
    health_potion: {
      meta: {
        title: "Рецепт Зелья Здоровья для BreweryX — YAML-конфиг",
        description: "Готовый YAML-рецепт зелья здоровья для BreweryX в Minecraft: адский нарост, вода, зелье регенерации, нет алкоголя.",
        keywords: [
          "зелье здоровья breweryx",
          "рецепт зелья minecraft",
          "breweryx зелье yaml",
          "health potion recipe",
          "minecraft brewery potion",
          "breweryx health config"
        ],
      },
      intro: [
        "Зелье здоровья — это нелекарственный напиток для BreweryX, который восстанавливает здоровье игрока при употреблении. Использует эффект регенерации и не содержит алкоголя.",
        "Идеально подходит как альтернатива стандартным зельям Minecraft с кастомным внешним видом и описанием. Красный цвет и магическое свечение делают его узнаваемым в инвентаре."
      ],
      paramsTable: [
        { label: "Ингредиенты", value: "NETHER_WART/1, WATER_BUCKET/1" },
        { label: "Время варки", value: "3 минуты" },
        { label: "Сложность", value: "2" },
        { label: "Алкоголь", value: "0%" },
        { label: "Цвет", value: "RED" },
        { label: "Эффекты", value: "REGENERATION/2/30" },
      ],
      installSteps: [
        "Скопируйте YAML-код зелья здоровья из генератора.",
        "Откройте файл plugins/BreweryX/recipes.yml на сервере.",
        "Вставьте рецепт в конец файла.",
        "Перезагрузите сервер — зелье здоровья появится у игроков!"
      ],
    },
    hot_chocolate: {
      meta: {
        title: "Рецепт Горячего Шоколада для BreweryX — YAML-конфиг",
        description: "Готовый YAML-рецепт горячего шоколада для BreweryX в Minecraft: какао-бобы, молоко, сахар, без алкоголя, согревающий эффект.",
        keywords: [
          "горячий шоколад breweryx",
          "рецепт шоколада minecraft",
          "breweryx шоколад yaml",
          "hot chocolate recipe",
          "minecraft brewery chocolate",
          "breweryx hot chocolate config"
        ],
      },
      intro: [
        "Горячий шоколад — это нелекарственный напиток для BreweryX, согревающий игроков и восстанавливающий сытость. Использует какао-бобы, молоко и сахар.",
        "Тёмно-коричневый цвет, описание с ароматом шоколада и отсутствие алкоголя делают его отличным выбором для серверов с молодой аудиторией или как альтернатива alcoholic напиткам."
      ],
      paramsTable: [
        { label: "Ингредиенты", value: "COCOA_BEANS/3, MILK_BUCKET/1, SUGAR/2" },
        { label: "Время варки", value: "4 минуты" },
        { label: "Сложность", value: "1" },
        { label: "Алкоголь", value: "0%" },
        { label: "Цвет", value: "DARK_RED" },
        { label: "Эффекты", value: "SATURATION/1/10" },
      ],
      installSteps: [
        "Скопируйте YAML-код горячего шоколада из генератора.",
        "Откройте файл plugins/BreweryX/recipes.yml на сервере.",
        "Вставьте рецепт в конец файла.",
        "Перезагрузите сервер — горячий шоколад готов!"
      ],
    },
    fire_mead: {
      meta: {
        title: "Рецепт Огненной Медовухи для BreweryX — YAML-конфиг",
        description: "Готовый YAML-рецепт огненной медовухи для BreweryX в Minecraft: мёд, вода, адский нарост, дистилляция, 15% алкоголя.",
        keywords: [
          "огненная медовуха breweryx",
          "рецепт медовухи minecraft",
          "breweryx медовуха yaml",
          "fire mead recipe",
          "minecraft brewery mead",
          "breweryx fire mead config"
        ],
      },
      intro: [
        "Огненная медовуха — это крепкий мёд для BreweryX с одной перегонкой и добавлением адского нароста. Огненно-оранжевый цвет и согревающий эффект делают её идеальным напитком для зимних приключений.",
        "Медовуха варится из мёда и воды, после чего проходит перегонку для повышения крепости. Добавление незабудки придаёт острый привкус и эффект регенерации."
      ],
      paramsTable: [
        { label: "Ингредиенты", value: "HONEY_BOTTLE/4, WATER_BUCKET/2, NETHER_WART/1" },
        { label: "Время варки", value: "8 минут" },
        { label: "Дистилляция", value: "1 перегонка, 90 сек" },
        { label: "Алкоголь", value: "15%" },
        { label: "Цвет", value: "ORANGE" },
        { label: "Эффекты", value: "FIRE_RESISTANCE/1/60" },
      ],
      installSteps: [
        "Скопируйте YAML-код огненной медовухи из генератора.",
        "Откройте файл plugins/BreweryX/recipes.yml на сервере.",
        "Вставьте рецепт в конец файла.",
        "Перезагрузите сервер — огненная медовуха готова!"
      ],
    },
  },
  en: {
    golden_beer: {
      meta: {
        title: "Golden Beer Recipe for BreweryX — YAML Config",
        description: "Ready YAML recipe for golden beer for the BreweryX Minecraft plugin: wheat, water, 5 minutes cooking time, difficulty 3, 5% alcohol.",
        keywords: [
          "golden beer breweryx",
          "beer recipe minecraft",
          "breweryx beer yaml",
          "minecraft brewery beer",
          "breweryx beer config",
          "simple beer recipe"
        ],
      },
      intro: [
        "Golden beer is a beginner-friendly recipe for BreweryX. A simple composition of wheat and water, minimal cooking time and low difficulty make it an excellent starting point for learning the plugin.",
        "The drink has a golden-yellow color, a refreshing taste, and a mild alcohol effect. Perfect as a starter drink for players on your server."
      ],
      paramsTable: [
        { label: "Ingredients", value: "WHEAT/6, WATER_BUCKET/1" },
        { label: "Cooking time", value: "5 minutes" },
        { label: "Difficulty", value: "3" },
        { label: "Alcohol", value: "5%" },
        { label: "Color", value: "YELLOW" },
        { label: "Recipe ID", value: "golden_beer" },
      ],
      installSteps: [
        "Copy the YAML recipe code from the generator or download the file.",
        "Open the plugins/BreweryX/recipes.yml file on your server.",
        "Paste the recipe at the end of the file (or create a new file if none exists).",
        "Reload the server with /reload or restart it — your golden beer is ready!"
      ],
    },
    thunder_whiskey: {
      meta: {
        title: "Thunder Whiskey Recipe for BreweryX — YAML Config",
        description: "Ready YAML recipe for thunder whiskey for BreweryX in Minecraft: wheat, water, sugar, distillation, spruce barrel aging, 30% alcohol.",
        keywords: [
          "thunder whiskey breweryx",
          "whiskey recipe minecraft",
          "breweryx whiskey yaml",
          "minecraft whiskey plugin",
          "breweryx whiskey config",
          "distilled whiskey recipe"
        ],
      },
      intro: [
        "Thunder whiskey is a strong spirit for BreweryX with double distillation and oak barrel aging. Rich flavor, dark-orange color and a strong alcohol effect make it one of the most popular recipes.",
        "The recipe uses three ingredients: wheat, water, and sugar. After brewing, the drink undergoes two distillation runs and five days of aging, giving it a deep, mature character."
      ],
      paramsTable: [
        { label: "Ingredients", value: "WHEAT/10, WATER_BUCKET/2, SUGAR/4" },
        { label: "Cooking time", value: "10 minutes" },
        { label: "Distillation", value: "2 runs, 120 sec each" },
        { label: "Barrel", value: "Oak (2), 5 days aging" },
        { label: "Alcohol", value: "30%" },
        { label: "Color", value: "ORANGE" },
      ],
      installSteps: [
        "Copy the YAML code for thunder whiskey from the generator or download the file.",
        "Open the plugins/BreweryX/recipes.yml file on your server.",
        "Paste the recipe at the end of the file.",
        "Reload the server — thunder whiskey is ready for distillation!"
      ],
    },
    health_potion: {
      meta: {
        title: "Health Potion Recipe for BreweryX — YAML Config",
        description: "Ready YAML recipe for a health potion for BreweryX in Minecraft: nether wart, water, regeneration effect, no alcohol.",
        keywords: [
          "health potion breweryx",
          "potion recipe minecraft",
          "breweryx potion yaml",
          "minecraft brewery potion",
          "breweryx health config",
          "regeneration potion recipe"
        ],
      },
      intro: [
        "The health potion is a non-alcoholic drink for BreweryX that restores player health on consumption. It uses the regeneration effect and contains no alcohol.",
        "It serves as an alternative to standard Minecraft potions with a custom appearance and description. The red color and magical glow make it recognizable in the inventory."
      ],
      paramsTable: [
        { label: "Ingredients", value: "NETHER_WART/1, WATER_BUCKET/1" },
        { label: "Cooking time", value: "3 minutes" },
        { label: "Difficulty", value: "2" },
        { label: "Alcohol", value: "0%" },
        { label: "Color", value: "RED" },
        { label: "Effects", value: "REGENERATION/2/30" },
      ],
      installSteps: [
        "Copy the YAML code for the health potion from the generator.",
        "Open the plugins/BreweryX/recipes.yml file on your server.",
        "Paste the recipe at the end of the file.",
        "Reload the server — the health potion will appear for players!"
      ],
    },
    hot_chocolate: {
      meta: {
        title: "Hot Chocolate Recipe for BreweryX — YAML Config",
        description: "Ready YAML recipe for hot chocolate for BreweryX in Minecraft: cocoa beans, milk, sugar, no alcohol, warming effect.",
        keywords: [
          "hot chocolate breweryx",
          "chocolate recipe minecraft",
          "breweryx chocolate yaml",
          "minecraft brewery chocolate",
          "breweryx hot chocolate config",
          "non-alcoholic drink recipe"
        ],
      },
      intro: [
        "Hot chocolate is a non-alcoholic drink for BreweryX that warms players and restores saturation. It uses cocoa beans, milk, and sugar.",
        "The dark-brown color, chocolate-flavored description, and absence of alcohol make it an excellent choice for servers with a younger audience or as an alternative to alcoholic drinks."
      ],
      paramsTable: [
        { label: "Ingredients", value: "COCOA_BEANS/3, MILK_BUCKET/1, SUGAR/2" },
        { label: "Cooking time", value: "4 minutes" },
        { label: "Difficulty", value: "1" },
        { label: "Alcohol", value: "0%" },
        { label: "Color", value: "DARK_RED" },
        { label: "Effects", value: "SATURATION/1/10" },
      ],
      installSteps: [
        "Copy the YAML code for hot chocolate from the generator.",
        "Open the plugins/BreweryX/recipes.yml file on your server.",
        "Paste the recipe at the end of the file.",
        "Reload the server — hot chocolate is ready!"
      ],
    },
    fire_mead: {
      meta: {
        title: "Fire Mead Recipe for BreweryX — YAML Config",
        description: "Ready YAML recipe for fire mead for BreweryX in Minecraft: honey, water, nether wart, distillation, 15% alcohol.",
        keywords: [
          "fire mead breweryx",
          "mead recipe minecraft",
          "breweryx mead yaml",
          "minecraft brewery mead",
          "breweryx fire mead config",
          "honey mead recipe"
        ],
      },
      intro: [
        "Fire mead is a strong honey drink for BreweryX with one distillation run and nether wart. The fiery-orange color and warming effect make it perfect for winter adventures.",
        "Mead is brewed from honey and water, then distilled to increase strength. Adding nether wart gives it a spicy kick and a regeneration effect."
      ],
      paramsTable: [
        { label: "Ingredients", value: "HONEY_BOTTLE/4, WATER_BUCKET/2, NETHER_WART/1" },
        { label: "Cooking time", value: "8 minutes" },
        { label: "Distillation", value: "1 run, 90 sec" },
        { label: "Alcohol", value: "15%" },
        { label: "Color", value: "ORANGE" },
        { label: "Effects", value: "FIRE_RESISTANCE/1/60" },
      ],
      installSteps: [
        "Copy the YAML code for fire mead from the generator.",
        "Open the plugins/BreweryX/recipes.yml file on your server.",
        "Paste the recipe at the end of the file.",
        "Reload the server — fire mead is ready!"
      ],
    },
  },
};

