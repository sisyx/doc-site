import React, { useEffect, useState } from 'react'
import SideBarServicesDetails from '../SideBarServicesDetails/SideBarServicesDetails'
import AddQuestion from '../AddQuestion/AddQuestion'
import QuestionAndAnswers from '../QuestionAndAnswers/QuestionAndAnswers'
import ImageServices from '../ImageServices/ImageServices'
import useGetData from '../../../../hooks/useGetData'
import buildTreeForComments from '../../../../utils/buildTreeForComments'
import Loading from '../../../modules/Loading/Loading'
import ErrorFetch from '../../../Errors/ErrorFetch/ErrorFetch'
import { useParams } from 'react-router-dom'
import Error404 from '../../../Errors/Error404/Error404'
import { Helmet } from 'react-helmet-async'

function ServicesDetailsSection() {
    const { categoryid, id } = useParams();
    const { data: itemsCategoryService, isPending, isError } = useGetData(["Get_ItemsCategoryService"], `Service.aspx?CategoryID=${+categoryid}`);
    const { data: listDidgahData } = useGetData(["Get_ListDidgah"], "ListDidgah.aspx");
    const [itemServiceData, setItemServiceData] = useState(null)
    const [detailsReplyUser, setDeatilsReplyUser] = useState(null);
    const [commentTree, setCommentTree] = useState([]);


    useEffect(() => {
        const findItemService = itemsCategoryService?.find(data => data.id === +id);
        setItemServiceData(findItemService ? findItemService : null)
    }, [itemsCategoryService])


    useEffect(() => {
        setCommentTree(
            listDidgahData ? buildTreeForComments(listDidgahData) : []
        )
    }, [listDidgahData])




    if (isPending) {
        return <Loading />
    }

    if (isError) {
        return <ErrorFetch />
    }





    return (
        <section className="service_details pt_100 xs_pt_70 pb_100 xs_pb_70" style={{ direction: "rtl" }}>
            <Helmet>
                <title>{`دکتر رادفر | خدمات ما | ${itemServiceData?.title}`}</title>
                <meta name="description" content={`${itemServiceData?.meta}`} />
            </Helmet>
            <div className="container">
                <div className="row">
                    {(itemsCategoryService?.length > 0 && itemServiceData !== null) ? (
                        <>
                            <div className="col-xl-9 col-lg-8 wow fadeInLeft" data-wow-duration="1s">
                                <div className="service_dstails_img">
                                    <img src={itemServiceData?.image1} alt="service" className="img-fluid w-100" />
                                </div>
                                <div className="tf_service_details_text">
                                    <div id="generaldefinition">
                                        <h3>{itemServiceData?.title}</h3>
                                        <p>{itemServiceData?.description}</p>
                                    </div>
                                    {/* <div id="treatments">
                                        <ul>
                                            <li>به طور چشمگیری زیرساخت های جایگزین را از طریق سازگار با عقب گرد ایجاد کنید.</li>
                                            <li>اطلاعات اقتصادی مناسب بدون ترازهای قابل نگهداری.</li>
                                            <li>به طور مشترک اطلاعات کلاس جهانی را پس از اصول محوری به اشتراک بگذارید.</li>
                                            <li>شبکه‌سازی مشترک بهترین شیوه‌های آجر-و-کلیک از طریق اقتصادی مناسب.
                                            </li>
                                            <li>اجباراً الزامات به حداکثر رساندن منابع را از طریق ایجاد کنید.</li>
                                        </ul>
                                    </div>
                                    <div id="symptoms">
                                        <h3>توانایی ها</h3>
                                        <p>لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک
                                            است چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی
                                            تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد کتابهای زیادی
                                            در شصت و سه درصد گذشته حال و آینده</p>
                                        <p>لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک
                                            است چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی
                                            تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد کتابهای زیادی
                                            در شصت و سه درصد گذشته حال و آینده</p>
                                    </div> */}

                                </div>

                                <div className="row">
                                    <ImageServices image={itemServiceData?.image1}/>
                                    <ImageServices image={itemServiceData?.image2} />
                                    <ImageServices  image={itemServiceData?.image3}/>
                                </div>

                                <div className="comment_area">
                                    <h2>پرسش و پاسخ</h2>
                                    <AddQuestion isPrivateForDoctor={false} setDeatilsReplyUser={setDeatilsReplyUser} detailsReplyUser={detailsReplyUser} />
                                    {commentTree?.length > 0 ? (
                                        commentTree?.sort((itemA, itemB) => itemB.id - itemA.id)?.map(data => (
                                            <QuestionAndAnswers setDeatilsReplyUser={setDeatilsReplyUser} key={data.id} {...data} />
                                        ))
                                    ) : (
                                        <h2 style={{ marginTop: "20px" }}>هیچ پرسش و پاسخی یافت نشد.</h2>
                                    )}
                                </div>
                            </div>
                            <SideBarServicesDetails />
                        </>
                    ) : (
                        <Error404 /> 
                    )}
                </div>
            </div>
        </section>
    )
}

export default ServicesDetailsSection