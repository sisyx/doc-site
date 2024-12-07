import React from 'react'
import BreadCrumb from '../../components/modules/BreadCrumb/BreadCrumb'
import Layout from '../../Layout'
import ServicesPart from '../../components/templates/Services/ServicesPart/ServicesPart'
import { Helmet } from 'react-helmet-async'

function Services() {
    return (
        <Layout>
            <Helmet>
                <title>دکتر رادفر | خدمات ها</title>
            </Helmet>
            <BreadCrumb title="خدمات ما" />
            <ServicesPart />
        </Layout>
    )
}

export default Services