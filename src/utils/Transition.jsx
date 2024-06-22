import { useRef } from 'react';
import { useLocation } from 'react-router-dom';
import { SwitchTransition, Transition } from 'react-transition-group';
import gsap from 'gsap';
import { useTransitionContext } from '../context/TransitionContext';

const TransitionComponent = ({ children }) => {
  const page = useRef();
  const location = useLocation();
  const { toggleCompleted } = useTransitionContext();

  return (
    <SwitchTransition>
      <Transition
        key={location.pathname}
        timeout={500}
        nodeRef={page}
        onEnter={() => {
          toggleCompleted(false);
          gsap.set(page.current, { autoAlpha: 0, scale: 0.8, xPercent: -100 });
          gsap
            .timeline({
              paused: true,
              onComplete: () => {
                gsap.set(page.current, { clearProps: 'all' });
                toggleCompleted(true);
              },
            })
            .to(page.current, { autoAlpha: 1, xPercent: 0, duration: 0.4 })
            .to(page.current, { scale: 1, duration: 0.4, ease: 'power1.in' })
            .play();
        }}
        onExit={() => {
          toggleCompleted(false);
          gsap
            .timeline({ paused: true })
            .to(page.current, { scale: 0.8, duration: 0.3 })
            .to(page.current, {
              xPercent: 100,
              autoAlpha: 0,
              duration: 0.3,
              ease: 'power1.out',
            })
            .play();
        }}>
        <div ref={page}>{children}</div>
      </Transition>
    </SwitchTransition>
  );
};

export default TransitionComponent;

// const onExitAnimation = [
//   [
//     { scale: 0.8, duration: 0.3 },
//     { xPercent: 100, autoAlpha: 0, duration: 0.5 },
//   ],
//   [
//     { x: 400, y: 600, duration: 0.3 },
//     { xPercent: 100, autoAlpha: 0, duration: 0.5 },
//   ],
//   [
//     { yPercent: 100, duration: 0.3 },
//     { xPercent: 100, autoAlpha: 0, duration: 0.5 },
//   ],
// ];

// const randomNum = () => Math.floor(Math.random() * 3);

// const exitTimeline = gsap.timeline({ paused: true });

// onExitAnimation[randomNum()].forEach((animation) => {
//   exitTimeline.to(page.current, animation);
// });

// exitTimeline.play();

// onEnter={() => {
//   toggleCompleted(false);
//   gsap.set(page.current, { autoAlpha: 0, scale: 0.8, xPercent: -100 });
//   gsap
//     .timeline({
//       paused: true,
//       onComplete: () => toggleCompleted(true),
//     })
//     .to(page.current, { autoAlpha: 1, xPercent: 0, duration: 0.25 })
//     .to(page.current, { scale: 1, duration: 0.25 })
//     .play();
// }}
// onExit={() => {
//   gsap
//     .timeline({ paused: true })
//     .to(page.current, { scale: 0.8, duration: 0.2 })
//     .to(page.current, { xPercent: 100, autoAlpha: 0, duration: 0.2 })
//     .play();
// }}
// >
