// components/Header.js
import Link from 'next/link';
import Image from 'next/image';
import { useLanguage } from '../context/LanguageContext';

export default function Header() {
  const { lang, toggleLang } = useLanguage();

  return (
    <header className="site-header">
      <nav className="top-nav">
        <ul>
          {/* Home */}
          <li>
            <Link href="/">
              <a>{lang === 'en' ? 'Home' : 'Inicio'}</a>
            </Link>
          </li>

          {/* CV: points to /pdf/cv.pdf */}
          <li>
            <a
              href="/pdf/cv.pdf"
              target="_blank"
              rel="noopener noreferrer"
            >
              {lang === 'en' ? 'CV' : 'CV'}
            </a>
          </li>

          {/* Contact */}
          <li>
            <Link href="/contact">
              <a>{lang === 'en' ? 'Contact' : 'Contacto'}</a>
            </Link>
          </li>

          {/* Instagram icon/button */}
          <li>
            <a
              href="https://www.instagram.com/__vickynicchi"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Image
                src="/images/instagram-icon.png"
                alt="Instagram"
                width={20}
                height={20}
              />
            </a>
          </li>
        </ul>
      </nav>

      {/* Language Toggle Button (styled nicer) */}
      <button
        onClick={toggleLang}
        className="lang-toggle-button"
      >
        {lang === 'en' ? 'Español' : 'English'}
      </button>
    </header>
  );
}
