import React from 'react';
import { motion } from 'framer-motion';
import MotionLogo from './MotionLogo';
import { slideInRight } from './MotionFunction';

const FallbackLoader = () => {
  return (
    <motion.div
      initial={'offscreen'}
      whileInView={'onscreen'}
      viewport={{ once: true, amount: 0.5 }}
      transition={{ staggerChildren: 0.5 }}
      className="flex flex-col gap-6 items-center justify-center w-screen h-screen bg-lightBackground dark:bg-darkBackground absolute top-0 bottom-0 left-0 right-0 z-50"
    >
      <MotionLogo />
      <motion.span
        variants={slideInRight(0.5)}
        className="text-lightMode-100 text-[.6rem]"
      >
        Taiwo Jazz is working...
      </motion.span>
    </motion.div>
  );
};

export default FallbackLoader;
