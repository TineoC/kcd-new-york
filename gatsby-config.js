/**
 * @type {import('gatsby').GatsbyConfig}
 * Static site – no OpenEvent API. Content is in src/content and src/pages.
 * See https://github.com/distributethe6ix/kcd-toronto-front-end for reference.
 */
module.exports = {
  siteMetadata: {
    title: `Kubernetes Community Days New York 2026`,
    description: `KCD New York 2026 — June 10, 2026 at Convene One Liberty Plaza, 1 Liberty St, New York, NY 10006.`,
    siteUrl: `https://kcdnewyork.com`,
  },
  plugins: [
    `gatsby-plugin-image`,
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `pages`,
        path: `${__dirname}/src/pages`,
      },
    },
    {
      resolve: `gatsby-plugin-mdx`,
      options: {},
    },
  ],
};
