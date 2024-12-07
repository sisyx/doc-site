import React from 'react'
import BlogBox from '../../../modules/BlogBox/BlogBox'
import SectionHeader from '../../../modules/SectionHeader/SectionHeader'
import useGetData from '../../../../hooks/useGetData';

function BlogSection() {
    const { data: categoryBlogData } = useGetData(["Get_CategoryBlog"], "CategoryBlog.aspx");
    return (
        <section className="blog pt_100 xs_pt_70 pb_100 xs_pb_70" style={{ direction: "rtl" }}>
            <div className="container">

                <SectionHeader
                    title="جدیدترین مطالب و مقالات"
                    subTitle="آخرین اخبار"
                />

                <div className="row">
                    {categoryBlogData?.slice(0, 3)?.map(category => (
                        <BlogBox key={category.id} {...category} />
                    ))}
                </div>
            </div>
        </section>
    )
}

export default BlogSection