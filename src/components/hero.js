import { Link } from 'gatsby';
import { IoIosArrowDown } from 'react-icons/io';
import AnchorLink from 'react-anchor-link-smooth-scroll';
import Image from 'gatsby-image';
import React from 'react';
import resolveConfig from 'tailwindcss/resolveConfig';

import tailwindConfig from '../../tailwind.config.js';
import useGraphql from '../hooks/use-graphql';
import useMediaQuery from '../hooks/use-media-query';

const Hero = () => {
  const data = useGraphql();

  const fullConfig = resolveConfig(tailwindConfig);

  const screenSize = useMediaQuery(
    `(min-width: ${fullConfig.theme.screens.md})`,
    '48',
    '88'
  );

  return (
    <article className="relative min-h-screen">
      <div className="fixed inset-0">
        <Image
          fluid={data.heroImage.childImageSharp.fluid}
          className="min-h-screen"
        />
      </div>
      <div className="absolute inset-0 flex items-center justify-center font-bold leading-tight text-center text-white pointer-events-none font-display bg-transparent-black">
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
          offset={screenSize}
          className="text-6xl pointer-events-auto"
        >
          <IoIosArrowDown />
        </AnchorLink>
      </div>
    </article>
  );
};

export default Hero;
