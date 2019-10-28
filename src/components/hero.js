import { graphql, useStaticQuery } from 'gatsby';
import { MdExpandMore } from 'react-icons/md';
import AnchorLink from 'react-anchor-link-smooth-scroll';
import Image from 'gatsby-image';
import React from 'react';

import Header from './header';
import ButtonLink from './button-link';

const Hero = () => {
  const data = useStaticQuery(graphql`
    {
      file(name: { eq: "hero" }) {
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
    }
  `);
  return (
    <article className="relative">
      <Image
        fluid={data.file.childImageSharp.fluid}
        style={{ maxHeight: `100vh` }}
      />
      <div className="absolute bg-transparent-black inset-0">
        <Header />
      </div>
      <div className="absolute flex font-bold font-display inset-0 items-center justify-center leading-tight pointer-events-none text-center text-white">
        <div className="max-w-4xl pointer-events-auto px-4">
          <h1 className="text-6xl">
            The Cheapest Photo Enlargements in Australia
          </h1>
          <p className="mt-6">
            <ButtonLink
              to="/store"
              text="Get Started With Your Photo Enlargements"
              size="large"
            />
          </p>
        </div>
      </div>
      <div className="absolute bottom-0 flex inset-x-0 justify-center mb-12 pointer-events-none text-white">
        <AnchorLink href="#why" className="pointer-events-auto text-6xl">
          <MdExpandMore />
        </AnchorLink>
      </div>
    </article>
  );
};

export default Hero;
