import React, {useRef, useLayoutEffect} from 'react';
import gsap from 'gsap';
import useTitle from '../../hooks/use-title';
import useLoader from '../../hooks/use-loader';
import useAnimatedLetters from '../../hooks/use-animatedletters';
import Text from './Text';
import Cube from './Cube/Cube';

const Skills = () => {
  useTitle('Skills - Taiwo Jazz')

  const experience = useRef();
  const {loading, loader} = useLoader();

  useLayoutEffect(() => {
    let ctx;

    if (!loading) {
      ctx = gsap.context(() => {
        gsap
          .timeline({
            defaults: {opacity: 0, ease: 'back(3)', duration: 1},
          })
          .from('#skill', {ease: 'linear', autoAlpha: 0})
          .from('.content > p', {x: -100, stagger: 0.3})
          .from(
            '#cube',
            {x: 400, rotate: 180, scale: 3, duration: 3, ease: 'bounce'},
            '<'
          );
      }, experience);
    }

    return () => ctx && ctx.revert();
  }, [loading]);

  let string = 'Skills & Experience';

  const {letters: Heading} = useAnimatedLetters({
    strArray: string.split(''),
    index: 1,
  });

  return loading ? (
    loader
  ) : (
    <section ref={experience}>
      <div
        id="skill"
        className="invisible px-6 lg:ml-16 flex flex-col lg:flex-row items-center justify-center gap-28 xl:gap-44 h-full lg:h-screen pt-32 lg:pt-0 pb-24 lg:pb-0 z-30">
        <div className="z-30">
          <h2 className="text-lightMode-100 text-3xl font-bold w-fi mb-6">
            {Heading}
          </h2>
          <Text className="content" />
        </div>
        <Cube id="cube" />
      </div>
    </section>
  );
};

export default Skills;
