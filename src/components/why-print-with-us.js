import React from 'react';
import { Link } from 'gatsby';
import Image from 'gatsby-image';

import useGraphqlQueries from './use-graphql-queries';

const WhyPrintWithUs = () => {
  const data = useGraphqlQueries();
  return (
    <article id="why-print-with-us" className="px-10 mt-12 leading-loose">
      <div className="flex flex-wrap-reverse max-w-6xl mx-auto">
        <div className="w-full md:w-1/2">
          <h2 className="mt-6 text-3xl font-bold uppercase">
            Why print with us?
          </h2>
          <ul className="ml-5 list-disc">
            <li>You upload your files and fill in your details</li>
            <li>You ensure that the files are in the correct aspect ratio</li>
            <li>
              We print the files on real professional grade photographic paper
            </li>
            <li>We check the print quality</li>
            <li>We pack and send the order to you within two days</li>
          </ul>
          <p>
            We offer a variety of enlargement sizes and options such as white
            borders, but even better than that, we have some of the cheapest
            prices in Australia!
          </p>
          <p className="font-bold">
            Want larger prints? Click below for a quote!
          </p>
          <p className="mt-6">
            <Link to="/contact-us" className="button button-medium">
              Get Quote Now
            </Link>
          </p>
        </div>
        <div className="w-full md:w-1/2">
          <Image fluid={data.photoPile.childImageSharp.fluid} />
        </div>
      </div>
    </article>
  );
};

export default WhyPrintWithUs;
