import React, {useState, useEffect} from 'react';
import {motion} from 'framer-motion';
import MotionLogo from '../components/UI/MotionLogo';
import {slideInRight} from '../components/UI/MotionFunction';

const useLoader = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 1500);
  }, [loading]);

  const loader = (
    <motion.div
      initial={'offscreen'}
      whileInView={'onscreen'}
      className=" flex flex-col gap-6 items-center justify-center w-screen h-screen bg-lightBackground dark:bg-darkBackground absolute top-0 bottom-0 left-0 right-0 z-50">
      <MotionLogo />
      <motion.span
        variants={slideInRight(0.001)}
        className="working text-lightMode-100 text-[.6rem]">
        Taiwo Jazz is working...
      </motion.span>
    </motion.div>
  );

  return {
    loading,
    loader,
  };
};

export default useLoader;
