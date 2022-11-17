import React from 'react';
import useAnimatedLetters from '../../../hooks/use-animatedletters';

const AnimatedHeading = () => {
  let string = "Some Things I've Built";

  const { letters: Heading } = useAnimatedLetters({
    strArray: string.split('  '),
    index: 1,
  });

  return (
    <h1 className="text-lightMode-100 text-2xl md:text-3xl font-bold mt-8 pl-4 pb-2 lg:pb-4 lg:pl-20">
      {Heading}
    </h1>
  );
};

export default AnimatedHeading;
