import React from 'react'
import FaqBox from '../../../modules/FaqBox/FaqBox'
import SectionHeader from '../../../modules/SectionHeader/SectionHeader'
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlay } from '@fortawesome/free-solid-svg-icons';
import useGetData from '../../../../hooks/useGetData';

function FaqSection() {

    const { data: faqData, isPending } = useGetData(["Get_Faq"], "FAQ.aspx");

    return (
        <section className="faq pt_100 xs_pt_70 pb_100 xs_pb_70" style={{ direction: "rtl" }}>
            <div className="container">
                
                <SectionHeader
                    title="سوالات خود را از ما بپرسید"
                    subTitle="سوالات متداول"
                />

                <div className="row">
                    <div className="col-xl-7 col-lg-6 wow fadeInLeft" data-wow-duration="1s">
                        <div className="faq_accordion accordion accordion-flush" id="accordionFlushExample">
                            {faqData?.map(data => (
                                <FaqBox key={data.id} {...data}/>
                            ))}
                        </div>
                    </div>

                    <div className="col-xl-5 col-lg-6 wow fadeInRight" data-wow-duration="1s">
                        <div className="faq_img">
                            <img src="images/faq-img.jpg" alt="faq" className="img-fluid w-100" />
                            <Link className="play_btn venobox" data-autoplay="true" data-vbtype="video"
                                to="https://www.youtube.com/watch?v=i_glB8n4KLE&amp;list=PPSV">
                                 <FontAwesomeIcon icon={faPlay} aria-hidden="true" />
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default FaqSection