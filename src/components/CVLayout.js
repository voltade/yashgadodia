import React from 'react'
import Helmet from 'react-helmet'

import '../styles/cv.css'

export const CVLayout = ({ children }) => {
  return (
    <>
      <Helmet>
        <link rel="icon" type="image/png" href="/favicon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
      </Helmet>
      {children}
    </>
  )
}

