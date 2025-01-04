// components/Layout.js
import Head from 'next/head';
import Header from './Header';
// (Optional) Create a Footer.js if you want a site footer.

export default function Layout({ children, pageTitle }) {
  return (
    <>
      <Head>
        <title>{pageTitle} | Victoria Nicchi Portfolio</title>
        <meta
          name="description"
          content="Architecture portfolio showcasing minimal, elegant design."
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header />

      <main>
        {children}
      </main>

      {/* <Footer /> */}
    </>
  );
}
