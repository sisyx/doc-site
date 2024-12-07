import React, { useEffect } from 'react'
import BreadCrumb from '../../components/modules/BreadCrumb/BreadCrumb'
import Pagination from '../../components/modules/Pagination/Pagination'
import BlogBox from '../../components/modules/BlogBox/BlogBox'
import Layout from '../../Layout'
import { useSearchParams } from 'react-router-dom'
import Loading from '../../components/modules/Loading/Loading'
import ErrorFetch from '../../components/Errors/ErrorFetch/ErrorFetch'
import Error404 from '../../components/Errors/Error404/Error404'
import useGetData from '../../hooks/useGetData'
import apiRequest from '../../configs/axios'
import { Helmet } from 'react-helmet-async'

function Blog() {

  const { data: categoryBlogData, isPending, isError } = useGetData(["Get_CategoryBlog"], "CategoryBlog.aspx");
  const [searchParams] = useSearchParams();
  const countData = 9;
  const lastData = (searchParams.get("page") || 1) * countData
  const firstData = lastData - countData;

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [searchParams]);


  if (isPending) {
    return <Loading />
  }

  if (isError) {
    return <ErrorFetch />
  }


  return (
    <Layout>
      <Helmet>
        <title>دکتر رادفر | وبلاگ ها</title>
      </Helmet>
      <BreadCrumb title="وبلاگ" />
      <section className="blog_page pt_75 xs_pt_45 pb_100 xs_pb_70" style={{ direction: "rtl" }}>
        <div className="container">
          <div className="row">
            {categoryBlogData?.slice(firstData, lastData)?.length ? (
              <>
                <div className="row">
                  {categoryBlogData?.slice(firstData, lastData)?.map(data => (
                    <BlogBox key={data.id} {...data} />
                  ))}
                </div>
                <Pagination activePage={+searchParams.get("page") || 1} data={categoryBlogData} countData={countData} />
              </>
            ) : (
              <Error404 />
            )}
          </div>
        </div>
      </section>
    </Layout>
  )
}

export default Blog