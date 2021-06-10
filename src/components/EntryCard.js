import React from 'react';
import styled from 'styled-components';
import { Link } from 'gatsby'
import { fromEntrySlugToUrl } from '../utils/entries'
import { 
    GatsbyImage,
    // getImage, 
    // withArtDirection
  } from "gatsby-plugin-image"

const StyledEntryCard = styled.div`
    width: 100%;
    /* padding: 0; */
    /* margin: 15px 10px; */
    border-radius: var(--card_border_radius);
    /* background-color: coral; */
`

const StyledCoverImage = styled(GatsbyImage)`
    padding: 0;
    margin: 15px 10px;
    border-radius: var(--card_border_radius);
    background-color: coral;
`

const EntryCard = ({ entry }) => (
    <Link to={fromEntrySlugToUrl(entry.slug)}>
        <StyledEntryCard>
            <StyledCoverImage
                image={entry.cover.localFile.childImageSharp.gatsbyImageData}
                alt={entry.name}
                loading='eager'
                formats={['AUTO', 'WEBP', 'AVIF']}
            />
        </StyledEntryCard>
    </Link>
)

export default EntryCard