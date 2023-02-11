import React from 'react';
import { NavLink } from 'react-router-dom';

const Text = ({ className }) => {
  return (
    <div className={className}>
      <p className="text-[1.1rem] text-lightMode-paragraph dark:text-darkMode-paragraph max-w-[45rem] mb-5">
        A Front-end developer currently working with technologies like{' '}
        <span className="text-lightMode-100">HTML</span>,{' '}
        <span className="text-lightMode-100">CSS3</span>,{' '}
        <span className="text-lightMode-100">JavaScript</span>,{' '}
        <span className="text-lightMode-100">jQuery</span>,{' '}
        <span className="text-lightMode-100">React</span>,{' '}
        <span className="text-lightMode-100">NextJS</span>,{' '}
        <span className="text-lightMode-100">TailWindCSS</span>,{' '}
        <span className="text-lightMode-100">Bootstrap</span>,{' '}
        <span className="text-lightMode-100">Sass</span> and{' '}
        <span className="text-lightMode-100">Git</span>.
      </p>

      <p className="text-[1.1rem] text-lightMode-paragraph dark:text-darkMode-paragraph max-w-[45rem] mb-5">
        Although I'm not much of a designer, but I am aware of UI/UX design
        principles and rules, therefore I pay close attention to design elements
        and enjoy putting my heart and soul into what I produce.
      </p>

      <p className="text-[1.1rem] text-lightMode-paragraph dark:text-darkMode-paragraph max-w-[45rem] mb-5">
        I also spent a lot of time writing understandable code that can be read
        by both humans and computers. I optimize my code base for mobile devices
        first to ensure the best user experience and responsiveness.
      </p>

      <p className="text-[1.1rem] text-lightMode-100">
        {'{'}
        <span className="text-lightMode-paragraph dark:text-darkMode-paragraph">
          Convinced && letWork{' '}
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
