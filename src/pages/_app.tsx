import React from 'react'
import Head from "next/head";
import type { AppProps } from 'next/app'
import 'antd/dist/antd.css';
import "../styles/globals.scss";

const MyApp: React.FC<AppProps> = ({ Component, pageProps }) => {
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Component {...pageProps} />
    </>
  );
};

export default MyApp;
