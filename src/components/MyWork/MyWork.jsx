import { useRef } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import Projects from './Projects';
import useAnimatedLetters from '../../hooks/use-animatedletters';

const MyWork = () => {
  const workContainer = useRef();

  useGSAP(
    () => {
      gsap
        .timeline({
          defaults: { opacity: 0, ease: 'back(3)', duration: 1 },
        })
        .from('#work', { ease: 'linear', autoAlpha: 0 })
        .from('.note', { x: 50 }, '+=1');
    },
    { scope: workContainer }
  );

  const { letters: Heading } = useAnimatedLetters({
    strArray: 'My Latest Projects'.split('  '),
    index: 1,
  });

  return (
    <section ref={workContainer}>
      <div id="work" className="invisible pt-24 lg:py-10 px-6 lg:px-40 flex flex-col justify-between h-screen">
        <h1 className="text-lightMode-100 text-2xl md:text-3xl font-bold mt-8 pl-4 pb-2 lg:pb-4">
          {Heading}
        </h1>
        <Projects />
        <div className="note text-center text-lightMode-paragraph dark:text-darkMode-card-text mb-16 lg:mb-0 mt-4 z-20">
          View this Portfolio Code on{' '}
          <a
            className="text-lightMode-100 cursor-pointer"
            href="https://github.com/TaiwoJazz/Portfolio"
            target="_blank"
            rel="noreferrer">
            Github
          </a>
        </div>
      </div>
    </section>
  );
};

export default MyWork;
