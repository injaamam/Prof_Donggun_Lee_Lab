import { useEffect, useState } from 'react'

const navigation = [
  ['/', 'Home'],
  ['/research', 'Research'],
  ['/team', 'Team'],
  ['/publications', 'Publications'],
  ['/join-us', 'Join Us'],
]

export default function Layout({ pathname, children }) {
  const [menuOpen, setMenuOpen] = useState(false)
  useEffect(() => {
    const close = (event) => {
      if (event.key === 'Escape') setMenuOpen(false)
    }
    window.addEventListener('keydown', close)
    return () => window.removeEventListener('keydown', close)
  }, [])
  return (
    <>
      <a className="skip-link" href="#main">
        Skip to main content
      </a>
      <header className="site-header">
        <div className="institution-bar">
          <a href="https://www.ncsu.edu/">NC STATE UNIVERSITY</a>
          <span>MECHANICAL & AEROSPACE ENGINEERING</span>
        </div>
        <div className="header-inner">
          <a className="brand" href="/">
            <span className="brand-monogram">
              icl<span>.</span>
            </span>
            <span className="brand-name">
              Intelligent
              <br />
              Controls Lab
            </span>
          </a>
          <button
            className="menu-toggle"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-expanded={menuOpen}
            aria-controls="main-navigation"
            aria-label={menuOpen ? 'Close navigation' : 'Open navigation'}
          >
            {menuOpen ? 'Close −' : 'Menu +'}
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
      <footer className="site-footer">
        <div className="container footer-grid">
          <div>
            <a className="footer-brand" href="/">
              Intelligent
              <br />
              Controls Lab<span>.</span>
            </a>
            <p>
              Precision in theory.
              <br />
              Possibility in motion.
            </p>
          </div>
          <div>
            <span className="eyebrow">OUR HOME</span>
            <p>
              Department of Mechanical
              <br />
              and Aerospace Engineering
              <br />
              North Carolina State University
            </p>
            <a className="text-link" href="https://www.ncsu.edu/">
              NC State University ↗
            </a>
          </div>
          <div>
            <span className="eyebrow">LET’S CONNECT</span>
            <a className="footer-email" href="mailto:donggun_lee@ncsu.edu">
              donggun_lee@ncsu.edu ↗
            </a>
            <a className="text-link" href="/join-us">
              Build what comes next with us ↗
            </a>
          </div>
        </div>
        <div className="container footer-bottom">
          <span>© {new Date().getFullYear()} Intelligent Controls Lab</span>
          <span>Raleigh, North Carolina</span>
          <a href="#main">Back to top ↑</a>
        </div>
      </footer>
    </>
  )
}
