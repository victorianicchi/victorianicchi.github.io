// components/Layout.js
import Head from 'next/head';
import Header from './Header';
import Footer from './Footer';

export default function Layout({ children, pageTitle }) {
  return (
    <>
      <Head>
        <title>{pageTitle ? `${pageTitle} | ` : ''}Victoria Nicchi Portfolio</title>
        <meta name="description" content="Showcasing a minimal, elegant architecture portfolio" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header />

      <main className="fade-in">
        {children}
      </main>

      <Footer />
    </>
  );
}
