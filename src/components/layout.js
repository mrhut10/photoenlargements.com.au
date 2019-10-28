/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import PropTypes from 'prop-types';
import React from 'react';

import Header from './header';
import Hero from './hero';

const Layout = ({ children, home }) => {
  return (
    <div className="antialiased flex flex-col font-sans min-h-screen text-gray-800">
      {home ? <Hero /> : <Header />}
      <main id="main" className="flex-1 px-4 pb-6 w-full">
        {children}
      </main>
      <footer className="mx-auto max-w-4xl p-4 w-full">
        © {new Date().getFullYear()}, Built with{' '}
        <a
          href="https://www.gatsbyjs.org"
          className="font-semibold hover:text-teal-600"
        >
          Gatsby
        </a>
      </footer>
    </div>
  );
};

Layout.propTypes = {
  children: PropTypes.node.isRequired,
  home: PropTypes.bool,
};

export default Layout;
