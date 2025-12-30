import React, { useMemo } from 'react'
import { Link, graphql } from 'gatsby'
import Helmet from 'react-helmet'

import { Layout } from '../components/Layout'
import { SEO } from '../components/SEO'
import { Heading } from '../components/Heading'
import { Hero } from '../components/Hero'
import { PageLayout } from '../components/PageLayout'
import { Posts } from '../components/Posts'
import { getSimplifiedPosts } from '../utils/helpers'
import config from '../utils/config'

export default function Writing({ data }) {
  const title = 'Writing'

  const description = (
    <div>
      Longer posts in <Link to="/blog">Blog</Link> and shorter{' '}
      <Link to="/notes">Notes</Link>.
    </div>
  )

  const articles = useMemo(
    () => getSimplifiedPosts(data.latestArticles.edges),
    [data.latestArticles.edges]
  )

  const notes = useMemo(
    () => getSimplifiedPosts(data.latestNotes.edges),
    [data.latestNotes.edges]
  )

  return (
    <>
      <Helmet title={`${title} | ${config.siteTitle}`} />
      <SEO customDescription={description} />

      <PageLayout>
        <Hero title={title} description={description} />

        <section className="section-index">
          <Heading
            title="Blog"
            description="Writing on AI products, systems design, and lessons from building."
          />
          <Posts data={articles} />
          <p>
            <Link to="/blog">View all blog posts →</Link>
          </p>
        </section>

        <section className="section-index">
          <Heading
            title="Notes"
            description="Shorter observations and work-in-progress thinking."
          />
          <Posts data={notes} />
          <p>
            <Link to="/notes">View all notes →</Link>
          </p>
        </section>
      </PageLayout>
    </>
  )
}

Writing.Layout = Layout

export const pageQuery = graphql`
  query WritingQuery {
    latestArticles: allMarkdownRemark(
      limit: 10
      sort: { frontmatter: { date: DESC } }
      filter: {
        frontmatter: {
          template: { eq: "post" }
          categories: { eq: "Technical" }
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
            description
            external_url
          }
        }
      }
    }
    latestNotes: allMarkdownRemark(
      limit: 10
      sort: { frontmatter: { date: DESC } }
      filter: {
        frontmatter: {
          template: { eq: "post" }
          categories: { eq: "Personal" }
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
            description
            external_url
          }
        }
      }
    }
  }
`

