import React from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faClose } from '@fortawesome/free-solid-svg-icons'
import { slideInDown } from '../../../components/UI/MotionFunction'

const Image = ({ id }) => {
  return (
    <>
      <Link
        to="/work"
        className="text-3xl absolute top-2 right-5 z-50 flex bg-lightMode-100 dark:bg-darkMode-card text-white px-3 rounded-full"
      >
        <FontAwesomeIcon
          icon={faClose}
          className="lg:w-4 lg:m-0 lg:p-0 py-1.5 lg:py-0"
        />
      </Link>

      <motion.div
        className="absolute left-0 right-0 overflow-hidden w-full h-52 sm:h-3/5 md:h-3/4"
        layoutId={`card-image-containe-${id}`}
        variants={slideInDown(1)}
      >
        <img className="dark:opacity-60" src={`/images/${id}.jpg`} alt="" />
      </motion.div>
    </>
  )
}

export default Image
