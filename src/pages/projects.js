import React, { useState, useEffect } from 'react'
import Helmet from 'react-helmet'
import { Link } from 'gatsby'

import { StarIcon } from '../assets/StarIcon'
import { Layout } from '../components/Layout'
import { SEO } from '../components/SEO'
import { Hero } from '../components/Hero'
import { PageLayout } from '../components/PageLayout'
import config from '../utils/config'
import { projectsList } from '../data/projectsList'

export default function Projects() {
  const [repos, setRepos] = useState([])
  const title = 'Projects'
  const description =
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur eget lorem sit amet purus maximus vehicula.'

  useEffect(() => {
    async function getStars() {
      const repos = await fetch(
        'https://api.github.com/users/yashgadodia/repos?per_page=100'
      )

      return repos.json()
    }

    getStars()
      .then((data) => {
        setRepos(data)
      })
      .catch((err) => console.error(err))
  }, [])

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
                <div className="stars">
                  {repos.find((repo) => repo.name === project.slug) && (
                    <div className="star">
                      <a
                        href={`https://github.com/yashgadodia/${project.slug}/stargazers`}
                      >
                        {Number(
                          repos.find((repo) => repo.name === project.slug)
                            .stargazers_count
                        ).toLocaleString()}
                      </a>
                      <StarIcon />
                    </div>
                  )}
                </div>
                <time>{project.date}</time>
                <a
                  className="card-header"
                  href={`https://github.com/yashgadodia/${project.slug}`}
                  target="_blank"
                  rel="noreferrer"
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
                  <a
                    className="button small"
                    href={`https://github.com/yashgadodia/${project.slug}`}
                    target="_blank"
                    rel="noreferrer"
                  >
                    Source
                  </a>
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
