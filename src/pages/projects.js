import React from 'react'
import Helmet from 'react-helmet'
import { Link } from 'gatsby'

import { Layout } from '../components/Layout'
import { SEO } from '../components/SEO'
import { Hero } from '../components/Hero'
import { PageLayout } from '../components/PageLayout'
import config from '../utils/config'
import { projectsList } from '../data/projectsList'

export default function Projects() {
  const title = 'Projects'
  const description =
    'Products, companies, and systems I have built or contributed to.'

  return (
    <>
      <Helmet title={`${title} | ${config.siteTitle}`} />
      <SEO />

      <PageLayout>
        <Hero title={title} description={description} />

        <div className="cards">
          {projectsList.map((project) => {
            return (
              <div className="card" key={project.slug}>
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
                      Visit
                    </a>
                  )}
                </div>
              </div>
            )
          })}
        </div>
      </PageLayout>
    </>
  )
}

Projects.Layout = Layout
