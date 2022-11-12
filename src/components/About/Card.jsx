import gsap from 'gsap';
import React, {useLayoutEffect, useRef} from 'react';

const Card = () => {
  const spinningCard = useRef();

  useLayoutEffect(() => {
    let ctx = gsap.context(() => {
      gsap.set('.box1', {transformPerspective: '200'});

      gsap
        .timeline()
        .to('.box1', {
          rotationY: 360,
          rotationX: 360,
          duration: 8,
          ease: 'none',
          repeat: -1,
          transformOrigin: '50% 50%, -300',
        })
        .to(
          '.box2',
          {
            rotationY: 360,
            rotationX: 360,
            duration: 15,
            ease: 'none',
            repeat: -1,
            transformOrigin: '50% 50%, -300',
          },
          '<'
        );
    }, spinningCard);

    return () => ctx.revert();
  }, []);

  return (
    <div
      className="w-1/3 flex items-center justify-center"
      style={{perspective: '400px'}}
      ref={spinningCard}>
      <div className="box1 w-[10rem] h-[10rem] lg:w-96 lg:h-96 rounded-2xl bg-lightMode-100 opacity-80"></div>
      <div className="box2 w-[10rem] h-[10rem] lg:w-96 lg:h-96 rounded-2xl bg-lightMode-100 opacity-80"></div>
    </div>
  );
};

export default Card;
