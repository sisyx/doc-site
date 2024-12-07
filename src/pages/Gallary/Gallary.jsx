import React from 'react'
import BreadCrumb from '../../components/modules/BreadCrumb/BreadCrumb'
import Layout from '../../Layout'
import GallarySection from '../../components/templates/Gallary/GallarySection/GallarySection'
import { Helmet } from 'react-helmet-async'

function Gallary() {
    return (
        <Layout>
            <Helmet>
                <title>دکتر رادفر | تصاویر</title>
            </Helmet>
            <BreadCrumb title="گالری تصاویر ما" />
            <GallarySection />
        </Layout>
    )
}

export default Gallary