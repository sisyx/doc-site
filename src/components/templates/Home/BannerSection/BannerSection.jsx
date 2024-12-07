import React from 'react'
import { Link } from 'react-router-dom'

function BannerSection() {
    return (
        <section className="banner" style={{background: "url(images/banner_bg.jpg)" , direction: "rtl"}}>
            <div className="container">
                <div className="row justify-content-between">
                    <div className="col-xxl-5 col-md-9 col-xl-6 col-lg-6 wow fadeInLeft" data-wow-duration="1s">
                        <div className="banner_text">
                            <h5>به مدیفکس خوش آمدید</h5>
                            <h1>ما به سلامتی شما متعهد هستیم</h1>
                            <p>این یک واقعیت ثابت است که وقتی خواننده حواسش به محتوای یک صفحه می شود
                                نگاه کردن به این طرح</p>
                            <Link to="/doctor" className="common_btn">درخواست وقت دکتر</Link>
                            <ul className="banner_counter d-flex flex-wrap">
                                <li>
                                    <h3><span>۳۵۵</span>+</h3>
                                    <p>بیماران بهبود یافته</p>
                                </li>
                                <li>
                                    <h3><span>۹۸</span>%</h3>
                                    <p>بازدید موفق</p>
                                </li>
                                <li>
                                    <h3><span>۱۲۰</span>+</h3>
                                    <p>دکترهای محبوب</p>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className="col-xxl-6 col-lg-6 col-xl-6 wow fadeInRight" data-wow-duration="1s">
                        <div className="banner_img">
                            <div className="img">
                                <img src="images/banner_img.png" alt="img" className="img-fluid w-100" />
                            </div>
                            <div className="react">
                                <img src="images/react.png" alt="react img" className="img-fluid w-100" />
                            </div>
                            <div className="video_call">
                                <img src="images/Video-call.png" alt="video img" className="img-fluid w-100" />
                            </div>
                            <div className="call">
                                <img src="images/Call.png" alt="call img" className="img-fluid w-100" />
                            </div>
                            <div className="review">
                                <img src="images/Review.png" alt="review img" className="img-fluid w-100" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default BannerSection