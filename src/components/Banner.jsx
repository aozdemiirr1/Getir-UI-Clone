import React from 'react';

const Banner = () => {
  return (
    <div className='relative banner'>
      <img className='w-full' src="../public/getirbanner.jpg" alt="" />
      <div className="absolute top-52 left-36 flex flex-row justify-between items-center text-white">
        <div className="bannertext flex flex-col gap-y-10">
          <img className='w-44' src="https://getir.com/_next/static/images/bimutluluk-b3a7fcb14fc9a9c09b60d7dc9b1b8fd6.svg" alt="" />
          <p className='text-4xl'>Dakikalar içinde kapında</p>
        </div>
      </div>
    </div>
  );
}

export default Banner;
