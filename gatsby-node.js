/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

const path = require('path');

exports.createPages = async ({ graphql, actions: { createPage } }) => {
  // Query for all products in Shopify
  const pages = await graphql(`
    query PagesQuery {
      allShopifyProduct {
        edges {
          node {
            id
            handle
          }
        }
      }
    }
  `);
  // Iterate over all products and create a new page using a template
  // The product "handle" is generated automatically by Shopify
  pages.data.allShopifyProduct.edges.forEach(({ node: { id, handle } }) => {
    createPage({
      path: `/product/${handle}`,
      component: path.resolve(`./src/templates/product.js`),
      context: {
        id,
        handle,
      },
    });
  });
};
