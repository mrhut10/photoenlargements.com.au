import PropTypes from 'prop-types';
import React from 'react';

import Hero from './hero';
import MobileNavbar from './mobile-navbar';
import DesktopNavMenu from './desktop-nav-menu';
import Footer from './footer';

const Layout = ({ children, home = false }) => {
  return (
    <>
      <MobileNavbar />
      <DesktopNavMenu home={home} />
      <div className="relative flex flex-col w-full min-h-screen overflow-x-hidden font-sans antialiased text-gray-800">
        {home && <Hero />}
        <main id="main" className="relative flex-1 bg-white">
          {children}
        </main>
        <Footer />
      </div>
    </>
  );
};

Layout.propTypes = {
  children: PropTypes.node.isRequired,
  home: PropTypes.bool,
};

export default Layout;
