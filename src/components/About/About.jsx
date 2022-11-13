import React, {useRef, useLayoutEffect} from 'react';
import gsap from 'gsap';
import useLoader from '../../hooks/use-loader';
import useAnimatedLetters from '../../hooks/use-animatedletters';
import Bio from './Bio';
import Image from './Image';

const About = () => {
  const aboutMe = useRef();

  const {loading, loader} = useLoader();

  useLayoutEffect(() => {
    let ctx;

    if (!loading) {
      ctx = gsap.context(() => {
        gsap
          .timeline({
            defaults: {opacity: 0, ease: 'back(3)', duration: 1},
          })
          .from('#about', {ease: 'linear', autoAlpha: 0})
          .from('.content > p', {x: -100, stagger: 0.3});
      }, aboutMe);
    }

    return () => ctx && ctx.revert();
  }, [loading]);

  let string = 'About Me';

  const {letters: Heading} = useAnimatedLetters({
    strArray: string.split(''),
    index: 1,
  });

  return loading ? (
    loader
  ) : (
    <section ref={aboutMe}>
      <div
        id="about"
        className="invisible px-6 lg:ml-16 flex flex-col lg:flex-row items-center justify-center gap-24 h-full lg:h-screen mb-24 lg:mb-0">
        <div>
          <h2 className="text-lightMode-100 text-3xl font-bold w-fit mb-6 mt-32 lg:mt-0">
            {Heading}
          </h2>
          <Bio className="content" />
        </div>
        <Image />
      </div>
    </section>
  );
};

export default About;
