import React from 'react'
import Layout from '../../Layout'
import BreadCrumb from '../../components/modules/BreadCrumb/BreadCrumb'
import DoctorDetailsSection from '../../components/templates/DoctorDetails/DoctorDetailsSection/DoctorDetailsSection'

function DoctorsDetails() {
  return (
    <Layout>
      <BreadCrumb title="جزئیات تیم" />
      <DoctorDetailsSection />
    </Layout>
  )
}

export default DoctorsDetails