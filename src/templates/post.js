import React, { useEffect } from 'react'
import { Link, graphql } from 'gatsby'
import Helmet from 'react-helmet'
import { GatsbyImage } from 'gatsby-plugin-image'

import { Layout } from '../components/Layout'
import { SEO } from '../components/SEO'
import { PostLayout } from '../components/PostLayout'
import { Comments } from '../components/Comments'
import { Hero } from '../components/Hero'
import config from '../utils/config'
import { slugify } from '../utils/helpers'

export default function PostTemplate({ data }) {
  const post = data.markdownRemark
  const { title, date, comments_off, thumbnail, tags, external_url } =
    post.frontmatter

  useEffect(() => {
    if (!external_url) return
    if (typeof window === 'undefined') return
    window.location.replace(external_url)
  }, [external_url])

  return (
    <>
      <Helmet title={`${post.frontmatter.title} | ${config.siteTitle}`}>
        {external_url
          ? [
              <meta
                key="external-redirect"
                httpEquiv="refresh"
                content={`0;url=${external_url}`}
              />,
              <link key="external-canonical" rel="canonical" href={external_url} />,
            ]
          : null}
      </Helmet>
      <SEO postPath={post.fields.slug} postNode={post} postSEO />

      <PostLayout post={post}>
        {thumbnail && (
          <GatsbyImage
            image={thumbnail?.childImageSharp?.gatsbyImageData}
            className="main-article-thumbnail"
            alt="Thumbnail"
          />
        )}
        <Hero
          title={title}
          type="post"
          date={
            <div className="small flex-align-center gap">
              <span>{date}</span>
              {!comments_off && (
                <>
                  <div className="divider" />
                  <a href="#comments">Comments</a>
                </>
              )}
            </div>
          }
        >
          <div className="tags">
            {(tags || []).map((tag) => {
              return (
                <Link
                  key={tag}
                  to={`/topics/${slugify(tag)}`}
                  className="button small"
                  activeClassName="active"
                >
                  {tag}
                </Link>
              )
            })}
          </div>
        </Hero>

        {external_url && (
          <div className="main-article">
            <p>
              Redirecting to{' '}
              <a href={external_url} rel="noopener noreferrer">
                {external_url}
              </a>
              …
            </p>
          </div>
        )}

        {!external_url && (
          <div
            className="main-article"
            id={post.fields.slug}
            dangerouslySetInnerHTML={{
              __html: `<div class="introduction" id="introduction"></div>${post.html}`,
            }}
          />
        )}
        {!comments_off && (
          <section id="comments" className="comments">
            <h3>Comments</h3>
            <Comments />
          </section>
        )}
      </PostLayout>
    </>
  )
}

PostTemplate.Layout = Layout

export const pageQuery = graphql`
  query BlogPostBySlug($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      excerpt
      tableOfContents(maxDepth: 3)
      fields {
        slug
      }
      frontmatter {
        title
        date(formatString: "MMMM DD, YYYY")
        tags
        categories
        description
        external_url
        comments_off
        thumbnail {
          childImageSharp {
            gatsbyImageData(width: 75, height: 75, layout: FIXED)
          }
        }
      }
    }
  }
`
