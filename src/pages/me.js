import React from 'react'
import Helmet from 'react-helmet'
import { Link } from 'gatsby'

import { Layout } from '../components/Layout'
import { PageLayout } from '../components/PageLayout'
import { ProfileHero } from '../components/ProfileHero'
import { Heading } from '../components/Heading'
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
        <ProfileHero
          kicker="AI Product • Agents • Workflow Design"
          headline="About"
          lede={
            <>
              I’m Yash — a product manager (ex-software engineer) building AI-assisted
              products for ops-heavy teams.
            </>
          }
          now={
            <>
              <strong>Now</strong>: Founding PM at <VoltadeLink />, shipping AI workflows for
              SMEs and translating messy operational reality into systems people actually
              adopt.
            </>
          }
          highlightsTitle="What I care about"
          highlights={[
            {
              title: 'Reliable workflows',
              body: 'The UX includes edge cases, permissions, and operability.',
            },
            {
              title: 'Fast learning loops',
              body: 'Ship → instrument → learn → iterate without UX debt.',
            },
            {
              title: 'AI that reduces effort',
              body: 'Agents with guardrails and human-in-the-loop where needed.',
            },
          ]}
          ctas={
            <div className="hero-cta">
              <Link className="button" to="/cv">
                View CV
              </Link>
              <a href="mailto:pirsquare.yash@gmail.com" className="button">
                Email Me
              </a>
            </div>
          }
          image={{ src: '/pixel-me.svg', alt: 'Portrait illustration' }}
        />

        <section className="section-index">
          <Heading title="Principles" description="How I think about product and AI." />
          <div className="page-article">
            <ul>
              <li>
                <strong>Reliability beats cleverness.</strong> Users forgive missing
                features; they don’t forgive broken workflows.
              </li>
              <li>
                <strong>AI should reduce effort.</strong> If users have to “learn the model”
                to get value, the UX is doing too much work.
              </li>
              <li>
                <strong>Fast loops win.</strong> Ship, learn, and tighten the system before
                scaling complexity.
              </li>
              <li>
                <strong>Shared context beats perfect specs.</strong> Clear goals + known
                constraints make execution easier.
              </li>
            </ul>
          </div>
        </section>

        <section className="section-index">
          <Heading title="Contact" description="Reach me here." />
          <div className="page-article">
            <p>
              Email: <a href="mailto:pirsquare.yash@gmail.com">pirsquare.yash@gmail.com</a>
            </p>
          </div>
        </section>
      </PageLayout>
    </>
  )
}

Me.Layout = Layout
