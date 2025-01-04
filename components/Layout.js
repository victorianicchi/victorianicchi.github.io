// components/Layout.js
import Head from 'next/head';
import Header from './Header';

export default function Layout({ children, pageTitle, siteTitle = 'Victoria Nicchi Portfolio', description }) {
  return (
    <>
      <Head>
        <title>
          {pageTitle} | {siteTitle}
        </title>
        {description && <meta name="description" content={description} />}
        {/* Add any other SEO or link tags here */}
        <link rel="icon" type="image/x-icon" href="/favicon.ico" />
      </Head>

      <Header />

      <main>
        {children}
      </main>
    </>
  );
}
