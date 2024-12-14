import '../globals.css';
import Head from 'next/head';
import { AppProps } from 'next/app';

export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>Buscadis</title>
        <meta
          name="description"
          content="Encuentra y publica anuncios en tiempo récord."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <Component {...pageProps} />
    </>
  );
}