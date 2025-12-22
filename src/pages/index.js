import React, { useMemo } from 'react'
import { Link, graphql } from 'gatsby'

import { GatsbyImage } from 'gatsby-plugin-image'
import Helmet from 'react-helmet'

import { Layout } from '../components/Layout'
import { Posts } from '../components/Posts'
import { SEO } from '../components/SEO'
import { Heading } from '../components/Heading'
import { Hero } from '../components/Hero'
import { PageLayout } from '../components/PageLayout'
import { projectsList } from '../data/projectsList'
import { getSimplifiedPosts } from '../utils/helpers'
import config from '../utils/config'
import newMoon from '../assets/nav-blog.png'
import floppy from '../assets/nav-floppy.png'

export default function Index({ data }) {
  const latestNotes = data.latestNotes.edges
  const latestArticles = data.latestArticles.edges
  const highlights = data.highlights.edges
  const notes = useMemo(() => getSimplifiedPosts(latestNotes), [latestNotes])

  const articles = useMemo(
    () => getSimplifiedPosts(latestArticles),
    [latestArticles]
  )
  const simplifiedHighlights = useMemo(
    () => getSimplifiedPosts(highlights, { thumbnails: true }),
    [highlights]
  )

  return (
    <>
      <Helmet title={config.siteTitle} />
      <SEO />

      <PageLayout>
        <Hero type="index">
          <div className="hero-wrapper">
            <div>
              <h1>AI product manager who ships end to end</h1>
              <p className="hero-description">
                I build AI-first products from user discovery to production, with enough engineering depth to close the loop on data, quality, and reliability. Based in Singapore.
              </p>
              <ul className="hero-proof-points">
                <li>Founding PM at Voltade building Envoy (chat-based CRM) and customisable "Digital Brain" ERP systems.</li>
                <li>Ex-backend engineer, comfortable with TypeScript, Postgres, and cloud-native stacks.</li>
                <li>Founder experience: 0 to 1, sales, ops, and iteration cadence.</li>
              </ul>
              <p
                className="flex-wrap flex-align-center gap"
                style={{ marginBottom: 0 }}
              >
                <Link className="button" to="/projects">
                  <img src={floppy} alt="Projects" /> View Projects
                </Link>
                <Link className="button" to="/me">
                  <img src={newMoon} alt="About" /> Read About Me
                </Link>
                <a
                  href="mailto:pirsquare.yash@gmail.com"
                  className="button"
                  type="button"
                >
                  Email Me
                </a>
              </p>
            </div>
          </div>
        </Hero>

        <section className="section-index">
          <Heading
            title="What I Do"
            description="Three pillars that define how I work."
          />
          <div className="pillars">
            <div className="pillar">
              <h3>AI product strategy that cashes out in shipped workflows</h3>
              <p>North Star metrics, evaluation plans, and clear product bets that reduce ambiguity for engineering and stakeholders.</p>
            </div>
            <div className="pillar">
              <h3>Quality and reliability as product features</h3>
              <p>Instrumentation, failure modes, user-facing guardrails, and operational playbooks so the product holds up in real usage.</p>
            </div>
            <div className="pillar">
              <h3>Systems thinking for messy domains</h3>
              <p>I map workflows, constraints, and incentives, then build software that makes the work faster, safer, and easier to audit.</p>
            </div>
          </div>
        </section>

        <section className="section-index">
          <Heading
            title="Blog"
            slug="/blog"
            buttonText="All Posts"
            description="Writing on AI products, systems design, and lessons from building."
          />
          <Posts data={articles} />
        </section>

        <section className="section-index">
          <Heading
            title="Notes"
            slug="/notes"
            buttonText="All Notes"
            description="Shorter observations and work-in-progress thinking."
          />
          <Posts data={notes} />
        </section>

        <section className="section-index">
          <Heading
            title="Deep Dives"
            slug="/topics"
            buttonText="All Topics"
            description="Long-form explorations of specific domains and technical concepts."
          />
          <div className="cards">
            {simplifiedHighlights.map((post) => {
              return (
                <Link
                  to={post.slug}
                  className="card card-highlight"
                  key={`popular-${post.slug}`}
                >
                  {post.thumbnail && (
                    <GatsbyImage image={post.thumbnail} alt="Thumbnail" />
                  )}
                  <div>{post.title}</div>
                </Link>
              )
            })}
          </div>
        </section>

        <section>
          <Heading
            title="Projects"
            slug="/projects"
            buttonText="All Projects"
            description="Products and tools I've built or contributed to."
          />

          <div className="cards">
            {projectsList
              .filter((project) => project.highlight)
              .map((project) => {
                return (
                  <div className="card" key={`hightlight-${project.slug}`}>
                    <time>{project.date}</time>
                    <a
                      href={project.url || '#'}
                      target="_blank"
                      rel="noreferrer"
                      className="card-header"
                    >
                      {project.name}
                    </a>
                    <p>{project.tagline}</p>
                    <div className="card-links">
                      {project.writeup && (
                        <Link className="button small" to={project.writeup}>
                          Article
                        </Link>
                      )}
                      {project.url && (
                        <a
                          className="button small"
                          href={project.url}
                          target="_blank"
                          rel="noreferrer"
                        >
                          Demo
                        </a>
                      )}
                      {project.url && (
                        <a
                          className="button small"
                          href={project.url}
                          target="_blank"
                          rel="noreferrer"
                        >
                          Details
                        </a>
                      )}
                    </div>
                  </div>
                )
              })}
          </div>
        </section>
      </PageLayout>
    </>
  )
}

Index.Layout = Layout

export const pageQuery = graphql`
  query IndexQuery {
    latestNotes: allMarkdownRemark(
      limit: 5
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
            tags
            categories
          }
        }
      }
    }
    latestArticles: allMarkdownRemark(
      limit: 5
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
            tags
            categories
          }
        }
      }
    }
    highlights: allMarkdownRemark(
      limit: 12
      sort: { frontmatter: { date: DESC } }
      filter: { frontmatter: { categories: { eq: "Highlight" } } }
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
            tags
            thumbnail {
              childImageSharp {
                gatsbyImageData(width: 40, height: 40, layout: FIXED)
              }
            }
          }
        }
      }
    }
  }
`
