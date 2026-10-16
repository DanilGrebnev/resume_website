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
  visual: 'orbit' | 'grid' | 'type';
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
  name: '[Ваше имя]',
  specialization: '[Ваша специализация]',
  positioning: '[Расскажите в одном предложении, какие цифровые продукты вы создаёте и чем помогаете людям и бизнесу.]',
  about: [
    '[Пара слов о вас: что вам интересно в разработке, как вы подходите к работе и какие задачи любите решать.]',
    '[Добавьте второе предложение о вашем подходе, профессиональных интересах или следующем шаге в карьере.]',
  ],
  directions: [
    { title: '[Направление работы]', description: '[Какие задачи вы решаете и что для вас важно в результате.]' },
    { title: '[Ваш подход]', description: '[Как вы работаете с задачами, командой и обратной связью.]' },
    { title: '[Что вам интересно]', description: '[Продукты и идеи, над которыми вы хотели бы работать.]' },
  ],
  stack: [
    { title: 'Frontend', technologies: ['React', 'Next.js', 'Astro', 'TypeScript', 'Motion UI'], placeholder: '[Ваши frontend-технологии]' },
    { title: 'Backend · JS / TS', technologies: ['Express', 'NestJS'], placeholder: '[Ваши backend-технологии]' },
    { title: 'Backend · Python', technologies: ['Python', 'asyncio', '[Python-фреймворк — уточнить]'], placeholder: '[Ваши Python-технологии]' },
    { title: 'Базы данных', technologies: ['PostgreSQL', 'MongoDB'], placeholder: '[Ваши базы данных]' },
  ],
  projects: [
    { number: '01', title: '[Название проекта]', category: '[Тип продукта]', description: '[Опишите задачу проекта: для кого он создан и какую проблему решает.]', role: '[Что вы сделали лично]', result: '[Результат без вымышленных метрик]', technologies: [], href: null, source: null, visual: 'orbit' },
    { number: '02', title: '[Название проекта]', category: '[Тип продукта]', description: '[Расскажите об идее и ключевой особенности этого проекта.]', role: '[Ваша роль в проекте]', result: '[Что получилось в итоге]', technologies: [], href: null, source: null, visual: 'grid' },
    { number: '03', title: '[Название проекта]', category: '[Тип продукта]', description: '[Добавьте задачу и детали, которые делают этот проект интересным.]', role: '[Ваш вклад в разработку]', result: '[Результат работы]', technologies: [], href: null, source: null, visual: 'type' },
  ],
  contacts: [
    { label: 'Telegram', value: '[@ваш_ник]', href: null },
    { label: 'GitHub', value: '[ваш_профиль]', href: null },
    { label: 'Email', value: '[ваша@почта.ru]', href: null },
  ],
  seo: {
    title: '[Ваше имя] — портфолио разработчика',
    description: 'Портфолио разработчика: подход к работе, технологии, избранные проекты и контакты.',
    siteUrl: null,
  },
};
