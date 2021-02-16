import React from 'react';

import Head from 'next/head';

import { GlobalStyle } from '../styles/global';
import { ToastProvider } from '../src/hooks/toast';
import { Provider } from 'react-redux';

import store from '../src/store';

export default function App({ Component, pageProps }) {
  return (
    <>
      <Head>
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link href="https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,400;0,600;1,400;1,600&display=swap" rel="stylesheet"></link>
        <title>Login</title>
      </Head>
      <GlobalStyle />
      <Provider store={store}>
        <ToastProvider>
          <Component {...pageProps} />
        </ToastProvider>
      </Provider>
    </>
  );
}
