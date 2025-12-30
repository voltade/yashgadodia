import React from 'react'
import Helmet from 'react-helmet'
import { Link } from 'gatsby'

import { Layout } from '../components/Layout'
import { PageLayout } from '../components/PageLayout'
import { Hero } from '../components/Hero'
import { SEO } from '../components/SEO'
import config from '../utils/config'

export default function Me() {
  const title = 'About'

  return (
    <>
      <Helmet title={`${title} | ${config.siteTitle}`} />
      <SEO />

      <PageLayout>
        <Hero
          title={title}
          description="A straightforward look at what I do and how I work."
        />
        <div className="page-article">
          <p>
            Hey — I’m Yash. I’m based in Singapore and I work as a founding Product
            Manager at Voltade.
          </p>
          <p>
            This site is where I keep my <Link to="/blog">writing</Link>,{' '}
            <Link to="/notes">notes</Link>, and a small list of{' '}
            <Link to="/projects">projects</Link>. It’s mostly for peers: people
            building products, running teams, or dealing with the messiness of real
            operations.
          </p>

          <h2>Work</h2>
          <p>
            At Voltade, I build operational software for SMEs — CRM and ERP-shaped
            products, plus the platform underneath that keeps them reliable.
          </p>
          <p>
            Before that, I worked on product and ops systems at Ninja Van
            (logistics). I’ve also built and run a consumer business (The Bon Pet),
            which taught me what “edge cases” look like when you’re the one handling
            fulfilment.
          </p>

          <h2>How I Work</h2>
          <ul>
            <li>
              I like boring systems: clear state, clean permissions, sensible
              defaults, and the ability to debug what happened.
            </li>
            <li>
              I spend a lot of time writing: problem statements, trade-offs, and
              what we’re choosing not to do.
            </li>
            <li>
              I stay close to implementation (TypeScript, SQL/Postgres, deployments)
              because it keeps plans honest and reduces hand-off loss.
            </li>
          </ul>

          <h2>Now</h2>
          <p>
            These days I’m mostly focused on building Voltade’s core platform and
            shipping client work end-to-end — scoping, execution, and keeping
            quality high even when things are moving quickly.
          </p>

          <h2>Contact</h2>
          <p>
            If you want to talk about building products that survive contact with
            reality, you can reach me at{' '}
            <a href="mailto:pirsquare.yash@gmail.com">pirsquare.yash@gmail.com</a>.
          </p>
          <p>
            If email isn’t your thing, here’s{' '}
            <a
              href="https://www.linkedin.com/in/yashgadodia"
              target="_blank"
              rel="noreferrer"
            >
              LinkedIn
            </a>
            .
          </p>
        </div>
      </PageLayout>
    </>
  )
}

Me.Layout = Layout
