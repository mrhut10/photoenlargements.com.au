import PropTypes from 'prop-types';
import React from 'react';

import Header from './header';
import Hero from './hero';
import Footer from './footer';

const Layout = ({ children, home }) => {
  return (
    <div className="flex flex-col min-h-screen font-sans antialiased text-gray-800">
      {home ? <Hero /> : <Header />}
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
