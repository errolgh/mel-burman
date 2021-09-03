import React from "react"
import Gallery from "../components/Gallery"
import Layout from '../components/Layout'
import Seo from '../components/Seo'
import { graphql } from 'gatsby'
import Hero from '../components/Hero'
import MobileCta from '../components/MobileCta'

export default function Home( { data }) {
  return (
    <Layout>
      <Seo 
        title="The Home Page"
        description="You can customize SEO text here"
        image='/logo.png'
        pathname='/'
        // Boolean indicating whether this is an article:
        // article
      />
      <Hero />
      <MobileCta />
      {/* fix index imports and .env file
      https://medium.com/swlh/import-components-in-react-like-a-pro-b1340cb76a1b
      https://www.npmjs.com/package/emailjs
      https://www.gatsbyjs.com/docs/how-to/local-development/environment-variables/ */}
      <Gallery title="Featured work from my shop" data={data.allStrapiEntry.nodes} />
    </Layout>
  )
}

export const pageQuery = graphql`
  query MyQuery {
    allStrapiEntry {
      edges {
        node {
          strapiId
          name
          description
          classification
          slug
          cover {
            localFile {
              childImageSharp {
                gatsbyImageData
              }
            }
          }
          album {
            localFile {
              childImageSharp {
                gatsbyImageData
              }
            }
          }
        }
      }
      nodes {
        strapiId
        name
        description
        classification
        slug
        cover {
          localFile {
            childImageSharp {
              gatsbyImageData
            }
          }
        }
        album {
          localFile {
            childImageSharp {
              gatsbyImageData
            }
          }
        }
      }
    }
  }
` 