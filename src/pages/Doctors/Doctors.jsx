import React from 'react'
import Layout from '../../Layout'
import BreadCrumb from '../../components/modules/BreadCrumb/BreadCrumb'
import DoctorsSection from '../../components/templates/Doctors/DoctorsSection/DoctorsSection'
import { Helmet } from 'react-helmet-async'

function Doctors() {
  return (
    <Layout>
      <Helmet>
        <title>دکتر رادفر |  تیم ما</title>
      </Helmet>
      <BreadCrumb title="تیم ما" />
      <DoctorsSection />
    </Layout>
  )
}

export default Doctors