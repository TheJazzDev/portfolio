import React from 'react';
import Developer from '../../assets/images/developer.png';
import {LazyLoadImage} from 'react-lazy-load-image-component';

const Image = () => {
  return (
    <div className="absolute opacity-5">
      <LazyLoadImage
        className="w-full h-full lg:h-screen"
        src={Developer}
        alt="Developer"
      />
    </div>
  );
};

export default Image;
