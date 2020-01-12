import React from 'react';
import { IoIosMenu } from 'react-icons/io';
import PropTypes from 'prop-types';
import { Link } from 'gatsby';

import navLinks from '../data/nav-links';

const MobileNavMenu = ({ isNavOpen, setIsNavOpen }) => {
  return (
    <nav
      className="fixed inset-y-0 left-0 z-10 w-64 text-white bg-black transition-transform duration-100 ease-in"
      style={
        isNavOpen
          ? { transform: `translateX(0)` }
          : { transform: `translateX(-100%)` }
      }
    >
      <div className="relative0">
        <button
          type="button"
          onClick={() => setIsNavOpen(!isNavOpen)}
          style={{ transform: `translateX(100%)` }}
          className="absolute top-0 right-0 flex items-center h-10 px-2 bg-black transition-colors duration-200 ease-in hover:text-transparent-white"
        >
          <IoIosMenu className="text-3xl" />
          <span className="ml-1 text-xs tracking-wide uppercase">Menu</span>
        </button>
        <Link
          to="/"
          className="inline-block px-6 py-4 text-2xl tracking-tighter font-display"
        >
          <span>Photo</span>
          <span className="font-bold">Enlargements</span>
          <span className="text-lg">.com.au</span>
        </Link>
        <ul>
          {navLinks.map(navigationItem => (
            <li
              key={navigationItem.title}
              className="border-t border-gray-800 last:border-b"
            >
              <Link
                to={navigationItem.route}
                onClick={() => setIsNavOpen(false)}
                activeClassName="bg-gray-900"
                className="block w-full px-6 py-3 text-sm uppercase whitespace-no-wrap transition-colors duration-200 ease-in hover:bg-gray-900"
              >
                {navigationItem.title}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};

MobileNavMenu.propTypes = {
  isNavOpen: PropTypes.bool,
  setIsNavOpen: PropTypes.func,
};

export default MobileNavMenu;
