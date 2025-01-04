// pages/index.js
import Layout from '../components/Layout';
import { useLanguage } from '../context/LanguageContext';

export default function Home() {
  const { lang } = useLanguage();

  // Hero heading + short subheading
  const heroContent = {
    en: {
      heroTitle: 'Welcome to My Portfolio',
      heroSubtitle: 'Exploring Architecture & Art in a Minimalist Way',
    },
    es: {
      heroTitle: 'Bienvenidos a Mi Portafolio',
      heroSubtitle: 'Explorando Arquitectura & Arte de una Forma Minimalista',
    },
  };

  // The “About” text, now placed within Home
  const aboutContent = {
    en: {
      paragraph1: `Hello! I'm Victoria Nicchi, an architecture student from the University of Buenos Aires. I offer architectural and design services including architectural plans and drawings, 3D modeling and visualization, and design development. I'm proficient in AutoCAD, Revit, SketchUp, Rhinoceros, Lumion, and Adobe Suite.`,
      paragraph2: `I collaborate with my clients to create perfectly humble homes. My design is purposeful, producing work allied with the notions of reductivism and beautility. Let’s work together!`,
    },
    es: {
      paragraph1: `¡Hola! Soy Victoria Nicchi, estudiante de arquitectura en la Universidad de Buenos Aires. Ofrezco servicios de arquitectura y diseño que incluyen planos y dibujos, modelado y visualización 3D, y desarrollo de proyectos. Domino AutoCAD, Revit, SketchUp, Rhinoceros, Lumion y Adobe Suite.`,
      paragraph2: `Colaboro con mis clientes para crear hogares humildes y perfectos. Mi diseño es intencional, alineado con las nociones de reductivismo y beautility. ¡Trabajemos juntos!`,
    },
  };

  const h = heroContent[lang];
  const a = aboutContent[lang];

  return (
    <Layout pageTitle={lang === 'en' ? 'Home' : 'Inicio'}>
      {/* Hero Section */}
      <section className="hero fade-in">
        <h1>{h.heroTitle}</h1>
        <p>{h.heroSubtitle}</p>
      </section>

      {/* "About" style content on Home */}
      <section className="home-about fade-in">
        <div className="about-text">
          <p>{a.paragraph1}</p>
          <p>{a.paragraph2}</p>
        </div>
        <div className="about-image">
          <img
            src="/images/about_picture.jpg"
            alt="About me"
            style={{ width: '100%', borderRadius: '4px' }}
          />
        </div>
      </section>

      {/* If you want to keep your 5 works below, you can include them here as well */}
      {/* Example of your portfolio items, if desired: 
      <section id="portfolio" className="portfolio-grid fade-in">
        ...
      </section>
      */}
    </Layout>
  );
}
