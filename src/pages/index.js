import React from "react"
import Gallery from "../components/Gallery"
import Layout from '../components/Layout'
import Seo from '../components/Seo'
import { Container } from '../components/Container'
import { graphql } from 'gatsby'
import { 
  GatsbyImage,
  // getImage, 
  // withArtDirection
} from "gatsby-plugin-image"

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
      <Container>
        <h1>Hello World</h1>
        {data.allStrapiEntry.nodes.map(entry => (
          <div>
            {entry.name}
            <GatsbyImage
              image={entry.cover.localFile.childImageSharp.gatsbyImageData}
              alt={entry.name}
              loading='eager'
              layout="fullWidth"
            />
          </div>
        ))}
      </Container>
      <Gallery/>
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

