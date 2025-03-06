import React from 'react';

const Paragraph = ({ className }) => {
  return (
    <span className={className}>
      <p className="text-lightMode-paragraph dark:text-darkMode-paragraph text-sm mt-6 md:mt-10 mb-14 max-w-xl">
        Building pixel-perfect, high-performance web applications with clean,
        scalable code is my expertise. If you can design it, I can develop it.
      </p>
    </span>
  );
};

export default Paragraph;
