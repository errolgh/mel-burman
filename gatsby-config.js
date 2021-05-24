/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.com/docs/gatsby-config/
 */

module.exports = {
  /* Your site config here */
  siteMetadata: {
    title: `Melony Arthur`,
    // siteUrl: `https://www.gatsbyjs.com`,
    description: `A Baltimore-based artist`,
  },
  plugins: [
    `gatsby-plugin-styled-components`,
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        icon: 'src/assets/site-favicon.png',
      }
    },
    `gatsby-plugin-netlify-cms`,
  ],
}
