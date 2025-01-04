// pages/index.js
import Layout from '../components/Layout';
import { useLanguage } from '../context/LanguageContext';

export default function Home() {
  const { lang } = useLanguage();

  // Bilingual "About" content
  const aboutText = {
    en: {
      paragraph1: `Hi! I'm Victoria Nicchi, an architect student from the University of Buenos Aires.
      I offer architectural & design services including architectural plans & drawings,
      3D modeling & visualization, and design development. I'm proficient in AutoCAD,
      Revit, SketchUp, Rhinoceros, Lumion, & Adobe Suite...`,
      paragraph2: `I collaborate with my clients to create perfectly humble homes.
      My design is purposeful, producing work allied with the notions of reductivism and beautility...
      Let’s work together!`,
    },
    es: {
      paragraph1: `¡Hola! Soy Victoria Nicchi, estudiante de arquitectura en la Universidad de Buenos Aires.
      Ofrezco servicios de arquitectura y diseño que incluyen planos y dibujos,
      modelado y visualización 3D, y desarrollo de proyectos. Domino AutoCAD,
      Revit, SketchUp, Rhinoceros, Lumion y Adobe Suite...`,
      paragraph2: `Colaboro con mis clientes para crear hogares humildes y perfectos.
      Mi diseño es intencional, alineado con las nociones de reductivismo y beautility...
      ¡Trabajemos juntos!`,
    },
  };

  // Portfolio/Obras items (same for EN/ES, just the title can change if you want)
  // Here we keep the same items as your earlier setup
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

  const a = aboutText[lang];

  return (
    <Layout pageTitle={lang === 'en' ? 'Home' : 'Inicio'}>
      {/* About section (image on right) */}
      <section className="home-about fade-in" style={{ display: 'flex', flexWrap: 'wrap', gap: '2rem', padding: '2rem' }}>
        {/* Left Column: About text */}
        <div className="about-text" style={{ flex: 1, minWidth: '250px' }}>
          <p>{a.paragraph1}</p>
          <p>{a.paragraph2}</p>
        </div>

        {/* Right Column: About image */}
        <div className="about-image" style={{ flexBasis: '300px', maxWidth: '300px', marginLeft: 'auto' }}>
          <img
            src="/images/about_picture.jpg"
            alt="About me"
            style={{ width: '100%', borderRadius: '4px' }}
          />
        </div>
      </section>

      {/* Obras / Portfolio section */}
      <section id="portfolio" className="portfolio-grid fade-in">
        {obrasData.map((obra, index) => (
          <a
            key={index}
            href={`/pdf/${obra.pdf}`}
            target="_blank"
            rel="noopener noreferrer"
            className="portfolio-item"
          >
            <img src={`/images/${obra.img}`} alt={`Obra ${index + 1}`} />
            <div className="overlay">
              <h3>{obra.title}</h3>
            </div>
          </a>
        ))}
      </section>
    </Layout>
  );
}
