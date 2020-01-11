import { graphql, useStaticQuery } from 'gatsby';
import { MdExpandMore } from 'react-icons/md';
import AnchorLink from 'react-anchor-link-smooth-scroll';
import Image from 'gatsby-image';
import React from 'react';

import useGraphqlQueries from './use-graphql-queries';
import Header from './header';

const Hero = () => {
  const data = useGraphqlQueries();
  return (
    <article className="relative h-screen">
      <div className="fixed inset-0">
        <Image
          fluid={data.heroImage.childImageSharp.fluid}
          className="h-screen"
        />
      </div>
      <div className="absolute inset-0 bg-transparent-black">
        <Header />
      </div>
      <div className="absolute flex font-bold font-display inset-0 items-center justify-center leading-tight pointer-events-none text-center text-white">
        <div className="max-w-4xl pointer-events-auto px-4">
          <h1 className="text-6xl">
            The Cheapest Photo Enlargements in Australia
          </h1>
          <p className="mt-6">
            <Link to="/store" className="button button-large">
              Get Started With Your Photo Enlargements
            </Link>
          </p>
        </div>
      </div>
      <div className="absolute bottom-0 flex inset-x-0 justify-center my-12 pointer-events-none text-white">
        <AnchorLink href="#why" className="pointer-events-auto text-6xl">
          <MdExpandMore />
        </AnchorLink>
      </div>
    </article>
  );
};

export default Hero;
