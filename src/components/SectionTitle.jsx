import React from 'react';

const SectionTitle = ({ shortTitle, mainTitle, description }) => {
  return (
    <div className="py-10">
      <h5 className="text-primary-color font-semibold text-center">
        {shortTitle}
      </h5>
      <h5 className="text-2xl xl:text-4xl font-bold text-primary-text-color text-center my-3">
        {mainTitle}
      </h5>
      <p className="text-center text-primary-text-color">{description}</p>
    </div>
  );
};

export default SectionTitle;
