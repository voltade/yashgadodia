import React from 'react'
import { Link } from 'gatsby'

export const Heading = ({ title, description, slug, buttonText }) => {
  return (
    <header className="heading">
      <h2>
        <span>{title}</span>
        {slug && buttonText && (
          <Link className="button small" to={slug}>
            {buttonText}
          </Link>
        )}
      </h2>
      {description && <div className="description">{description}</div>}
    </header>
  )
}
