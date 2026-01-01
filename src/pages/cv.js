import React from 'react'
import Helmet from 'react-helmet'
import { Link, withPrefix } from 'gatsby'

import { Layout } from '../components/Layout'
import { SEO } from '../components/SEO'
import { PageLayout } from '../components/PageLayout'
import config from '../utils/config'

export default function CV() {
  const title = 'CV'
  const cvPdfPath = withPrefix('/cv.pdf')

  return (
    <>
      <Helmet
        title={`${title} | ${config.siteTitle}`}
        bodyAttributes={{ class: 'is-cv' }}
      />
      <SEO customDescription="Curriculum vitae of Yash Gadodia." />

      <PageLayout>
        <div className="cv">
          <div className="cv-actions no-print">
            <Link className="button small" to="/me">
              Back to About
            </Link>
            <a className="button small" href={cvPdfPath} target="_blank" rel="noreferrer">
              Download PDF
            </a>
            <button className="button small" type="button" onClick={() => window.print()}>
              Print / Save as PDF
            </button>
          </div>

          <header className="cv-header">
            <h1 className="cv-name">Yash Gadodia</h1>
            <div className="cv-tagline">
              Product Manager · AI Systems & Applied Product Thinking
            </div>

            <div className="cv-contact">
              <span>🇸🇬 Singapore</span>
              <a href="mailto:pirsquare.yash@gmail.com">pirsquare.yash@gmail.com</a>
              <a href="tel:+6581394225">+65 8139 4225</a>
              <a href="https://yashgadodia.com">yashgadodia.com</a>
              <a
                href="https://www.linkedin.com/in/yashgadodia"
                target="_blank"
                rel="noreferrer"
              >
                linkedin.com/in/yashgadodia
              </a>
            </div>

            <p className="cv-summary">
              Software engineer turned product manager. I build AI-powered systems that
              solve real operational problems. Experienced in taking ambiguous problems
              from discovery to execution, especially in ERP, internal tools, and
              workflow-heavy environments.
            </p>
          </header>

          <div className="cv-grid">
            <aside className="cv-sidebar">
              <section className="cv-section">
                <h2>Skills</h2>

                <div className="cv-subsection">
                  <div className="cv-subsection-title">Product &amp; AI</div>
                  <ul>
                    <li>AI product design, agent workflows, prompt design</li>
                    <li>UX for complex systems, 0→1 discovery</li>
                  </ul>
                </div>

                <div className="cv-subsection">
                  <div className="cv-subsection-title">Engineering</div>
                  <ul>
                    <li>Python, TypeScript, Golang</li>
                    <li>Supabase, Postgres</li>
                    <li>Docker, Kubernetes</li>
                  </ul>
                </div>

                <div className="cv-subsection">
                  <div className="cv-subsection-title">Data &amp; Growth</div>
                  <ul>
                    <li>Funnel analysis, experimentation, metrics</li>
                    <li>Mixpanel, GA4</li>
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
            </aside>

            <div className="cv-main">
              <section className="cv-section">
                <h2>Experience</h2>

                <div className="cv-role">
                  <div className="cv-role-title">Voltade — Founding Product Manager</div>
                  <div className="cv-role-meta">Jul 2025 – Present | Singapore</div>
                  <div className="cv-role-subtitle">AI-powered ERP &amp; CRM for SMEs</div>
                  <ul>
                    <li>
                      Leading product for Envoy CRM and Digital Brain, an AI-driven ERP
                      platform used by SMEs in logistics, manufacturing, and operations.
                    </li>
                    <li>
                      Owned end-to-end delivery for customer deployments including Yat
                      Guan, Lincoln, and Presto.
                    </li>
                    <li>
                      Translated messy real-world processes (ops, approvals, data flows)
                      into structured, usable systems.
                    </li>
                    <li>
                      Designed AI-assisted workflows to reduce manual work and guide users
                      through complex tasks.
                    </li>
                    <li>
                      Worked hands-on with engineers (TypeScript, Python) to ship features
                      reliably under real constraints.
                    </li>
                    <li>
                      Partnered closely with stakeholders to scope, prioritise, and deliver
                      solutions aligned with business value.
                    </li>
                  </ul>
                </div>

                <div className="cv-role">
                  <div className="cv-role-title">
                    Synthesis Partners — Lead Software Engineer (L3)
                  </div>
                  <div className="cv-role-meta">Jun 2024 – Jul 2025</div>
                  <div className="cv-role-subtitle">AI Research &amp; Consumer Insights</div>
                  <ul>
                    <li>
                      Built AI tools for insight extraction and cultural trend analysis
                      using LLMs.
                    </li>
                    <li>Designed and shipped RAG systems over 2M+ documents.</li>
                    <li>
                      Worked closely with researchers to productionise models with strong UX
                      and reliability.
                    </li>
                  </ul>
                </div>

                <div className="cv-role">
                  <div className="cv-role-title">
                    Ninja Van — Senior Software Engineer (CTO’s Office)
                  </div>
                  <div className="cv-role-meta">May 2021 – Jun 2024</div>
                  <div className="cv-role-subtitle">
                    Platforms &amp; Developer Experience
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
                      Launched internal tools used by thousands of engineers for
                      reliability and incident response.
                    </li>
                    <li>
                      Delivered a voice-calling service handling 3M+ calls in under 6
                      months.
                    </li>
                  </ul>
                </div>

                <div className="cv-role">
                  <div className="cv-role-title">The Bon Pet — Co-Founder</div>
                  <div className="cv-role-meta">Sep 2024 – Present</div>
                  <div className="cv-role-subtitle">Consumer Brand (DTC)</div>
                  <ul>
                    <li>Built and scaled a consumer brand to ~10K MRR.</li>
                    <li>
                      Designed operational workflows across fulfilment, CRM, and customer
                      experience.
                    </li>
                    <li>Hands-on across product, operations, and growth.</li>
                  </ul>
                </div>
              </section>

              <section className="cv-section">
                <h2>Projects (Selected)</h2>
                <ul>
                  <li>
                    <strong>Vorank</strong> — AI-enabled SEO writing tool focused on
                    usability and workflow efficiency.
                  </li>
                  <li>
                    <strong>AfterClass</strong> — Co-founded a student platform reaching
                    10k users and 4.5M page views in 3 months.
                  </li>
                  <li>
                    <strong>Live Commerce (Ninja Van)</strong> — Built internal tooling for
                    live selling and order management.
                  </li>
                </ul>
              </section>
            </div>
          </div>
        </div>
      </PageLayout>
    </>
  )
}

CV.Layout = Layout

