import {useLayoutEffect, useRef} from 'react';
import {useParams} from 'react-router-dom';
import useTitle from '../../hooks/use-title';
import useLoader from '../../hooks/use-loader';
import gsap from 'gsap';
import Overlay from './Overlay/Overlay';
import ListItems from './List/ListItems';
import {LayoutGroup, AnimatePresence} from 'framer-motion';
import AnimatedHeading from './Helper/AnimatedHeading';

const MyWork = () => {
  useTitle('MyWork - Taiwo Jazz')

  const skills = useRef();
  const {id} = useParams();
  const {loading, loader} = useLoader();

  useLayoutEffect(() => {
    let ctx;

    if (!loading) {
      ctx = gsap.context(() => {
        gsap
          .timeline({
            defaults: {opacity: 0, ease: 'back(3)', duration: 1},
          })
          .from('#work', {ease: 'linear', autoAlpha: 0})
          .from('.note', {y: 100}, '+=1');
      }, skills);
    }

    return () => ctx && ctx.revert();
  }, [loading]);

  return loading ? (
    loader
  ) : (
    <section ref={skills}>
      <div
        id="work"
        className="invisible max-w-[75rem] pt-24 lg:py-10 px-6 lg:px-0 m-auto flex flex-col justify-center h-full lg:h-screen">
        <LayoutGroup type="crossfade">
          <AnimatedHeading />
          <ListItems id={id} />
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
          <AnimatePresence>
            {id && <Overlay id={id} key="item" />}
          </AnimatePresence>
        </LayoutGroup>
      </div>
    </section>
  );
};

export default MyWork;
