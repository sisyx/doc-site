import React from 'react'
import ProcessBox from '../../../modules/ProcessBox/ProcessBox'
import SectionHeader from '../../../modules/SectionHeader/SectionHeader'

function ProcessSection() {
    return (
        <section className="process pt_100 xs_pt_70 pb_95 xs_pb_65" style={{
            background: "url(images/work_bg.jpg)", direction: "rtl"
        }} >
            <div id='home_contact' className="container process_shape">
                <SectionHeader
                    title="راه های ارتباط با ما"
                    subTitle="ارتباط با ما"
                />
                <div className="work_process_area">
                    <div className="row">
                        <ProcessBox name="num1"  id="01" title="پرسش از دکتر" desc="بلبیلبیل"/>
                        <ProcessBox name="num2"  id="02" title="رزرو نوبت" desc="بیسبس"/>
                        <ProcessBox name="num3"  id="03" title="شماره تماس" desc="بیسبیس"/>
                        <ProcessBox name="num4" id="04" title="ارسال مدارک جهت مشاوره رایگان" desc="بیسبیسب"/>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default ProcessSection