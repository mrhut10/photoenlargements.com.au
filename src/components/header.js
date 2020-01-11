import { Link } from 'gatsby';
import { IoIosCart, IoIosSearch } from 'react-icons/io';
import React from 'react';

import navLinks from '../data/nav-links';

const Header = () => {
  return (
    <header className="w-screen text-white">
      <div className="flex items-center justify-between max-w-6xl px-4 py-2 mx-auto font-display">
        <nav className="flex items-baseline">
          <Link
            to="/"
            className="px-2 py-1 text-2xl tracking-tighter border-2 border-white"
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
          <Link to="/search" className="px-2">
            <IoIosSearch />
          </Link>
          <Link to="/cart" className="px-2">
            <IoIosCart />
          </Link>
        </nav>
      </div>
    </header>
  );
};

export default Header;
