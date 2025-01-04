// components/Header.js
import Link from 'next/link';

export default function Header() {
  return (
    <header className="site-header">
      <div className="logo">V. Nicchi</div>
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
            <Link href="/obras">
              <a>Obras</a>
            </Link>
          </li>
          <li>
            <Link href="/contact">
              <a>Contact</a>
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}
