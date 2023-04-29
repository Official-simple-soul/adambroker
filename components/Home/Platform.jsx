import React, { useState } from 'react';
import { HiOutlineLightBulb } from 'react-icons/hi';
import {
  MdOutlineAccountBalanceWallet,
  MdLogin,
  MdOutlineApproval,
  MdAccountBalanceWallet,
} from 'react-icons/md';
import Image from 'next/image';

function Platform() {
  const [active, setActive] = useState('FOR INVESTORS');
  return (
    <div className="">
      <div className="flex items-center justify-center mb-10 lg:mb-0">
        <h1
          className={`${
            active === 'FOR INVESTORS'
              ? 'text-other1 border-other1'
              : 'border-white text-white'
          } cursor-pointer lg:text-lg hover:text-other1 border hover:border-other1 rounded-md px-4 py-2`}
          onClick={(e) => setActive(e.currentTarget.innerText)}
        >
          FOR INVESTORS
        </h1>
        <div className="h-[2px] w-10 lg:w-48 bg-gray-700"></div>
        <h1
          className={`${
            active === 'FOR TRADERS'
              ? 'text-other1 border-other1'
              : 'border-white  text-white'
          } cursor-pointer md:text-lg hover:text-other1 border hover:border-other1 rounded-md px-4 py-2`}
          onClick={(e) => setActive(e.currentTarget.innerText)}
        >
          FOR TRADERS
        </h1>
      </div>
      <div className="flex flex-col-reverse lg:flex-row justify-center lg:space-x-20 items-center mb-3">
        <div className="left lg:w-[50%]">
          {active === 'FOR INVESTORS' ? (
            <>
              <h1 className="text-xl">A Open Platform for Investors</h1>
              <p className="text-lg my-3 text-[#7F94B8]">How to Invest</p>
              <div className="flex items-center space-x-4 mb-4">
                <HiOutlineLightBulb className="text-other1 opacity-40 text-[35px]" />
                <h1 className="text-[#7F94B8]">
                  Determine What is Suitable For You
                </h1>
              </div>
              <div className="flex items-center space-x-4 mb-4">
                <MdAccountBalanceWallet className="text-other1 opacity-40 text-[35px]" />
                <h1 className="text-[#7F94B8]">
                  Create Investor Account By Completing the Application Form
                </h1>
              </div>
              <div className="flex items-center space-x-4 mb-4">
                <MdOutlineApproval className="text-other1 opacity-40 text-[35px]" />
                <h1 className="text-[#7F94B8]">
                  Check Your Email If Your Application has been Approved or
                  Rejected
                </h1>
              </div>
              <div className="flex items-center space-x-4 mb-4">
                <MdLogin className="text-other1 opacity-40 text-[35px]" />
                <h1 className="text-[#7F94B8]">
                  Login To Your Account With Details Your Received And Make
                  Payment.
                </h1>
              </div>
            </>
          ) : active === 'FOR TRADERS' ? (
            <>
              <h1 className="text-xl">A Open Platform for Traders</h1>
              <p className="text-lg my-3 text-[#7F94B8]">Are we a good fit?</p>
              <div className="flex items-center space-x-4 mb-8">
                <HiOutlineLightBulb className="text-other1 opacity-40 text-[35px]" />
                <h1 className="text-[#7F94B8]">
                  Register to get an investment account?
                </h1>
              </div>
              <div className="flex items-center space-x-4 mb-8">
                <MdAccountBalanceWallet className="text-other1 opacity-40 text-[35px]" />
                <h1 className="text-[#7F94B8]">
                  Deposite funds in the account.
                </h1>
              </div>
              <div className="flex items-center space-x-4 mb-8">
                <MdOutlineApproval className="text-other1 opacity-40 text-[35px]" />
                <h1 className="text-[#7F94B8]">
                  Request trading credentials from the platform.
                </h1>
              </div>
              <div className="flex items-center space-x-4 mb-8">
                <MdLogin className="text-other1 opacity-40 text-[35px]" />
                <h1 className="text-[#7F94B8]">Sign a smart-contract</h1>
              </div>
            </>
          ) : null}
        </div>
        <div className="lg:w-[50%] right relative flex justify-center items-center mb-6">
          <div className="w-80 h-80 lg:w-[30rem] lg:h-[30rem] flex justify-center items-center  bg-transparent border-4 border-t-other1 border-l-gray-700 border-r-other1 border-b-other1 rounded-full animate-spin-slow">
            <div className="w-64 h-64 lg:w-[25rem] lg:h-[25rem] bg-transparent border-4 border-t-other1 border-r-other1 border-b-other1 border-l-gray-700 rounded-full animate-spin-slow"></div>
          </div>
          <div className="absolute w-[86%] lg:w-[65%] h-[60%] lg:h-[50%]">
            <Image src={'/mages/platform-wide.png'} alt="" fill />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Platform;
