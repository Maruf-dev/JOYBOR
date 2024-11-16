import Image from 'next/image';
import React from 'react';
import heroBg from '../assets/images/heroBackground.png';
import arrowIcon from '../assets/icons/arrow.png';
import phoneIcon from '../assets/icons/contact.png';
import mailIcon from '../assets/icons/mail.png';

const Hero = ({ address, phone, email }) => {
  const showMoreBtn = () => {
    document
      .getElementById('about-container')
      .scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="flex flex-col w-full h-screen bg-[radial-gradient(ellipse_200%_100%_at_bottom_left,#183EC2,#EAEEFE_100%)]">
      <div className="w-full h-screen relative">
        <div className="relative h-screen text-center flex flex-col">
          <h1 className="font-[500] text-7xl text-center mt-36 tracking-tighter bg-gradient-to-b from-black to-[#001E80] text-transparent bg-clip-text capitalize">
            Joyborda <br />joy bor!
          </h1>
        </div>
      </div>
    </section>
  );
};

export default Hero;