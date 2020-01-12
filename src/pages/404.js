import React from 'react';
import { Link } from 'gatsby';

import Layout from '../components/layout';
import SEO from '../components/seo';

const NotFoundPage = () => {
  return (
    <Layout>
      <SEO title="404 Not Found" />
      <div className="px-10">
        <div className="max-w-6xl mx-auto">
          <h1 className="mt-24 text-2xl font-bold uppercase font-display">
            Page Not Found
          </h1>
          <div className="mt-12 text-center">
            <p className="italic">
              We're sorry, but the page you requested could not be found.
            </p>
            <p>
              <Link to="/products" className="mt-12 button">
                Continue shopping &rarr;
              </Link>
            </p>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default NotFoundPage;
