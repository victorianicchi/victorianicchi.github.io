// pages/index.js
import Layout from '../components/Layout';
import { useLanguage } from '../context/LanguageContext';

export default function Home() {
  const { lang } = useLanguage();

  // Same Obras data for both languages
  // (You could change the titles if you wanted bilingual titles.)
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

  // If you want a bilingual heading for your obras section:
  const sectionTitle = {
    en: 'My Works',
    es: 'Mis Obras',
  };

  return (
    <Layout pageTitle={lang === 'en' ? 'Home' : 'Inicio'}>
      {/* We only show the Obras / portfolio grid now,
          removing any hero text or about text from here. */}

      <section className="portfolio-grid fade-in">
        <h2 style={{ marginLeft: '2rem' }}>
          {sectionTitle[lang]}
        </h2>

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
