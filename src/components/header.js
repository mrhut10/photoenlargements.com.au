import { FiSearch } from 'react-icons/fi';
import { Link } from 'gatsby';
import { MdShoppingCart } from 'react-icons/md';
import React from 'react';

const Header = () => {
  return (
    <header className="text-white w-screen">
      <div className="flex font-display items-center justify-between mx-auto max-w-6xl px-4 py-2">
        <nav className="flex items-baseline">
          <Link
            to="/"
            className="border-2 border-white px-2 py-1 text-2xl tracking-tighter"
          >
            <span>Photo</span>
            <span className="font-bold">Enlargements</span>
            <span className="text-sm">.com.au</span>
          </Link>
          <ul className="flex mx-2 text-sm tracking-wider uppercase">
            {[
              { title: 'Home', route: '/' },
              { title: 'Services', route: '/services' },
              { title: 'Shop', route: '/shop' },
              { title: 'Price Chart', route: '/price-chart' },
              { title: 'Gallery', route: '/gallery' },
              { title: 'Contact Us', route: '/contact-us' },
            ].map(navigationItem => (
              <li key={navigationItem.title}>
                <Link to={navigationItem.route}>{navigationItem.title}</Link>
              </li>
            ))}
          </ul>
        </nav>
        <nav className="flex -mx-2">
          <Link to="/search" className="px-2">
            <FiSearch />
          </Link>
          <Link to="/cart" className="px-2">
            <MdShoppingCart />
          </Link>
        </nav>
      </div>
    </header>
  );
};

export default Header;
