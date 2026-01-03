import React, { useEffect, useState } from 'react'
import { Link } from 'gatsby'
import { SocialIcon } from 'react-social-icons'
import { useLocation } from '@reach/router'

import blog from '../assets/nav-blog.png'
import projects from '../assets/nav-projects.png'
import { Menu } from '../assets/Menu'
import { Close } from '../assets/Close'
import { Searchbar } from './Searchbar'
import { ColorDropdown } from './ColorDropdown'
import { BookOpen } from '../assets/BookOpen'

const links = [
  { url: '/blog', label: 'Blog', image: blog },
  { url: '/projects', label: 'Projects', image: projects },
  { url: '/writing', label: 'Writing', image: blog },
  { url: '/notes', label: 'Notes', image: blog },
]

const socialLinks = [
  { url: 'https://www.linkedin.com/in/yashgadodia' },
  { url: 'https://open.spotify.com/search/yash%20gadodia' },
  { url: 'https://www.goodreads.com/user/show/59594250-yash-gadodia', type: 'goodreads' },
]

export const Navigation = ({
  currentColor,
  setCurrentColor,
}) => {
  const location = useLocation()
  const currentPath = location.pathname
  const [navOpen, setNavOpen] = useState(false)
  const [query, setQuery] = useState('')

  useEffect(() => {
    setNavOpen(false)
  }, [currentPath])

  const handleToggleMobileNav = () => {
    setNavOpen((prev) => !prev)
  }

  const handleCloseMobileNav = () => {
    setNavOpen(false)
  }

  return (
    <header className="navbar">
      <div className="navbar-title">
        <div className="navbar-title-content">
          <Link to="/" className="navbar-title-link">
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
        </div>
      </div>
      <div className="navbar-container">
        <section className="navbar-section navbar-section-search">
          {!currentPath.includes('blog') &&
            !currentPath.includes('notes') &&
            !currentPath.includes('writing') && (
            <Searchbar
              isLocal={false}
              query={query}
              setQuery={setQuery}
              handleSearch={(event) => {
                setQuery(event.target.value)
              }}
            />
          )}
        </section>
        <section className="navbar-section">
          <button
            className={`navbar-button nav-menu-button ${
              navOpen ? 'active' : ''
            }`}
            type="button"
            onClick={handleToggleMobileNav}
            aria-label={navOpen ? 'Close menu' : 'Open menu'}
          >
            {navOpen ? <Close /> : <Menu />}
          </button>
          <nav className={`navbar-menu nav-items ${navOpen ? 'active' : ''}`}>
            {links.map((link) => (
              <Link
                key={link.url}
                to={link.url}
                activeClassName="active"
                onClick={handleCloseMobileNav}
              >
                <img src={link.image} alt={link.label} />
                {link.label}
              </Link>
            ))}
          </nav>
          <nav className="navbar-menu social">
            <ColorDropdown
              currentColor={currentColor}
              setCurrentColor={setCurrentColor}
            />
            {socialLinks.map((link) => (
              link.type === 'goodreads' ? (
                <a
                  key={link.url}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="navbar-icon custom-social-icon"
                  aria-label="Goodreads"
                  title="Goodreads"
                >
                  <BookOpen />
                </a>
              ) : (
                <SocialIcon
                  target="_blank"
                  rel="noopener noreferrer"
                  key={link.url}
                  url={link.url}
                  fgColor="currentColor"
                  bgColor="transparent"
                  className="navbar-icon"
                />
              )
            ))}
          </nav>
        </section>
      </div>
    </header>
  )
}
