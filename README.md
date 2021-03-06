# Документация:

Инсталяция: npm install
запуск проекта: npm start

## Основной стэк технологий:
- Vue3;
- Vite;
- Vue-router;
- scss.

## Структура проекта (директории) в src (исходный код):
- Файл main.js точка входа vue-приложения, весь js код рендерит контент в теге с id="root";
- В файле App.vue находится корневой компонент, в котором находится контейнер для роутинга в лэйауте;
- В директории views хранятся page-components для каждого раздела проекта;
- В директории styles хранятся общие (глобальные) стили, переменные, миксины, типография;
- В директории router хранится роутер для vue приложения, в котором описана логика маршрутизации для SPA-приложения;
- В директории layouts находятся лэйауты. Главный лэйаут содержит в себе header и footer;
- В директории components находятся переиспользуемые компоненты. В blocks смысловые блоки, из которых строится страница. В icons компоненты svg иконок (в будущем возможно переделаю на иконочные шрифты). В ui хранятся небольшие компоненты для интерфейса (кнопки, карточки, формы и т.п.)
- В директории assets хранятся шрифты и изображения.

## Постоение Vue приложения:
Допускается использовать html теги для построения. Приложение делится на компоненты, в каждом из которых внутри тегов <template></template> помещается html разметка. Приложение состоит из дерева (иерархии) компонентов, которые рэндерят друг друга (от корневого к дочерним). При создании компонента, ему можно задать имя, которое в дальнейшем будет использоваться для его вставки в html разметку другого компонента (например <child-component />).

## Стилизация:
Глобальные стили хранятся в директории styles. Через импорты собираются в файле common.scss, который импортируется в корневой компонент App.vue. В компонентах прописаны модульные стили (применительно только к компоненту). Доступ к классам получается через $style.[название класса] с привязкой v-bind к аттрибуту class элемента. Адаптив выполнен с помощью media запросов, прописанных в глобальных миксинах, для применения которых необходимо сделать @include миксина в style компонента для соотстветствующего размера экрана. Основные цвета записаны в переменные, для доступа в мудольных стилях они объявлены в селекторе body через твойное тире. Доступ к значениям переменных в модульных стилях осуществляется через var(--название переменной).

## Изображения:
Используются изображения в формате webp (предпочтительно) либо png, предварительно сжатые. SVG иконки вставлены в template теги и используются как vue компоненты.
