import React from 'react';
import {Link} from 'react-router-dom';

const Button = ({className}) => {
  return (
    <div className={className}>
      <Link
        to="/my-resume"
        target="_blank"
        className="text-lightMode-100 text-[.8rem] dark:text-darkMode-100 border border-lightMode-100 p-4 w-fit hover:text-white dark:hover:text-white hover:bg-lightMode-100 transition-all ease-in-out duration-300 tracking-widest">
        View/Download my Resume
      </Link>
    </div>
  );
};

export default Button;
