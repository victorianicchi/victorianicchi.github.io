// components/Header.js
import Link from 'next/link';
import Image from 'next/image';

export default function Header() {
  return (
    <header className="site-header">
      {/* We remove the logo/brand text (e.g., "V. Nicchi"), 
          so just the nav remains. */}

      <nav className="top-nav">
        <ul>
          {/* Home */}
          <li>
            <Link href="/">
              <a>Home</a>
            </Link>
          </li>

          {/* About */}
          <li>
            <Link href="/about">
              <a>About</a>
            </Link>
          </li>

          {/* CV: points to /pdf/cv.pdf */}
          <li>
            <a
              href="/pdf/cv.pdf"
              target="_blank"
              rel="noopener noreferrer"
            >
              CV
            </a>
          </li>

          {/* Contact */}
          <li>
            <Link href="/contact">
              <a>Contact</a>
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
    </header>
  );
}
