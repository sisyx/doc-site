import React from 'react'
import BreadCrumb from '../../components/modules/BreadCrumb/BreadCrumb'
import Layout from '../../Layout'
import BlogDetailsSection from '../../components/templates/BlogDetails/BlogDetailsSection/BlogDetailsSection'


function BlogDetails() {

    return (
        <Layout>
            <BreadCrumb title="جزئیات وبلاگ" />
            <BlogDetailsSection />
        </Layout>
    )
}

export default BlogDetails