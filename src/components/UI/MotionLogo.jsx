import React from 'react';
import {motion} from 'framer-motion';

const draw = {
  hidden: {pathLength: 0, opacity: 0},
  visible: (i) => {
    const delay = 1 + i * 0.5;
    return {
      pathLength: 1,
      opacity: 1,
      transition: {
        pathLength: {delay, type: 'spring', duration: 1.2, bounce: 0},
        opacity: {delay, duration: 0.01},
      },
    };
  },
};

const MotionLogo = () => {
  return (
    <motion.svg
      width="169"
      height="169"
      viewBox="0 0 169 169"
      fill="none"
      initial="hidden"
      animate="visible"
      className="w-16 h-16 lg:w-24">
      <motion.path
        d="M2.5 43.2855L43.2855 2.5H84.5H125.714L166.5 43.2855V84.5V125.714L125.714 166.5H84.5H43.2855L2.5 125.714V84.5V43.2855Z"
        stroke="#0084FF"
        variants={draw}
        strokeWidth={12}
      />
      <motion.path
        d="M79.768 35.64H68.248C57.5813 35.64 52.248 40.5467 52.248 50.36H49.688V40.76C49.688 33.9333 53.3147 30.52 60.568 30.52H120.088V35.64H91.288V115H79.768V35.64Z"
        fill="#0084FF"
        initial={{opacity: 0}}
        animate={{
          opacity: 1,
          transition: {delay: 0.1, type: 'spring', duration: 1.5},
        }}
      />

      <motion.path
        d="M95.848 141.976C99.944 141.976 102.973 139.8 104.936 135.448C106.984 131.096 108.008 124.952 108.008 117.016V42.52H119.528V117.016C119.528 123.672 118.803 128.963 117.352 132.888C115.987 136.899 113.597 139.843 110.184 141.72C106.771 143.597 101.992 144.536 95.848 144.536V141.976Z"
        fill="#0084FF"
        initial={{opacity: 0}}
        animate={{
          opacity: 1,
          transition: {delay: 0.6, type: 'spring', duration: 1.5},
        }}
      />
    </motion.svg>
  );
};

export default MotionLogo;
