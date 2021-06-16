import React from 'react';
import { Link } from 'gatsby'
import { fromEntrySlugToUrl } from '../utils/entries'
import { Column } from '../components/Gallery/Column'
import { 
    GatsbyImage,
    // getImage, 
    // withArtDirection
  } from "gatsby-plugin-image"


const EntryCard = ({ entry }) => (
    <Link to={fromEntrySlugToUrl(entry.slug)}>
        <Column>
            <GatsbyImage
                image={entry.cover.localFile.childImageSharp.gatsbyImageData}
                alt={entry.name}
                loading='eager'
                formats={['AUTO', 'WEBP', 'AVIF']}
            />
        </Column>
    </Link>
)

export default EntryCard