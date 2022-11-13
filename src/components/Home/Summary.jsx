import React, {useLayoutEffect, useRef} from 'react';
import gsap from 'gsap';

const Summary = () => {
  const summaryRef = useRef();

  useLayoutEffect(() => {
    let ctx;
    let animation = gsap.timeline({repeat: -1});
    let stagger = 2;

    ctx = gsap.context(() => {
      gsap.set('.summaryText', {autoAlpha: 1});
      gsap.set('.summaryText div', {transformOrigin: '50% 50% -40'});
      animation
        .from('.summaryText div', {
          rotationX: -90,
          rotationY: -60,
          opacity: 0,
          stagger: stagger,
        })
        .to(
          '.summaryText div',
          {
            rotationX: 90,
            rotationY: 45,
            opacity: 0,
            duration: 1.5,
            stagger: stagger,
          },
          stagger
        );
    }, summaryRef);

    return () => ctx.revert();
  }, []);

  return (
    <div className="h-12 lg:hidden" ref={summaryRef}>
      <div className="summaryText flex items-center justify-center lg:justify-start whitespace-nowrap invisible h-full [&>div]:text-2xl [&>div]:text-lightMode-paragraph [&>div]:dark:text-darkMode-heading [&>div]:font-semibold [&>div]:absolute">
        <div>Web Developer</div>
        <div>Crypto Enthusiast</div>
        <div>Interactive Animator</div>
        <div>Freelancer</div>
      </div>
    </div>
  );
};

export default Summary;
