import React from 'react';
import { BsCheckLg } from 'react-icons/bs';
import Image from 'next/image';

function Nfts() {
  return (
    <div>
      <h1 className="text-[12px] mb-8 lg:text-lg text-[#7F94B8] text-center">
        Our project is based on an existing challenges.
      </h1>
      <div className="flex flex-col lg:flex-row justify-center lg:space-x-20 items-center mb-3">
        <div className="lg:w-[50%] right relative  mb-16 lg:mb-6">
          <div className="relative w-80 lg:w-[500px] h-48 lg:h-80">
            <Image src={'/mages/nft-1.png'} alt="" fill />
          </div>
          <div className="absolute w-32 h-48 top-10 -left-5">
            <Image src={'/mages/nft-2.jpeg'} alt="" fill />
          </div>
          <div className="absolute w-24 h-24 -top-5 -left-6 animate-bounce-slow">
            <Image src={'/mages/nfc-c.png'} alt="" fill />
          </div>
          <div className="absolute w-24 h-24 -bottom-10 left-10 animate-spin-slow">
            <Image src={'/mages/nft-p.png'} alt="" fill />
          </div>
          <div className="absolute w-24 h-24 -bottom-10 right-0 animate-spin-slow">
            <Image src={'/mages/nft-t.png'} alt="" fill />
          </div>
        </div>
        <div className="left lg:w-[50%]">
          <>
            <div className="flex items-start space-x-4 mb-4">
              <BsCheckLg className="rounded-full p-3 text-[#7F94B8]  text-[50px]" />
              <h1 className="text-[#7F94B8]">
                Powered by DAP, NEX lets you easily invest with
                crypto-currencies & other digital.
              </h1>
            </div>
            <div className="flex items-start space-x-4 mb-4">
              <BsCheckLg className="rounded-full p-3 text-[#7F94B8] text-[40px]" />
              <h1 className="text-[#7F94B8]">
                User have full access to all our Investment Portfolio
              </h1>
            </div>
            <div className="flex items-start space-x-4 mb-4">
              <BsCheckLg className="rounded-full p-3 text-[#7F94B8] text-[60px]" />
              <h1 className="text-[#7F94B8]">
                Our funds is registered under the Investment Company Act and is
                subject to regular reporting and disclosure.
              </h1>
            </div>
            <div className="flex items-start space-x-4 mb-4">
              <BsCheckLg className="rounded-full p-3 text-[#7F94B8] text-[55px]" />
              <h1 className="text-[#7F94B8]">
                Early equity ownership is a great tool for wealth creation that
                exists in our society
              </h1>
            </div>
            <div className="flex items-start space-x-4 mb-4">
              <BsCheckLg className="rounded-full p-3 text-[#7F94B8] text-[95px]" />
              <h1 className="text-[#7F94B8]">
                The Financial capital industry exists to provide investors a
                passive investment opportunity into early equity and assest
                ownership of startups through fund-based strategies.
              </h1>
            </div>
            <div className="text-center lg:text-start">
              <button className="px-6 py-2 text-lg bg-other1 text-white rounded-3xl">
                INVEST NOW
              </button>
            </div>
          </>
        </div>
      </div>
    </div>
  );
}

export default Nfts;
