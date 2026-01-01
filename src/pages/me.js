import React from 'react'
import Helmet from 'react-helmet'
import { Link } from 'gatsby'

import { Layout } from '../components/Layout'
import { PageLayout } from '../components/PageLayout'
import { Hero } from '../components/Hero'
import { SEO } from '../components/SEO'
import config from '../utils/config'
import { VoltadeLink } from '../components/VoltadeLink'

export default function Me() {
  const title = 'About'

  return (
    <>
      <Helmet title={`${title} | ${config.siteTitle}`} />
      <SEO />

      <PageLayout>
        <Hero
          title={title}
          description="I work on products where the problem isn’t clear and the stakes are real."
        />
        <div className="page-article">
          <p>
            I’m Yash, based in Singapore. I work as a product manager and builder, usually
            close to implementation.
          </p>
          <p>
            I’ve worked across logistics, internal tools, and AI-driven products, usually in
            environments where systems are messy, ownership is unclear, and progress depends
            on good judgment more than perfect plans.
          </p>
          <p>
            I’ve spent the last few years working on systems that teams rely on day to day,
            from internal tools to customer-facing platforms. Most of my work sits in the
            space between product, engineering, and operations, where clarity matters more
            than polish.
          </p>
          <p>
            This site is a snapshot of how I think, what I’ve worked on, and the kinds of
            problems I’m drawn to.
          </p>

          <h2>Work</h2>
          <p>
            <strong>
              <VoltadeLink />
            </strong>
          </p>
          <p>
            At <VoltadeLink />, I work on operational products used by SMEs. This includes a
            chat-first CRM and a modular platform used to build custom internal systems.
          </p>
          <p>
            The work often involves unclear requirements, time pressure, and trade-offs
            between speed and reliability. I focus on shaping problems early, reducing
            ambiguity, and helping teams ship without creating long-term mess.
          </p>
          <p>
            <strong>Ninja Van</strong>
          </p>
          <p>
            Before that, I worked on internal tools and operational systems supporting
            logistics at scale. It taught me how small product decisions compound when
            thousands of people depend on them daily.
          </p>
          <p>
            <strong>The Bon Pet</strong>
          </p>
          <p>
            I also built and ran a small consumer business. Doing everything end-to-end made
            the cost of poor decisions very real — from fulfilment issues to customer trust.
          </p>

          <h2>How I Work</h2>
          <p>
            I’m most effective when problems are still fuzzy and there’s no obvious “right”
            answer.
          </p>
          <ul>
            <li>
              I prefer clarity over cleverness. If something is hard to explain, it usually
              isn’t ready.
            </li>
            <li>
              I write to think: decisions, assumptions, and trade-offs go down early.
            </li>
            <li>
              I stay close to implementation so constraints stay real, not theoretical.
            </li>
            <li>
              I care about operability. If something is painful to support, it isn’t
              finished.
            </li>
          </ul>

          <h2>What I look for in teams</h2>
          <p>I work best with people who:</p>
          <ul>
            <li>take ownership without waiting for perfect instructions</li>
            <li>are comfortable saying “I don’t know yet”</li>
            <li>care about outcomes more than optics</li>
            <li>treat product work as a team sport</li>
          </ul>

          <h2>Now</h2>
          <p>
            Right now, I’m focused on building platform foundations at <VoltadeLink /> and
            shipping real work end to end — from discovery to rollout — while keeping
            systems stable and understandable.
          </p>

          <h2>Contact</h2>
          <p>
            If you want to talk, you can reach me at{' '}
            <a href="mailto:pirsquare.yash@gmail.com">pirsquare.yash@gmail.com</a>
            .
          </p>
          <p className="flex-wrap flex-align-center gap" style={{ marginTop: '1.25rem' }}>
            <Link className="button" to="/cv">
              View CV
            </Link>
          </p>
        </div>
      </PageLayout>
    </>
  )
}

Me.Layout = Layout
