import React from 'react'

const links = [
  { url: 'mailto:pirsquare.yash@gmail.com', label: 'Email' },
  { url: 'https://www.linkedin.com/in/yashgadodia', label: 'LinkedIn' },
  { url: 'https://open.spotify.com/search/yash%20gadodia', label: 'Spotify' },
  { url: 'https://www.goodreads.com/user/show/59594250-yash-gadodia', label: 'Goodreads' },
]

export const Footer = () => {
  return (
    <footer className="footer">
      <section className="footer-section">
        <nav className="footer-menu-buttons">
          {links.map((link) => {
            const isExternal = link.url.startsWith('http')

            return (
              <a
                href={link.url}
                title={link.label}
                target={isExternal ? '_blank' : undefined}
                rel={isExternal ? 'noopener noreferrer' : undefined}
                key={link.url}
                className="button small"
              >
                {link.icon ? <img src={link.icon} alt={link.label} /> : null}
                <span>{link.label}</span>
              </a>
            )
          })}
        </nav>
        <div className="footer-made-by">Made by Yash Gadodia</div>
        <div className="footer-credit">
          Credits: {' '}
          <a
            href="https://github.com/taniarascia/taniarascia.com"
            target="_blank"
            rel="noopener noreferrer"
            className="footer-link"
          >
            taniarascia.com
          </a>
        </div>
      </section>
    </footer>
  )
}
