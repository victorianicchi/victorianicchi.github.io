// pages/index.js
import Layout from '@/components/Layout';

export default function Home() {
  return (
    <Layout pageTitle="Home" description="Architecture Portfolio of Victoria Nicchi">
      <div className="obras-section">
        <div className="obra">
          <a href="/pdf/UtopiaSenior.pdf" target="_blank" rel="noopener noreferrer">
            <img src="/images/obra1.jpg" alt="Obra 1" />
            <p>viviendas Utopia Senior</p>
          </a>
        </div>

        <div className="obra">
          <a href="/pdf/CasagrandeCondo.pdf" target="_blank" rel="noopener noreferrer">
            <img src="/images/obra2.jpg" alt="Obra 2" />
            <p>condo hotel casagrande</p>
          </a>
        </div>

        <div className="obra">
          <a href="/pdf/CasaSevilla.pdf" target="_blank" rel="noopener noreferrer">
            <img src="/images/obra3.jpg" alt="Obra 3" />
            <p>casa sevilla</p>
          </a>
        </div>

        <div className="obra">
          <a href="/pdf/EdificioVilela2.pdf" target="_blank" rel="noopener noreferrer">
            <img src="/images/obra4.jpg" alt="Obra 4" />
            <p>edificio vilela 2</p>
          </a>
        </div>

        <div className="obra">
          <a href="/pdf/EdificioCommodore.pdf" target="_blank" rel="noopener noreferrer">
            <img src="/images/obra5.jpg" alt="Obra 5" />
            <p>edificio commodore</p>
          </a>
        </div>
      </div>
    </Layout>
  );
}
