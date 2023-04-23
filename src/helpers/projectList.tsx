import project1 from "../img/projects/activebox.png";
import project2 from "../img/projects/Blog.png";
import project3 from "../img/projects/ideas.png";
import project4 from "../img/projects/learnReact.png";
import project5 from "../img/projects/mogo.png";
import project6 from "../img/projects/PortfolioReact.png";
import project7 from "../img/projects/portfolio.png";
import project8 from "../img/projects/TodoV1.png";
import project9 from "../img/projects/TodoV1.1.png";
import project10 from "../img/projects/TrelloClone.png";
import project11 from "../img/projects/upavhouse.png";
import project12 from "../img/projects/upavhouse2.png";
import project13 from "../img/projects/leverans.png";
import project14 from "../img/projects/Samurai.png";
import project15 from '../img/projects/react_pizza.png'

export const projects = [
  {
    id: 12,
    title: 'React Pizza',
    skills: 'React, Redux Toolkit, TS, Router, Axios',
    img: project15,
    gitHubLink: 'https://github.com/INTERpol21/react_pizza',
    description:
      'Большой проект, аналог онлайн доставок пицц, использовалось большое количество библиотек, закрывающие большую часть кейсов, Frontend и веб разработки, список технологий: ReactJS 18, TypeScript, Redux Toolkit(хранение данных / пицц), React Router v6, Axios + Fetch, React Hooks(хуки), Prettier, CSS - Modules / SCSS, React Content Loader(скелетон), React Pagination(пагинация), Lodash.Debounce, Code Splitting, React Loadable, useWhyDidYouUpdate',
  },
  {
    id: 11,
    title: 'PortfolioReact',
    skills: 'React, Css, HTML, TS',
    img: project6,
    gitHubLink: 'https://github.com/INTERpol21/react_port',
    description:
      'Проект, был создан на React/TS, повторение навыков и удобное портфолио с моими работами',
  },
  {
    id: 10,
    title: 'Upavhouse',
    skills: 'Vue 2, VueX, Axios, HTML, JS, Vuetify',
    img: project11,
    project12,
    gitHubLink: 'https://panel.upravhouse.ru/',
    description:
      'Разработка и доработка имеющегося проекта. CRM админ панель переписанная, проведен достойный рефакторинг, комментарии, обновления всех имеющихся библиотек и зависимостей, удаления и переписанного на чистом JS, поддержка одного стиля кода. Небольшие исправление бека и работа с REST API(написанного на Python + Django) через Axios. Составления ТЗ и выполнения их в срок, Работа с UI библиотекой Vuetify, SCSS. Pixel perfect. Заказчик остался доволен. Ссылка введен на этот проект ',
  },
  {
    id: 9,
    title: 'Leverans',
    skills: 'HTML, Css, JS, JQuery',
    img: project13,
    gitHubLink: 'https://omsk.leverans.ru/',
    description:
      'Коммерческий проект, очень старый порядка 10-7 лет, огромное количество legacy  кода, рефакторинг, исправление багов и проработка каждой HTML страницы для Google robots, небольшие доработки в плане визуальной составляющей. Работа и исправление JQuery. Ссылка введен на этот проект.',
  },
  {
    id: 8,
    title: 'TrelloClone',
    skills: 'React, TS, MUI',
    img: project10,
    gitHubLink: 'https://github.com/INTERpol21/TrelloClone',
    description:
      'Проектная работа и тех задание для компании, уровень знаний Junior+/Middle-. Аналог Trello board.Визуальная очень близкая копия, большая работа стоящая вашей оценки. Полностью соответствует ТЗ и даже больше, имеется drag and drop.',
  },
  {
    id: 7,
    title: 'Samurai',
    skills: 'React, Redux, Formik, Yup, Axios, TS/JS',
    img: project14,
    gitHubLink: 'https://github.com/INTERpol21/samurai',
    description:
      'Огромный проект, в последствии переписан на TS. Работа с авторизацией, формами Formik, запросов и работа с axios, Огромная проработка React от классовых компонентов до Хуков. Закрытия большого количества кейсов на Redux/Redux-thunk/Reselect ',
  },
  {
    id: 6,
    title: 'LearnReact',
    skills: 'React, Axios, Router-dom',
    img: project4,
    gitHubLink: 'https://github.com/INTERpol21/react_learn',
    description:
      'Огромная проработка от А до Я, многих основных кейсов и задач, на React. От запросов и работы через axios, до пагинации, работы со всеми основными Хуками и роутингом',
  },
  {
    id: 5,
    title: 'TodoV1',
    skills: 'React, Redux, MUI, TS',
    img: project8,
    project9,
    gitHubLink: 'https://github.com/INTERpol21/Todo-React-Redux-Mui',
    description:
      'Отличный пример для первого знакомства с React(по мимо базовых шашек из оф. документации), разделение на слайсы и state с помощью Redux, Типизация и знакомство с прекрасным инструментом TypeScript, впервые использовались готовые компоненты из MUI P.S Можно сказать первое знакомство с реальным миром Frontend',
  },
  {
    id: 4,
    title: 'Blog',
    skills: 'SCSS, HTML, JS, БЭМ, Адаптив, Figma, Gulp, yarn',
    img: project2,
    gitHubLink: 'https://github.com/INTERpol21/Multipager/tree/master/my-project',
    description:
      'Многостраничный лендинг, сборная солянка из предыдущих проектов, интересный дизайн и проработка с Gulp ',
  },
  {
    id: 3,
    title: 'Portfolio',
    skills: 'Css, HTML, JS, БЭМ, Адаптив, Figma',
    img: project7,
    gitHubLink: 'https://github.com/INTERpol21/Project/tree/main/skills',
    description: 'Интересный дизайн, красивый адаптив, валидация ',
  },
  {
    id: 2,
    title: 'Mogo',
    skills: 'Css, HTML, JS, БЭМ, Адаптив, Figma, Adobe Photoshop',
    img: project5,
    gitHubLink: 'https://github.com/INTERpol21/Project/tree/main/mogo%20проект',
    description: 'Интересный дизайн, красивый адаптив, валидация ',
  },
  {
    id: 1,
    title: 'Ideas',
    skills: 'Css, HTML, JS, БЭМ, Адаптив, Figma, Adobe Photoshop',
    img: project3,
    gitHubLink: 'https://github.com/INTERpol21/Project/tree/main/ideas',
    description: 'Интересная работа с красивой и удобной каруселью, валидация',
  },
  {
    id: 0,
    title: 'ActiveBox',
    skills: 'Css, HTML, JS, БЭМ, Адаптив, Figma, Adobe Photoshop',
    img: project1,
    gitHubLink: 'https://github.com/INTERpol21/Project/tree/main/Active',
    description: 'Один из первых пэт-проектов,проработка верстки, работа с Figma и Adobe Photoshop',
  },
]
