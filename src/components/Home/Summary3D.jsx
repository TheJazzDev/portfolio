import React, { useLayoutEffect, useRef } from 'react';
import gsap from 'gsap';

const Summary3D = () => {
  const summaryRef = useRef();

  useLayoutEffect(() => {
    let ctx;
    let animation = gsap.timeline({ repeat: -1 });
    let targets = document.querySelectorAll('.summaryText div');
    let numberOfTargets = targets.length;

    let duration = 0.8;
    let pause = 1.5;

    let stagger = duration + pause;
    let repeatDelay = stagger * (numberOfTargets - 1) + pause;

    ctx = gsap.context(() => {
      gsap.set('.summaryText', { autoAlpha: 1 });
      gsap.set(targets, { transformOrigin: '50% 50% -30' });
      animation
        .from(targets, {
          rotationX: -90,
          opacity: 0,
          duration: duration,
          stagger: {
            each: stagger,
            repeat: -1,
            repeatDelay: repeatDelay,
          },
        })
        .to(
          targets,
          {
            rotationX: 90,
            opacity: 0,
            duration: duration,
            stagger: {
              each: stagger,
              repeat: -1,
              repeatDelay: repeatDelay,
            },
          },
          stagger
        );
    }, summaryRef);

    return () => ctx.revert();
  }, []);

  return (
    <div className="h-12 lg:hidden" ref={summaryRef}>
      <div className="summaryText flex items-center justify-center lg:justify-start whitespace-nowrap invisible h-full [&>div]:text-2xl [&>div]:text-lightMode-paragraph [&>div]:dark:text-darkMode-heading [&>div]:font-semibold [&>div]:absolute">
        <div>Software Developer</div>
        <div>Interactive Animator</div>
        <div>Freelancer</div>
        <div>Crypto Enthusiast</div>
      </div>
    </div>
  );
};

export default Summary3D;
