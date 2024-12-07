import React from 'react'
import BreadCrumb from '../../components/modules/BreadCrumb/BreadCrumb'
import Layout from '../../Layout'
import Error404 from '../../components/Errors/Error404/Error404'
import { Helmet } from 'react-helmet-async'

function NotFound() {
    return (
        <Layout>
            <Helmet>
                <title>دکتر رادفر | ارور/404</title>
            </Helmet>
            <BreadCrumb title="ارور / ۴۰۴" />
            <section className="error mt_100 xs_mt_70 pb_100 xs_pb_70">
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-xl-6 col-sm-10 col-md-9 col-lg-8 wow fadeInUp" data-wow-duration="1s">
                            <div className="error_img">
                                <img src="/images/errore-img.png" alt="error" className="img-fluid w-100" />
                            </div>
                            <Error404 />
                        </div>
                    </div>
                </div>
            </section>
        </Layout>
    )
}

export default NotFound