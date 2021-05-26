import React from 'react';
import styled from 'styled-components';

// const data = [

// ];

const Gallery = () => (
    <GalleryContainer>
        <LargeCard>0</LargeCard>
        <SmallCard>1</SmallCard>
        <MediumCard>2</MediumCard>
        <LargeCard>3</LargeCard>
        <MediumCard>4</MediumCard>
        <SmallCard>5</SmallCard>
        <LargeCard>6</LargeCard>
        <SmallCard>7</SmallCard>
        <MediumCard>8</MediumCard>
        <LargeCard>9</LargeCard>
        <MediumCard>10</MediumCard>
        <SmallCard>11</SmallCard>
        <LargeCard>12</LargeCard>
    </GalleryContainer>
);

export default Gallery;

const GalleryContainer = styled.div`
    display: grid;
    width: 100%;
    margin: 0 auto 40px;
    background: linen;
    /* grid-template-columns: repeat(auto-fill, var(--card_width));  */
    grid-template-columns: repeat(auto-fill, 33.3%);   // media query for smaller screens
    // I think what it does here is take a gutter value as the second argument
    grid-auto-rows: var(--row_increment);
    justify-content: center;
`;

const Card = styled.div`
    padding: 0;
    margin: 15px 10px;
    border-radius: var(--card_border_radius);
    background-color: coral;
`;

const SmallCard = styled(Card)`
    grid-row-end: span var(--card_small);
`;

const MediumCard = styled(Card)`
    grid-row-end: span var(--card_medium);
`;

const LargeCard = styled(Card)`
    grid-row-end: span var(--card_large);
`;