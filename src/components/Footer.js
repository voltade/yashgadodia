import React from 'react'
import { SocialIcon } from 'react-social-icons'
import { BookOpen } from '../assets/BookOpen'

export const Footer = () => {
  const year = new Date().getFullYear()

  return (
    <footer className="footer">
      <section className="footer-section">
        <nav className="footer-icons" aria-label="Links">
          <SocialIcon
            url="mailto:pirsquare.yash@gmail.com"
            fgColor="currentColor"
            bgColor="transparent"
            className="footer-icon"
          />
          <SocialIcon
            url="https://www.linkedin.com/in/yashgadodia"
            target="_blank"
            rel="noopener noreferrer"
            fgColor="currentColor"
            bgColor="transparent"
            className="footer-icon"
          />
          <SocialIcon
            url="https://open.spotify.com/search/yash%20gadodia"
            target="_blank"
            rel="noopener noreferrer"
            fgColor="currentColor"
            bgColor="transparent"
            className="footer-icon"
          />
          <a
            href="https://www.goodreads.com/user/show/59594250-yash-gadodia"
            target="_blank"
            rel="noopener noreferrer"
            className="footer-icon custom-social-icon"
            aria-label="Goodreads"
            title="Goodreads"
          >
            <BookOpen />
          </a>
        </nav>
        <div className="footer-made-by">© {year} Yash Gadodia</div>
      </section>
    </footer>
  )
}
