import React from 'react';

const PercentageCard = ({ data }) => {
  const { percentageNumber, description } = data;

  return (
    <div className="text-center lg:text-left lg:basis-[33%] py-[50px] lg:px-[60px] lg:py-[50px]">
      <h2 className="text-5xl xl:text-6xl font-bold text-primary-text-color mb-4">
        {percentageNumber}%
      </h2>
      <span className="max-w-[200px]">
        <p className="text-lg">{description}</p>
      </span>
    </div>
  );
};

export default PercentageCard;
