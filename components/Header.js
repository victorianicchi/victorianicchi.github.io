// components/Header.js
import Link from 'next/link';
import Image from 'next/image';

export default function Header() {
  return (
    <header className="site-header">
      <nav className="top-nav">
        <ul>
          <li>
            <Link href="/">
              <a>Home</a>
            </Link>
          </li>
          <li>
            <Link href="/about">
              <a>About</a>
            </Link>
          </li>
          <li>
            <a
              href="/pdf/cv.pdf"
              target="_blank"
              rel="noopener noreferrer"
            >
              CV
            </a>
          </li>
          <li>
            <Link href="/contact">
              <a>Contact</a>
            </Link>
          </li>
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
