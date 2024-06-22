import { useRef, useState } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import Summary3D from './Summary3D';
import SummaryTypewriter from './SummaryTypewriter';
import useAnimatedLetters from '../../hooks/use-animatedletters';
import Paragraph from './Paragraph';
import Button from './Button';
import Image from './Image';

const Home = () => {
  const [animate, setAnimate] = useState();
  const homepage = useRef();

  useGSAP(
    () => {
      gsap
        .timeline({ defaults: { opacity: 0, ease: 'back(3)', duration: 1 } })
        .from('#home', { ease: 'linear', autoAlpha: 0 })
        .from('.intro', { x: 100 })
        .from('.text p', { y: 100 }, '-=0.8')
        .from('.resume', { y: 100 }, '-=0.8');
        
      setAnimate(
        gsap.to('#bg', {
          duration: 0.7,
          opacity: 1,
          ease: 'power1.inOut',
          rotation: 225,
          paused: true,
        })
      );
    },
    { scope: homepage }
  );

  const { letters: Name } = useAnimatedLetters({
    strArray: 'Taiwo Babarinde'.split(''),
    index: 1,
  });

  return (
    <section ref={homepage}>
      <div
        id="home"
        className="invisible h-screen lg:ml-16 mx-auto px-8 pt-24 lg:pt-0 flex flex-col-reverse lg:flex-row items-center justify-center gap-20 lg:gap-16 xl:gap-32 pb-12 md:pb-0">
        <div className="text-center lg:text-left z-50 h-1/2 flex flex-col items-center lg:items-start justify-start lg:justify-center">
          <div className="intro text-lightMode-100 text-[1rem]">
            Hi, my name is
          </div>
          <h1 className="text-lightMode-100 text-4xl lg:text-6xl font-bold my-6">
            {Name}
          </h1>
          <Summary3D />
          <SummaryTypewriter />
          <Paragraph className="text" />
          <Button className="resume" />
        </div>
        <Image id="bg" animate={animate} />
      </div>
    </section>
  );
};

export default Home;
