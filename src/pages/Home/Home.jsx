import React from 'react'
import AboutSection from '../../components/templates/AboutSection/AboutSection'
import BannerSection from '../../components/templates/Home/BannerSection/BannerSection'
import ServiceSection from '../../components/templates/Home/ServiceSection/ServiceSection'
import FaqSection from '../../components/templates/Home/FaqSection/FaqSection'
import ReviewSection from '../../components/templates/Home/ReviewSection/ReviewSection'
import ProcessSection from '../../components/templates/Home/ProcessSection/ProcessSection'
import AppoinmentSection from '../../components/templates/Home/AppoinmentSection/AppoinmentSection'
import TeamSection from '../../components/templates/Home/TeamSection/TeamSection'
import BlogSection from '../../components/templates/Home/BlogSection/BlogSection'
import Layout from '../../Layout'
import { Helmet } from 'react-helmet-async'

function Home() {
    return (
        <Layout>
            <Helmet>
                <title>دکتر رادفر | رزرو نوبت دکتر و مشاوره پزشکی </title>
                <meta name="description" content="رزرو نوبت دکتر و مشاوره پزشکی" />
            </Helmet>
            <BannerSection />
            <AboutSection />
            <ServiceSection />
            <FaqSection />
            <ProcessSection />
            <AppoinmentSection />
            <TeamSection />
            <ReviewSection />
            <BlogSection />
        </Layout>
    )
}

export default Home