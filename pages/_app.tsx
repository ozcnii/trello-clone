import { Provider } from 'react-redux';
import type { AppProps } from 'next/app';
import { setupStore } from './../store/store';
import './../styles/globals.css'

const store = setupStore()

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Provider store={store}>
      <Component {...pageProps} />
    </Provider>
  );
}

export default MyApp;