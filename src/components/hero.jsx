import Image from 'next/image';
import React from 'react';
import Form from './home/Form';

const Hero = ({ address, phone, email }) => {
  const showMoreBtn = () => {
    document
      .getElementById('about-container')
      .scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="flex flex-col w-full h-screen bg-[radial-gradient(ellipse_200%_100%_at_bottom_left,#183EC2,#EAEEFE_100%)]">
      <div className="w-full h-screen relative">
        <div className="relative h-screen text-center flex flex-col items-center">
          <h1 className="font-[500] text-7xl text-center mt-36 tracking-tighter bg-gradient-to-b from-black to-[#001E80] text-transparent bg-clip-text capitalize mb-10">
            Joyborda <br />joy bor!
          </h1>
          <Form />
        </div>
      </div>
    </section>
  );
};

export default Hero;