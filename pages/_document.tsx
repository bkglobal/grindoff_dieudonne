/* eslint-disable react/no-danger */
import React from 'react';
import Document, { Head, Main, NextScript, Html } from 'next/document';
import { ServerStyleSheet } from 'styled-components';

export default class MyDocument extends Document {
  static async getInitialProps(ctx: any) {
    const sheet = new ServerStyleSheet();
    const originalRenderPage = ctx.renderPage;

    try {
      ctx.renderPage = () =>
        originalRenderPage({
          enhanceApp: (App: any) => (props: any) => sheet.collectStyles(<App {...props} />),
        });

      const initialProps = await Document.getInitialProps(ctx);
      return {
        ...initialProps,
        styles: (
          <>
            {initialProps.styles}
            {sheet.getStyleElement()}
          </>
        ),
      };
    } finally {
      sheet.seal();
    }
  }

  render() {
    return (
      <Html lang="en" style={{ scrollBehavior: 'smooth' }}>
        <Head>
          <link rel="preconnect" href="https://fonts.googleapis.com" />
          <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="true" />
          <link
            href="https://fonts.googleapis.com/css2?family=Inter:wght@200;300;400;500;600;700;800;900&display=swap"
            rel="stylesheet"
          ></link>
          <link href="https://fonts.googleapis.com/css2?family=Material+Icons" rel="stylesheet" />
          <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.11.2/css/all.css" />
        </Head>
        <body className="font-body text-base tracking-tight font-light subpixel-antialiased">
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}
