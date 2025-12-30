import React, { useMemo } from 'react'
import { Link, graphql } from 'gatsby'

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
  const notes = useMemo(() => getSimplifiedPosts(latestNotes), [latestNotes])

  const articles = useMemo(
    () => getSimplifiedPosts(latestArticles),
    [latestArticles]
  )

  return (
    <>
      <Helmet title={config.siteTitle} />
      <SEO />

      <PageLayout>
        <Hero type="index">
          <div className="hero-wrapper">
            <div>
              <h1>Hi, I’m Yash.</h1>
              <p className="hero-description">
                I'm a Software Engineer turned Product Manager. I love building things.
                Currently Founding PM @ Voltade, bringing the best of AI to SMEs.
              </p>
              <p className="hero-proof-points-title">Past experience</p>
              <ul className="hero-proof-points">
                <li>
                  <span className="hero-proof-point-header">Ninja Van</span>
                  <span className="hero-proof-point-body">
                    Shipped products and internal tools used across last-mile operations.
                  </span>
                </li>
                <li>
                  <span className="hero-proof-point-header">The Bon Pet</span>
                  <span className="hero-proof-point-body">
                    Built and scaled a consumer brand to $10k MRR from zero.
                  </span>
                </li>
                <li>
                  <span className="hero-proof-point-header">AfterClass</span>
                  <span className="hero-proof-point-body">
                    Co-built a student platform still active with 40k users.
                  </span>
                </li>
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
            title="Featured Projects"
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
                    {project.date && <time>{project.date}</time>}
                    {project.previewImage && (
                      <a
                        href={project.url || project.sourceUrl || '#'}
                        target={
                          project.url || project.sourceUrl ? '_blank' : undefined
                        }
                        rel={
                          project.url || project.sourceUrl ? 'noreferrer' : undefined
                        }
                        className="project-preview-link"
                      >
                        <img
                          src={project.previewImage}
                          alt={`${project.name} preview`}
                          loading="lazy"
                          className="project-preview"
                        />
                      </a>
                    )}
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
                      <div className="card-header">{project.name}</div>
                    )}
                    <p>{project.tagline}</p>
                    <div className="card-links">
                      {project.writeup && (
                        <Link className="button small" to={project.writeup}>
                          Article
                        </Link>
                      )}
                      {project.pitchDeckUrl && (
                        <a
                          className="button small"
                          href={project.pitchDeckUrl}
                          target="_blank"
                          rel="noreferrer"
                        >
                          Pitch deck
                        </a>
                      )}
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
                      {project.sourceUrl && (
                        <a
                          className="button small"
                          href={project.sourceUrl}
                          target="_blank"
                          rel="noreferrer"
                        >
                          Code
                        </a>
                      )}
                    </div>
                  </div>
                )
              })}
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
            external_url
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
            external_url
          }
        }
      }
    }
  }
`
