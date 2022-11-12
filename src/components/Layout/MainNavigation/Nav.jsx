import React, {useState} from 'react';
import Mobile from './Mobile';
import Logo from './Logo';
import Menu from './Menu';
import Social from './Social';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faBars, faClose} from '@fortawesome/free-solid-svg-icons';

const Nav = () => {
  const [active, setActive] = useState(false);
  const [show, setShow] = useState(true);

  const toggleMenu = () => {
    show && setActive(true);
    setShow(prev => !prev);
  };


  return (
    <div className="flex flex-row lg:flex-col items-center justify-between w-screen h-16 lg:w-16 lg:h-full fixed z-40 border-b lg:border-b-0 lg:border-r border-lightMode-200 bg-lightBackground/80 dark:bg-darkBackground/80 backdrop-blur-md px-8 lg:px-0">
      <Logo />
      <Menu />
      <Social />
      {!active && (
        <FontAwesomeIcon
          icon={faBars}
          onClick={toggleMenu} 
          className="w-7 md:hidden text-6xl text-lightMode-100"
        />
      )}
      {active && (
        <FontAwesomeIcon
          icon={faClose}
          onClick={toggleMenu} 
          className="w-6 md:hidden text-6xl text-lightMode-100"
        />
      )}
      {active && (
        <Mobile showMenu={show} closeMenu={toggleMenu} setActive={setActive} />
      )}
    </div>
  );
};

export default Nav;
