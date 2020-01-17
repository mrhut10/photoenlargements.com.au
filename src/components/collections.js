import React from 'react';
import { Link } from 'gatsby';
import Image from 'gatsby-image';

import useGraphqlQueries from './use-graphql-queries';

const Collections = () => {
  const { scrapbookPrinting, canvasPrinting } = useGraphqlQueries();
  return (
    <div className="px-10 py-6 text-center">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-2xl font-bold uppercase font-display">
          Collection list
        </h2>
        <div className="flex flex-wrap mt-12 -mx-2">
          <div className="relative w-1/2 px-2">
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
          <div className="relative w-1/2 px-2">
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
