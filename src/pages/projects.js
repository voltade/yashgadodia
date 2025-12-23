import React from 'react'
import Helmet from 'react-helmet'

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

        <div className="project-cards">
          {projectsList.map((project) => {
            return (
              <div className="project-card" key={project.slug}>
                <div className="project-card-header">
                  <h3>
                    {project.url ? (
                      <a href={project.url} target="_blank" rel="noreferrer">
                        {project.name}
                      </a>
                    ) : (
                      project.name
                    )}
                  </h3>
                  <time>{project.date}</time>
                </div>
                <p className="project-card-tagline">{project.tagline}</p>
                {project.description && (
                  <div className="project-card-description">
                    {project.description.split('\n\n').map((paragraph, i) => (
                      <p key={i}>{paragraph}</p>
                    ))}
                  </div>
                )}
                {project.url && (
                  <div className="project-card-links">
                    <a
                      className="button small"
                      href={project.url}
                      target="_blank"
                      rel="noreferrer"
                    >
                      Visit
                    </a>
                  </div>
                )}
              </div>
            )
          })}
        </div>
      </PageLayout>
    </>
  )
}

Projects.Layout = Layout
