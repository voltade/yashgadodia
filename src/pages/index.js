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
              <h1>I build AI products that work in production</h1>
              <p className="hero-description">
                Most AI demos are impressive. Most AI products are fragile. I'm a product manager focused on closing that gap—figuring out what to build, how to evaluate it, and how to keep it reliable once real users show up.
              </p>
              <ul className="hero-proof-points">
                <li>Founding PM at Voltade, building a chat-based CRM and customisable ERP systems for Southeast Asian businesses.</li>
                <li>Came from backend engineering. I can read the codebase, talk to the database, and debug a stuck deployment.</li>
                <li>Ran my own consumer business before this, so I've seen what happens when systems fail at 2am.</li>
              </ul>
              <p
                className="flex-wrap flex-align-center gap"
                style={{ marginBottom: 0 }}
              >
                <Link className="button" to="/projects">
                  <img src={floppy} alt="Projects" /> View Projects
                </Link>
                <Link className="button" to="/me">
                  <img src={newMoon} alt="About" /> About Me
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
            <div className="hero-image-container">
              <img src="/ram.png" className="hero-image" alt="RAM Ram" />
            </div>
          </div>
        </Hero>

        <section className="section-index">
          <Heading
            title="How I Work"
            description="The stuff I actually spend my time on."
          />
          <div className="pillars">
            <div className="pillar">
              <h3>Turning AI capabilities into useful workflows</h3>
              <p>Not "what can this model do?" but "what should we ship first, and how will we know it's working?" I write specs that engineering can actually build against.</p>
            </div>
            <div className="pillar">
              <h3>Treating reliability as a feature</h3>
              <p>Guardrails, fallbacks, monitoring. The boring work that determines whether users trust the product or abandon it after a week.</p>
            </div>
            <div className="pillar">
              <h3>Making sense of messy domains</h3>
              <p>CRMs, ERPs, operations software. I spend time understanding how people actually work, then figure out where software can take load off them.</p>
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
            description="Products and companies I've built or contributed to."
          />

          <div className="cards">
            {projectsList
              .filter((project) => project.highlight)
              .slice(0, 4)
              .map((project) => {
                return (
                  <div className="card" key={`highlight-${project.slug}`}>
                    <time>{project.date}</time>
                    {project.url ? (
                      <a
                        href={project.url}
                        target="_blank"
                        rel="noreferrer"
                        className="card-header"
                      >
                        {project.name}
                      </a>
                    ) : (
                      <span className="card-header">{project.name}</span>
                    )}
                    <p>{project.tagline}</p>
                    <div className="card-links">
                      <Link className="button small" to="/projects">
                        Read more
                      </Link>
                      {project.url && (
                        <a
                          className="button small"
                          href={project.url}
                          target="_blank"
                          rel="noreferrer"
                        >
                          Visit
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
