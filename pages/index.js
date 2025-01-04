// pages/index.js
import Layout from '../components/Layout';
import Hero from '../components/Hero';

export default function Home() {
  return (
    <Layout pageTitle="Home">
      <Hero />

      <section id="portfolio" className="portfolio-grid fade-in">
        
        {/* Portfolio Item 1 */}
        <a
          href="/pdf/UtopiaSenior.pdf"
          target="_blank"
          rel="noopener noreferrer"
          className="portfolio-item"
        >
          <img src="/images/obra1.jpg" alt="Obra 1" />
          <div className="overlay">
            <h3>viviendas Utopia Senior</h3>
          </div>
        </a>

        {/* Portfolio Item 2 */}
        <a
          href="/pdf/CasagrandeCondo.pdf"
          target="_blank"
          rel="noopener noreferrer"
          className="portfolio-item"
        >
          <img src="/images/obra2.jpg" alt="Obra 2" />
          <div className="overlay">
            <h3>condo hotel casagrande</h3>
          </div>
        </a>

        {/* Portfolio Item 3 */}
        <a
          href="/pdf/CasaSevilla.pdf"
          target="_blank"
          rel="noopener noreferrer"
          className="portfolio-item"
        >
          <img src="/images/obra3.jpg" alt="Obra 3" />
          <div className="overlay">
            <h3>casa sevilla</h3>
          </div>
        </a>

        {/* Portfolio Item 4 */}
        <a
          href="/pdf/EdificioVilela2.pdf"
          target="_blank"
          rel="noopener noreferrer"
          className="portfolio-item"
        >
          <img src="/images/obra4.jpg" alt="Obra 4" />
          <div className="overlay">
            <h3>edificio vilela 2</h3>
          </div>
        </a>

        {/* Portfolio Item 5 */}
        <a
          href="/pdf/EdificioCommodore.pdf"
          target="_blank"
          rel="noopener noreferrer"
          className="portfolio-item"
        >
          <img src="/images/obra5.jpg" alt="Obra 5" />
          <div className="overlay">
            <h3>edificio commodore</h3>
          </div>
        </a>
      </section>
    </Layout>
  );
}
