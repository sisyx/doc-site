import React from 'react'
import BreadCrumb from '../../components/modules/BreadCrumb/BreadCrumb'
import Layout from '../../Layout'
import VideoDetailsSection from '../../components/templates/VideoDetails/VideoDetailsSection/VideoDetailsSection'


function BlogDetails() {

    return (
        <Layout>
            <BreadCrumb title="جزئیات ویدیو" />
            <VideoDetailsSection />
        </Layout>
    )
}

export default BlogDetails