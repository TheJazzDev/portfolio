import React from 'react';
import Developer from '../../assets/images/developer.png';
import {LazyLoadImage} from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/opacity.css'

const Image = () => {
  return (
    <div className="absolute opacity-5">
      <LazyLoadImage
        className="w-full md:mt-40 lg:mt-0 lg:h-screen"
        src={Developer}
        alt="Developer"
        effect="opacity"
      />
    </div>
  );
};

export default Image;
