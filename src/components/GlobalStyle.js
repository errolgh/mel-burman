import { createGlobalStyle } from 'styled-components';
import '@fontsource/roboto-condensed';


const GlobalStyle = createGlobalStyle`
  :root {
    // add your variable colors and stuff here
    /* --main-font: 'Barlow Semi Condensed', sans-serif; */
    --main-font: 'Roboto Condensed', sans-serif;
    --main-font: 'Roboto', sans-serif;
    --text-dark: #222222;
    --text-light: #5f5f5f;
    --highlight: #0082ff;

    /* from tut https://anobjectisa.com/?p=335 */
    --card_width: 300px;
    /* --card_width: 300px; */
    --row_increment: 10px;
    --card_border_radius: 16px;
    --card_small: 26;
    --card_medium: 33;
    --card_large: 45;
  }

  * {
    box-sizing: border-box;
  }

  body {
    margin: 0;
    padding: 0;
    background: #FAFAFA;
    /* background: #555; */
    color: var(--text-dark);
    font-family: var(--main-font);
    font-size: 23px;
    overflow-x: hidden;
    /* -ms-text-size-adjust: 100%; */
    /* -webkit-text-size-adjust: 100%; */
  }
    
  ul {
    list-style-type: none;
  }

  a {
    text-decoration: none;
    color: var(----text-dark);
  }
`;
 
export default GlobalStyle;