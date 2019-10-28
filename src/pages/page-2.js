import React from 'react';
import { Link } from 'gatsby';

import Layout from '../components/layout';
import SEO from '../components/seo';

const SecondPage = () => (
  <Layout>
    <SEO title="Page two" />
    <h1 className="font-bold text-4xl text-gray-800">
      Hi from the second page
    </h1>
    <p>Welcome to page 2</p>
    <Link to="/" className="highlight">
      Go back to the homepage
    </Link>
  </Layout>
);

export default SecondPage;
