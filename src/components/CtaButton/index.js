import React from 'react'
import styled from 'styled-components'

const CtaButton = styled.button`
    width: 230px;
    height: 50px;
    border: 2px solid black;
    background-color: transparent;
    outline: none;

    font-family: roboto, arial;
    font-size: 16px;
    color: black;
    letter-spacing: 1.5;
    font-weight: bold;
        transition: background-color 200ms ease;

    &:hover {
        cursor: pointer;
        background-color: black;
        color: #ededed;
        transition: background-color 700ms ease;
    }
`;

const Button = ({ children, isCentered }) => {

    return (
            <CtaButton type="button">
                {children}
            </CtaButton>
    )
}

export default CtaButton