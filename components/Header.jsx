import React, { useEffect, useState } from 'react';
import Nav from './Header/Nav';
import Image from 'next/image';

function Header() {
  const [showNav, setShowNav] = useState(false);

  const [headerBgColor, setHeaderBgColor] = useState('transparent'); // Initial background color of header

  useEffect(() => {
    // Function to handle scroll event
    const handleScroll = () => {
      // Get the scroll position from top of the page
      const scrollPosition =
        window.pageYOffset || document.documentElement.scrollTop;

      // Update header background color based on scroll position
      if (scrollPosition > 0) {
        setHeaderBgColor('#0A1227'); // Set header background color when scrolled
      } else {
        setHeaderBgColor('transparent'); // Set header background color to transparent when at top of the page
      }
    };

    // Add event listener for scroll event
    window.addEventListener('scroll', handleScroll);

    // Clean up the event listener on component unmount
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <header
      className={`py-3 lg:py-0 fixed w-full z-40 bg-priBG shadow-md`}
      // style={{ backgroundColor: headerBgColor }}
    >
      <div className=" lg:w-[90%] px-4 lg:px-0 mx-auto flex justify-between items-center">
        <div className="logo font-bold">
          {/* <Image src={'/logo.png'} alt={''} width={150} height={150} /> */}
          <span className='text-red-600 text-xl'>ADAM <span className='border-l px-1 text-white text-sm'>BROKER</span></span>
        </div>
        <Nav showNav={showNav} setShowNav={setShowNav} />
      </div>
    </header>
  );
}

export default Header;
