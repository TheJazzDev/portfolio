import React from 'react';
import ToggleTheme from './ToggleTheme';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faGithub,
  faLinkedin,
  faTelegram,
} from '@fortawesome/free-brands-svg-icons';

const Social = () => {
  return (
    <ul className="hidden text-center md:flex lg:flex-col items-center lg:mb-6">
      {[
        ['https://github.com/TaiwoJazz', faGithub],
        ['https://t.me/TaiwoJazz', faTelegram],
        ['https://www.linkedin.com/in/taiwo-babarinde-17322946/', faLinkedin],
      ].map(([url, icon]) => (
        <li key={url}>
          <a
            className="p-1 block font-md"
            href={url}
            target="blank"
            rel="noreferrer">
            <FontAwesomeIcon
              icon={icon}
              className="hover:text-lightMode-100 dark:hover:text-darkMode-100 hover:transition-all duration-300 ease-in-out text-darkMode-paragraph text-md px-2 w-fit"
            />
          </a>
        </li>
      ))}
      <ToggleTheme />
    </ul>
  );
};

export default Social;

// skype:live:babsman4all
