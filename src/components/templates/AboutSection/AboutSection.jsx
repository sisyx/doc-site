import React from 'react'
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlay } from '@fortawesome/free-solid-svg-icons';
import useGetData from '../../../hooks/useGetData';
import Skeleton from 'react-loading-skeleton';
import "react-loading-skeleton/dist/skeleton.css";


function AboutSection() {
    const { data: aboutData, isPending } = useGetData(["Get_About"], "AboutUs.aspx");


    return (
        <section className="about pt_100 xs_pt_70 pb_100 xs_pb_70" style={{ direction: "rtl" }}>
            <div className="container">
                <div className="row">
                    <div className="col-xl-6 col-sm-9  col-lg-5 col-md-7 wow fadeInLeft" data-wow-duration="1s">
                        <div className="about_img">
                            <div className="about_img_1">
                                <img src="images/about-img1.jpg" alt="about img" className="img-fluid w-100" />
                            </div>
                            <div className="about_img_2">
                                <img src="images/about_img2.jpg" alt="about img" className="img-fluid w-100" />
                                <Link className="play_btn venobox" data-autoplay="true" data-vbtype="video" to="#">
                                    <FontAwesomeIcon icon={faPlay} aria-hidden="true" />
                                </Link>
                            </div>
                        </div>
                    </div>
                    <div className="col-xl-6 col-sm-12 col-lg-7  wow fadeInRight" data-wow-duration="1s">
                        <div className="common_heading">
                            <h5>درباره ما</h5>
                            <h2>مکان بزرگ مرکز بیمارستان پزشکی</h2>
                            {isPending ? (
                                <p>
                                    <Skeleton count={2} />
                                </p>
                            ) : (
                                <p>{aboutData?.[0]?.text}</p>
                            )}
                        </div>

                        <ul className="about_iteam d-flex flex-wrap">
                            <li>خدمات آمبولانس</li>
                            <li>اکسیژن روی چرخ</li>
                            <li>داروخانه در کلینیک</li>
                            <li>پزشکان وظیفه</li>
                            <li>فوریت های پزشکی ۲۴/۷</li>
                        </ul>
                        <Link to="/about-us" className="common_btn">مشاهده همه</Link>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default AboutSection