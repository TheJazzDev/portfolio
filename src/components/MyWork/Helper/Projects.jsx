import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import {
  faCircle,
  faCoins,
  faExternalLink,
  faLineChart,
  faMoon,
} from '@fortawesome/free-solid-svg-icons';
import { faBowlFood } from '@fortawesome/free-solid-svg-icons';

export const projectList = [
  {
    id: 'vastfluid',
    title: 'VastFluid',
    description: 'An inovative concentrated liquidity decentralized exchnage.',
    languages: 'NextJs TailwindCSS GSAP',
    liveDemo: <FontAwesomeIcon icon={faExternalLink} />,
    liveDemoLink: 'https://landing-page-tan-nine-56.vercel.app/',
    icon: <FontAwesomeIcon icon={faCircle} />,
  },
  {
    id: 'vastfluidApp',
    title: 'VastFluid App',
    description: 'Decentralized finance exchange.',
    languages: 'NextJs TailwindCSS GSAP',
    liveDemo: <FontAwesomeIcon icon={faExternalLink} />,
    liveDemoLink: 'https://app-placeholder-vastfluid.vercel.app/',
    icon: <FontAwesomeIcon icon={faCircle} />,
  },
  {
    id: 'defttrader',
    title: 'Deft Trader',
    description:
      'A forex brand that helps forex traders, investors and non forex traders to become profitable in the forex market.',
    languages: 'NextJS TailwindCSS Firebase GSAP',
    liveDemo: <FontAwesomeIcon icon={faExternalLink} />,
    liveDemoLink: 'https://defttrader.com',
    icon: <FontAwesomeIcon icon={faLineChart} />,
  },
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
];
