import React from 'react'
import Helmet from 'react-helmet'

import { Layout } from '../components/Layout'
import { PageLayout } from '../components/PageLayout'
import { Hero } from '../components/Hero'
import { SEO } from '../components/SEO'
import config from '../utils/config'

export default function Me() {
  const title = 'About Me'

  return (
    <>
      <Helmet title={`${title} | ${config.siteTitle}`} />
      <SEO />

      <PageLayout>
        <Hero
          title={title}
          description="Product manager, ex-backend engineer, occasional founder."
        />
        <div className="page-article">
          <p>
            I'm Yash Gadodia. I write product, build teams, and ship software. I care about making systems that are dependable, measurable, and actually used.
          </p>
          <p>
            Right now I'm a Product Manager at Voltade, working on AI-first products for SMEs. Before that I was a backend engineer at Ninja Van, building internal platforms and services that had to run reliably under real operational pressure.
          </p>
          <p>
            Earlier I co-founded AfterClass, a student platform with tens of thousands of users across Singapore universities. I also run The Bon Pet, a D2C business that keeps my product thinking grounded in real trade-offs.
          </p>

          <h2>How I work</h2>
          <p>
            I think in terms of actual workflows, failure modes, and instrumentation—not polished demos or vanity metrics. I work close to engineers and data. AI features are interesting only when they move a workflow forward reliably.
          </p>

          <h2>What I'm working on now</h2>
          <p>
            At Voltade I lead product for Envoy (a chat-based CRM) and Digital Brain (a flexible ERP foundation for messy SME operations). My focus is on defining clear product bets, getting early feedback in production, and improving reliability over time.
          </p>
        </div>
      </PageLayout>
    </>
  )
}

Me.Layout = Layout
