import { useState } from 'react'
import { Arrow, LabMark } from './Icons'

const navigation = [
  ['/', 'Home'],
  ['/research', 'Research'],
  ['/team', 'Team'],
  ['/publications', 'Publications'],
  ['/join-us', 'Join Us'],
]

export default function Layout({ pathname, children }) {
  const [menuOpen, setMenuOpen] = useState(false)
  return (
    <>
      <a className="skip-link" href="#main">
        Skip to content
      </a>
      <div className="university-bar">
        <div className="container university-inner">
          <a href="https://www.ncsu.edu/" target="_blank" rel="noreferrer">
            NC STATE UNIVERSITY
          </a>
          <span>Mechanical & Aerospace Engineering</span>
        </div>
      </div>
      <header className="site-header">
        <div className="container header-inner">
          <a href="/" className="brand" aria-label="Intelligent Controls Lab home">
            <span className="brand-mark">
              <LabMark />
            </span>
            <span>
              Intelligent Controls Lab<small>NORTH CAROLINA STATE UNIVERSITY</small>
            </span>
          </a>
          <button
            className="menu-toggle"
            aria-expanded={menuOpen}
            aria-controls="main-navigation"
            aria-label={menuOpen ? 'Close navigation' : 'Open navigation'}
            onClick={() => setMenuOpen(!menuOpen)}
          >
            {menuOpen ? (
              '✕'
            ) : (
              <>
                <span />
                <span />
              </>
            )}
          </button>
          <nav
            id="main-navigation"
            className={menuOpen ? 'navigation is-open' : 'navigation'}
            aria-label="Main navigation"
          >
            {navigation.map(([url, label]) => (
              <a
                key={url}
                href={url}
                aria-current={pathname === url ? 'page' : undefined}
                className={`${pathname === url ? 'active' : ''} ${url === '/join-us' ? 'nav-join' : ''}`}
                onClick={() => setMenuOpen(false)}
              >
                {label}
                {url === '/join-us' && <Arrow diagonal />}
              </a>
            ))}
          </nav>
        </div>
      </header>
      <main id="main">{children}</main>
      <footer className="site-footer">
        <div className="container">
          <div className="footer-top">
            <a className="brand footer-brand" href="/">
              <span className="brand-mark">
                <LabMark />
              </span>
              <span>
                Intelligent Controls Lab<small>We care how things move.</small>
              </span>
            </a>
            <div className="footer-location">
              Mechanical and Aerospace Engineering
              <br />
              North Carolina State University
              <br />
              Raleigh, North Carolina
            </div>
            <a className="footer-contact" href="mailto:donggun_lee@ncsu.edu">
              Get in touch <Arrow diagonal />
              <span>donggun_lee@ncsu.edu</span>
            </a>
          </div>
          <div className="footer-bottom">
            <span>
              © {new Date().getFullYear()} Intelligent Controls Lab. All rights reserved.
            </span>
            <a href="https://www.ncsu.edu/" target="_blank" rel="noreferrer">
              NC STATE UNIVERSITY <Arrow diagonal />
            </a>
          </div>
        </div>
      </footer>
    </>
  )
}
