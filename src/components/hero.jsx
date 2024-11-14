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
    <section className="flex flex-col w-full h-screen">
      <Image
        src={heroBg}
        alt="bg image"
        fill
        className="w-full h-screen bg-no-repeat rounded-b-4xl object-cover object-center"
      />
      <div className="w-full h-screen relative">
        <div className="relative h-screen text-center flex flex-col">
          <h1 className="font-normal text-7xl text-center mt-36 text-white capitalize">
            Joyborda -
            <br /> joy bor!
          </h1>
        </div>
      </div>
    </section>
  );
};

export default Hero;