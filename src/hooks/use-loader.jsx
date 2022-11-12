import React, {useState, useEffect} from 'react';
import MotionLogo from '../components/UI/MotionLogo';
import {useLayoutEffect, useRef} from 'react';
import gsap from 'gsap';

const useLoader = () => {
  const [loading, setLoading] = useState(true);
  const loaderRef = useRef();

  useLayoutEffect(() => {
    let ctx = gsap.context(() => {
      gsap
        .timeline({
          defaults: {opacity: 0},
        })
        .from('#loader', {ease: 'linear', duration: 0.5, autoAlpha: 0})
        .from('.working', {x: 100, ease: 'back(3)', duration: 1});
    }, loaderRef);

    return () => ctx.revert();
  }, []);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 1500);
  }, [loading]);

  const loader = (
    <div ref={loaderRef}>
      <div
        id="loader"
        className="invisible flex flex-col gap-6 items-center justify-center w-screen h-screen bg-lightBackground dark:bg-darkBackground absolute top-0 bottom-0 left-0 right-0 z-50">
        <MotionLogo />
        <span className="working text-lightMode-100 text-[.6rem]">
          Taiwo Jazz is working...
        </span>
      </div>
    </div>
  );

  return {
    loading,
    loader,
  };
};

export default useLoader;
