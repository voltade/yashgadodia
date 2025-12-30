import React from 'react'
import { Link } from 'gatsby'

import floppyLogo from '../assets/nav-floppy.png'
import floppy from '../assets/floppylogo.png'
import blog from '../assets/nav-blog.png'
import projects from '../assets/nav-projects.png'
import { Moon } from '../assets/Moon'
import { Sun } from '../assets/Sun'
import { ColorDropdown } from './ColorDropdown'

export const Sidebar = ({
  theme,
  handleUpdateTheme,
  currentColor,
  setCurrentColor,
}) => {
  const links = [
    { url: '/writing', label: 'Writing', image: blog },
    { url: '/blog', label: 'Blog', image: blog },
    { url: '/notes', label: 'Notes', image: projects },
    { url: '/projects', label: 'Projects', image: projects },
    { url: '/me', label: 'About Me', image: floppy },
  ]

  return (
    <aside className="sidebar">
      <section className="sidebar-section">
        <div className="sidebar-title-link">
          <Link to="/" className="flex-align-center gap">
            <span>
              <img
                src={floppyLogo}
                className="navbar-logo"
                alt="yashgadodia.com"
                title="💾"
                height="16"
                width="16"
              />
            </span>
            <span className="site-name">yashgadodia.com</span>
          </Link>
          <div className="flex-align-center">
            <ColorDropdown
              currentColor={currentColor}
              setCurrentColor={setCurrentColor}
            />
            <div className="tooltip-container">
              <button
                className="navbar-button"
                onClick={() => {
                  const newTheme = theme === 'dark' ? 'light' : 'dark'

                  handleUpdateTheme(newTheme)
                }}
              >
                {theme === 'dark' ? <Sun /> : <Moon />}
              </button>
              <div className="tooltip">Theme</div>
            </div>
          </div>
        </div>
      </section>

      <section className="sidebar-section">
        <h2>About Me</h2>
        <div className="sidebar-content">
          <p>
            I’m <Link to="/me">Yash</Link>. I am a Software Engineer turned Product Manager.
            I like to build things.
          </p>
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
