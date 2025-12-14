import React from 'react'

import netlify from '../../content/thumbnails/netlify.png'
import gatsby from '../assets/gatsby.png'
import github from '../assets/nav-github.png'

const links = [
  { url: 'mailto:hello@yashgadodia.com', label: 'Email' },
  { url: '/rss.xml', label: 'RSS feed' },
  { url: 'https://github.com/yashgadodia', label: 'GitHub' },
  { url: 'https://www.linkedin.com/in/yashgadodia', label: 'LinkedIn' },
]
const madeWithLinks = [
  { url: 'https://www.gatsbyjs.org', label: 'Gatsby', icon: gatsby },
  { url: 'https://github.com/yashgadodia', label: 'GitHub', icon: github },
  { url: 'https://www.netlify.com', label: 'Netlify', icon: netlify },
]

export const Footer = () => {
  return (
    <footer className="footer">
      <section className="footer-section">
        <nav className="footer-menu">
          {links.map((link) => (
            <a
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              key={link.url}
              className="footer-link"
            >
              {link.label}
            </a>
          ))}
        </nav>
        <nav className="footer-menu-buttons">
          {madeWithLinks.map((link) => (
            <a
              href={link.url}
              title={link.label}
              target="_blank"
              rel="noopener noreferrer"
              key={link.url}
              className="button small"
            >
              <img src={link.icon} alt={link.label} />
              <span>{link.label}</span>
            </a>
          ))}
        </nav>
        <div className="footer-made-by">Made with ❤️ by yash gadodia</div>
      </section>
    </footer>
  )
}
