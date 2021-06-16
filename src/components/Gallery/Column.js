import styled from 'styled-components'

export const Column = styled.div`
  height: auto;
  border-radius: 5px;
  margin-bottom: 10px;
  break-inside: avoid-column;
  overflow: hidden;
  img,
  #images {
    width: 100%;
    border-radius: 10px;
  }
  &:hover {
    /* -webkit-filter: brightness(70%); */
    /* -webkit-backdrop-filter: blur(10px); */
    -webkit-transition: all 1s ease;
    -moz-transition: all 1s ease;
    -o-transition: all 1s ease;
    -ms-transition: all 1s ease;
    transition: all 1s ease;
    cursor: pointer;
  }
  &:hover button {
    display: block;
  }
`;

