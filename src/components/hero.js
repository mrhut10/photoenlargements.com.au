import { Link } from 'gatsby';
import { IoIosArrowDown } from 'react-icons/io';
import AnchorLink from 'react-anchor-link-smooth-scroll';
import Image from 'gatsby-image';
import React from 'react';
import PropTypes from 'prop-types';

import useGraphql from '../hooks/use-graphql';
import DesktopNavMenu from './desktop-nav-menu';

const Hero = ({ home = true }) => {
  const data = useGraphql();
  return (
    <article className="relative h-screen">
      <div className="fixed inset-0">
        <Image
          fluid={data.heroImage.childImageSharp.fluid}
          className="h-screen"
        />
      </div>
      <div className="absolute inset-0 bg-transparent-black">
        <DesktopNavMenu home={home} />
      </div>
      <div className="absolute inset-0 flex items-center justify-center font-bold leading-tight text-center text-white pointer-events-none font-display">
        <div className="max-w-4xl px-4 pointer-events-auto">
          <h1 className="text-4xl md:text-6xl">
            The Cheapest Photo <br />
            Enlargements in Australia
          </h1>
          <p className="mt-6">
            <Link to="/store" className="button button-large">
              Get Started With Your Photo Enlargements
            </Link>
          </p>
        </div>
      </div>
      <div className="absolute inset-x-0 bottom-0 flex justify-center my-12 text-white pointer-events-none">
        <AnchorLink
          href="#why-print-with-us"
          offset="88"
          className="text-6xl pointer-events-auto"
        >
          <IoIosArrowDown />
        </AnchorLink>
      </div>
    </article>
  );
};

Hero.propTypes = {
  home: PropTypes.bool,
};

export default Hero;
