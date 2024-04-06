import React from 'react';
import RiskReduceImg from '../assets/reduce_risk_img.png';

const FeatureThree = () => {
  return (
    <div className="py-[100px] text-center flex flex-col-reverse lg:flex-row items-center lg:text-left justify-center lg:justify-between gap-[50px] xl:gap-[100px]">
      <div className="basis-[50%]">
        <img className="w-full h-auto" src={RiskReduceImg} />
      </div>
      <div className="basis-[50%] space-y-4">
        <h6 className="text-primary-color font-semibold">
          SINGLE SIGN-ON (SSO)
        </h6>
        <h5 className="text-2xl xl:text-4xl font-bold text-primary-text-color">
          Reduce risk with secure authentication
        </h5>
        <p className="text-primary-text-color leading-7">
          Deploy Calendly confidently with support for SAML-based SSO with
          leading identity providers Okta, Ping identity, Azure, OneLogin, and
          AuthO.
        </p>
      </div>
    </div>
  );
};

export default FeatureThree;
