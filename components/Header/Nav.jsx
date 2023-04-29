import Link from 'next/link';
import React, { useState } from 'react';
import { FaAngleDown, FaTimes } from 'react-icons/fa';
import { HiOutlineMenuAlt1 } from 'react-icons/hi';

const navBar = [
  { name: 'Home', link: '/' },
  { name: 'About', link: '/about' },
  { name: 'Platform', link: '/platform' },
  { name: 'NFTs', link: '/nft' },
  { name: 'Shares', link: '/shares' },
  { name: 'Roadmap', link: '/roadmap' },
  { name: 'Contact', link: '/contact' },
];

function Nav({ showNav, setShowNav }) {
  const [showAuth, setShowAuth] = useState(false);
  return (
    <nav>
      <ul
        className={`absolute lg:static ${
          showNav ? 'left-0' : '-left-96'
        } top-0 py-8 lg:py-6 h-screen lg:h-auto w-64 lg:w-auto bg-navBG lg:bg-transparent lg:flex md:space-x-5 items-center transition-all ease-in-out duration-500`}
      >
        {navBar.map((e) => {
          const { name, link } = e;
          return (
            <li
              key={name}
              className="cursor-pointer hover:text-red-500 text-[14px] border-b lg:border-0 py-3 px-4 lg:py-0 lg:px-0 transition-all ease-in-out duration-500"
            >
              <Link href={link}>{name}</Link>
            </li>
          );
        })}
        <li className="cursor-pointer  text-[14px]  items-center px-4 lg:px-0 py-3 lg:py-0 transition-all ease-in-out duration-500">
          <div className='hover:text-red-500 flex space-x-2 items-center justify-between lg:justify-start'>
            <p>Login</p>
            <FaAngleDown onClick={() => setShowAuth(!showAuth)} />
          </div>
          <div
            className={` ${
              showAuth ? 'h-auto py-2 px-3 ' : 'h-0 px-3'
            } transition-all ease-in-out duration-500 overflow-hidden lg:absolute`}
          >
            <h1>Register/Login</h1>
          </div>
        </li>
      </ul>
      {showNav ? (
        <FaTimes
          className="text-4xl lg:hidden cursor-pointer"
          onClick={() => setShowNav(!showNav)}
        />
      ) : (
        <HiOutlineMenuAlt1
          className="text-4xl md:hidden cursor-pointer"
          onClick={() => setShowNav(!showNav)}
        />
      )}
    </nav>
  );
}

export default Nav;
