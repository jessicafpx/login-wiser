import React from 'react';
import { createGlobalStyle } from 'styled-components';
import Head from 'next/head';

const GlobalStyle = createGlobalStyle`
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


export default function App({ Component, pageProps }) {
  return (
    <>
      <Head>
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link href="https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,400;0,600;1,400;1,600&display=swap" rel="stylesheet"></link>
        <title>Login</title>
      </Head>
      <GlobalStyle />
      <Component {...pageProps} />
    </>
  );
}
