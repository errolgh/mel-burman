import React from 'react'
import hero from '../../../static/mel-hero.jpg'
import styled from 'styled-components'
import { heroCopy } from '../../data';
import parse from 'html-react-parser';


const HeroContainer = styled.div`
    display: flex;
    align-items: center;
    height: 40vh;
    background-image:
    linear-gradient(to right, rgba(0,0,0,1) 0%,rgba(0,0,0,1) 35%,rgba(0,0,0,1) 38%,rgba(0,0,0,0.94) 41%,rgba(0,0,0,0.74) 51%,rgba(0,0,0,0.7) 53%,rgba(0,0,0,0) 89%),
    url(${hero});
    background-repeat: no-repeat;
    background-position: right;
    background-size: cover;

    color: #fafafa;

    @media(min-width: 576px) {
        height: 60vh;
    }

    @media(min-width: 768px) {
        height: 90vh;
    }
`;

const Title = styled.div`
    display: none;
    @media(min-width: 576px) {
        display: block;
    }
`;

const TagLine = styled.div`
    display: none;
    @media(min-width: 576px) {
        display: block;
    }
`;

const IntroductionContainer = styled.div`
    display: none;
    padding: 10px;
    
    font-size: 24px;
    
    /* Tablet Hero Copy */
    @media(min-width: 576px) {
        padding-left: 10%;
        display: block;
        h2 {

            font-size: 36px;
        }

         p {
             font-size: 18px;
         }
        line-height: 1.8;
        font-weight: lighter;
    }

    @media(min-width: 768px) {
        padding-left: 15%;
        h2 {

            font-size: 48px;
        }

         p {
             font-size: 20px;
         }
    }
`;


const Hero = () => {
    return (
        <HeroContainer>
            <IntroductionContainer>
                <Title>{parse(heroCopy.title)}</Title>
                <TagLine>{parse(heroCopy.tagLine)}</TagLine>
            </IntroductionContainer>
        </HeroContainer>
    )
}

export default Hero