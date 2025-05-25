import React from 'react';

const Teksaja = () => {
  return (
    <div className='custom-container flex flex-col md:flex-row'>
      <div className='w-full text-left font-medium md:w-1/2'>
        <h2 className='text-display-sm md:text-display-2xl font-bold text-neutral-100'>
          Experience in Front-End Development
        </h2>
      </div>
      <div className='w-full text-left font-medium md:w-1/2 md:text-right'>
        <p className='text-sm-regular md:text-md-regular text-neutral-200'>
          I have experience developing 30+ web projects across various
          industries, including marketplaces, health, fashion, sports, and more.
          Implemented 1000+ responsive web pages with interactive features and
          smooth animations
        </p>
      </div>
    </div>
  );
};

export default Teksaja;
