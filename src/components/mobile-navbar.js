import React from 'react';
import { IoIosCart, IoIosMenu } from 'react-icons/io';
import { animated, useTransition } from 'react-spring';
import { Link } from 'gatsby';

import MobileNavMenu from './mobile-nav-menu';

const MobileNavbar = () => {
  const [isNavOpen, setIsNavOpen] = React.useState(false);

  const clickOutside = useTransition(isNavOpen, null, {
    from: { opacity: 0 },
    enter: { opacity: 1 },
    leave: { opacity: 0 },
  });

  return (
    <div className="sticky top-0 z-10 flex items-center h-10 px-6 text-white bg-black md:hidden font-display">
      <button
        type="button"
        onClick={() => setIsNavOpen(!isNavOpen)}
        className="absolute top-0 left-0 flex items-center h-10 px-2 bg-black"
      >
        <IoIosMenu className="text-3xl" />
        <span className="ml-1 text-xs tracking-wide uppercase">Menu</span>
      </button>
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
      {clickOutside.map(
        ({ item, key, props }) =>
          item && (
            <animated.button
              key={key}
              type="button"
              aria-label="Toggle site navigation menu."
              aria-expanded={isNavOpen}
              aria-controls="nav-menu"
              onClick={() => setIsNavOpen(false)}
              style={props}
              className="fixed inset-0 bg-transparent-black"
            />
          )
      )}
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
