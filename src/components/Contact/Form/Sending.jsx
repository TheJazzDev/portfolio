import React from 'react';
import { ThreeDots } from 'react-loader-spinner';

const Sending = () => {
  return (
    <div className='flex items-center gap-4 text-lightMode-100'>
      Sending
      <ThreeDots
        height="60"
        width="60"
        radius="9"
        color="#0084ff"
        ariaLabel="three-dots-loading"
        wrapperStyle={{}}
        wrapperClassName=""
        visible={true}
      />
    </div>
  );
};

export default Sending;
