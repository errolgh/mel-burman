import React from 'react';
import styled from 'styled-components';
import EntryCard from '../EntryCard'
import CtaButton from '../CtaButton'


const large = 1200;
const mediumm = 900;
const small = 600;

const ComponentWrapper = styled.div`
  padding-top: 5rem;
  padding-bottom: 15rem;
  background-color: #ededed;
`;

const MajorPageSection = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  padding-top: 40px;
  margin: 0 auto;
  max-width: 1200px;
`;

const GalleryTitle = styled.h3`
  padding: 0 15px;
  margin-bottom: 20px;
  text-align: center;
  color: #595959;
  font-family: roboto, "Lucida Handwriting", arial;
  font-size: 20px;
   
   @media(min-width: 768px) {
      font-size: 24px;
   }
`;

const GallerySection = styled.section`
  height: auto;
  margin: 90px auto;
  padding: 0 15px 40px;
  column-count: 3;
  @media (max-width: ${large}px) {
    column-count: 3;
  }
  @media (max-width: ${mediumm}px) {
    column-count: 3;
  }
  @media (max-width: ${small}px) {
    column-count: 2;
  }
`;

const Gallery = ({ data, title }) => {
    return (
      <ComponentWrapper>
          <MajorPageSection>
            <GalleryTitle>{title}</GalleryTitle>
            <GallerySection>
                {data.map(entry => (
                    <EntryCard entry={entry}/>
                ))}
            </GallerySection>
            <CtaButton>GET IN TOUCH</CtaButton>
          </MajorPageSection>
        </ComponentWrapper>
    )
};

export default Gallery;
