import React from 'react';
import styled from 'styled-components';

const FooterContainer = styled.footer`
    display: flex;
    justify-content: center;
    margin-top: 200px;
`;

const Footer = () => {
    return (
        <FooterContainer>
            Mel Burman, Copyright., build by ya boi Haralodińo Rivera
        </FooterContainer>
    )
}

export default Footer