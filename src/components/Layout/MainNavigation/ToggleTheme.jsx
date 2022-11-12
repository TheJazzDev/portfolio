import React, {useContext, useState} from 'react';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faMoon, faSun} from '@fortawesome/free-solid-svg-icons';
import ThemeContext from '../../../store/theme-context';
import backgroundColor from '../../../store/BackgroundColor';

const Toggle = ({className, onClick}) => {
  const [toolTip, setToolTip] = useState(false);
  const {theme, setTheme} = useContext(ThemeContext);

  const themeHandler = () => {
    setTheme(theme === 'dark' ? 'light' : 'dark');
    setToolTip(false);
  };

  const handleMouseEnter = () => {
    setToolTip(true);
  };

  const handleMouseLeave = () => {
    setToolTip(false);
  };

  switch (theme) {
    case 'dark':
      backgroundColor({color: '#0D0D2B'});
      break;
    case 'light':
      backgroundColor({color: '#e5f2ff'});
      break;
    default:
      break;
  }

  return (
    <div onClick={onClick} className={className}>
      {theme === 'dark' ? (
        <div
          onClick={themeHandler}
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
          className="text-[1.4rem] flex text-lightBackground md:hover:text-lightMode-100 transition-all duration-300 ease-in-out lg:mt-2 px-4 lg:px-0 py-2 md:pl-4 lg:pl-0 ">
          {toolTip && (
            <p className="w-80 absolute bottom-9 md:bottom-12 lg:bottom-16 -ml-5 text-[.6rem] text-lightMode-100 block text-left hover:transition-all hover:ease-in-out hover:duration-300 tooltip">
              Light Mode
            </p>
          )}
          <FontAwesomeIcon icon={faSun} className="text-2xl md:text-lg" />
        </div>
      ) : (
        <div
          onClick={themeHandler}
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
          className="text-[1.4rem] flex text-darkBackground md;hover:text-lightMode-100 transition-all duration-300 ease-in-out lg:mt-2 px-4 lg:px-0 py-2 md:pl-4 lg:pl-0">
          {toolTip && (
            <p className="w-80 absolute bottom-9 md:bottom-12 lg:bottom-16 -ml-4 text-[.6rem] text-lightMode-400 block text-left hover:transition-all hover:ease-in-out hover:duration-300 tooltip">
              Dark Mode
            </p>
          )}
          <FontAwesomeIcon icon={faMoon} className="text-2xl md:text-lg" />
        </div>
      )}
    </div>
  );
};

export default Toggle;
