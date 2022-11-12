import React, { useEffect, useState } from 'react'
import './AnimatedLetters.scss'

const useAnimatedLetters = ({ strArray, index }) => {
  const [letterClass, setLetterClass] = useState('text-animate')

  useEffect(() => {
    setTimeout(() => {
      setLetterClass('text-animate-hover')
    }, 4000)
  }, [])

  let letters = strArray.map((char, i) => (
    <span className={`${letterClass} _${i + index}`} key={char + i}>
      {char}
    </span>
  ))

  return {
    letters,
  }
}

export default useAnimatedLetters
