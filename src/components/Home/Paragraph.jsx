import React from 'react';

const Paragraph = ({className}) => {
  return (
    <span className={className}>
      <p className="text-lightMode-paragraph dark:text-darkMode-paragraph text-sm mt-6 md:mt-10 mb-14 max-w-lg">
        Writing clean code and building pixel-perfect designs are my strong
        suit. Anything is possible for me.
      </p>
    </span>
  );
};

export default Paragraph;
