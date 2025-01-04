// pages/about.js
import Layout from '../components/Layout';
import { useLanguage } from '../context/LanguageContext';

export default function About() {
  const { lang } = useLanguage();

  // Bilingual About text
  const aboutContent = {
    en: {
      paragraph1: `Hi! I'm Victoria Nicchi, an architect student from the University of Buenos Aires.
I offer architectural & design services including architectural plans & drawings,
3D modeling & visualization, and design development. I'm proficient in AutoCAD,
Revit, SketchUp, Rhinoceros, Lumion, & Adobe Suite...`,

      paragraph2: `I collaborate with my clients to create perfectly humble homes.
My design is purposeful, producing work allied with the notions of
reductivism and beautility... Let’s work together!`,
    },
    es: {
      paragraph1: `¡Hola! Soy Victoria Nicchi, estudiante de arquitectura en la Universidad de Buenos Aires.
Ofrezco servicios de arquitectura y diseño que incluyen planos y dibujos arquitectónicos,
modelado y visualización 3D, y desarrollo de proyectos. Domino AutoCAD, 
Revit, SketchUp, Rhinoceros, Lumion y Adobe Suite...`,

      paragraph2: `Colaboro con mis clientes para crear hogares perfectamente humildes.
Mi diseño es intencional, produciendo un trabajo aliado con las nociones de 
reductivismo y beautility... ¡Trabajemos juntos!`,
    },
  };

  const a = aboutContent[lang];

  return (
    <Layout pageTitle={lang === 'en' ? 'About' : 'Acerca'}>
      {/* "Nice" two-column layout: text (left), image (right) */}
      <section
        className="about-section fade-in"
        style={{
          display: 'flex',
          flexWrap: 'wrap',
          gap: '2rem',
          padding: '2rem',
        }}
      >
        {/* Left side: paragraphs */}
        <div style={{ flex: 1, minWidth: '250px' }}>
          <p>{a.paragraph1}</p>
          <p style={{ marginTop: '1rem' }}>{a.paragraph2}</p>
        </div>

        {/* Right side: smaller image */}
        <div
          style={{
            flexBasis: '300px',
            maxWidth: '300px',
            marginLeft: 'auto',
          }}
        >
          <img
            src="/images/about_picture.jpg"
            alt="About me"
            style={{ width: '100%', borderRadius: '4px' }}
          />
        </div>
      </section>
    </Layout>
  );
}
