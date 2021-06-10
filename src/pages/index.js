import React from "react"
import Gallery from "../components/Gallery"
import Layout from '../components/Layout'
import Seo from '../components/Seo'
import { graphql } from 'gatsby'


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
      <Gallery data={data.allStrapiEntry.nodes} />
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
// yes, this query could be cleaner 
// but I need to research which digestion methods are best and why
