import React from 'react';
import styled from 'styled-components';
import EntryCard from '../../components/EntryCard'

const Gallery = ({ data }) => {
    return (
      <ComponentWrapper>
          <MajorPageSection>
            <GalleryTitle>Gallery</GalleryTitle>
            <GallerySection>
                {data.map(entry => (
                    <EntryCard entry={entry}/>
                ))}
            </GallerySection>
          </MajorPageSection>
        </ComponentWrapper>
    )
};

export default Gallery;

const large = 1200;
const mediumm = 900;
const small = 600;

const ComponentWrapper = styled.div`
  background-color: #ededed;
`

const MajorPageSection = styled.div`
  padding-top: 40px;
  margin: 0 auto;
  max-width: 1200px;
`

const GalleryTitle = styled.h2`
  text-align: center;
  font-family: "Dancing Script", "Lucida Handwriting";
  font-size: 40px;
  margin-bottom: 60px;
`


const GallerySection = styled.section`
  height: auto;
  margin: 0 auto;
  padding-bottom: 40px;
  column-count: 5;
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