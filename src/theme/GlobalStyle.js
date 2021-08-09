import { createGlobalStyle } from 'styled-components';
import { normalize } from 'styled-normalize';

export const GlobalStyle = createGlobalStyle`
  * {
    box-sizing: border-box;
    scroll-behavior: smooth;
  }

  ${normalize}

  html,
  body {
    display: flex;
    width: 100%;
    min-height: 100vh;
    margin: 0;
    padding: 0;
    font-family: ${({ theme }) => theme.dark.fontFamily};
  }
  
  #__next {
    flex: 1;
    display: flex;
    flex-direction: column;
  }
`;
