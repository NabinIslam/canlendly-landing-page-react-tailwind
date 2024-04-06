import React from 'react';
import PercentageCard from './PercentageCard';

const PercentageSection = () => {
  const percentageData = [
    {
      id: 1,
      percentageNumber: 75,
      description: 'reduction in time to schedule customer success calls',
    },
    {
      id: 2,
      percentageNumber: 200,
      description: 'increase in connection between sales and customer leads',
    },
    {
      id: 3,
      percentageNumber: 200,
      description: 'more customers onboarded per month',
    },
  ];

  return (
    <section className="bg-[#F7FAFF]">
      <div className="container lg:py-[70px] flex flex-col lg:flex-row gap-10 lg:gap-0 divide-y-[1px] lg:divide-y-0 lg:divide-x-[1px] divide-[#ddd]">
        {percentageData.map(data => (
          <PercentageCard data={data} key={data.id} />
        ))}
      </div>
    </section>
  );
};

export default PercentageSection;
