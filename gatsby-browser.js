// import React from 'react'
// import { createGlobalStyle, ThemeProvider } from 'styled-components';
// // import GlobalStyle from './src/components/GlobalStyle';
// import Theme from './src/themes/theme';

// const GlobalStyles = createGlobalStyle`
//     * {
//         box-sizing: border-box;
//         margin: 0;
//         padding: 0;
//     }

//     @import url('https://fonts.googleapis.com/css2?family=Barlow+Semi+Condensed:wght@200;400;500;600;700&display=swap');
//   :root {
//     // add your variable colors and stuff here
//     --main-font: 'Barlow Semi Condensed', sans-serif;
//     --text-dark: #222222;

//     /* from tut https://anobjectisa.com/?p=335 */
//     --card_width: 250px;
//     --row_increment: 10px;
//     --card_border_radius: 16px;
//     --card_small: 26;
//     --card_medium: 33;
//     --card_large: 45;
//   }

//   body {
//     /* margin: 0;
//     padding: 0; */
//     background: white;
//     color: #222222;
//     font-family: var(--main-font);
//     font-size: 23px;
//     overflow-x: hidden;
//     /* -ms-text-size-adjust: 100%; */
//     /* -webkit-text-size-adjust: 100%; */
//   }
    
//   ul {
//     list-style-type: none;
//   }

//   a {
//     text-decoration: none;
//     color: var(----text-dark);
//   }
// `

// export const wrapRootElement = ({ element }) => (
//     <ThemeProvider theme={Theme}>
//         <GlobalStyles/>
//         { element }
//     </ThemeProvider>
// )


// // this wraps our application with the Theme we created

// // we actually have to use this same code in our ssr file

// // https://www.youtube.com/watch?v=VJjF45T-Xqw&list=PLW0RabRDhwwzVNhlOgQQgw6HJzXdM1MnT&index=9