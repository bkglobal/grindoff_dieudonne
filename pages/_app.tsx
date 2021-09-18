import 'tailwindcss/tailwind.css';
import React from 'react';
import { Provider } from 'react-redux';
import store from 'src/redux/store';

interface Props {
  Component: any;
  pageProps: any;
}

function GrindOffApp({ Component, pageProps }: Props) {
  return (
    <Provider store={store}>
      <Component {...pageProps} />
    </Provider>
  );
}

export default GrindOffApp;
