import React from 'react';

const Button = ({ children }) => {
  return (
    <button className="bg-primary-color hover:bg-primary-hover-color px-7 py-3 rounded-full text-sm text-white font-semibold border-[2px] border-primary-color duration-150">
      {children}
    </button>
  );
};

export default Button;
