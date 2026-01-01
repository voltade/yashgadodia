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
          description="I build products in messy, real-world workflows."
        />
        <div className="page-article">
          <p>
            I’m Yash, based in Singapore. I work as a product manager and I still build —
            close enough to the implementation that constraints stay real.
          </p>
          <p>
            I’ve worked across logistics, internal tooling, and AI-driven products. I like
            work where the real problem isn’t obvious from the first meeting, and the best
            path is a few tight build → learn → fix loops.
          </p>
          <p>
            Most of my day-to-day sits between product, engineering, and operations:
            approvals, edge cases, weird data, and the parts of “simple” workflows that make
            teams lose hours.
          </p>
          <p>
            This site is a snapshot of what I’ve built and what I’m learning.
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
            The work is full of trade-offs: shipping fast without creating a support nightmare
            later. I care a lot about getting the workflow right (not just the UI) and keeping
            systems understandable as they grow.
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

          <h2>How I think about product</h2>
          <ul>
            <li>
              <strong>Reliability beats cleverness.</strong> Users forgive missing features.
              They don’t forgive broken workflows.
            </li>
            <li>
              <strong>AI should reduce effort, not add novelty.</strong> If users need to
              “learn the model” to get value, the UX is doing too much work.
            </li>
            <li>
              <strong>Speed &gt; polish in early stages.</strong> I bias toward shipping
              learning loops quickly, then refining once real usage patterns emerge.
            </li>
            <li>
              <strong>Shared context matters more than perfect specs.</strong> If everyone
              knows the goal and the constraints, execution gets easier.
            </li>
          </ul>

          <h2>How I Work</h2>
          <p>
            I’m most effective when problems are still fuzzy and there’s no obvious “right”
            answer.
          </p>
          <ul>
            <li>
              I prefer clarity over cleverness. If it’s hard to explain, it’s probably not
              ready.
            </li>
            <li>
              I write to think: decisions, assumptions, and trade-offs go down early.
            </li>
            <li>
              I stay close to implementation so constraints stay real, not theoretical.
            </li>
            <li>
              I care about operability. If it’s painful to support, it isn’t finished.
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
            Right now, I’m building platform foundations at <VoltadeLink /> and shipping work
            end to end — from discovery to rollout — while keeping systems stable and
            understandable.
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
