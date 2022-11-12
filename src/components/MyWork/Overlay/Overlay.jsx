import React from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import OverlayContent from './OverlayContent'

const Overlay = ({ id }) => {
  return (
    <>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0, transition: { duration: 0.15 } }}
        transition={{ duration: 0.2, delay: 0.15 }}
        style={{ pointerEvents: 'auto' }}
        className="fixed top-0 bottom-0 right-0 left-0 z-20 bg-lightBackdrop dark:bg-darkBackdrop/80"
      >
        <Link to="/work" className="block fixed top-0 bottom-0 w-screen" />
      </motion.div>
      <OverlayContent id={id} />
    </>
  )
}

export default Overlay
