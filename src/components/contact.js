import React from 'react';

import useGraphql from '../hooks/use-graphql';
import ContactForm from './form';

const Contact = () => {
  const { site } = useGraphql();
  return (
    <article className="px-10 py-6">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-2xl font-bold text-center uppercase font-display">
          Enquiries
        </h2>
        <div className="flex flex-wrap">
          <div className="w-full md:w-1/2 md:pr-10">
            <h3 className="mt-6 text-5xl font-bold text-gold font-display">
              Contact
            </h3>
            <div>
              <p className="mt-4 first:mt-0">
                If you have any questions, please feel free to contact us via
                phone, email or the form on this page.
              </p>
              <p className="mt-4 first:mt-0">
                We are located at{' '}
                <span className="uppercase">{site.siteMetadata.address}</span>.
              </p>
            </div>
          </div>
          <div className="w-full md:w-1/2">
            <ContactForm />
          </div>
        </div>
      </div>
    </article>
  );
};

export default Contact;
