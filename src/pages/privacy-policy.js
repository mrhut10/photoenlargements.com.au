import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';

import Layout from '../components/layout';
import SEO from '../components/seo';

const PrivacyPolicyPage = () => {
  const data = useStaticQuery(graphql`
    {
      shopifyShopPolicy(title: { eq: "Privacy Policy" }) {
        body
      }
    }
  `);
  return (
    <Layout>
      <SEO title="Privacy Policy" />
      <div className="px-10">
        <div className="max-w-3xl mx-auto">
          <div
            dangerouslySetInnerHTML={{ __html: data.shopifyShopPolicy.body }}
            className="my-24 rich-text"
          />
        </div>
      </div>
    </Layout>
  );
};

export default PrivacyPolicyPage;
