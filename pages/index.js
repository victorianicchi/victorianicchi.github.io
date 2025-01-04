// pages/index.js
import Layout from '../components/Layout';
import Hero from '../components/Hero';

export default function Home() {
  return (
    <Layout pageTitle="Home">
      <Hero />

      <section id="portfolio" className="portfolio-grid fade-in">
        {/* Portfolio Item 1 */}
        <div className="portfolio-item">
          <img src="/images/obra1.jpg" alt="Obra 1" />
          <div className="overlay">
            <h3>viviendas Utopia Senior</h3>
          </div>
        </div>

        {/* Portfolio Item 2 */}
        <div className="portfolio-item">
          <img src="/images/obra2.jpg" alt="Obra 2" />
          <div className="overlay">
            <h3>condo hotel casagrande</h3>
          </div>
        </div>

        {/* Add more items or loop them dynamically if you prefer */}
      </section>
    </Layout>
  );
}
