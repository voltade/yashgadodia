import React from 'react'
import Helmet from 'react-helmet'
import { Link } from 'gatsby'

import { SEO } from '../components/SEO'
import { projectsList } from '../data/projectsList'
import { VoltadeLink } from '../components/VoltadeLink'
import { CVLayout } from '../components/CVLayout'

export default function CV() {
  const title = 'Yash Gadodia — CV'
  const vorank = projectsList.find((p) => p.slug === 'vorank')
  const theBonPet = projectsList.find((p) => p.slug === 'the-bon-pet')
  const afterclass = projectsList.find((p) => p.slug === 'afterclass')
  const schema = projectsList.find((p) => p.slug === 'schema')
  const ninjaEasy = projectsList.find((p) => p.slug === 'ninja-easy')
  const ninjaVanInternshipWriteup =
    'https://medium.com/ninjavan-tech/my-ninja-van-internship-experience-39e6a4a33364'
  const accentHex = '#6f5cff'

  return (
    <>
      <Helmet
        title={title}
        meta={[{ name: 'theme-color', content: accentHex }]}
      />
      <SEO customDescription="Curriculum vitae of Yash Gadodia." />

      <main className="cv-root">
        <div className="cv-sheet">
          <div className="cv-actions no-print">
            <Link className="cv-button secondary" to="/me">
              Back to About
            </Link>
            <button
              className="cv-button"
              type="button"
              onClick={async () => {
                try {
                  if (document?.fonts?.ready) await document.fonts.ready
                } catch (e) {
                  // noop
                }
                window.print()
              }}
            >
              Download PDF
            </button>
            <div className="cv-print-tip">
              Tip: disable “Headers and footers” and enable “Background graphics”.
            </div>
          </div>

          <header className="cv-header">
            <h1 className="cv-name">Yash Gadodia</h1>
            <div className="cv-tagline">
              Product Manager · AI Systems & Applied Product Thinking
            </div>

            <ul className="cv-contact" aria-label="Contact">
              <li className="cv-contact-item">📍 Singapore</li>
              <li className="cv-contact-item">
                <a href="mailto:pirsquare.yash@gmail.com">Email</a>
              </li>
              <li className="cv-contact-item">
                <a href="tel:+6581394225">Phone</a>
              </li>
              <li className="cv-contact-item">
                <a href="https://yashgadodia.com" target="_blank" rel="noreferrer">
                  Website
                </a>
              </li>
              <li className="cv-contact-item">
                <a
                  href="https://www.linkedin.com/in/yashgadodia"
                  target="_blank"
                  rel="noreferrer"
                >
                  LinkedIn
                </a>
              </li>
            </ul>

            <p className="cv-summary">
              Product manager (ex-software engineer) building AI-native products in
              workflow-heavy environments; strong end-to-end ownership from discovery to
              delivery and iteration.
            </p>
          </header>

          <div className="cv-grid">
            <aside className="cv-sidebar">
              <section className="cv-section">
                <h2>Skills</h2>

                <div className="cv-subsection">
                  <div className="cv-subsection-title">Product &amp; AI</div>
                  <ul>
                    <li>AI product design: agent workflows, prompt design, RAG patterns</li>
                    <li>Module ownership: discovery → requirements → rollout → iteration</li>
                    <li>UX for complex systems: workflows, approvals, edge cases</li>
                  </ul>
                </div>

                <div className="cv-subsection">
                  <div className="cv-subsection-title">Engineering</div>
                  <ul>
                    <li>Distributed systems, microservices, event-driven architecture</li>
                    <li>Kubernetes, Docker, CI/CD, observability</li>
                    <li>TypeScript / Python / Go, Postgres</li>
                  </ul>
                </div>

                <div className="cv-subsection">
                  <div className="cv-subsection-title">Growth &amp; Monetization</div>
                  <ul>
                    <li>Funnel breakdowns, activation/retention, A/B testing</li>
                    <li>Instrumentation &amp; analytics: Mixpanel, GA4</li>
                  </ul>
                </div>
              </section>

              <section className="cv-section">
                <h2>Education</h2>
                <div className="cv-subsection">
                  <div className="cv-subsection-title">
                    Singapore Management University
                  </div>
                  <div className="cv-muted">
                    BSc (Hons), Information Systems
                    <br />
                    Double Major: Business Analytics &amp; Digitisation &amp; Cloud Solutions
                  </div>
                </div>
              </section>

              <section className="cv-section">
                <h2>Highlights</h2>
                <ul>
                  <li>Winner, Ninja Van Hackathon</li>
                  <li>Google Developer Student Club Lead</li>
                  <li>National Service: Top 1% of cohort (Combat Diver)</li>
                </ul>
              </section>

              <section className="cv-section cv-print-hide">
                <h2>Fit</h2>
                <ul>
                  <li>Own product modules end-to-end, fast iteration loops</li>
                  <li>High bar for interaction design in complex workflows</li>
                  <li>Growth + monetization instincts without UX debt</li>
                  <li>AI-first UX: guide users, reduce manual work</li>
                </ul>
              </section>
            </aside>

            <div className="cv-main">
              <section className="cv-section">
                <h2>Experience</h2>

                <div className="cv-role">
                  <div className="cv-role-title">
                    <VoltadeLink target="_blank" rel="noreferrer">
                      Voltade
                    </VoltadeLink>{' '}
                    — Founding Product Manager
                  </div>
                  <div className="cv-role-meta">Jul 2025 – Present | Singapore</div>
                  <div className="cv-role-subtitle">AI-powered ERP &amp; CRM for SMEs</div>
                  <ul>
                    <li>
                      Own modules end-to-end across Envoy CRM and Digital Brain (AI-driven ERP)
                      for SMEs in logistics, manufacturing, and operations.
                    </li>
                    <li>
                      Delivered customer deployments (Yat Guan, Lincoln, Presto) from discovery
                      through rollout and iteration.
                    </li>
                    <li>
                      Translated messy real-world workflows (ops, approvals, data flows) into
                      structured, usable systems.
                    </li>
                  </ul>
                </div>

                <div className="cv-role">
                  <div className="cv-role-title">
                    <a href={schema?.url} target="_blank" rel="noreferrer">
                      Synthesis Partners
                    </a>{' '}
                    — Lead Software Engineer (L3)
                  </div>
                  <div className="cv-role-meta">Jun 2024 – Jul 2025</div>
                  <div className="cv-role-subtitle">AI Research &amp; Consumer Insights</div>
                  <div className="cv-role-links">
                    <a href={schema?.url} target="_blank" rel="noreferrer">
                      synthesis.partners
                    </a>
                  </div>
                  <ul>
                    <li>
                      Built AI tools for insight extraction and cultural trend analysis using
                      LLMs, with a strong focus on usability for researchers.
                    </li>
                    <li>Designed and shipped RAG systems over 2M+ documents.</li>
                    <li>
                      Worked with researchers to productionise models with strong UX,
                      reliability, and sane failure modes.
                    </li>
                  </ul>
                </div>

                <div className="cv-role">
                  <div className="cv-role-title">
                    <a href={ninjaEasy?.url} target="_blank" rel="noreferrer">
                      Ninja Van
                    </a>{' '}
                    — Senior Software Engineer (CTO’s Office)
                  </div>
                  <div className="cv-role-meta">May 2021 – Jun 2024</div>
                  <div className="cv-role-subtitle">
                    Platforms &amp; Developer Experience
                  </div>
                  <div className="cv-role-links">
                    {ninjaEasy?.url && (
                      <a href={ninjaEasy.url} target="_blank" rel="noreferrer">
                        Ninja Easy
                      </a>
                    )}
                    <a href={ninjaVanInternshipWriteup} target="_blank" rel="noreferrer">
                      Internship write-up
                    </a>
                  </div>
                  <ul>
                    <li>
                      Backend lead for Ninja Easy, scaling from 0 → 13K orders in 5 months;
                      later iterations drove ~80% growth.
                    </li>
                    <li>
                      Built internal platforms supporting 100M+ events/day across
                      notifications and messaging.
                    </li>
                    <li>
                      Shipped internal tooling and services used across engineering and ops
                      (reliability tooling, voice calling at ~3M+ calls).
                    </li>
                  </ul>
                </div>

                <div className="cv-role">
                  <div className="cv-role-title">
                    <a href={theBonPet?.url} target="_blank" rel="noreferrer">
                      The Bon Pet
                    </a>{' '}
                    — Co-Founder
                  </div>
                  <div className="cv-role-meta">Sep 2024 – Present</div>
                  <div className="cv-role-subtitle">Consumer Brand (DTC)</div>
                  <div className="cv-role-links">
                    <a href={theBonPet?.url} target="_blank" rel="noreferrer">
                      thebonpet.com
                    </a>
                  </div>
                  <ul>
                    <li>Built and scaled a consumer brand to ~10K MRR.</li>
                    <li>
                      Designed operational workflows across fulfilment, CRM, and customer
                      experience; hands-on across product, ops, and growth.
                    </li>
                  </ul>
                </div>

                <div className="cv-role">
                  <div className="cv-role-title">
                    <a href={afterclass?.url} target="_blank" rel="noreferrer">
                      AfterClass
                    </a>{' '}
                    — Co-founder &amp; CTO
                  </div>
                  <div className="cv-role-meta">2024 | Singapore</div>
                  <div className="cv-role-subtitle">Student platform</div>
                  <div className="cv-role-links">
                    {afterclass?.url && (
                      <a href={afterclass.url} target="_blank" rel="noreferrer">
                        afterclass.io
                      </a>
                    )}
                    {afterclass?.sourceUrl && (
                      <a href={afterclass.sourceUrl} target="_blank" rel="noreferrer">
                        GitHub
                      </a>
                    )}
                    {afterclass?.pitchDeckUrl && (
                      <a href={afterclass.pitchDeckUrl} target="_blank" rel="noreferrer">
                        Pitch deck
                      </a>
                    )}
                  </div>
                  <ul>
                    <li>
                      Owned product + engineering execution end-to-end as CTO in a small team,
                      shipping fast with strong reliability basics.
                    </li>
                    <li>Scaled to 10k users and 4.5M page views in ~3 months.</li>
                  </ul>
                </div>
              </section>

              <section className="cv-section cv-print-hide">
                <h2>Projects (Selected)</h2>
                <ul>
                  <li>
                    <strong>
                      <a href={vorank?.url} target="_blank" rel="noreferrer">
                        Vorank
                      </a>
                    </strong>{' '}
                    — AI-enabled SEO writing tool focused on usability and workflow
                    efficiency.
                  </li>
                  <li>
                    <strong>
                      <a href={afterclass?.url} target="_blank" rel="noreferrer">
                        AfterClass
                      </a>
                    </strong>{' '}
                    — Co-founded a student platform reaching 10k users and 4.5M page views
                    in 3 months.{' '}
                    {afterclass?.pitchDeckUrl && (
                      <a href={afterclass.pitchDeckUrl} target="_blank" rel="noreferrer">
                        Pitch deck
                      </a>
                    )}
                    {afterclass?.sourceUrl && (
                      <>
                        {' '}
                        <a href={afterclass.sourceUrl} target="_blank" rel="noreferrer">
                          GitHub
                        </a>
                      </>
                    )}
                  </li>
                  <li>
                    <strong>Live Commerce</strong> (<a href={ninjaEasy?.url} target="_blank" rel="noreferrer">Ninja Van</a>) — Built internal tooling for live selling and order management.
                  </li>
                </ul>
              </section>
            </div>
          </div>
        </div>
      </main>
    </>
  )
}

CV.Layout = CVLayout
