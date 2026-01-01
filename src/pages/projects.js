import React from 'react'
import Helmet from 'react-helmet'
import { Link, withPrefix } from 'gatsby'

import { Layout } from '../components/Layout'
import { SEO } from '../components/SEO'
import { Hero } from '../components/Hero'
import { PageLayout } from '../components/PageLayout'
import config from '../utils/config'
import { projectsList } from '../data/projectsList'

export default function Projects() {
  const title = 'Projects'
  const description =
    'A running list of things I’ve built or worked on. I keep this focused on work where I had ownership and learned something meaningful.'

  const sortedProjects = React.useMemo(() => {
    const getYear = (project) => {
      if (!project?.date) return 0
      const match = String(project.date).match(/\d{4}/)
      return match ? Number(match[0]) : 0
    }

    return [...projectsList].sort((a, b) => getYear(b) - getYear(a))
  }, [])

  return (
    <>
      <Helmet title={`${title} | ${config.siteTitle}`} />
      <SEO />

      <PageLayout>
        <Hero title={title} description={description} />
        <div className="page-article">
          <ul className="projects-list">
            {sortedProjects.map((project) => {
              return (
                <li className="projects-list-item" key={project.slug}>
                  <div className="projects-list-content">
                    <div className="projects-list-top">
                      {project.date && (
                        <time className="projects-list-date">{project.date}</time>
                      )}
                      {project.url ? (
                        <a
                          className="projects-list-name"
                          href={project.url}
                          target="_blank"
                          rel="noreferrer"
                        >
                          {project.name}
                        </a>
                      ) : (
                        <span className="projects-list-name">{project.name}</span>
                      )}
                    </div>

                    <div className="projects-list-tagline">{project.tagline}</div>
                    {project.focus && (
                      <div className="projects-list-focus">
                        <span className="projects-list-focus-label">Focus:</span>{' '}
                        {project.focus}
                      </div>
                    )}

                    <div className="projects-list-links">
                      {project.writeup && (
                        <Link to={project.writeup}>Write-up</Link>
                      )}
                      {project.pitchDeckUrl && (
                        <a
                          href={withPrefix(project.pitchDeckUrl)}
                          target="_blank"
                          rel="noreferrer"
                        >
                          Pitch deck
                        </a>
                      )}
                      {project.url && (
                        <a href={project.url} target="_blank" rel="noreferrer">
                          Visit
                        </a>
                      )}
                      {project.sourceUrl && (
                        <a href={project.sourceUrl} target="_blank" rel="noreferrer">
                          Code
                        </a>
                      )}
                    </div>
                  </div>
                </li>
              )
            })}
          </ul>
        </div>
      </PageLayout>
    </>
  )
}

Projects.Layout = Layout
