import React from 'react'
import myResume from '../../assets/files/Taiwo Adewale Babarinde.pdf'

export const Resume = () => {
  return (
    <div className='w-screen h-screen'>
      <iframe src={myResume} title="TaiwoResume" height="100%" width="100%" />
    </div>
  )
}
