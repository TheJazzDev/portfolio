import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import {
  faBook,
  faCoins,
  faExternalLink,
  faLineChart,
  faMoon,
  faStopwatch,
} from '@fortawesome/free-solid-svg-icons';
import { faBowlFood } from '@fortawesome/free-solid-svg-icons';

export const projectList = [
  // {
  //   id: 'defttrader',
  //   title: 'Deft Trader',
  //   description:
  //     'A forex brand that helps forex traders, investors and non forex traders to become profitable in the forex market.',
  //   languages: 'NextJS TailwindCSS Firebase GSAP',
  //   liveDemo: <FontAwesomeIcon icon={faExternalLink} />,
  //   liveDemoLink:
  //     'https://defttrader.com',
  //   icon: <FontAwesomeIcon icon={faLineChart} />,
  // },
  {
    id: 'dark-jazz-theme',
    title: 'Dark Jazz Theme',
    description:
      'A Visual Studio Code theme created for developers that d appreciate dark mode.',
    languages: 'JavaScript',
    github: <FontAwesomeIcon icon={faGithub} />,
    githubLink: 'https://github.com/TaiwoJazz/Dark-Jazz',
    liveDemo: <FontAwesomeIcon icon={faExternalLink} />,
    liveDemoLink:
      'https://marketplace.visualstudio.com/items?itemName=TaiwoJazz.dark-jazz&ssr=false#overview',
    icon: <FontAwesomeIcon icon={faMoon} />,
  },
  {
    id: 'homely',
    title: 'Homely',
    description:
      'Homely -  Is a food web application that allows customers to order food',
    languages: 'React TailwindCSS Formik Firebase',
    github: <FontAwesomeIcon icon={faGithub} />,
    githubLink: 'https://github.com/TaiwoJazz/homely',
    liveDemo: <FontAwesomeIcon icon={faExternalLink} />,
    liveDemoLink: 'https://taiwojazz-homely.netlify.app/',
    icon: <FontAwesomeIcon icon={faBowlFood} />,
  },
  {
    id: 'crappo',
    title: 'Crappo',
    description: 'Crappo -  Is a cryptocurrency website.',
    languages: 'React TailwindCSS',
    github: <FontAwesomeIcon icon={faGithub} />,
    githubLink: 'https://github.com/TaiwoJazz/crappo-cryptocurrency',
    liveDemo: <FontAwesomeIcon icon={faExternalLink} />,
    liveDemoLink: 'https://taiwojazz-crappo.netlify.app/',
    icon: <FontAwesomeIcon icon={faCoins} />,
  },
  {
    id: 'todo',
    title: 'Todo App',
    description: 'An app that allows you to keep track of your todo items.',
    languages: 'React CSS3',
    github: <FontAwesomeIcon icon={faGithub} />,
    githubLink: 'https://github.com/TaiwoJazz/Todo-App',
    liveDemo: <FontAwesomeIcon icon={faExternalLink} />,
    liveDemoLink: 'https://taiwojazz-todoapp.netlify.app/',
    icon: <FontAwesomeIcon icon={faBook} />,
  },
  {
    id: 'stopwatch',
    title: 'Stopwatch',
    description: 'A digital stopwatch built with vanilla javascript.',
    languages: 'JS HTML CSS',
    github: <FontAwesomeIcon icon={faGithub} />,
    githubLink: 'https://github.com/TaiwoJazz/stopwatch',
    liveDemo: <FontAwesomeIcon icon={faExternalLink} />,
    liveDemoLink: 'https://taiwo-stopwatch.netlify.app/',
    icon: <FontAwesomeIcon icon={faStopwatch} />,
  },
  
];
