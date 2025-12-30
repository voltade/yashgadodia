import React, { useMemo } from 'react'
import { Link } from 'gatsby'

import { isNewPost, getFormattedDate } from '../utils/helpers'

export const Post = ({ node, prefix, includeYear, query }) => {
  let formattedDate

  if (node.date) {
    if (!includeYear) {
      formattedDate = getFormattedDate(node.date, 1)
    } else {
      formattedDate = getFormattedDate(node.date)
    }
  }

  const newPost = useMemo(() => isNewPost(node.date), [node.date])

  const getTitle = (title, query) => {
    if (query) {
      const re = new RegExp(query.replace(/[.*+?^${}()|[\]\\]/g, '\\$&'), 'i')
      const highlightStart = title.search(re)

      if (highlightStart !== -1) {
        const highlightEnd = highlightStart + query.length

        return (
          <div>
            {title.slice(0, highlightStart)}
            <strong className="searched">
              {title.slice(highlightStart, highlightEnd)}
            </strong>
            {title.slice(highlightEnd)}
          </div>
        )
      }
      return <div>{title}</div>
    }
    return <div>{title}</div>
  }

  const href = prefix ? `/${prefix}${node.slug}` : node.slug

  const Wrapper = ({ children }) => {
    if (node.external_url) {
      return (
        <a
          href={node.external_url}
          target="_blank"
          rel="noopener noreferrer"
          className="post"
        >
          {children}
        </a>
      )
    }

    return (
      <Link to={href} key={node.id} className="post">
        {children}
      </Link>
    )
  }

  return (
    <Wrapper>
      <time>{formattedDate}</time>
      <div className="post-body">
        <div className="post-title-row">
          {newPost && <div className="button x-small">✨ New</div>}{' '}
          {getTitle(node.title, query)}
        </div>
        {node.description && (
          <div className="post-description">{node.description}</div>
        )}
      </div>
    </Wrapper>
  )
}
