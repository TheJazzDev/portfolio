import React from 'react'
import Modal from '../../../components/UI/Modal'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faClose } from '@fortawesome/free-solid-svg-icons'
import { motion } from 'framer-motion'

const draw = {
  hidden: { pathLength: 0, opacity: 0 },
  visible: (i) => {
    const delay = 1 + i * 0.5
    return {
      pathLength: 1,
      opacity: 1,
      transition: {
        pathLength: { delay, type: 'spring', duration: 1.5, bounce: 0 },
        opacity: { delay, duration: 0.01 },
      },
    }
  },
}

const Sent = (props) => {
  return (
    <Modal handleClose={props.handleClose}>
      <motion.div className="flex flex-col items-center justify-center text-center">
        <button
          onClick={props.handleClose}
          className="text-3xl absolute top-2 right-5 z-50 flex bg-lightMode-100 dark:bg-darkMode-card text-lightMode-paragraph dark:text-darkMode-card-text px-3 rounded-full"
        >
          <FontAwesomeIcon
            icon={faClose}
            className="lg:w-4 lg:m-0 lg:p-0 py-1.5 lg:py-0"
          />
        </button>
        <motion.svg
          width="300"
          height="250"
          viewBox="0 -20 50 100"
          initial="hidden"
          animate="visible"
        >
          <motion.circle
            stroke="#0084FF"
            strokeWidth={3}
            fill="transparent"
            cx={26}
            cy={26}
            r={28}
            variants={draw}
          />

          <motion.path
            stroke="#0084FF"
            strokeWidth={3}
            strokeLinecap="round"
            variants={draw}
            fill="transparent"
            d="M14.1 27.2l7.1 7.2 16.7-16.8"
          />
        </motion.svg>

        <span className="text-[1rem] lg:text-[1.4rem] text-lightMode-paragraph dark:text-darkMode-card-text">
          Message Sent Successfully!
        </span>
      </motion.div>
    </Modal>
  )
}

export default Sent
