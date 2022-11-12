import React from 'react'
import './AnimatedLetters.scss'

const AnimatedLetters = ({ letterClass, strArray, index }) => {
  return (
    <span>
      {strArray.map((char, i) => (
        <span className={`${letterClass} _${i + index}`} key={char + i}>
          {char}
        </span>
      ))}
    </span>
  )
}

export default AnimatedLetters
