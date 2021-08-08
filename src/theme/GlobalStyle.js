import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  * {
    box-sizing: border-box;
  }

  html,
  body {
    margin: 0;
    padding: 0;
    /* display: flex;
    min-height: 100vh;
    width: 100%; */
    scroll-behavior: smooth;
    font-family: ${({ theme }) => theme.dark.fontFamily};
  }
  
  /* #__next {
    flex: 1;
    display: flex;
    flex-direction: column;
  } */
`;
