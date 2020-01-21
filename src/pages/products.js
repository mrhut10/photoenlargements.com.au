import React from 'react';
import { Link, graphql } from 'gatsby';
import Image from 'gatsby-image';
import PropTypes from 'prop-types';

import Layout from '../components/layout';
import SEO from '../components/seo';

const ProductsPage = ({ data }) => {
  return (
    <Layout>
      <SEO title="Products" />
      <div className="px-10">
        <div className="max-w-6xl mx-auto my-24">
          <h1 className="text-6xl font-bold text-center font-display">
            Products
          </h1>
          <ul className="flex flex-wrap">
            {data.allShopifyProduct.nodes.map(node => (
              <li
                key={node.shopifyId}
                className="w-full mt-12 leading-loose text-center md:w-1/3"
              >
                <Link to={`/products/${node.handle}`}>
                  <Image
                    fixed={node.images[0].localFile.childImageSharp.fixed}
                    imgStyle={{
                      objectFit: 'contain',
                    }}
                    className="max-w-full"
                  />
                  <h2>{node.title}</h2>
                  <p className="font-bold">
                    <span className="italic">from</span> $
                    {(
                      Math.round(node.priceRange.minVariantPrice.amount * 100) /
                      100
                    ).toFixed(2)}
                  </p>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </Layout>
  );
};

ProductsPage.propTypes = {
  data: PropTypes.object,
};

export default ProductsPage;

export const query = graphql`
  {
    allShopifyProduct(sort: { fields: [title] }) {
      nodes {
        title
        shopifyId
        description
        handle
        priceRange {
          minVariantPrice {
            amount
          }
        }
        images {
          localFile {
            childImageSharp {
              fixed(height: 200) {
                ...GatsbyImageSharpFixed_withWebp
              }
            }
          }
        }
      }
    }
  }
`;
