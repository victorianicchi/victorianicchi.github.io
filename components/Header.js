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
              <a>portfolio</a>
            </Link>
          </li>
          <li>
            <Link href="/about">
              <a>about</a>
            </Link>
          </li>
          {/* CV link - opens in new tab */}
          <li>
            <a
              href="/pdf/cv.pdf"
              target="_blank"
              rel="noopener noreferrer"
            >
              cv
            </a>
          </li>
          <li>
            <Link href="/contact">
              <a>contact</a>
            </Link>
          </li>
          <li>
            <a
              href="https://www.instagram.com/__vickynicchi"
              target="_blank"
              rel="noopener noreferrer"
            >
              {/* Next.js <Image> example - optional. 
                  (You could also use plain <img src="/images/instagram-icon.png" />) */}
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
