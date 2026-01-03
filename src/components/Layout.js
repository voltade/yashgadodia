import React, { useState, useEffect } from 'react'
import Helmet from 'react-helmet'

import { Navigation } from './Navigation'
import { Footer } from './Footer'
import { Sidebar } from './Sidebar'

import '../styles/style.css'
import '../styles/new-moon.css'

export const Layout = ({ children }) => {
  const [currentColor, setCurrentColor] = useState('var(--theme-green)')

  useEffect(() => {
    const html = document.documentElement
    const savedColor = window.localStorage.getItem('color')

    html.classList.remove('is-dark')
    html.classList.remove('is-light')
    html.style.setProperty('color-scheme', 'light')

    try {
      window.localStorage.removeItem('theme')
    } catch (e) {}

    if (savedColor) {
      setCurrentColor(savedColor)
      document.documentElement.style.setProperty('--color-primary', savedColor)
    }
  }, [])

  return (
    <div>
      <Helmet>
        <link rel="icon" type="image/png" href="/favicon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
      </Helmet>

      <div id="layout" className="layout">
        <Navigation
          currentColor={currentColor}
          setCurrentColor={setCurrentColor}
        />
        <Sidebar
          currentColor={currentColor}
          setCurrentColor={setCurrentColor}
        />
        <div className="main-wrapper">
          <div className="main-container">{children}</div>
          <Footer />
        </div>
      </div>
    </div>
  )
}
