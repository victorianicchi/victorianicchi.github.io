// pages/about.js
import Layout from '../components/Layout';
import { useLanguage } from '../context/LanguageContext';

export default function About() {
  const { lang } = useLanguage();

  // Bilingual text content for the About page
  const content = {
    en: (
      <>
        <h2>About</h2>
        <p>
          Greetings! I’m Victoria Nicchi, an architecture student at the University
          of Buenos Aires, offering architectural and design services...
        </p>
        <p>
          Collaboration is central to my work, ensuring each space resonates 
          with the individuality of those who inhabit it...
        </p>
      </>
    ),
    es: (
      <>
        <h2>Acerca de mí</h2>
        <p>
          ¡Hola! Soy Victoria Nicchi, estudiante de arquitectura en la Universidad
          de Buenos Aires, y ofrezco servicios de arquitectura y diseño...
        </p>
        <p>
          La colaboración es fundamental en mi trabajo, asegurándome de que cada 
          espacio refleje la identidad de quienes lo habitan...
        </p>
      </>
    ),
  };

  return (
    <Layout pageTitle={lang === 'en' ? 'About' : 'Acerca de mí'}>
      <div className="info-wrapper" style={{ alignItems: 'flex-start' }}>
        <div className="info-image" style={{ maxWidth: '300px', marginRight: '2rem' }}>
          <img
            src="/images/about_picture.jpg"
            alt="About me"
            style={{ width: '100%', height: 'auto', borderRadius: '4px' }}
          />
        </div>
        <div className="info-text">
          {content[lang]}
        </div>
      </div>
    </Layout>
  );
}
