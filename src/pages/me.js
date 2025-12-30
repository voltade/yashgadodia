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
          description="A quick overview of what I do, what I’ve built, and how I work."
        />
        <div className="page-article">
          <p>
            I’m Yash, based in Singapore. I build and ship products that people use to run
            day-to-day operations.
          </p>
          <p>
            This site is a place to keep my <Link to="/blog">writing</Link>,{' '}
            <Link to="/notes">notes</Link>, and a small set of{' '}
            <Link to="/projects">projects</Link>. If you’re building software for teams who
            are busy and pragmatic, you’ll probably find it familiar.
          </p>

          <h2>Work</h2>
          <p>
            At Voltade, I work on operational products for SMEs. That includes Envoy (a
            chat-first CRM) and a more ERP-like platform we use to deliver custom systems
            quickly without them turning into one-off spaghetti.
          </p>
          <p>
            Before Voltade, I built internal tools and ops systems at Ninja Van. I’ve also
            built and run The Bon Pet, which is where I learnt what reliability means when
            you’re the one dealing with customers, fulfilment, and edge cases.
          </p>

          <h2>How I Work</h2>
          <ul>
            <li>
              I aim for clarity over cleverness. Simple flows, explicit state, and defaults
              that make the safe thing the easy thing.
            </li>
            <li>
              I write to think. Short problem statements, the decision, the trade-offs, and
              what we are not doing.
            </li>
            <li>
              I stay close to implementation (TypeScript, SQL/Postgres, deployments) so the
              plan stays honest and feedback loops stay tight.
            </li>
            <li>
              I care about observability and supportability. If we cannot debug it quickly,
              it is not done.
            </li>
          </ul>

          <h2>Now</h2>
          <p>
            Right now I’m focused on building platform foundations at Voltade and shipping
            client work end to end, from scoping to rollout. The goal is to keep delivery
            fast without sacrificing reliability, security, or maintainability.
          </p>

          <h2>Contact</h2>
          <p>
            If you want to chat, email me at{' '}
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
