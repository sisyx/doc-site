import React, { Suspense } from 'react'
import AboutSection from '../../components/templates/AboutSection/AboutSection'
import BreadCrumb from '../../components/modules/BreadCrumb/BreadCrumb'
import Layout from '../../Layout'
import Loading from '../../components/modules/Loading/Loading'
import { Helmet } from 'react-helmet-async'

function About() {
  return (
    <Layout>
      <Helmet>
        <title>دکتر رادفر | درباره ما</title>
      </Helmet>
      <BreadCrumb title="درباره ما" />
      <AboutSection />
    </Layout>
  )
}

export default About