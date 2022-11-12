import React from 'react'
import { motion } from 'framer-motion'
import { projectList } from '../Helper/Projects'
import { slideInRight, slideInLeft } from '../../../components/UI/MotionFunction'

const Details = ({ id }) => {
  const {
    title,
    description,
    languages,
    liveDemo,
    github,
    liveDemoLink,
    githubLink,
  } = projectList.find((item) => item.id === id)

  return (
    <motion.div className="pt-[12rem] sm:pt-[19rem] md:pt-[23rem] max-w-[43.75rem] p-4 flex flex-col md:flex-row gap-1 md:gap-0 justify-between">
      <motion.div className="lg:w-1/2">
        <motion.h2 variants={slideInLeft(1)} className="text-[1.8rem] font-bold text-lightMode-100 dark:text-darkMode-card-text my-4">
          {title}
        </motion.h2>
        <motion.p variants={(slideInLeft(2))} className="tracking-tighter">{description}</motion.p>
      </motion.div>

      <motion.div
        
        className="flex flex-col items-start md:items-end justify-between gap-2 md:gap-0 mt-6"
      >
        <motion.div variants={slideInRight(1)} className="flex gap-8">
          <a
            href={githubLink}
            target="_blank"
            rel="noopener noreferrer"
            className="text-xl md:text-lg hover:text-lightMode-100 transition-all duration-300 ease-in-out"
          >
            {github}
          </a>
          <a
            href={liveDemoLink}
            target="_blank"
            rel="noopener noreferrer"
            className="text-xl md:text-lg hover:text-lightMode-100 transition-all duration-300 ease-in-out"
          >
            {liveDemo}
          </a>
        </motion.div>
        <motion.p variants={slideInRight(2)} className="text-[.8rem] ">{languages}</motion.p>
      </motion.div>
    </motion.div>
  )
}

export default Details
