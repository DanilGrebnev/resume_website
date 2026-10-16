# Основания для стека проектов

Проверено 16 октября 2026 года. Проверка читает публичный HTML и подключённые JS/CSS; это не доступ к исходным репозиториям. Технологии текущего сайта могут отличаться от версии, над которой работал автор. Наличие библиотеки в бандле подтверждает её поставку на страницу, но само по себе не доказывает личный вклад разработчика или фактический вызов каждой функции.

Последующее уточнение автора: разработка ведётся на TypeScript; для проектов на Astro, Next.js и React используются модули стилей. По просьбе автора стили в карточках указаны как SCSS / SCSS Modules. Эти сведения получены от автора, а не определены по скомпилированным JS/CSS. Указание языков исходников заменяет общие подписи JavaScript/CSS в карточках.

## SentX — https://sentx.ai/

- Next.js, PostgreSQL и FastAPI подтверждены автором. Next.js сохранён по его отдельному указанию после сообщения о расхождении с текущей публичной версией.
- React, Zustand и Axios найдены в `/assets/index-DqKgrT1q.js`: `rendererPackageName:"react-dom"`, сообщения `zustand devtools middleware`, код Axios с `axios@` и обработкой HTTP-запросов.
- Python следует из подтверждённого использования FastAPI.
- В текущем бандле также есть `__vite__mapDeps` и React Router. Vite и React Router не перенесены в исторический стек проекта: публичная версия отличается от указанного автором Next.js.

## MYBOX — https://mybox.ru/volgograd

- Next.js указан автором. Отдельная метка React удалена по его просьбе. TypeScript и SCSS Modules добавлены по уточнению автора.
- Независимая проверка текущих бандлов недоступна: HTTP-запросы возвращают 307 на тот же URL, браузер показывает CAPTCHA. Дополнительные библиотеки и backend не определялись. CAPTCHA не обходилась.

## IEC — https://iec.ru/ru/

- Автор подтвердил frontend-роль и разрешил заменить Next.js на фактически обнаруженный WordPress.
- HTML содержит `generator="WordPress 6.6.10"`, ресурсы `/wp-content/themes/iec/`, `/wp-includes/`, Contact Form 7.
- jQuery подключён через `/wp-includes/js/jquery/jquery.min.js`; заголовок файла указывает jQuery 3.7.1.
- В `/wp-content/themes/iec/frontend/dist/js/main.js` найдены баннеры GSAP 3.12.5, ScrollTrigger и Inputmask 5.0.9, реализация Swiper и его предупреждения. CSS темы содержит классы `swiper-wrapper`.
- PHP виден в HTTP-заголовке, но не добавлен в портфолио как личный навык: автор сообщил только о frontend-разработке.

## Соболь — https://sobolquest.ru/

- Astro, React, FastAPI и Telegram-бот указаны автором. Python следует из FastAPI.
- HTML подтверждает Astro: `generator="Astro v7.3.5"`, `/_astro/`, `data-astro-cid-*`.
- JavaScript подтверждён исполняемыми файлами `HubHero.astro_astro_type_script_index_0_lang.CIr9Dj8b.js` и `Layout.astro_astro_type_script_index_0_lang.CjQCwjcu.js`.
- React и FastAPI не определены независимо по главной странице, сохранены по сведениям автора. Конкретная библиотека Telegram-бота и база данных неизвестны.

## Металлокерамика — https://met-dent34.ru/

- Astro подтверждается ресурсами `/_astro/`, атрибутами `data-astro-cid-*` и файлами компонентов `Header.astro_astro_type_script_index_0_lang.DL9mGLx6.js`, `Contact.astro_astro_type_script_index_0_lang.CGRjarqu.js`.
- JavaScript и CSS подтверждены этими исполняемыми скриптами и стилями `BaseLayout.E8xrairW.css`, `index.BuhdYH4v.css`.
- Автор подтвердил полную fullstack-разработку сайта, TypeScript и SCSS Modules. Конкретный серверный фреймворк и база данных не установлены.

## Флет — https://flet.su/

- HTML подключает `/assets/index-B7wFssy-.js` и `/assets/index-Drbv2Og7.css`.
- React подтверждается кодом `react-dom`, `createRoot`, React 18.3.1 в основном JS-бандле. JavaScript и CSS — непосредственно подключёнными файлами.
- Признаки загрузчика похожи на Vite, но одного шаблона modulepreload недостаточно для однозначного вывода, поэтому Vite не добавлен.
- TypeScript и SCSS Modules указаны по последующему уточнению автора. Backend, база данных и личная роль автора не установлены.

Версии приведены только как свидетельства проверки и не опубликованы на карточках: они со временем меняются. Аналитика, веб-серверы и сторонние виджеты не включены в личный стек автоматически.
