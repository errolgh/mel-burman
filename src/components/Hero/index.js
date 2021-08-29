import React from 'react'
import hero from '../../../static/melsunset.jpg'
import styled from 'styled-components'


const HeroContainer = styled.div`
    width: 100%;
    background-image: url(${hero});
    background-repeat: no-repeat;
    background-position: center;
    min-height:90vh;
    background-size: cover;
`;


const Hero = () => {
    return (
        <HeroContainer>
        </HeroContainer>
    )
}

export default Hero