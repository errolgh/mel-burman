import React from "react"
import Gallery from "../components/Gallery"
import Layout from '../components/Layout'
import Seo from '../components/Seo'
import { graphql } from 'gatsby'
import TagLine from '../components/TagLine'
import melWithMug from '../../static/melwithmug.jpg'
import styled from 'styled-components'


const ImageContainer = styled.div`
  /* width: 100%; */
`

const HeroImage = styled.img`
  width: 100%;
`

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
      <ImageContainer>
        <HeroImage src={melWithMug} alt=""/>
      </ImageContainer>
      <TagLine />
      {/* fix index imports and .env file
      https://medium.com/swlh/import-components-in-react-like-a-pro-b1340cb76a1b
      https://www.npmjs.com/package/emailjs
      https://www.gatsbyjs.com/docs/how-to/local-development/environment-variables/ */}
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