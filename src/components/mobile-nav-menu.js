import React from 'react';
import { IoIosMenu } from 'react-icons/io';
import { animated, useTransition } from 'react-spring';
import PropTypes from 'prop-types';
import { Link } from 'gatsby';

import navLinks from '../data/nav-links';

const MobileNavMenu = ({ isNavOpen, setIsNavOpen }) => {
  const navTransitions = useTransition(isNavOpen, null, {
    from: { transform: 'translate3d(-100%, 0, 0)' },
    enter: { transform: 'translate3d(0, 0, 0)' },
    leave: { transform: 'translate3d(-100%, 0, 0)' },
    config: { mass: 0.5, tension: 100, friction: 5, clamp: true },
  });

  return (
    <>
      {navTransitions.map(
        ({ item, key, props }) =>
          item && (
            <animated.nav
              key={key}
              className="fixed inset-y-0 left-0 z-10 w-64 text-white bg-black transition-transform duration-100 ease-in"
              style={props}
            >
              <button
                type="button"
                onClick={() => setIsNavOpen(!isNavOpen)}
                className="absolute top-0 right-0 flex items-center h-10 px-2 bg-black translate-x-full transform"
              >
                <IoIosMenu className="text-3xl" />
                <span className="ml-1 text-xs tracking-wide uppercase">
                  Menu
                </span>
              </button>
              <div className="relative">
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
            </animated.nav>
          )
      )}
    </>
  );
};

MobileNavMenu.propTypes = {
  isNavOpen: PropTypes.bool,
  setIsNavOpen: PropTypes.func,
};

export default MobileNavMenu;
