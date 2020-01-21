import React from 'react';
import { Link } from 'gatsby';
import Image from 'gatsby-image';

import useGraphql from '../hooks/use-graphql';

const Collections = () => {
  const { scrapbookPrinting, canvasPrinting } = useGraphql();
  return (
    <div className="px-10 py-6 text-center">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-2xl font-bold uppercase font-display">
          Collection list
        </h2>
        <div className="flex flex-wrap mt-12 -mx-2">
          <div className="relative w-full px-2 mt-6 first:mt-0 md:w-1/2 md:mt-0">
            <Image
              fluid={scrapbookPrinting.childImageSharp.fluid}
              className="w-full"
            />
            <Link
              to="/products/scrapbook-printing/"
              className="absolute inset-0 flex px-2"
            >
              <h3 className="flex items-center justify-center w-full h-full text-4xl text-white font-display bg-transparent-black">
                Scrapbook Printing
              </h3>
            </Link>
          </div>
          <div className="relative w-full px-2 mt-6 first:mt-0 md:w-1/2 md:mt-0">
            <Image
              fluid={canvasPrinting.childImageSharp.fluid}
              className="w-full"
            />
            <Link
              to="/products/canvas-print/"
              className="absolute inset-0 flex px-2"
            >
              <h3 className="flex items-center justify-center w-full h-full text-4xl text-white font-display bg-transparent-black">
                Canvas Printing
              </h3>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Collections;
