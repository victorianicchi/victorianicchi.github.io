// components/Header.js
import Link from 'next/link';
import Image from 'next/image';
import { useLanguage } from '../context/LanguageContext';

export default function Header() {
  const { lang, toggleLang } = useLanguage();

  return (
    <header className="site-header">
      {/* Main navigation */}
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
            <a
              href="/pdf/cv.pdf"
              target="_blank"
              rel="noopener noreferrer"
            >
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

      {/* Social links + Language toggle */}
      <div className="header-right">
        <ul className="social-links">
          {/* TikTok */}
          <li>
            <a
              href="https://www.tiktok.com/@YourTikTokHandle"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Image
                src="/images/tiktok-icon.png"
                alt="TikTok"
                width={20}
                height={20}
              />
            </a>
          </li>
          {/* Instagram */}
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
          {/* LinkedIn */}
          <li>
            <a
              href="https://www.linkedin.com/in/YourLinkedIn/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Image
                src="/images/linkedin-icon.png"
                alt="LinkedIn"
                width={20}
                height={20}
              />
            </a>
          </li>
          {/* X (Twitter) */}
          <li>
            <a
              href="https://twitter.com/YourHandle"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Image
                src="/images/x-icon.png"
                alt="X"
                width={20}
                height={20}
              />
            </a>
          </li>
        </ul>

        {/* Language toggle */}
        <button onClick={toggleLang} className="lang-toggle-button">
          {lang === 'en' ? 'es' : 'en'}
        </button>
      </div>
    </header>
  );
}
