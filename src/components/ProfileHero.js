import React from 'react'

import { Hero } from './Hero'

export const ProfileHero = ({
  kicker,
  headline,
  lede,
  now,
  highlightsTitle = 'Past work',
  highlights = [],
  ctas,
  image,
}) => {
  return (
    <Hero type="index">
      <div className="hero-wrapper">
        <div>
          {kicker && <p className="hero-kicker">{kicker}</p>}
          {headline && <h1>{headline}</h1>}
          {lede && <div className="hero-description">{lede}</div>}
          {now && <p className="hero-now">{now}</p>}

          {highlights?.length > 0 && (
            <>
              <p className="hero-proof-points-title">{highlightsTitle}</p>
              <ul className="hero-proof-points">
                {highlights.map((item) => (
                  <li key={item.title}>
                    <span className="hero-proof-point-header">{item.title}</span>
                    {item.body && (
                      <span className="hero-proof-point-body">{item.body}</span>
                    )}
                  </li>
                ))}
              </ul>
            </>
          )}

          {ctas}
        </div>

        {image?.src && (
          <div className="hero-image-container">
            <img
              src={image.src}
              className="hero-image"
              alt={image.alt || 'Portrait illustration'}
            />
          </div>
        )}
      </div>
    </Hero>
  )
}

