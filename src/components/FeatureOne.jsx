import React from 'react';
import MaintainGDPRImg from '../assets/maintain_gdpr_img.png';

const FeatureOne = () => {
  return (
    <div className="py-[100px] text-center flex flex-col-reverse lg:flex-row items-center lg:text-left justify-center lg:justify-between gap-[50px] xl:gap-[100px]">
      <div className="basis-[50%]">
        <img className="w-full h-auto" src={MaintainGDPRImg} />
      </div>
      <div className="basis-[50%] space-y-4">
        <h6 className="text-primary-color font-semibold">
          USER PII DATA DELETION
        </h6>
        <h5 className="text-2xl xl:text-4xl font-bold text-primary-text-color">
          Maintain GDPR compliance
        </h5>
        <p className="text-primary-text-color leading-7">
          Stay compliant with privacy rules and regulations at scale with
          self-service data deletion, which allows admins to immediately erase
          user data as needed.
        </p>
      </div>
    </div>
  );
};

export default FeatureOne;
