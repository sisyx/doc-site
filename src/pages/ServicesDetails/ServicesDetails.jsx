import React from 'react'
import BreadCrumb from '../../components/modules/BreadCrumb/BreadCrumb'
import Layout from '../../Layout'
import ServicesDetailsSection from '../../components/templates/ServicesDetails/ServicesDetailsSection/ServicesDetailsSection'

function ServicesDetails() {
    return (
        <Layout>
            <BreadCrumb title="جزئیات خدمات" />
            <ServicesDetailsSection />
        </Layout>
    )
}

export default ServicesDetails