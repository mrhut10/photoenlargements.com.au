import React from 'react';
import Image from 'gatsby-image';

import useGraphql from '../hooks/use-graphql';

const About = () => {
  const data = useGraphql();
  return (
    <article id="about" className="px-10 mt-12 leading-loose">
      <div className="flex flex-wrap max-w-6xl mx-auto">
        <div className="w-full md:w-1/2">
          <Image fluid={data.heroImage.childImageSharp.fluid} />
        </div>
        <div className="w-full md:w-1/2 md:pl-20">
          <h2 className="mt-6 text-5xl font-bold text-gold font-display">
            About
          </h2>
          <p>
            We create beautiful, lasting memories with our photography services,
            with years of experience in all verses of photography, we will do
            our best at capturing the best images to set the scene!
          </p>
          <p className="mt-4">
            Contact our friendly team or come and see our studio at 21 Boundary
            Street Glenreagh NSW 2450!
          </p>
        </div>
      </div>
    </article>
  );
};

export default About;
