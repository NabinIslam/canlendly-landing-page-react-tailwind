import React from 'react';

const RightTextSection = ({ imgUrl, title, description }) => {
  return (
    <section className="bg-[#F8F8F8]">
      <div className="container py-[100px] text-center flex flex-col-reverse lg:flex-row items-center lg:text-left justify-center lg:justify-between gap-[50px] xl:gap-[100px]">
        <div className="basis-[50%]">
          <img className="w-full h-auto" src={imgUrl} />
        </div>
        <div className="basis-[50%] space-y-4">
          <h5 className="text-2xl xl:text-4xl font-bold text-primary-text-color">
            {title}
          </h5>
          <p className="text-primary-text-color leading-7">{description}</p>
        </div>
      </div>
    </section>
  );
};

export default RightTextSection;
