import React from 'react';
import useAnimatedLetters from '../../hooks/use-animatedletters';

const Heading = ({id}) => {
  let string = 'Get In Touch';

  const {letters: Heading} = useAnimatedLetters({
    strArray: string.split(''),
    index: 1,
  });

  return (
    <div id={id} className="mt-32 md:mt-24 lg:mt-0">
      <h2 className="text-lightMode-100 text-3xl  font-bold mb-6">{Heading}</h2>
      <p className="text-lightMode-paragraph dark:text-darkMode-paragraph text-sm max-w-[35rem] mb-6">
        I am interested in both full-time and freelance opportunities - small
        and large scale projects.
      </p>
      <p className="text-lightMode-paragraph dark:text-darkMode-paragraph text-sm max-w-[35rem]">
        However, if you only have request or inquiry, please do not hesitate to
        contact me using any of the means provided. Thanks!
      </p>
    </div>
  );
};

export default Heading;
