// pages/_app.js
import '@/styles/global.css'; // Imports our global stylesheet
import Head from 'next/head';

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        {/* You can include default meta or a <title> here if desired */}
      </Head>
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
