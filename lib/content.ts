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
  },
};
