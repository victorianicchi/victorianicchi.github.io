// components/Hero.js
import { useLanguage } from '../context/LanguageContext';

export default function Hero() {
  const { lang } = useLanguage();

  const content = {
    en: {
      heading: 'Welcome to My Portfolio',
      subheading: 'Exploring Architecture & Art in a Minimalist Way',
    },
    es: {
      heading: 'Bienvenidos a Mi Portafolio',
      subheading: 'Explorando Arquitectura & Arte de una Forma Minimalista',
    },
  };

  return (
    <section className="hero fade-in">
      <h1>{content[lang].heading}</h1>
      <p>{content[lang].subheading}</p>
    </section>
  );
}
