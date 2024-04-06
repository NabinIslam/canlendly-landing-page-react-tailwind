import React, { useState } from 'react';
import { GiHamburgerMenu } from 'react-icons/gi';
import { NavLink } from 'react-router-dom';
import Button from '../ui/Button';
import OutlineButton from '../ui/OutlineButton';

const Header = () => {
  const [open, setOpen] = useState(false);

  const mobileNavLinks = [
    { id: 1, name: `Individual`, path: `#` },
    { id: 2, name: `Teams`, path: `#` },
    { id: 3, name: `Enterprise`, path: `#` },
    { id: 4, name: `Product`, path: `#` },
    { id: 5, name: `Pricing`, path: `#` },
    { id: 6, name: `Resources`, path: `#` },
    { id: 7, name: `Login`, path: `#` },
  ];

  const desktopNavLinks = [
    { id: 1, name: `Individual`, path: `#` },
    { id: 2, name: `Teams`, path: `#` },
    { id: 3, name: `Enterprise`, path: `#` },
    { id: 4, name: `Product`, path: `#` },
    { id: 5, name: `Pricing`, path: `#` },
    { id: 6, name: `Resources`, path: `#` },
  ];

  return (
    <nav className="bg-white">
      <div className="container py-4 flex items-center justify-between">
        <div className="basis-1/2 lg:basis-[33%]">
          <img className="w-40 h-auto" src="/logo.png" alt="" />
        </div>

        <div className="lg:basis-[33%] hidden lg:flex lg:items-center gap-4 text-sm font-semibold">
          {desktopNavLinks.map(navLink => (
            <NavLink className="" key={navLink.id}>
              {navLink.name}
            </NavLink>
          ))}
        </div>

        <div className="lg:basis-[33%] hidden lg:flex items-center justify-end lg:gap-1 ">
          <OutlineButton>Login</OutlineButton>
          <Button>Get Started</Button>
        </div>

        <div className="basis-1/2 lg:hidden">
          <button
            className="text-2xl float-right hover:text-primary-hover-color duration-150 cursor-pointer"
            onClick={() => setOpen(!open)}
          >
            <GiHamburgerMenu />
          </button>
        </div>
      </div>
      {/* mobile navlinks */}
      <div
        className={`flex flex-col items-center gap-3 py-5 border-[#ddd] border-t-[1px] ${
          open ? '' : 'hidden'
        }`}
      >
        {mobileNavLinks.map(navLink => (
          <NavLink className="font-semibold" key={navLink.id}>
            {navLink.name}
          </NavLink>
        ))}
        <Button>Get Started</Button>
      </div>
    </nav>
  );
};

export default Header;
