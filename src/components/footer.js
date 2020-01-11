import React from 'react';
import { Link } from 'gatsby';

import navLinks from '../data/nav-links';
import useGraphqlQueries from './use-graphql-queries';

const Footer = () => {
  const { site } = useGraphqlQueries();
  return (
    <footer className="relative px-10 text-white bg-black">
      <div className="w-full max-w-6xl mx-auto mt-6 mb-12">
        <nav className="lg:items-baseline lg:justify-between lg:flex">
          <Link to="/" className="text-5xl tracking-tighter font-display">
            <span>Photo</span>
            <span className="font-bold">Enlargements</span>
            <span className="text-3xl">.com.au</span>
          </Link>
          <ul className="-mx-2 font-bold tracking-wider uppercase lg:flex font-display">
            {navLinks.map(navigationItem => (
              <li key={navigationItem.title}>
                <Link
                  to={navigationItem.route}
                  activeClassName="text-gold"
                  className="inline-block px-2 mt-6 whitespace-no-wrap transition-colors duration-200 ease-in hover:text-gold lg:mt-0"
                >
                  {navigationItem.title}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
        <div className="mt-6 lg:flex lg:justify-between">
          <div className="leading-loose">
            <a
              href={site.siteMetadata.googleMapsLink}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-gold transition-colors ease-in duration-200"
            >
              <p>
                21 Boundary Street Glenreagh <br />
                New South Wales 2450
              </p>
            </a>
            <a
              href={`tel:${site.siteMetadata.phone.replace(/\s+/g, '')}`}
              className="hover:text-gold transition-colors ease-in duration-200"
            >
              <p>{site.siteMetadata.phone}</p>
            </a>
          </div>
          <a
            href="https://www.phirannodesigns.com.au"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-gold transition-colors ease-in duration-200"
          >
            <div className="mt-6 lg:mt-0">Website by Phiranno Designs</div>
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
