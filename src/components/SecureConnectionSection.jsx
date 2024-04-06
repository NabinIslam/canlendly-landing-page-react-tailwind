import React from 'react';
import OutlineButton from '../ui/OutlineButton';

const SecureConnectionSection = () => {
  return (
    <section className="bg-[#092640] py-[80px]">
      <div className="container">
        <div className="max-w-xl mx-auto flex flex-col items-center gap-6">
          <h2 className="text-white font-bold text-3xl text-center">
            Secure connections, empowered teams
          </h2>
          <p className="text-center text-[#ddd]">
            Calendly enables teams across the organization to do their jobs more
            efficiently, create better customer connections, and get more value
            from the tools they already rely on.
          </p>
          <button className="bg-transparent px-8 py-4 rounded-full text-sm text-white font-semibold border-[2px] border-white duration-150 hover:border-[#000] hover:bg-[#000]">
            Talk with Sales
          </button>
        </div>
      </div>
    </section>
  );
};

export default SecureConnectionSection;
