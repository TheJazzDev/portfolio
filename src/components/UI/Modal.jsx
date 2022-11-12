import React, { Fragment } from 'react'
import ReactDOM from 'react-dom'

const Backdrop = (props) => {
  return (
    <div
      onClick={props.handleClose}
      className="w-screen h-screen fixed top-0 bottom-0 right-0 left-0 bg-lightBackdrop dark:bg-darkBackdrop/80 z-30"
    ></div>
  )
}

const ModalOverlay = (props) => {
  return (
    <div className="absolute w-screen h-screen flex items-center justify-center">
      <div
        onClick={props.handleClose}
        className="relative flex items-center justify-center h-96  rounded-2xl px-8 sm:px-24 lg:px-40 z-40 pointer-events-none bg-lightMode-card dark:bg-darkMode-card"
      >
        {props.children}
      </div>
    </div>
  )
}

const portalElement = document.getElementById('overlay')

const Modal = (props) => {
  return (
    <Fragment>
      {ReactDOM.createPortal(
        <Backdrop handleClose={props.handleClose} />,
        portalElement
      )}
      {ReactDOM.createPortal(
        <ModalOverlay>{props.children}</ModalOverlay>,
        portalElement
      )}
    </Fragment>
  )
}

export default Modal
