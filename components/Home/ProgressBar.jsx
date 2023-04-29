import React from 'react';
import { BsFillPlayFill } from 'react-icons/bs';
import {
  FaRegLightbulb,
  FaTwitter,
  FaMediumM,
  FaFacebookF,
  FaYoutube,
  FaBitcoin,
  FaGithub,
} from 'react-icons/fa';

function ProgressBar() {
  return (
    <div className="py-12">
      <div className="flex flex-col md:flex-row lg:justify-between justify-center items-center text-center space-y-8 md:space-y-0">
        <div className="left relative lg:w-1/2 pb-20 lg:pb-0">
          <div className="flex items-center justify-between pb-8">
            <div className="lg:flex items-center">
              <span className="text-text1 text-[12px]">PROFIT RAISED -</span>
              <span className="text-white">145,250,000</span>
            </div>
            <div className="lg:flex items-center">
              <span className="text-text1 text-[13px] ">TARGET - </span>
              <span className="text-white">900,000,000 Shares</span>
            </div>
          </div>
          <div className="w-full h-2 bg-gray-700 mt-6 flex items-center relative">
            <div className="w-[40%] h-2 bg-other1"></div>
            <div className="w-6 h-6 rounded-full border-2 bg-other1 border-white"></div>
            <div className="absolute h-16 w-1 bg-text2 left-[35%] lg:-top-4"></div>
            <div className="absolute h-16 w-1 bg-text2 left-[55%] lg:-top-4"></div>
            <div className="absolute h-16 w-1 bg-text2 left-[85%] lg:-top-4"></div>
            <p className="text-[12px] absolute left-[30%] text-text2 top-10 lg:top-14">
              SOFT CAP
            </p>
            <p className="text-[12px] absolute left-[49%] text-text2 top-10 lg:top-14">
              CROWDSALE
            </p>
            <p className="text-[12px] absolute left-[78%] text-text2 top-10 lg:top-14">
              ANT MINERS
            </p>
          </div>
        </div>
        <div className="middle">
          <p className="text-[12px] text-text1">CURRENT BONUS</p>
          <p className="text-3xl text-text1 my-4">2%</p>
          <p className="text-[12px] text-text1">Contributions can receive</p>
        </div>
        <div className="right">
          <p className="text-[12px] text-text1">THE BONUS ENDS IN</p>
        </div>
      </div>
      <div className="flex flex-col md:flex-row justify-center md:justify-between items-center py-20 space-y-6 lg:space-y-0 lg:mt-10">
        <div className="flex flex-col md:flex-row justify-center  relative items-center space-y-4 lg:space-y-0 lg:space-x-6 text-text-1 text-[12px]">
          <span className="flex flex-col md:flex-row justify-center items-center ">
            <span></span>{' '}
            <BsFillPlayFill className="border text-[35px] mr-3 px-3 rounded-full mb-2 lg:mb-0" />
            How it Works
          </span>
          <span className="flex flex-col md:flex-row justify-center items-center ">
            <FaRegLightbulb className="border text-[35px] mr-3 px-3 rounded-full mb-2 lg:mb-0" />
            Why invest now?
          </span>
          <div className="absolute h-9 w-9 lg:-left-6 -top-4 lg:top-0 right-8 animate-ping rounded-full border"></div>
        </div>
        <div className="text-text1 socials flex space-x-5 items-center">
          <FaTwitter />
          <FaMediumM />
          <FaFacebookF />
          <FaYoutube />
          <FaBitcoin />
          <FaGithub />
        </div>
      </div>
    </div>
  );
}

export default ProgressBar;
