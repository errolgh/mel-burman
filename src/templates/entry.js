import React from 'react'
import { graphql, Link } from 'gatsby'
import Layout from '../components/Layout'
import styled from 'styled-components';
import { 
    GatsbyImage,
    // getImage, 
    // withArtDirection
  } from "gatsby-plugin-image"

const StyledCoverImage = styled(GatsbyImage)`
  padding: 0;
  background-color: coral;
  width: 500px;
`
const EntryDetailsContainer = styled.div`
    display: flex;
    flex-direction: row;
    width: 60%;
    height: auto;
    margin: 0 auto;
    align-items: center;
    /* background-color: #ffffff;
    border-radius: 20px;
    box-shadow: 0.5px 0.5px 10px rgba(50, 50, 50, 0.3); */
    overflow: hidden;
    margin-bottom: 5rem;
    > :first-child {
        border-radius: 6px;
        height: 500px;
    }

    @media (max-width: 800px) {
        flex-direction: column;
        height: 700px;
        width: 600px;
    }
`

const EntryDetails = styled.div`
    width: 500px;
    height: auto;
    padding: 50px 40px;
    > p {
        color: var(--text-light);
    }
`

const Button = styled.button`
    font-size: 18px;
    padding: 10px 20px;
    margin: 0 auto;
    background: rebeccapurple;
    color: white;
    border-radius: 6px;
    border: none;
    :hover {
        cursor: pointer;
    }
`

const ImageArrayContainer = styled.div`
    max-width: 1200px;
    display: flex;
    flex-direction: column;
    margin: 0 auto;
    align-items: center;
`

const GalleryImage = styled(GatsbyImage)`
    height: 100%;
    max-width: 800px;
    margin: 20px;
    /* margin: 0 auto; */
    border-radius: 6px;

`

const EntryTemplate = ( {data} ) => {
    // let trailingImages = data.strapiEntry.album.map(deckImg => {
    //     return deckImg.localFile.childrenImageSharp[0].gatsbyImageData
    // })

    // const imageArray = [
    //     data.strapiEntry.cover.localFile.childImageSharp.gatsbyImageData,
    //     ...trailingImages
    // ] 
    // console.log("GlobalScope imageArray: ", imageArray)

    return (
        <Layout>
            <EntryDetailsContainer>
                <StyledCoverImage
                    image={data.strapiEntry.cover.localFile.childImageSharp.gatsbyImageData}
                    alt={data.strapiEntry.name}
                    loading='eager'
                    formats={['AUTO', 'WEBP', 'AVIF']}
                    // image={}
                    // alt={}
                    // loading='eager'
                    // formats={['AUTO', 'WEBP', 'AVIF']}
                    />
                <EntryDetails>
                    <h2>{data.strapiEntry.name}</h2>
                    <p>{data.strapiEntry.description}</p>
                    <Button><Link to="/">Back to Gallery</Link></Button>
                </EntryDetails>
            </EntryDetailsContainer>
            <ImageArrayContainer>
                {data.strapiEntry.album.map(deckImg => {
                        return <GalleryImage
                        image={deckImg.localFile.childrenImageSharp[0].gatsbyImageData}
                        alt={deckImg.name}
                        loading='eager'
                        formats={['AUTO', 'WEBP', 'AVIF']}
                    />
                })}
            </ImageArrayContainer>
        </Layout>
    )
}

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