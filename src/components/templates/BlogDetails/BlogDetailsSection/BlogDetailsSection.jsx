import React, { useEffect, useState } from 'react'
import SideBarBlogDetails from '../SideBarBlogDetails/SideBarBlogDetails'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faCalendarAlt } from '@fortawesome/free-regular-svg-icons';
import useGetData from '../../../../hooks/useGetData';
import Loading from '../../../modules/Loading/Loading';
import ErrorFetch from '../../../Errors/ErrorFetch/ErrorFetch';
import Error404 from '../../../Errors/Error404/Error404';
import { useParams } from 'react-router-dom';
import convertToJalali from '../../../../utils/convertToJalali';
import toFarsiNumber from '../../../../utils/toFarsiNumber';
import { Helmet } from 'react-helmet-async';

function BlogDetailsSection() {

    const { categoryid, id } = useParams();

    const { data: itemsCategoryBlog, isPending, isError } = useGetData(["Get_ItemsCategoryBlog"], `Blog.aspx?CategoryID=${+categoryid}`);
    const [itemBlogData, setItemBlogData] = useState(null)

    useEffect(() => {
        const findItemBlog = itemsCategoryBlog?.find(data => data.id === +id);
        setItemBlogData(findItemBlog ? findItemBlog : null)
    }, [itemsCategoryBlog])


    if (isPending) {
        return <Loading />
    }

    if (isError) {
        return <ErrorFetch />
    }



    return (
        <section className="blog_details pt_100 xs_pt_70 pb_100 xs_pb_70" style={{ direction: "rtl" }}>
            <Helmet>
                <title>{`دکتر رادفر | وبلاگ ها | ${itemBlogData?.title}`}</title>
                <meta name="description" content={`${itemBlogData?.meta}`} />
            </Helmet>
            <div className="container">
                <div className="row">
                    {(itemsCategoryBlog?.length > 0 && itemBlogData !== null) ? (
                        <>
                            <div className="col-xl-9 col-lg-8 wow fadeInLeft" data-wow-duration="1s">
                                <div className="blog_details_content">
                                    <div className="blog_details_img">
                                        <img loading='lazy' src={itemBlogData?.image1} alt="blog img" className="img-fluid w-100" />
                                    </div>

                                    <div className="blog_details_header d-flex flex-wrap justify-content-between">
                                        <ul className="blog_details_header_left d-flex flex-wrap">
                                            <li><span>{itemBlogData?.categorytitle}</span></li>
                                            <li>
                                                <FontAwesomeIcon icon={faUser} /> {itemBlogData?.adminTitle}                                            </li>
                                            <li>
                                                <FontAwesomeIcon icon={faCalendarAlt} />
                                                {toFarsiNumber(convertToJalali(itemBlogData?.date))}
                                            </li>

                                        </ul>
                                    </div>

                                    <div className="blog_details_text">
                                        <h2 className="details_title">{itemBlogData?.title}</h2>
                                        <p>{itemBlogData?.description}</p>
                                        {/* <p>از طریق بهترین شیوه های تعاونی به طور مشترک اطلاعات کلاس جهانی را به اشتراک بگذارید
                                            پس از آمادگی وب مبتنی بر اصول. بهترین شبکه‌سازی آجرها و کلیک‌ها
                                            اقدامات از طریق اقتصادی سالم.</p>
                                        <p>به طور چشمگیری زیرساخت های جایگزین را از طریق سازگار با عقب گرد ایجاد کنید
                                            آمادگی وب به طور کامل بدون استفاده از اطلاعات اقتصادی مناسب
                                            ترازهای قابل نگهداری اجباراً الزامات به حداکثر رساندن منابع را از طریق ایجاد کنید
                                            بهترین شیوه های تعاونی به صورت مشترک سندیکا</p>
                                        <ul>
                                            <li>به طور چشمگیری زیرساخت های جایگزین را از طریق سازگار با عقب گرد ایجاد کنید.</li>
                                            <li>اطلاعات اقتصادی مناسب بدون ترازهای قابل نگهداری.</li>
                                            <li>به طور مشترک اطلاعات کلاس جهانی را پس از اصول محوری به اشتراک بگذارید.</li>
                                            <li>شبکه‌سازی مشترک بهترین شیوه‌های آجر-و-کلیک از طریق اقتصادی مناسب.
                                            </li>
                                            <li>اجباراً الزامات به حداکثر رساندن منابع را از طریق ایجاد کنید.</li>
                                        </ul>
                                        <p>از طریق بهترین شیوه های تعاونی به طور مشترک اطلاعات کلاس جهانی را به اشتراک بگذارید
                                            پس از آمادگی وب مبتنی بر اصول. بهترین شبکه‌سازی آجرها و کلیک‌ها
                                            اقدامات از طریق اقتصادی سالم.</p>
                                        <p>به طور چشمگیری زیرساخت های جایگزین را از طریق سازگار با عقب گرد ایجاد کنید
                                            آمادگی وب به طور کامل بدون استفاده از اطلاعات اقتصادی مناسب
                                            ترازهای قابل نگهداری اجباراً الزامات به حداکثر رساندن منابع را از طریق ایجاد کنید
                                            بهترین شیوه های تعاونی به صورت مشترک سندیکا</p>
                                        <div className="details_quot_text">“انواع مختلفی از معابر Lorem Ipsum وجود دارد
                                            در دسترس است، اما اکثریت
                                            به نوعی با تغییراتی در قسمت ها دچار تغییر شده اند.</div>

                                        <p> به سادگی متن ساختگی صنعت چاپ و حروفچینی است.
                                            شده است صنعت است
                                            متن ساختگی استاندارد از دهه 1500، زمانی که یک چاپگر ناشناس یک گالری از نوع را گرفت.
                                            و آن را به هم زد تا درست کند
                                            یک نوع کتاب نمونه</p>
                                        <p>به سادگی متن ساختگی صنعت چاپ و حروفچینی. لورم ایپسوم دارد
                                            این صنعت در حال حاضر یک مانع است
                                            متن ساختگی استاندارد از سال 1500 تاکنون.</p> */}
                                    </div>
                                </div>
                            </div>
                            <SideBarBlogDetails />
                        </>
                    ) : (
                        <Error404 />
                    )}

                </div>
            </div>
        </section>
    )
}

export default BlogDetailsSection