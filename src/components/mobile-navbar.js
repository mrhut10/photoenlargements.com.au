import React from 'react';
import { IoIosCart } from 'react-icons/io';
import { Link } from 'gatsby';

import MobileNavMenu from './mobile-nav-menu';

const MobileNavbar = () => {
  const [isNavOpen, setIsNavOpen] = React.useState(false);
  return (
    <div className="sticky top-0 z-10 flex items-center h-10 px-6 text-white bg-black md:hidden font-display">
      <Link
        to="/"
        className={`${
          isNavOpen ? 'text-transparent ' : ''
        }px-2 mx-auto text-lg tracking-tighter`}
      >
        <span>Photo</span>
        <span className="font-bold">Enlargements</span>
        <span className="text-xs">.com.au</span>
      </Link>
      <button
        type="button"
        aria-label="Toggle site navigation menu."
        aria-expanded={isNavOpen}
        aria-controls="nav-menu"
        onClick={() => setIsNavOpen(false)}
        className={`${
          isNavOpen ? 'fixed inset-0 bg-transparent-black' : 'hidden'
        }`}
      />
      <MobileNavMenu isNavOpen={isNavOpen} setIsNavOpen={setIsNavOpen} />
      <Link
        to="/cart"
        className="absolute inset-y-0 right-0 flex items-center px-2 transition-colors duration-200 ease-in hover:text-transparent-white"
      >
        <IoIosCart />
      </Link>
    </div>
  );
};

export default MobileNavbar;
