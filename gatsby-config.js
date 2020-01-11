// Load environment variables
require('dotenv').config({
  path: `.env.${process.env.NODE_ENV}`,
});

// Import default theme from Tailwind so we can use colours for manifest
const resolveConfig = require('tailwindcss/resolveConfig');
const tailwindConfig = require('./tailwind.config');

const tw = resolveConfig(tailwindConfig);

// Gatsby settings
module.exports = {
  siteMetadata: {
    title: `PhotoEnlargements.com.au`,
    description: `The Cheapest Photo Enlargements in Australia. Contact us today for all your photo printing needs.`,
    author: `Photo Enlargements`,
    siteUrl: `https://www.photoenlargements.com.au`,
  },
  plugins: [
    `gatsby-plugin-netlify`,
    `gatsby-plugin-postcss`,
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-robots-txt`,
    `gatsby-plugin-sharp`,
    `gatsby-plugin-sitemap`,
    `gatsby-transformer-sharp`,
    {
      resolve: `gatsby-plugin-canonical-urls`,
      options: {
        siteUrl: `https://www.photoenlargements.com.au`,
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-tailwindcss`,
        short_name: `starter`,
        start_url: `/`,
        background_color: tw.theme.colors.black,
        theme_color: tw.theme.colors.gold,
        display: `minimal-ui`,
        icon: `src/images/logo.svg`, // This path is relative to the root of the site.
      },
    },
    {
      resolve: `gatsby-plugin-purgecss`,
      options: {
        tailwind: true,
        purgeOnly: [`src/css/tailwind.css`],
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    {
      resolve: `gatsby-source-shopify`,
      options: {
        shopName: process.env.SHOPIFY_SHOP_NAME,
        accessToken: process.env.SHOPIFY_ACCESS_TOKEN,
        verbose: true,
        paginationSize: 30,
      },
    },
  ],
};
