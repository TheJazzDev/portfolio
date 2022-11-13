import React from 'react';
import Developer from '../../assets/images/developer.png';

const Image = () => {
  return (
    <div className="absolute opacity-5">
      <img
        className="w-full h-full lg:h-screen"
        src={Developer}
        alt="Developer"
      />
    </div>
  );
};

export default Image;
