// pages/index.js
import Layout from '../components/Layout';
import { useLanguage } from '../context/LanguageContext';

export default function Home() {
  const { lang } = useLanguage();

  // Same Obras data (no bilingual heading needed)
  const obrasData = [
    {
      pdf: 'UtopiaSenior.pdf',
      img: 'obra1.jpg',
      title: 'viviendas Utopia Senior',
    },
    {
      pdf: 'CasagrandeCondo.pdf',
      img: 'obra2.jpg',
      title: 'condo hotel casagrande',
    },
    {
      pdf: 'CasaSevilla.pdf',
      img: 'obra3.jpg',
      title: 'casa sevilla',
    },
    {
      pdf: 'EdificioVilela2.pdf',
      img: 'obra4.jpg',
      title: 'edificio vilela 2',
    },
    {
      pdf: 'EdificioCommodore.pdf',
      img: 'obra5.jpg',
      title: 'edificio commodore',
    },
  ];

  return (
    <Layout pageTitle={lang === 'en' ? 'Home' : 'Inicio'}>
      {/* We no longer have the heading. We only display the portfolio items. */}
      <section id="portfolio" className="portfolio-grid fade-in">
        {obrasData.map((obra, index) => (
          <a
            key={index}
            href={`/pdf/${obra.pdf}`}
            target="_blank"
            rel="noopener noreferrer"
            className="portfolio-item"
          >
            <img
              src={`/images/${obra.img}`}
              alt={obra.title}
            />
            <div className="overlay">
              <h3>{obra.title}</h3>
            </div>
          </a>
        ))}
      </section>
    </Layout>
  );
}
