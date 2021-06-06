// See: https://www.gatsbyjs.com/docs/gatsby-config/

module.exports = {
  siteMetadata: {
    title: `Melony Arthur`,
    // siteUrl: `https://www.gatsbyjs.com`,
    description: `A Baltimore-based artist`,
  },
  plugins: [
    {
      resolve: `gatsby-source-filesystem`,  // StaticImage
      options: {
        name: `images`,
        path: `${__dirname}/src/images/`,
      },
    },
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`,  // GatsbyImage
    `gatsby-plugin-image`,
    {
      resolve: `gatsby-plugin-google-fonts`,
      options: {
        fonts: [
          `roboto mono`,
          `muli\:400,400i,700,700i`,
        ],
        display: "swap",
      }
    },
    `gatsby-plugin-styled-components`,
    `gatsby-plugin-react-helmet`,
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
        collectionTypes: [ // seems to work contentTypes as well
          `entry`,
        ]
      },
    },
  ],
}
