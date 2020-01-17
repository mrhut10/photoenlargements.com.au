import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';

import Layout from '../components/layout';

const PriceChart = () => {
  const data = useStaticQuery(graphql`
    {
      shopifyPage(title: { eq: "Price Chart" }) {
        title
        body
      }
    }
  `);
  return (
    <Layout>
      <div className="px-10">
        <div className="max-w-6xl mx-auto my-24">
          <h1 className="text-2xl font-bold text-center uppercase font-display">
            {data.shopifyPage.title}
          </h1>
          <div
            dangerouslySetInnerHTML={{ __html: data.shopifyPage.body }}
            className="mt-4 rich-text"
          />
        </div>
      </div>
    </Layout>
  );
};

export default PriceChart;
