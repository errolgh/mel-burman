import React from 'react'
import { graphql } from 'gatsby'
import Layout from '../components/Layout'
import styled from 'styled-components';
import { 
    GatsbyImage,
    // getImage, 
    // withArtDirection
  } from "gatsby-plugin-image"

const StyledCoverImage = styled(GatsbyImage)`
  padding: 0;
  margin: 15px 10px;
  border-radius: var(--card_border_radius);
  background-color: coral;
`

const EntryTemplate = ( {data} ) => (
    <Layout>
        {console.log("EntryTemplate.render data: ", data)}
        <h2>{data.strapiEntry.name}</h2>
        <p>{data.strapiEntry.description}</p>
        <StyledCoverImage
                image={data.strapiEntry.cover.localFile.childImageSharp.gatsbyImageData}
                alt={data.strapiEntry.name}
                loading='eager'
                formats={['AUTO', 'WEBP', 'AVIF']}
        />
    </Layout>
)

export default EntryTemplate

export const query = graphql`
    query EntryTemplateQuery($id: String!) {
        strapiEntry(id: {eq: $id}) {
            id
            name
            description
            classification
            album {
                localFile {
                    childrenImageSharp {
                    gatsbyImageData
                    }
                }
            }
            cover {
                localFile {
                    childImageSharp {
                    gatsbyImageData
                    }
                }
            }
        }
    }
`