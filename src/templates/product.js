import React from 'react';
import { graphql } from 'gatsby';
import Image from 'gatsby-image';
import PropTypes from 'prop-types';

import Layout from '../components/layout';

const ProductTemplate = ({ data }) => {
  const { shopifyProduct: product } = data;
  const {
    images: [firstImage],
    variants: [firstVariant],
  } = product;

  const [state, setState] = React.useState(firstVariant);

  const handleChange = e => {
    const newState = product.variants.filter(
      variant => variant.title === e.target.value
    );
    setState(...newState);
  };

  console.log(state);

  return (
    <Layout>
      <div className="px-10">
        <div className="flex flex-wrap max-w-6xl mx-auto mt-24">
          <div className="w-full md:w-7/12">
            <div className="max-w-xs mx-auto">
              <Image fluid={firstImage.localFile.childImageSharp.fluid} />
            </div>
          </div>
          <div className="w-full md:w-5/12">
            <h1 className="text-2xl font-bold uppercase font-display">
              {product.title}
            </h1>
            <div className="flex justify-between mt-6">
              <div>{state.title}</div>
              <div>${state.price} ea</div>
            </div>
            <div>
              <label htmlFor={`${product.handle}-variants`}>
                <div className="mt-6 text-sm font-bold">Size</div>
                <div className="relative">
                  <select
                    name={`${product.handle}-variants`}
                    id={`${product.handle}-variants`}
                    className="w-full p-2 text-sm border appearance-none"
                    value={state.title}
                    onChange={handleChange}
                  >
                    {product.variants.map(variant => (
                      <option key={variant.id} value={variant.title}>
                        {variant.title}
                      </option>
                    ))}
                  </select>
                  <div className="absolute inset-y-0 right-0 flex items-center mr-2 text-gray-600 pointer-events-none">
                    <svg
                      className="w-4 h-4 fill-current"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                    >
                      <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
                    </svg>
                  </div>
                </div>
              </label>
            </div>
            <div className="mt-4 font-bold">Upload an image</div>
            <button type="button" className="w-56 mt-2 button">
              Choose images
            </button>
            <div
              dangerouslySetInnerHTML={{ __html: product.descriptionHtml }}
              className="mt-6"
            />
          </div>
        </div>
      </div>
    </Layout>
  );
};

ProductTemplate.propTypes = {
  data: PropTypes.object,
};

export default ProductTemplate;

export const query = graphql`
  query($handle: String!) {
    shopifyProduct(handle: { eq: $handle }) {
      id
      handle
      title
      productType
      descriptionHtml
      variants {
        id
        shopifyId
        title
        price
        sku
        availableForSale
      }
      images {
        id
        localFile {
          childImageSharp {
            fluid {
              ...GatsbyImageSharpFluid_withWebp
            }
          }
        }
      }
    }
  }
`;
