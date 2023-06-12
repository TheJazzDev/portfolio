import { NavLink } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faEnvelope,
  faFolderClosed,
  faGear,
  faHome,
  faUser,
} from '@fortawesome/free-solid-svg-icons';
const Menu = () => {
  return (
    <nav className="hidden text-center lg:h-[210px] lg:w-full md:flex lg:flex-col gap-4">
      {[
        ['/', faHome],
        ['/about', faUser],
        ['/skills', faGear],
        ['/work', faFolderClosed],
        ['/contact', faEnvelope],
      ].map(([url, icon]) => (
        <NavLink
          key={url}
          to={url}
          className="text-[1.4rem] flex items-center px-4 lg:px-0 lg:my-1 lg:block h-12 relative no-underline after:transition after:duration-300 after:ease-in after:scale-0 after:hover:scale-100 after:content-[''] after:text-[.8rem] after:tracking-normal after:absolute lg:after:top-2 after:left-0 after:block after:w-full after:text-center  after:text-lightMode-400 dark:after:text-lightMode-100 text-darkMode-paragraph after:hover:opacity-100 [&>*]:hover:opacity-0 after:hover:[&:nth-child(1)]:content-['HOME'] after:hover:[&:nth-child(2)]:content-['ABOUT'] after:hover:[&:nth-child(3)]:content-['SKILLS'] after:hover:[&:nth-child(4)]:content-['WORK'] after:hover:[&:nth-child(5)]:content-['CONTACT']"
          end>
          <FontAwesomeIcon
            icon={icon}
            className="transition-all duration-300 hover:ease-in-out"
          />
        </NavLink>
      ))}
    </nav>
  );
};

export default Menu;
