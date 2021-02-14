import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  * {
    box-sizing: border-box;
  }

  body {
    margin: 0;
    padding: 0;

    font-family: 'Montserrat', sans-serif;
  }

  html, body {
    min-height: 100vh;
  }
`;
