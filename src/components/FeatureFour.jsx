import React from 'react';
import ManageUserImg from '../assets/manage_user_img.png';

const FeatureFour = () => {
  return (
    <div className="py-[100px] text-center flex flex-col lg:flex-row items-center lg:text-left justify-center lg:justify-between gap-[50px] xl:gap-[100px]">
      <div className="basis-[50%] space-y-4">
        <h6 className="text-primary-color font-semibold">SCIM PROVISIONING</h6>
        <h5 className="text-2xl xl:text-4xl font-bold text-primary-text-color">
          Manage user access at scale
        </h5>
        <p className="text-primary-text-color leading-7">
          Efficiently onboard and off-board employees with automatic
          provisioning and de-provisioning via SCIM with Okta, OneLogin, and
          Microsoft Azure.
        </p>
      </div>
      <div className="basis-[50%]">
        <img className="w-full h-auto" src={ManageUserImg} />
      </div>
    </div>
  );
};

export default FeatureFour;
