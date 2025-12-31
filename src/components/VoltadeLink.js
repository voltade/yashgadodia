import React from 'react'

const VOLTADE_URL = 'https://voltade.com'

export function VoltadeLink({ children = 'Voltade', ...props }) {
  return (
    <a href={VOLTADE_URL} {...props}>
      {children}
    </a>
  )
}

