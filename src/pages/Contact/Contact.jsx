import React from 'react'
import BreadCrumb from '../../components/modules/BreadCrumb/BreadCrumb'
import Layout from '../../Layout'
import ContactSection from '../../components/templates/Contact/ContactSection/ContactSection'
import { Helmet } from 'react-helmet-async'

function Contact() {
    return (
        <Layout>
            <Helmet>
                <title>دکتر رادفر | تماس با ما</title>
            </Helmet>
            <BreadCrumb title="تماس با ما" />
            <ContactSection />
        </Layout>
    )
}

export default Contact