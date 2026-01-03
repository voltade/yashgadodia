import React, { useMemo } from 'react'
import { Link, graphql, withPrefix } from 'gatsby'

import Helmet from 'react-helmet'

import { Layout } from '../components/Layout'
import { Posts } from '../components/Posts'
import { SEO } from '../components/SEO'
import { Heading } from '../components/Heading'
import { ProfileHero } from '../components/ProfileHero'
import { PageLayout } from '../components/PageLayout'
import { projectsList } from '../data/projectsList'
import { getSimplifiedPosts } from '../utils/helpers'
import config from '../utils/config'
import { VoltadeLink } from '../components/VoltadeLink'

export default function Index({ data }) {
  const latestArticles = data.latestArticles.edges

  const articles = useMemo(
    () => getSimplifiedPosts(latestArticles),
    [latestArticles]
  )

  return (
    <>
      <Helmet title={config.siteTitle} />
      <SEO />

      <PageLayout>
        <ProfileHero
          kicker="AI Product • Agents • Workflow Design"
          headline="Hi, I’m Yash."
          lede={
            <>
              I build AI-assisted products for ops-heavy teams — agent workflows, interfaces,
              and systems that stay reliable in the messy real world.
            </>
          }
          now={
            <>
              <strong>Currently</strong>: Founding PM at <VoltadeLink />, building
              AI-assisted workflows for ops-heavy SMEs.
            </>
          }
          highlightsTitle="Selected work"
          highlights={[
            {
              title: 'Ninja Van',
              body: 'Built internal tooling for last-mile teams at scale.',
            },
            {
              title: 'The Bon Pet',
              body: 'Ran a small consumer brand from zero to $10k MRR.',
            },
            {
              title: 'AfterClass',
              body: 'Co-founded a student platform with ~40k users.',
            },
          ]}
          ctas={
            <div className="hero-cta hero-cta-single">
              <a href="mailto:pirsquare.yash@gmail.com" className="button">
                Email Me
              </a>
            </div>
          }
          image={{ src: '/pixel-me.svg', alt: 'Portrait illustration' }}
        />

        <section className="section-index">
          <Heading
            title="Featured Projects"
            slug="/projects"
            buttonText="All Projects"
            description="Things I’ve shipped — products, tools, and experiments."
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
                          src={withPrefix(project.previewImage)}
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
                    <div className="card-footer">
                      {project.focus && (
                        <div className="card-focus">
                          <div className="card-focus-label">Focus</div>
                          <div className="card-focus-body">{project.focus}</div>
                        </div>
                      )}
                      <div className="card-links">
                        {project.writeup && (
                          <Link className="button small" to={project.writeup}>
                            Article
                          </Link>
                        )}
                        {project.pitchDeckUrl && (
                          <a
                            className="button small"
                            href={withPrefix(project.pitchDeckUrl)}
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
            description="Notes on product, AI, and building systems that hold up."
          />
          <Posts data={articles} />
        </section>

        <section className="section-index landing-secondary-cta">
          <p className="landing-secondary-cta-text">
            Looking for the full CV?{' '}
            <Link to="/cv" className="landing-secondary-cta-link">
              View CV
            </Link>
          </p>
        </section>
      </PageLayout>
    </>
  )
}

Index.Layout = Layout

export const pageQuery = graphql`
  query IndexQuery {
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
