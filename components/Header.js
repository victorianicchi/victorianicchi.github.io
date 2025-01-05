// components/Header.js
import Link from 'next/link';
import { useLanguage } from '../context/LanguageContext';

export default function Header() {
  const { lang, toggleLang } = useLanguage();

  return (
    <header className="site-header">
      <nav className="top-nav">
        <ul>
          <li>
            <Link href="/">
              <a>{lang === 'en' ? 'Home' : 'Inicio'}</a>
            </Link>
          </li>
          <li>
            <Link href="/about">
              <a>{lang === 'en' ? 'About' : 'Acerca'}</a>
            </Link>
          </li>
          <li>
            <a href="/pdf/cv.pdf">
              {lang === 'en' ? 'CV' : 'CV'}
            </a>
          </li>
          <li>
            <Link href="/contact">
              <a>{lang === 'en' ? 'Contact' : 'Contacto'}</a>
            </Link>
          </li>
        </ul>
      </nav>

      {/* Language Toggle Only (no more social icons here) */}
      <button onClick={toggleLang} className="lang-toggle-button">
        {lang === 'en' ? 'es' : 'en'}
      </button>
    </header>
  );
}
