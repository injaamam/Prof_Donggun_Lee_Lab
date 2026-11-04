import { useState } from 'react'

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
        Skip to main content
      </a>
      <header className="site-header">
        <div className="header-inner">
          <a className="brand" href="/">
            ICL · Intelligent Controls Lab
          </a>
          <button
            className="menu-toggle"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-expanded={menuOpen}
            aria-controls="main-navigation"
            aria-label={menuOpen ? 'Close navigation' : 'Open navigation'}
          >
            {menuOpen ? '✕' : '☰'}
          </button>
          <nav
            id="main-navigation"
            aria-label="Main navigation"
            className={menuOpen ? 'navigation is-open' : 'navigation'}
          >
            {navigation.map(([url, label]) => (
              <a key={url} href={url} aria-current={pathname === url ? 'page' : undefined}>
                {label}
              </a>
            ))}
          </nav>
        </div>
      </header>
      <main id="main" className="container">
        {children}
      </main>
      <footer className="site-footer container">
        <a href="https://www.ncsu.edu/" target="_blank" rel="noreferrer">
          <img src="/images/lab-logo.png" alt="NC State University" />
        </a>
        <p>
          @ 2026 Intelligent Controls Lab, North Carolina State University. All rights reserved.
        </p>
      </footer>
    </>
  )
}
