import React from 'react'
import { Link } from 'gatsby'

import blog from '../assets/nav-blog.png'
import projects from '../assets/nav-projects.png'
import { ColorDropdown } from './ColorDropdown'

export const Sidebar = ({ currentColor, setCurrentColor }) => {
  const links = [
    { url: '/blog', label: 'Blog', image: blog },
    { url: '/projects', label: 'Projects', image: projects },
    { url: '/writing', label: 'Writing', image: blog },
    { url: '/notes', label: 'Notes', image: blog },
  ]

  return (
    <aside className="sidebar">
      <section className="sidebar-section">
        <div className="sidebar-title-link">
          <Link to="/" className="flex-align-center gap">
            <span>
              <img
                src="/logo.png"
                className="navbar-logo"
                alt="Yash Gadodia"
                title="Yash Gadodia"
                height="16"
                width="16"
              />
            </span>
            <span className="site-name">Yash Gadodia</span>
          </Link>
          <div className="flex-align-center">
            <ColorDropdown
              currentColor={currentColor}
              setCurrentColor={setCurrentColor}
            />
          </div>
        </div>
      </section>

      <section className="sidebar-section">
        <nav className="sidebar-nav-links">
          {links.map((link) => (
            <Link key={link.url} to={link.url} activeClassName="active">
              <img src={link.image} alt={link.label} />
              {link.label}
            </Link>
          ))}
        </nav>
      </section>

      <section className="sidebar-section">
        <h2>Stay Connected</h2>
        <p className="sidebar-links">
          <a href="mailto:pirsquare.yash@gmail.com">Email</a>
          <a
            href="https://www.linkedin.com/in/yashgadodia"
            target="_blank"
            rel="noopener noreferrer"
          >
            LinkedIn
          </a>
          <a
            href="https://open.spotify.com/search/yash%20gadodia"
            target="_blank"
            rel="noopener noreferrer"
          >
            Spotify
          </a>
          <a
            href="https://www.goodreads.com/user/show/59594250-yash-gadodia"
            target="_blank"
            rel="noopener noreferrer"
          >
            Goodreads
          </a>
        </p>
      </section>
    </aside>
  )
}
