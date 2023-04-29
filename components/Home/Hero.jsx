import React from 'react';

function Hero() {
  return (
    <div className="h-[70vh] flex flex-col justify-center items-center pt-20 md:pt-10 pb-40 md:pb-0 space-y-12">
      <h1 className="text-2xl lg:text-4xl font-bold text-center md:text-left">A NEW TYPE OF FUND INVESTING</h1>
      <p className='px-1 text-[14px] font-robot my-5 md:w-[55%] text-center leading-loose text-text1'>
        The First Multi Affiliate Platform With OutStanding Eraning Potentials.
        KRH Capitals Offers You Different Products In Combination With An
        Incredible Compensation Plan, Binary And Uni-Level Via Involving The
        European Traditional Industry. We Also Recently Included Lottery As Part
        Of The Billion Dollar Business.
      </p>
    <div className="flex flex-col md:flex-row items-center md:space-x-5 space-y-4 md:space-y-0">
        <button className='px-8 py-4 rounded-[40px] bg-other1 text-[14px]'>CRYPTO TRADING</button>
        <button className='px-8 py-4 rounded-[40px] border border-other1 text-[14px]'>CRYPTO TRADING</button>
    </div>
    </div>
  );
}

export default Hero;
