import React, { useEffect } from 'react'
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
  const phoneNumber = '+65 8139 4225'

  const copyPhoneNumber = async () => {
    if (typeof navigator === 'undefined') return

    try {
      if (navigator?.clipboard?.writeText) {
        await navigator.clipboard.writeText(phoneNumber)
        return
      }
    } catch (e) {
      // noop
    }

    if (typeof document === 'undefined') return

    try {
      const textarea = document.createElement('textarea')
      textarea.value = phoneNumber
      textarea.setAttribute('readonly', '')
      textarea.style.position = 'absolute'
      textarea.style.left = '-9999px'
      document.body.appendChild(textarea)
      textarea.select()
      document.execCommand('copy')
      document.body.removeChild(textarea)
    } catch (e) {
      // noop
    }
  }

  useEffect(() => {
    if (typeof document === 'undefined') return

    document.body.classList.add('is-cv')
    return () => {
      document.body.classList.remove('is-cv')
    }
  }, [])

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
              AI Product Manager · Developer Tooling &amp; Agents
            </div>

            <ul className="cv-contact" aria-label="Contact">
              <li className="cv-contact-item">📍 Singapore</li>
              <li className="cv-contact-item">
                <a href="mailto:pirsquare.yash@gmail.com">Email</a>
              </li>
              <li className="cv-contact-item">
                <button
                  type="button"
                  className="cv-contact-link"
                  onClick={copyPhoneNumber}
                  aria-label={`Copy phone number ${phoneNumber}`}
                  title={`Copy ${phoneNumber}`}
                >
                  Phone
                </button>
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
              AI PM (ex-software engineer) shipping agentic workflows and developer tools.
              Set success metrics (task success %, p95 latency s, cost/task), run weekly
              eval loops (pass@k + qualitative review), and pair closely with engineers and
              users from discovery through rollout.
            </p>
          </header>

          <div className="cv-grid">
            <aside className="cv-sidebar">
              <section className="cv-section">
                <h2>Skills</h2>

                <div className="cv-subsection">
                  <div className="cv-subsection-title">Product &amp; AI</div>
                  <ul>
                    <li>Agent workflows: tool/function use, sandboxing, prompt &amp; retrieval design</li>
                    <li>Evaluation loops: pass@k, latency, cost, failure taxonomy, guardrails</li>
                    <li>End-to-end ownership: discovery → prioritisation → rollout → iteration</li>
                    <li>UX for complex systems: workflows, approvals, edge cases, backstops</li>
                  </ul>
                </div>

                <div className="cv-subsection">
                  <div className="cv-subsection-title">Engineering</div>
                  <ul>
                    <li>Distributed systems, microservices, event-driven architecture</li>
                    <li>Go / Python / TypeScript; Postgres, Redis, Kafka, Elasticsearch</li>
                    <li>Kubernetes, Docker, CI/CD, observability and SLO basics</li>
                  </ul>
                </div>

                <div className="cv-subsection">
                  <div className="cv-subsection-title">Growth &amp; Monetisation</div>
                  <ul>
                    <li>Funnel breakdowns, activation/retention, experimentation</li>
                    <li>Instrumentation &amp; analytics: Mixpanel, GA4; cost optimisation</li>
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
                  <li>Google Developer Student Club Lead, SMU</li>
                  <li>Winner, Ninja Van Hackathon</li>
                  <li>National Service: Top 1% of cohort (Combat Diver)</li>
                </ul>
              </section>

              <section className="cv-section cv-print-hide">
                <h2>Fit</h2>
                <ul>
                  <li>Own product modules end-to-end, fast iteration loops</li>
                  <li>High bar for interaction design in complex workflows</li>
                  <li>Growth + monetisation instincts without UX debt</li>
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
                      Prioritised three automation use-cases (ticket triage, data retrieval, status
                      updates) with engineering and ops; set success metrics (task success %, p95
                      latency s, cost per task) and sequencing.
                    </li>
                    <li>
                      Scoped agent toolset (Postgres, Slack, HTTP, Git) and sandbox guardrails; delivered
                      prototype at 82% task success with p95 8.4 s latency, cutting manual ops by 35% and
                      holding cost per task at S$0.18.
                    </li>
                    <li>
                      Instituted weekly eval loop (pass@k + qualitative review) to tune prompts/tools;
                      reduced failure rate by 30% while keeping cost per task within budget.
                    </li>
                  </ul>
                </div>

                <div className="cv-role">
                  <div className="cv-role-title">
                    <a href={schema?.url} target="_blank" rel="noreferrer">
                      Synthesis Partners
                    </a>{' '}
                    — Lead Software Engineer
                  </div>
                  <div className="cv-role-meta">Jun 2024 – Jul 2025</div>
                  <div className="cv-role-subtitle">Research &amp; Consumer Insights</div>
                  <div className="cv-role-links">
                    <a href={schema?.url} target="_blank" rel="noreferrer">
                      synthesis.partners
                    </a>
                  </div>
                  <ul>
                    <li>
                      Product-led ML/GenAI insight tooling (Pinpoint, Topic Modelling, Theme Builder) to
                      cut analyst time by 55%; defined success metrics and rollout plan with research/GTM.
                    </li>
                    <li>
                      Owned RAG chatbot (2M+ docs, Pinecone); raised retrieval precision by 22% and reduced
                      time-to-first-insight by 35%; instrumented dashboards for relevance, latency, and cost.
                    </li>
                    <li>
                      Translated research models into production APIs with p99 uptime of 99.9%; managed
                      feature flags and client onboarding.
                    </li>
                  </ul>
                </div>

                <div className="cv-role">
                  <div className="cv-role-title">
                    <a href={ninjaEasy?.url} target="_blank" rel="noreferrer">
                      Ninja Van
                    </a>{' '}
                    — Software Engineer (CTO’s Office)
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
                      Owned notifications and voice platform (100M+ Kafka events/day); launched voice
                      channel (3M calls/5 months) with p95 setup latency of 2.3 s; reduced delivery
                      failure by 18% and monthly cost by S$12K via template and provider optimisation.
                    </li>
                    <li>
                      Drove ChatOps incident platform (~2K DAU, 35K issues resolved); lowered MTTA by 28%
                      through escalation logic and developer-focused UX.
                    </li>
                    <li>
                      Led deprecation of legacy shipper ID across services; coordinated core/API teams and
                      unblocked defects to keep migration on schedule.
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
                    <li>
                      Grew to S$10K MRR via B2B/B2C partnerships; automated fulfilment and lifecycle
                      comms with Zapier + scripts, cutting ops workload by 70% and lowering churn by 15%.
                    </li>
                    <li>
                      Built analytics for conversion and retention; iterated offers and messaging based on
                      cohort behaviour.
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
                      Ran discovery (35 interviews), scoped MVP, and led build; reached 10K users and 4.5M
                      page views in ~3 months, scaling to 50K+ active students across three universities.
                    </li>
                    <li>
                      Instrumented analytics to prioritise roadmap; balanced content growth with system
                      reliability as usage spiked.
                    </li>
                  </ul>
                </div>
              </section>

            </div>
          </div>
        </div>
      </main>
    </>
  )
}

CV.Layout = CVLayout
