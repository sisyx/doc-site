import React, { useEffect, useState } from 'react'
import { Helmet } from 'react-helmet-async'
import Loading from '../../../modules/Loading/Loading';
import ErrorFetch from '../../../Errors/ErrorFetch/ErrorFetch';
import useGetData from '../../../../hooks/useGetData';
import Error404 from '../../../Errors/Error404/Error404';
import { useParams } from 'react-router-dom';

function DoctorDetailsSection() {

    const {id} = useParams();

    const { data: teamData, isPending, isError } = useGetData(["Get_Team"], "Team.aspx");

    const [itemDoctorData, setItemDoctorData] = useState(null)

    useEffect(() => {
        const findItemDoctor = teamData?.find(data => data.id === +id);
        setItemDoctorData(findItemDoctor ? findItemDoctor : null)
    }, [teamData])




    if (isPending) {
        return <Loading />
    }

    if (isError) {
        return <ErrorFetch />
    }



    return (
        <section className="team_details pt_100 xs_pt_70 pb_100 xs_pb_70" style={{ direction: "rtl" }}>
            <Helmet>
                <title>{`دکتر رادفر | تیم ها | ${itemDoctorData?.name}`}</title>
            </Helmet>
            <div className="container">
                <div className="row">
                    {itemDoctorData !== null ? (
                        <div className="col-12 wow fadeInLeft" data-wow-duration="1s">
                            <div className="row">
                                <div className="col-xl-5 col-md-5 col-lg-5">
                                    <div className="team_details_img">
                                        <img src={itemDoctorData?.image} alt="team" className="img-fluid w-100" />
                                    </div>
                                </div>
                                <div className="col-xl-7 col-md-7 col-lg-7">
                                    <div className="team_details_img_text">
                                        <h3>{itemDoctorData?.name}</h3>
                                        {/* <p>MBBS (University of Wyoming).</p>
                                    <p>M.D. of Medicine (Netherland Medical College).</p>
                                    <p><b>Senior Prof. (MBBS, M.D)</b> کالج پزشکی هلند.</p>
                                    <p>شماره نظام پزشکی: الف-۲۳۱۴۴۱</p>
                                    <a href="callto:0123456789"> تماس:  (۷۰۰) ۲۳۰-۰۰۳۵</a>
                                    <a href="mailto:example@gmail.com">ایمیل: example@gmail.com</a> */}
                                    </div>
                                </div>
                            </div>

                            <div className="biography">
                                <h3>بیوگرافی دکتر {itemDoctorData?.name}</h3>
                                <div className="biography_text">
                                    {/* <h4 className="mb-3">پیشینه آموزشی</h4>
                                <p className="mb-4">لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد</p> */}

                                    <h4 className="mb-3">مهارت های تجربه پزشکی</h4>

                                    <p>{itemDoctorData?.description}</p>
                                </div>
                            </div>

                            {/* <div className="comment_area">
                            <h2>مجموع دیدگاه(۰۴)</h2>
                            <div className="single_comment">
                                <div className="comment_img">
                                    <img src="/images/comment-1.png" alt="review" className="img-fluid w-100" />
                                </div>
                                <div className="comment_text">
                                    <h4>محسن دادار <span><i className="fal fa-clock"></i>۴ ساعت پیش</span></h4>
                                    <span className="rating">
                                        <i className="fas fa-star"></i>
                                        <i className="fas fa-star"></i>
                                        <i className="fas fa-star"></i>
                                        <i className="fas fa-star"></i>
                                        <i className="fas fa-star"></i>
                                    </span>
                                    <p>اما اکثریت دچار تغییراتی به شکلی شده اند، با شوخی تزریقی، یا
                                        کلمات خود را حتی کمی باور پذیر به نظر می رسد.</p>
                                    <a href="#"><i className="fal fa-reply-all"></i>پاسخ</a>
                                </div>
                            </div>
                            <div className="single_comment commant_reply">
                                <div className="comment_img">
                                    <img src="/images/comment-2.png" alt="review" className="img-fluid w-100" />
                                </div>
                                <div className="comment_text">
                                    <h4>نیما نوبخت <span><i className="fal fa-clock" aria-hidden="true"></i>۱ ساعت پیش</span></h4>
                                    <span className="rating">
                                        <i className="fas fa-star"></i>
                                        <i className="fas fa-star"></i>
                                        <i className="fas fa-star"></i>
                                        <i className="fas fa-star"></i>
                                        <i className="fas fa-star"></i>
                                    </span>
                                    <p>اما اکثریت دچار تغییراتی به شکلی شده اند، با شوخی تزریقی، یا
                                        کلمات خود را حتی کمی باور پذیر به نظر می رسد.</p>
                                    <a href="#"><i className="fal fa-reply-all"></i>پاسخ</a>
                                </div>
                            </div>
                            <div className="single_comment">
                                <div className="comment_img">
                                    <img src="/images/comment-3.png" alt="review" className="img-fluid w-100" />
                                </div>
                                <div className="comment_text">
                                    <h4>داوورد عارف<span><i className="fal fa-clock" aria-hidden="true"></i> ۶ ساعت پیش</span></h4>
                                    <span className="rating">
                                        <i className="fas fa-star"></i>
                                        <i className="fas fa-star"></i>
                                        <i className="fas fa-star"></i>
                                        <i className="fas fa-star"></i>
                                        <i className="fas fa-star"></i>
                                    </span>
                                    <p>اما اکثریت دچار تغییراتی به شکلی شده اند، با شوخی تزریقی، یا
                                        کلمات خود را حتی کمی باور پذیر به نظر می رسد.</p>
                                    <a href="#"><i className="fal fa-reply-all"></i>پاسخ</a>
                                </div>
                            </div>
                            <div className="single_comment">
                                <div className="comment_img">
                                    <img src="/images/comment-1.png" alt="review" className="img-fluid w-100" />
                                </div>
                                <div className="comment_text">
                                    <h4>رضا زمانی <span><i className="fal fa-clock" aria-hidden="true"></i>۴ ساعت پیش</span></h4>
                                    <span className="rating">
                                        <i className="fas fa-star"></i>
                                        <i className="fas fa-star"></i>
                                        <i className="fas fa-star"></i>
                                        <i className="fas fa-star"></i>
                                        <i className="fas fa-star"></i>
                                    </span>
                                    <p>اما اکثریت دچار تغییراتی به شکلی شده اند، با شوخی تزریقی، یا
                                        کلمات خود را حتی کمی باور پذیر به نظر می رسد..</p>
                                    <a href="#"><i className="fal fa-reply-all"></i>پاسخ</a>
                                </div>
                            </div>
                        </div>

                        <form className="comment_input_area">
                            <h2>ارسال دیدگاه</h2>
                            <p>
                                <i className="fas fa-star"></i>
                                <i className="fas fa-star"></i>
                                <i className="fas fa-star"></i>
                                <i className="fas fa-star"></i>
                                <i className="fas fa-star"></i>
                            </p>
                            <div className="row">
                                <div className="col-xl-6">
                                    <input type="text" placeholder="نام..." />
                                </div>
                                <div className="col-xl-6">
                                    <input type="text" placeholder="ایمیل..." />
                                </div>
                                <div className="col-xl-12 mt-4 mb-4">
                                    <textarea rows="4" placeholder="نوشتن دیدگاه..."></textarea>
                                </div>
                                <div className="col-xl-12">
                                    <a href="#" className="common_btn">ارسال کنید</a>
                                </div>
                            </div>
                        </form> */}

                        </div>
                    ) : (
                        <Error404 />
                    )}
                </div>
            </div>
        </section>
    )
}

export default DoctorDetailsSection