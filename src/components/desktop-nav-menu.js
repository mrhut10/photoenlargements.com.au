import React from 'react';
import { IoIosCart, IoIosSearch } from 'react-icons/io';
import { Link } from 'gatsby';
import PropTypes from 'prop-types';

import navLinks from '../data/nav-links';

const DesktopNavMenu = ({ home }) => {
  return (
    <header
      className={`${
        home ? 'absolute ' : 'bg-black sticky '
      }w-full text-white top-0 z-10`}
    >
      <div className="hidden px-10 py-4 md:block">
        <div className="flex items-center justify-between max-w-6xl mx-auto font-display">
          <nav className="flex items-baseline">
            <Link
              to="/"
              className="px-2 text-xl tracking-tighter border-2 border-white"
            >
              <span>Photo</span>
              <span className="font-bold">Enlargements</span>
              <span className="text-sm">.com.au</span>
            </Link>
            <ul className="flex mx-2 text-sm tracking-wider uppercase">
              {navLinks.map(navigationItem => (
                <li key={navigationItem.title}>
                  <Link
                    to={navigationItem.route}
                    activeClassName="text-transparent-white"
                    className="px-2 whitespace-no-wrap transition-colors duration-200 ease-in hover:text-transparent-white"
                  >
                    {navigationItem.title}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
          <nav className="flex -mx-2">
            <Link
              to="/search"
              className="px-2 transition-colors duration-200 ease-in hover:text-transparent-white"
            >
              <IoIosSearch />
            </Link>
            <Link
              to="/cart"
              className="px-2 transition-colors duration-200 ease-in hover:text-transparent-white"
            >
              <IoIosCart />
            </Link>
          </nav>
        </div>
      </div>
    </header>
  );
};

DesktopNavMenu.propTypes = {
  home: PropTypes.bool,
};

export default DesktopNavMenu;
