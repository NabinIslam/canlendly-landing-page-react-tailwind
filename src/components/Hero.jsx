import React from 'react';
import Button from '../ui/Button';
import HeroImg from '../assets/hero_img.png';

const Hero = () => {
  return (
    <section className="bg-[#092640] py-[70px] text-white">
      <div className="container px-4 flex flex-col lg:flex-row justify-between items-center gap-10 xl:gap-32">
        <div className="text-white text-center lg:text-left flex flex-col items-center lg:items-start gap-8 basis-[50%]">
          <h1 className="text-5xl xl:text-7xl font-bold leading-[50px]">
            Secure <br />
            connections, <br />
            empowered <br />
            teams
          </h1>
          <p className="text-md ">
            Bring your teams together in a centrally-managed ecosystem with
            complete oversight and visibility ldlfkdslk lkdjsf lkjds lkdsjlkf
            jlk
          </p>
          <Button>Contact sales</Button>
        </div>
        <div className="basis-[50%]">
          <img className="w-full h-auto " src={HeroImg} alt="" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
