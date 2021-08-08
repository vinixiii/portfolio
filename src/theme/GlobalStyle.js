import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  * {
    box-sizing: border-box;
  }

  html,
  body {
    margin: 0;
    padding: 0;
    scroll-behavior: smooth;
    font-family: ${({ theme }) => theme.dark.fontFamily};
  }
  
  #__next {
    height: 100vh;
    scroll-snap-type: y proximity;
    overflow-y: scroll;
  }
`;
