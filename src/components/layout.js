import PropTypes from 'prop-types';
import React from 'react';

import Hero from './hero';
import MobileNavbar from './mobile-navbar';
import DesktopNavMenu from './desktop-nav-menu';
import Footer from './footer';

const Layout = ({ children, home }) => {
  return (
    <div className="relative flex flex-col w-screen min-h-screen font-sans antialiased text-gray-800">
      <MobileNavbar />
      {home ? <Hero /> : <DesktopNavMenu />}
      <main id="main" className="relative flex-1 bg-white">
        {children}
      </main>
      <Footer />
    </div>
  );
};

Layout.propTypes = {
  children: PropTypes.node.isRequired,
  home: PropTypes.bool,
};

export default Layout;
