// See: https://www.gatsbyjs.com/docs/gatsby-config/

module.exports = {
  siteMetadata: {
    title: `Melony Arthur`,
    siteUrl: `https://www.gatsbyjs.com`,
    description: `A Baltimore-based artist`,
  },
  plugins: [
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`,  // GatsbyImage
    `gatsby-plugin-image`,
    `gatsby-plugin-styled-components`,
    `gatsby-plugin-react-helmet`,
    // `gatsby-plugin-scroll-reveal`,
    {
      resolve: `gatsby-source-filesystem`,  // StaticImage
      options: {
        name: `images`,
        path: `${__dirname}/src/images/`,
      },
    },
    {
      resolve: `gatsby-plugin-manifest`, //for pwa
      options: {
        name: `mel-burman`,
        start_url: `/`,
        icon: 'src/images/enlightenment.jpg',
      }
    },
    {
      resolve: `gatsby-source-strapi`, // links your gatsby site to a strapi backend
      options: {
        apiURL: `http://localhost:1337`,
        queryLimit: 10000, // Defaults to 100
        collectionTypes: [ // seems to work with contentTypes as well
        // singleType: [] // used for one-off types like pages
          `entry`,
          `artist`,
        ]
      },
    },
  ],
}
