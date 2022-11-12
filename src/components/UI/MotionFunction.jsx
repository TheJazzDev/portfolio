export const cardAnimate = (delay) => {
  return {
    offscreen: { x: +100, y: +100, opacity: 0 },
    onscreen: {
      x: 0,
      y: 0,
      opacity: 1,
      rotate: [0, 4, 0, -4, 0],
      transition: {
        type: 'spring',
        bounce: 0.2,
        duration: 0.5,
        delay: delay * 0.1,
      },
    },
  }
}

export const slideInRight = (delay) => {
  return {
    offscreen: { x: 100, opacity: 0 },
    onscreen: {
      x: 0,
      opacity: 1,
      transition: {
        type: 'spring',
        bounce: 0.4,
        duration: 2,
        delay: delay * 0.5,
      },
    },
  }
}

export const slideInLeft = (delay) => {
  return {
    offscreen: { x: -100, opacity: 0 },
    onscreen: {
      x: 0,
      opacity: 1,
      transition: {
        type: 'spring',
        bounce: 0.4,
        duration: 2,
        delay: delay * 0.5,
      },
    },
  }
}

export const slideInUp = (duration, delay) => {
  return {
    offscreen: { y: 100, opacity: 0 },
    onscreen: {
      y: 0,
      opacity: 1,
      transition: { type: 'spring', duration: duration, delay: delay * 0.5 },
    },
  }
}

export const slideInDown = (delay) => {
  return {
    offscreen: { y: -100, opacity: 0 },
    onscreen: {
      y: 0,
      opacity: 1,
      transition: { type: 'spring', duration: 3, delay: delay * 0.5 },
    },
  }
}
