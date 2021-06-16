import React from 'react';
import styled from 'styled-components';
import EntryCard from '../../components/EntryCard'


const Gallery = ({ data }) => {
    return (
        <GalleryContainer>
            {data.map(entry => (
                <EntryCard entry={entry}/>
            ))}
        </GalleryContainer>
    )
};

export default Gallery;

const large = 1200;
const mediumm = 900;
const small = 600;

const GalleryContainer = styled.section`
  max-width: 100vw;
  height: auto;
  margin: 40px;
  column-count: 6;
  @media (max-width: ${large}px) {
    column-count: 4;
  }
  @media (max-width: ${mediumm}px) {
    column-count: 3;
  }
  @media (max-width: ${small}px) {
    column-count: 1;
  }
`;