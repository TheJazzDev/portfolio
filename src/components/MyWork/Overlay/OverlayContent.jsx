import React from 'react';
import { motion } from 'framer-motion';
import Details from './Details';
import Image from './Image';
import './OverlayContent.scss';

const OverlayContent = ({ id }) => {
  return (
    <motion.div
      initial={'offscreen'}
      whileInView={'onscreen'}
      viewport={{ once: true, amount: 0.5 }}
      transition={{ staggerChildren: 0.5 }}
      className="card-content-container open text-lightMode-paragraph dark:text-darkMode-card-text">
      <motion.div
        className="card-content bg-lightBackground dark:bg-darkMode-card"
        layoutId={`card-container-${id}`}>
        <Image id={id} />
        <Details id={id} />
      </motion.div>
    </motion.div>
  );
};

export default OverlayContent;
