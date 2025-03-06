import React from 'react';
import { NavLink } from 'react-router-dom';

const Text = ({ className }) => {
  return (
    <div className={className}>
      <p className="text-[1.1rem] text-lightMode-paragraph dark:text-darkMode-paragraph max-w-[45rem] mb-5">
        A Software Engineer currently working with technologies like{' '}
        <span className="text-lightMode-100">HTML</span>,{' '}
        <span className="text-lightMode-100">CSS3</span>,{' '}
        <span className="text-lightMode-100">JavaScript</span>,{' '}
        <span className="text-lightMode-100">TypeScript</span>,{' '}
        <span className="text-lightMode-100">jQuery</span>,{' '}
        <span className="text-lightMode-100">React</span>,{' '}
        <span className="text-lightMode-100">NextJS</span>,{' '}
        <span className="text-lightMode-100">Python</span>,{' '}
        <span className="text-lightMode-100">Django</span>,{' '}
        <span className="text-lightMode-100">Flask</span>,{' '}
        <span className="text-lightMode-100">TailWindCSS</span>,{' '}
        <span className="text-lightMode-100">Bootstrap</span>,{' '}
        <span className="text-lightMode-100">Sass</span>,{' '}
        <span className="text-lightMode-100">Git</span> and{' '}
        <span className="text-lightMode-100">GSAP</span>.
      </p>

      <p className="text-[1.1rem] text-lightMode-paragraph dark:text-darkMode-paragraph max-w-[45rem] mb-5">
        While I may not be a designer, I have a strong understanding of UI/UX
        design principles and pay close attention to design details. I take
        pride in building aesthetically pleasing, functional, and user-friendly
        applications, ensuring they are mobile-first, responsive, and optimized
        for performance.
      </p>

      <p className="text-[1.1rem] text-lightMode-paragraph dark:text-darkMode-paragraph max-w-[45rem] mb-5">
        I write clean, readable, and maintainable code that is easy to
        understand for both developers and machines. My goal is to create
        scalable solutions that enhance user experience while maintaining code
        efficiency.
      </p>

      <p className="text-[1.1rem] text-lightMode-100">
        {'{'}
        <span className="text-lightMode-paragraph dark:text-darkMode-paragraph">
          Convinced && readyToBuild{' '}
        </span>{' '}
        ?{' '}
        <NavLink
          to="/contact"
          className="cursor-pointer text-lightMode-400 dark:text-darkMode-card-text hover:text-lightMode-100 dark:hover:text-lightMode-100 transition-all ease-in-out duration-300">
          Contact me
        </NavLink>{' '}
        :{' '}
        <NavLink
          to="/work"
          className="cursor-pointer text-lightMode-400 dark:text-darkMode-card-text hover:text-lightMode-100 dark:hover:text-lightMode-100 transition-all ease-in-out duration-300">
          Check my work
        </NavLink>
        {'}'}
      </p>
    </div>
  );
};

export default Text;
