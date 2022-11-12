import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import {
  cardAnimate,
  slideInRight,
  slideInUp,
} from '../../../components/UI/MotionFunction';

const Card = ({ id, title, icon, status, index }) => {
  return (
    <motion.li
      initial={'offscreen'}
      whileInView={'onscreen'}
      viewport={{ once: true, amount: 0.1 }}
      transition={{ staggerChildren: 2 }}
      className="relative p-3 h-[17rem] flex-[0_0_100%] max-w-full md:flex-[0_0_50%] md:max-w-2/4 lg:flex-[0_0_33%]"
      variants={cardAnimate(index)}
    >
      <div className="w-full h-full relative block">
        <motion.div
          className="card-content text-center rounded-xl w-full h-full bg-lightMode-card dark:bg-darkMode-card shadow-xl"
          layoutId={`card-container-${id}`}
        >
          <motion.h2
            variants={slideInRight(1)}
            className="text-[1.4rem] font-bold mt-8 text-lightMode-300 dark:text-darkMode-card-text"
          >
            {title}
            <span className="text-[.7rem] ml-1 text-lightMode-100">
              {status}
            </span>
          </motion.h2>
          <motion.div
            variants={slideInUp(1, 1)}
            className="text-[4.5rem] lg:text-7xl mt-8 lg:mt-12 text-lightMode-300 dark:text-darkMode-paragraph"
          >
            {icon}
          </motion.div>
        </motion.div>
      </div>
      <Link to={id} className="absolute top-0 bottom-0 right-0 left-0" />
    </motion.li>
  );
};

export default Card;
