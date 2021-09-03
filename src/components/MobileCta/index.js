import React from 'react'
import styled from 'styled-components'
import { heroCopy } from '../../data';
import parse from 'html-react-parser'; 
import { GiGlassHeart as HeartGlyph } from "react-icons/gi";

const TagLine = styled.div`
    /* padding: 0 4px; */
    margin: 44px 8px;

    font-size: 18px;
    font-style: italic;
    line-height: 2;
    text-align: center;
`;

const GlyphContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 40px;
`;

const IntroductionContainer = styled.div`
    @media(min-width: 576px) {
        display: none;
    }
`;

const MobileCta = () => {
    // ayo just wrap the whole section in a div that disappears after sm breakpoint.
    return (
        <IntroductionContainer>
            <GlyphContainer>
                <HeartGlyph />
            </GlyphContainer>
            <TagLine>{parse(heroCopy.tagLine)}</TagLine>
        </IntroductionContainer>
    )
}

export default MobileCta