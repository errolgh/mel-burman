import React from 'react'
import styled from 'styled-components'


const TagLineHeader = styled.h2`
    text-align: center;
    color: var(--text-dark);
    font-size: 72px;
    font-family: "Dancing Script", "Lucida Handwriting";
    
`

const TagLineContainer = styled.div`
    /* background-color: skyblue; */
    width: 800px;
    margin: 0 auto;
    padding-top: 30px;
    padding-bottom: 30px;
`

const TagLine = () => {
    return (
        <TagLineContainer>
            <TagLineHeader>
                For the Love of All Things<br/>
                Weird &amp; Fancy
            </TagLineHeader>
        </TagLineContainer>
    )
}

export default TagLine