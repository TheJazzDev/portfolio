import React from 'react';
import {Link} from 'react-router-dom';
import ErrorImage from '../../assets/images/error-page.png';
import Arrow from '../../assets/images/left-arrow.svg';
import {LazyLoadImage} from 'react-lazy-load-image-component';

const Error = () => {
  return (
    <div className="text-center lg:text-left flex flex-col lg:flex-row items-center justify-center bg-lightBackground dark:bg-darkBackground text-lightMode-paragraph dark:text-darkMode-paragraph h-screen px-8">
      <LazyLoadImage
        className="w-fit sm:h-2/5 lg:h-1/2"
        src={ErrorImage}
        alt="Error Page"
      />
      <div className="flex flex-col items-center lg:items-start justify-center gap-6">
        <h1 className="text-7xl font-semibold ">Oops!</h1>
        <h2 className="text-3xl font-semibold ">Page Not Found</h2>
        <p className="text-base max-w-md">
          The page you are looking for is not available.
        </p>
        <Link className="text-lightMode-100 hover:opacity-80" to="/">
          <img src={Arrow} alt="Back Arrow" className="inline w-10 mr-4" />
          Go Back Home
        </Link>
      </div>
    </div>
  );
};

export default Error;
