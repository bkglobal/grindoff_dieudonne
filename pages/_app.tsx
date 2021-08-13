import 'tailwindcss/tailwind.css'
import React from 'react';

interface Props {
  Component: any;
  pageProps: any;
}

function GrindOffApp({ Component, pageProps }: Props) {
  return <Component {...pageProps} />;
}

export default GrindOffApp
