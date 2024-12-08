import React, { useEffect } from 'react'
import BreadCrumb from '../../components/modules/BreadCrumb/BreadCrumb'
import Pagination from '../../components/modules/Pagination/Pagination'
import Layout from '../../Layout'
import { useSearchParams } from 'react-router-dom'
import Loading from '../../components/modules/Loading/Loading'
import ErrorFetch from '../../components/Errors/ErrorFetch/ErrorFetch'
import Error404 from '../../components/Errors/Error404/Error404'
import useGetData from '../../hooks/useGetData'
import { Helmet } from 'react-helmet-async'
import VideoBox from '../../components/modules/VideoBox/VideoBox'

function Videos() {

  const { data: categoryVideoData, isPending, isError } = useGetData(["Get_CategoryVideo"], "CategoryVideo.aspx");
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
        <title>دکتر رادفر | ویدیو ها</title>
      </Helmet>
      <BreadCrumb title="ویدیو" />
      <section className="blog_page pt_75 xs_pt_45 pb_100 xs_pb_70" style={{ direction: "rtl" }}>
        <div className="container">
          <div className="row">
            {categoryVideoData?.slice(firstData, lastData)?.length ? (
              <>
                <div className="row">
                  {categoryVideoData?.slice(firstData, lastData)?.map(data => (
                    <VideoBox key={data.id} {...data} />
                  ))}
                </div>
                <Pagination activePage={+searchParams.get("page") || 1} data={categoryVideoData} countData={countData} />
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

export default Videos