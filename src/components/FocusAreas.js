import React from 'react'

export const FocusAreas = ({ items }) => {
  if (!items?.length) return null

  return (
    <div className="pillars">
      {items.map((item) => (
        <div className="pillar" key={item.title}>
          <h3>{item.title}</h3>
          <p>{item.body}</p>
        </div>
      ))}
    </div>
  )
}

