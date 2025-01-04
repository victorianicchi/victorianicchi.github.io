// pages/about.js
import Layout from '../components/Layout';
import { useLanguage } from '../context/LanguageContext';

export default function About() {
  const { lang } = useLanguage();

  // Bilingual About text
  const aboutContent = {
    en: {
      heading: 'About Me',
      paragraph1: `Hi! I'm Victoria Nicchi, an architect student from the University of Buenos Aires.
I offer architectural & design services including architectural plans & drawings,
3D modeling & visualization, and design development. I'm proficient in AutoCAD,
Revit, SketchUp, Rhinoceros, Lumion, & Adobe Suite...`,
      paragraph2: `I collaborate with my clients to create perfectly humble homes.
My design is purposeful, producing work allied with the notions of reductivism
and beautility... Let’s work together!`,
    },
    es: {
      heading: 'Acerca de Mí',
      paragraph1: `¡Hola! Soy Victoria Nicchi, estudiante de arquitectura en la Universidad de Buenos Aires.
Ofrezco servicios de arquitectura y diseño que incluyen planos y dibujos,
modelado y visualización 3D, y desarrollo de proyectos. Domino AutoCAD,
Revit, SketchUp, Rhinoceros, Lumion y Adobe Suite...`,
      paragraph2: `Colaboro con mis clientes para crear hogares perfectamente humildes.
Mi diseño es intencional, produciendo trabajo aliado con las nociones de reductivismo
y beautility... ¡Trabajemos juntos!`,
    },
  };

  const a = aboutContent[lang];

  return (
    <Layout pageTitle={a.heading}>
      <section
        className="about-section fade-in"
        style={{
          /* A light background to set it apart; adjust color as needed */
          backgroundColor: '#f9f9f9',
          padding: '4rem 2rem',
        }}
      >
        {/* Optional larger heading */}
        <h1
          style={{
            textAlign: 'center',
            fontSize: '2.5rem',
            marginBottom: '2rem',
            fontWeight: 700,
          }}
        >
          {a.heading}
        </h1>

        <div
          className="about-container"
          style={{
            display: 'flex',
            flexWrap: 'wrap',
            gap: '2rem',
            maxWidth: '1200px',
            margin: '0 auto', // center the whole container
            alignItems: 'center',
          }}
        >
          {/* Left side: text */}
          <div
            className="about-text"
            style={{
              flex: 1,
              minWidth: '250px',
            }}
          >
            <p
              style={{
                fontSize: '1.125rem',
                lineHeight: 1.6,
                color: '#333',
                marginBottom: '1.5rem',
              }}
            >
              {a.paragraph1}
            </p>
            <p
              style={{
                fontSize: '1.125rem',
                lineHeight: 1.6,
                color: '#333',
              }}
            >
              {a.paragraph2}
            </p>
          </div>

          {/* Right side: image */}
          <div
            className="about-image"
            style={{
              flexBasis: '350px',
              maxWidth: '350px',
              marginLeft: 'auto',
            }}
          >
            <img
              src="/images/about_picture.jpg"
              alt="Victoria Nicchi"
              style={{
                width: '100%',
                borderRadius: '8px',
                boxShadow: '0 10px 20px rgba(0, 0, 0, 0.1)',
                objectFit: 'cover',
              }}
            />
          </div>
        </div>
      </section>
    </Layout>
  );
}
