import React from 'react';
import SaveTimeImg from '../assets/save_time_img.png';

const FeatureTwo = () => {
  return (
    <div className="py-[100px] text-center flex flex-col lg:flex-row items-center lg:text-left justify-center lg:justify-between gap-[50px] xl:gap-[100px]">
      <div className="basis-[50%] space-y-4">
        <h6 className="text-primary-color font-semibold">USER GROUPS</h6>
        <h5 className="text-2xl xl:text-4xl font-bold text-primary-text-color">
          Save time with group admins
        </h5>
        <p className="text-primary-text-color leading-7">
          Delegate specific team members with group admin privileges to manage
          users, processes, and other account setting
        </p>
      </div>
      <div className="basis-[50%]">
        <img className="w-full h-auto" src={SaveTimeImg} />
      </div>
    </div>
  );
};

export default FeatureTwo;
