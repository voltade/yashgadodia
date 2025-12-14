import React from 'react'
import Helmet from 'react-helmet'

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
          description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer non sem neque."
        />
        <div className="page-article">
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean
            semper nunc ligula, sit amet faucibus magna varius non. Curabitur
            tempus, mi sit amet fermentum malesuada, augue lectus congue neque,
            sed vehicula nisl orci eget neque.
          </p>
          <p>
            Nullam vel ante sodales, tempor erat eget, aliquet elit. Proin ut
            tellus nec lacus dictum hendrerit. Vestibulum sodales ultricies ex,
            sit amet molestie nisl dictum sit amet. Aliquam erat volutpat.
          </p>
          <p>
            Donec a maximus ipsum. Cras sodales mi lorem, eget tristique est
            molestie vel. Pellentesque ac ultricies massa. Nullam cursus orci
            eget risus hendrerit, in blandit dolor facilisis.
          </p>
        </div>
      </PageLayout>
    </>
  )
}

Me.Layout = Layout
