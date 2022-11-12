import React, {useRef, useLayoutEffect, useEffect} from 'react';
import gsap from 'gsap';
import {NavLink} from 'react-router-dom';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import ToggleTheme from './ToggleTheme';
import {
  faEnvelope,
  faHome,
  faUser,
  faGear,
  faFolderClosed,
} from '@fortawesome/free-solid-svg-icons';

const Mobile = ({showMenu, closeMenu, setActive}) => {
  const animate = useRef();
  const ctx = useRef();
  const tl = useRef();

  useLayoutEffect(() => {
    ctx.current = gsap.context(() => {
      tl.current = gsap
        .timeline({
          onReverseComplete() {
            setActive(false);
          },
        })
        .from('.navAnimate', {xPercent: 100, ease: 'back',duration:0.3})
        .from(
          '.icon',
          {
            duration: 0.3,
            opacity: 0,
            scale: 0,
            stagger: {amount: 0.2, from: 'start'},
            transformOrigin: '50% 50%',
          },
          '-=0.1'
        )
        .from('.toggle', {rotate: 90, scale: 0}, '<')
        .reverse()

    }, animate);

    return () => ctx.current.revert();
  }, [setActive]);

  useEffect(() => {
    tl.current.reversed(!tl.current.reversed());
  }, [showMenu]);


  return (
    <nav ref={animate} className="absolute top-16 left-0 right-0">
      <div className="navAnimate text-center flex items-center justify-around w-screen h-16 md:hidden bg-darkMode-400 dark:bg-lightMode-400">
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
            onClick={closeMenu}
            className="text-[1.4rem] flex items-center px-4 lg:px-0 lg:my-1 lg:block h-12 relative no-underline after:transition after:duration-300 after:ease-in after:scale-0 after:hover:scale-100 after:content-[''] after:text-xs after:tracking-normal after:absolute lg:after:top-2 after:left-0 after:block after:w-full after:text-center text-textLight after:text-lightMode-400 dark:after:text-lightMode-100 text-darkMode-paragraph after:hover:opacity-100 [&>*]:hover:opacity-0 after:hover:[&:nth-child(1)]:content-['HOME'] after:hover:[&:nth-child(2)]:content-['ABOUT'] after:hover:[&:nth-child(3)]:content-['SKILLS'] after:hover:[&:nth-child(4)]:content-['WORK'] after:hover:[&:nth-child(5)]:content-['CONTACT']"
            end>
            <FontAwesomeIcon icon={icon} className="icon text-2xl" />
          </NavLink>
        ))}
        <ToggleTheme className="toggle" onClick={closeMenu} />
      </div>

    </nav>
  );
};

export default Mobile;
