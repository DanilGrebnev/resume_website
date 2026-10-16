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
