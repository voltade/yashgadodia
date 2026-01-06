import React, { useMemo } from 'react'
import { Link, graphql } from 'gatsby'
import Helmet from 'react-helmet'

import { Layout } from '../components/Layout'
import { SEO } from '../components/SEO'
import { Hero } from '../components/Hero'
import { PageLayout } from '../components/PageLayout'
import { Search } from '../components/Search'
import blog from '../assets/nav-blog.png'
import { getSimplifiedPosts } from '../utils/helpers'
import config from '../utils/config'

export default function Writing({ data }) {
  const posts = data.posts.edges
  const simplifiedPosts = useMemo(() => getSimplifiedPosts(posts), [posts])
  const title = 'Writing'

  const description = (
    <div>
      Essays and longer-form writing. For product/AI posts, see{' '}
      <Link to="/blog">Blog</Link>. For shorter notes and lists, see{' '}
      <Link to="/notes">Notes</Link>.
    </div>
  )

  return (
    <>
      <Helmet title={`${title} | ${config.siteTitle}`} />
      <SEO customDescription={description} />

      <PageLayout>
        <Hero title={title} description={description} hasSearch image={blog} />
        <Search data={simplifiedPosts} section="writing" />
      </PageLayout>
    </>
  )
}

Writing.Layout = Layout

export const pageQuery = graphql`
  query WritingQuery {
    posts: allMarkdownRemark(
      sort: { frontmatter: { date: DESC } }
      filter: {
        frontmatter: {
          template: { eq: "post" }
          categories: { eq: "Writing" }
        }
      }
    ) {
      edges {
        node {
          id
          fields {
            slug
          }
          frontmatter {
            date(formatString: "MMMM DD, YYYY")
            title
          }
        }
      }
    }
  }
`
