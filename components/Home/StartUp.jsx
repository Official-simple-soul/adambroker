import React from 'react';
import Image from 'next/image';
import { FaArrowDown } from 'react-icons/fa';

function StartUp() {
  return (
    <div className="pt-12 pb-32 text-white grid md:grid-cols-2 grid-cols-1 gap-10">
      <div className="left">
        <h1 className='text-4xl'>Startup Fund Investing For All</h1>
        <p className="text-text1 text-justify mt-4 mb-8">
          KRH Capitals is an investment company registered under the Investment
          Company Act of 1940, that seeks to maximize our portfolio’s long term
          total return by investing in early stage startup companies by seeking
          capital gains on our equity investment and ordinary income from debt
          investment. <br></br><br></br> The First Multi Affiliate Platform With Outstanding
          Earning Potentials. KRH Capitals Offers You Different Products In
          Combination With An Incredible Compensation Plan, Binary And Uni-Level
          Via Involving The European Traditional Industry. We Also Recently
          Included Lottery As Part Of The Billion Dollar Business
        </p>
        <div className="flex space-x-5 items-center">
          <button className='text-lg flex items-center px-6 py-3 bg-other1 rounded-3xl'>
            PROSPECTUS <FaArrowDown className='ml-3'/>
          </button>
          <h1 className="text-other1 text-lg">SEE THE ECOSYSTEMS</h1>
        </div>
      </div>
      <div className="right relative w-full h-80 md:h-96">
        <Image src={'/mages/gfx-e.png'} alt={'gfe'} fill/>
      </div>
    </div>
  );
}

export default StartUp;
