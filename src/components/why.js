import { graphql, useStaticQuery } from 'gatsby';
import Image from 'gatsby-image';
import React from 'react';

import ButtonLink from './button-link';

const Why = () => {
  const data = useStaticQuery(graphql`
    {
      file(name: { eq: "photo-pile" }) {
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
    }
  `);
  return (
    <article id="why" className="leading-loose max-w-6xl mx-auto mt-12">
      <div className="flex flex-wrap">
        <div className="w-full md:w-1/2">
          <h2 className="font-bold text-3xl uppercase">Why print with us?</h2>
          <ul className="list-disc ml-5">
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
            <ButtonLink to="/contact-us" text="Get Quote Now" size="medium" />
          </p>
        </div>
        <div className="w-full md:w-1/2">
          <Image fluid={data.file.childImageSharp.fluid} />
        </div>
      </div>
    </article>
  );
};

export default Why;
