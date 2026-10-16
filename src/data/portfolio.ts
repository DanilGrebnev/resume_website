import type { Locale } from '../lib/locale';

export interface Contact {
  label: string;
  value: string;
  /** Полная ссылка https://… или mailto:…; null — неактивный заполнитель. */
  href: string | null;
}

export interface Project {
  number: string;
  title: string;
  category: string;
  description: string;
  role: string;
  result: string;
  technologies: string[];
  href: string | null;
  source: string | null;
  visual: 'sentx' | 'mybox' | 'iec' | 'sobol' | 'metdent' | 'flet';
  coverLabel: string;
  coverCaption: string;
}

export interface Portfolio {
  name: string;
  specialization: string;
  positioning: string;
  about: string[];
  directions: { title: string; description: string }[];
  stack: { title: string; technologies: string[]; placeholder: string }[];
  projects: Project[];
  contacts: Contact[];
  seo: { title: string; description: string; siteUrl: string | null };
}

export const portfolio: Portfolio = {
  name: 'Danil',
  specialization: 'Fullstack разработка',
  positioning: 'От первого клика до последнего запроса. Создаю сайты, AI-сервисы и веб-приложения — с продуманным интерфейсом и надёжной логикой внутри.',
  about: [
    'Я Danil, fullstack-разработчик. Соединяю интерфейсы, серверную логику и данные в цельный продукт. Среди моих работ — AI-сервис SentX, frontend для MYBOX и IEC, сайт и Telegram-бот для клуба «Соболь».',
    'Для меня разработка начинается с вопроса: что человеку нужно сделать и как помочь ему сделать это проще? Поэтому уделяю внимание и понятному интерфейсу, и тому, что происходит за ним: обработке запросов, работе с данными и взаимодействию сервисов.',
  ],
  directions: [
    { title: 'От интерфейса до API', description: 'Разрабатываю frontend и backend: от первого экрана до серверной логики и базы данных. Связываю части продукта в работающую систему.' },
    { title: 'Сначала задача, затем код', description: 'Разбираюсь в сценариях использования и выбираю технологии под задачу. Стремлюсь к решениям, которые понятны пользователю и удобны в дальнейшем развитии.' },
    { title: 'Сервисы, которые помогают', description: 'AI-инструменты, веб-приложения и Telegram-боты. Интересны продукты, которые сокращают путь от намерения к действию: найти ответ, оформить заказ или записаться на игру.' },
  ],
  stack: [
    { title: 'Frontend', technologies: ['React', 'Next.js', 'Astro', 'TypeScript', 'SCSS Modules', 'Motion UI'], placeholder: '[Ваши frontend-технологии]' },
    { title: 'Backend · JS / TS', technologies: ['Express', 'NestJS'], placeholder: '[Ваши backend-технологии]' },
    { title: 'Backend · Python', technologies: ['Python', 'FastAPI', 'asyncio'], placeholder: '[Ваши Python-технологии]' },
    { title: 'Базы данных', technologies: ['PostgreSQL', 'MongoDB'], placeholder: '[Ваши базы данных]' },
  ],
  projects: [
    {
      number: '01', title: 'SentX', category: 'AI · Веб-приложение',
      description: 'AI-сервис с ассистентом Victoria: общение, поиск информации, работа с документами и генерация визуального контента в одном пространстве.',
      role: 'Полная разработка frontend и backend', result: 'Веб-интерфейс AI-ассистента с чатом и инструментами для работы с контентом.',
      technologies: ['Next.js', 'React', 'TypeScript', 'SCSS Modules', 'Zustand', 'Axios', 'PostgreSQL', 'FastAPI', 'Python'], href: 'https://sentx.ai/', source: null, visual: 'sentx', coverLabel: 'SentX', coverCaption: 'Идеи обретают интеллект.',
    },
    {
      number: '02', title: 'MYBOX', category: 'E-commerce · Доставка еды',
      description: 'Сайт сети ресторанов японской и паназиатской кухни. Каталог блюд, выбор города и оформление заказов на доставку и самовывоз.',
      role: 'Frontend-разработка', result: 'Онлайн-витрина меню и сервис заказа еды в Волгограде.',
      technologies: ['Next.js', 'TypeScript', 'SCSS Modules'], href: 'https://mybox.ru/volgograd', source: null, visual: 'mybox', coverLabel: 'MYBOX', coverCaption: 'Большой вкус. В одном боксе.',
    },
    {
      number: '03', title: 'Центр Международного Обмена', category: 'Образование · Международные программы',
      description: 'Сайт IEC о работе, учёбе и путешествиях за рубежом. Программы международного обмена, стажировки и Work and Travel.',
      role: 'Frontend-разработка', result: 'Каталог программ по направлениям и странам с возможностью записаться на консультацию.',
      technologies: ['WordPress', 'TypeScript', 'SCSS', 'jQuery', 'GSAP', 'Swiper', 'Inputmask'], href: 'https://iec.ru/ru/', source: null, visual: 'iec', coverLabel: 'IEC', coverCaption: 'Мир становится ближе.',
    },
    {
      number: '04', title: 'Соболь', category: 'Развлечения · Квесты',
      description: 'Сайт творческо-игрового клуба в Волгограде. Иммерсивные квесты и перформансы с актёрами, атмосфера историй и выбор своей игры.',
      role: 'Разработка сайта и Telegram-бота для записи на квесты', result: 'Презентация клуба и каталог игр с записью на квесты через Telegram-бота.',
      technologies: ['Astro', 'React', 'TypeScript', 'SCSS Modules', 'FastAPI', 'Python'], href: 'https://sobolquest.ru/', source: null, visual: 'sobol', coverLabel: 'Соболь', coverCaption: 'Стань частью истории.',
    },
    {
      number: '05', title: 'Металлокерамика', category: 'Медицина · Сайт клиники',
      description: 'Сайт стоматологической клиники в Волгограде. Информация о лечении, имплантации, услугах и специалистах для знакомства с клиникой.',
      role: 'Fullstack-разработка: сайт полностью', result: 'Сайт с услугами стоматологии и записью на консультацию.',
      technologies: ['Astro', 'TypeScript', 'SCSS Modules'], href: 'https://met-dent34.ru/', source: null, visual: 'metdent', coverLabel: 'Металло­керамика', coverCaption: 'Забота начинается с доверия.',
    },
    {
      number: '06', title: 'Флет', category: 'B2B · Платформа для бизнеса',
      description: 'Платформа для онлайн-продаж и работы с клиентами: сайты, приложения, управление заказами, программы лояльности и коммуникации.',
      role: '[Уточните вашу роль]', result: 'Презентация возможностей платформы, сценариев работы и тарифов для бизнеса.',
      technologies: ['React', 'TypeScript', 'SCSS Modules'], href: 'https://flet.su/', source: null, visual: 'flet', coverLabel: 'флет', coverCaption: 'Бизнес. В движении.',
    },
  ],
  contacts: [
    { label: 'Telegram', value: '@Grebnev_D', href: 'https://t.me/Grebnev_D' },
    { label: 'GitHub', value: 'DanilGrebnev', href: 'https://github.com/DanilGrebnev' },
    { label: 'Email', value: 'grebnevdanil60@gmail.com', href: 'mailto:grebnevdanil60@gmail.com' },
  ],
  seo: {
    title: 'Danil — Fullstack разработка',
    description: 'Портфолио разработчика: подход к работе, технологии, избранные проекты и контакты.',
    siteUrl: null,
  },
};

type ProjectTranslation = Pick<Project, 'title' | 'category' | 'description' | 'role' | 'result' | 'coverLabel' | 'coverCaption'>;

const englishProjects: Record<Project['visual'], ProjectTranslation> = {
  sentx: {
    title: 'SentX', category: 'AI · Web application',
    description: 'An AI service featuring Victoria: conversations, research, document tools and visual content generation in one workspace.',
    role: 'Complete frontend and backend development',
    result: 'An AI assistant web app with chat and tools for working with content.',
    coverLabel: 'SentX', coverCaption: 'Where ideas meet intelligence.',
  },
  mybox: {
    title: 'MYBOX', category: 'E-commerce · Food delivery',
    description: 'A website for a Japanese and Pan-Asian restaurant chain, with a food catalog, city selection, delivery and pickup orders.',
    role: 'Frontend development', result: 'An online menu and food ordering service for Volgograd.',
    coverLabel: 'MYBOX', coverCaption: 'Big flavor. One box.',
  },
  iec: {
    title: 'International Exchange Center', category: 'Education · Exchange programs',
    description: 'The IEC website brings together work, study and travel opportunities abroad, including international exchanges, internships and Work and Travel.',
    role: 'Frontend development', result: 'A program catalog organized by destination and country, with consultation requests.',
    coverLabel: 'IEC', coverCaption: 'A world of possibilities.',
  },
  sobol: {
    title: 'Sobol', category: 'Entertainment · Escape rooms',
    description: 'A website for a creative gaming club in Volgograd, featuring immersive escape rooms, live actors and stories you can step into.',
    role: 'Website and Telegram booking bot development', result: 'A club website and game catalog with escape room bookings through a Telegram bot.',
    coverLabel: 'Sobol', coverCaption: 'Become part of the story.',
  },
  metdent: {
    title: 'Metallokeramika', category: 'Healthcare · Clinic website',
    description: 'A dental clinic website in Volgograd, introducing treatments, implants, services and specialists to prospective patients.',
    role: 'Fullstack development of the entire website', result: 'A dental services website with consultation booking.',
    coverLabel: 'Metallo­keramika', coverCaption: 'Care starts with trust.',
  },
  flet: {
    title: 'Flet', category: 'B2B · Business platform',
    description: 'A platform for online sales and customer relationships: websites, apps, order management, loyalty programs and communication tools.',
    role: '[Role to be added]', result: 'A product website explaining the platform, business use cases and pricing.',
    coverLabel: 'flet', coverCaption: 'Business. Moving forward.',
  },
};

const englishPortfolio: Portfolio = {
  ...portfolio,
  specialization: 'Fullstack Development',
  positioning: 'From the first click to the final request. I build websites, AI services and web apps with thoughtful interfaces and reliable logic behind them.',
  about: [
    'I’m Danil, a fullstack developer. I bring interfaces, server logic and data together into complete products. My work includes the SentX AI service, frontend development for MYBOX and IEC, and a website and Telegram bot for the Sobol club.',
    'For me, development starts with a question: what does someone need to do, and how can I make it easier? That means paying attention to both a clear interface and the systems behind it: request handling, data and communication between services.',
  ],
  directions: [
    { title: 'From interface to API', description: 'I build frontend and backend, from the first screen to server logic and databases, connecting the pieces into a working product.' },
    { title: 'Understand first. Then build.', description: 'I explore how a product will be used and choose tools to fit the task, aiming for solutions that are clear to users and easy to evolve.' },
    { title: 'Software that helps', description: 'AI tools, web apps and Telegram bots. I’m interested in products that shorten the path from intention to action: finding an answer, placing an order or booking a game.' },
  ],
  stack: portfolio.stack.map((group, index) => ({
    ...group,
    title: ['Frontend', 'Backend · JS / TS', 'Backend · Python', 'Databases'][index] ?? group.title,
    placeholder: '[Technologies to be added]',
  })),
  projects: portfolio.projects.map(project => ({ ...project, ...englishProjects[project.visual] })),
  seo: {
    ...portfolio.seo,
    title: 'Danil — Fullstack Developer',
    description: 'Danil’s developer portfolio: thoughtful interfaces, reliable backend systems, AI services, selected projects and contact details.',
  },
};

export const portfolios: Record<Locale, Portfolio> = { ru: portfolio, en: englishPortfolio };

const russianInterface = {
  skip: 'Перейти к содержимому', home: 'На главную', navigation: 'Основная навигация',
  aboutNav: 'Обо мне', stackNav: 'Стек', projectsNav: 'Проекты', contactNav: 'На связи',
  languages: 'Язык сайта', russian: 'Читать на русском', english: 'Read in English',
  eyebrow: 'ПОРТФОЛИО РАЗРАБОТЧИКА', hello: 'Привет, я', projectsButton: 'Мои проекты', contactButton: 'Связаться',
  heroBottom: 'ОТ ИДЕИ — К РАБОТАЮЩЕМУ ПРОДУКТУ', scroll: 'Листайте, здесь больше',
  aboutLabel: 'ОБО МНЕ', aboutNote: 'ЧЕЛОВЕК ЗА КОДОМ', aboutTitle1: 'Хороший код.', aboutTitle2: 'Осмысленный', aboutTitle3: 'результат.',
  stackLabel: 'ТЕХНОЛОГИИ', stackNote: 'МОЙ РАБОЧИЙ НАБОР', stackTitle1: 'Инструменты.', stackTitle2: 'Под задачу.',
  stackIntro1: 'Технологии, с которыми я работаю.', stackIntro2: 'Без процентов и условных рейтингов.',
  projectsLabel: 'ИЗБРАННЫЕ ПРОЕКТЫ', projectsNote: 'ИДЕИ В ДЕЙСТВИИ', projectsTitle1: 'Меньше слов.', projectsTitle2: 'Больше дела.',
  projectsIntro: 'Задачи, решения и детали работы.', projectPlaceholder: 'Сейчас здесь заполнители ваших проектов.',
  contactLabel: 'КОНТАКТЫ', contactTitle1: 'Есть идея?', contactTitle2: 'Давайте', contactTitle3: 'обсудим',
  contactIntro1: 'Расскажите о вашем проекте,', contactIntro2: 'задаче или предложении.', contactIntro3: 'Начнём с простого «привет».',
  contactMissing: ' — контакт пока не указан', footer: 'Собрано с вниманием к деталям.', backTop: 'Наверх',
  cover: 'ГРАФИЧЕСКАЯ ОБЛОЖКА', project: 'ПРОЕКТ', roleTechnologies: 'Роль и технологии', myRole: 'Моя роль',
  stackMissing: '[Стек проекта — уточнить]', viewProject: 'Смотреть проект', linkMissing: '[Ссылка на проект]', source: 'Код',
  graphicEnvironment: 'СРЕДА РАЗРАБОТКИ', graphicOnline: 'СИСТЕМА АКТИВНА', graphicIdeas: 'идеи', graphicCode: 'код', graphicPossibilities: 'возможности',
  graphicFooter: 'КОД. МАСТЕРСТВО. ХАРАКТЕР.', ogAlt: 'Портфолио разработчика Danil',
};

export type InterfaceCopy = typeof russianInterface;

export const interfaceCopy: Record<Locale, InterfaceCopy> = {
  ru: russianInterface,
  en: {
    skip: 'Skip to content', home: 'Back to home', navigation: 'Main navigation',
    aboutNav: 'About', stackNav: 'Stack', projectsNav: 'Projects', contactNav: 'Get in touch',
    languages: 'Website language', russian: 'Читать на русском', english: 'Read in English',
    eyebrow: 'DEVELOPER PORTFOLIO', hello: 'Hi, I’m', projectsButton: 'View projects', contactButton: 'Let’s talk',
    heroBottom: 'FROM AN IDEA TO A WORKING PRODUCT', scroll: 'Scroll to explore',
    aboutLabel: 'ABOUT ME', aboutNote: 'THE PERSON BEHIND THE CODE', aboutTitle1: 'Good code.', aboutTitle2: 'Meaningful', aboutTitle3: 'results.',
    stackLabel: 'TECHNOLOGIES', stackNote: 'MY TOOLKIT', stackTitle1: 'The right tools.', stackTitle2: 'For the task.',
    stackIntro1: 'Technologies I work with.', stackIntro2: 'No percentages. No arbitrary ratings.',
    projectsLabel: 'SELECTED PROJECTS', projectsNote: 'IDEAS IN ACTION', projectsTitle1: 'Less talk.', projectsTitle2: 'More building.',
    projectsIntro: 'The challenges, solutions and details.', projectPlaceholder: 'Placeholders for your projects appear here.',
    contactLabel: 'CONTACT', contactTitle1: 'Have an idea?', contactTitle2: 'Let’s', contactTitle3: 'talk',
    contactIntro1: 'Tell me about your project,', contactIntro2: 'challenge or opportunity.', contactIntro3: 'It starts with a simple hello.',
    contactMissing: ' — contact not added yet', footer: 'Built with attention to detail.', backTop: 'Back to top',
    cover: 'PROJECT ARTWORK', project: 'PROJECT', roleTechnologies: 'Role & technologies', myRole: 'My role',
    stackMissing: '[Project stack to be added]', viewProject: 'View project', linkMissing: '[Project link]', source: 'Source',
    graphicEnvironment: 'DEVELOPER’S ENVIRONMENT', graphicOnline: 'SYSTEM ONLINE', graphicIdeas: 'ideas', graphicCode: 'code', graphicPossibilities: 'possibilities',
    graphicFooter: 'CODE. CRAFT. CHARACTER.', ogAlt: 'Danil’s developer portfolio',
  },
};
