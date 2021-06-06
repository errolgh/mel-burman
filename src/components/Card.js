import React from 'react';
import styled from 'styled-components';

const StyledCard = styled.div`
    padding: 0;
    margin: 15px 10px;
    border-radius: var(--card_border_radius);
    background-color: coral;
`

const Card = () => (
    <StyledFaceCard>
        I'm a Card
    </StyledFaceCard>
)

export default Card