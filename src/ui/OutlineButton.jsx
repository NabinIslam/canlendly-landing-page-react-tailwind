import React from 'react';

const OutlineButton = ({ children }) => {
  return (
    <button
      className={`bg-transparent px-7 py-3 rounded-full text-sm text-primary-text-color font-semibold border-[2px] border-primary-text-color duration-150`}
    >
      {children}
    </button>
  );
};

export default OutlineButton;
