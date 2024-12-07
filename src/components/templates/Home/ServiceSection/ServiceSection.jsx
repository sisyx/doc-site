import React from 'react'
import ServiceBox from '../../../modules/ServiceBox/ServiceBox'
import SectionHeader from '../../../modules/SectionHeader/SectionHeader'
import SliderSection from '../../../modules/Slider/Slider'
import useGetData from '../../../../hooks/useGetData';

function ServiceSection() {
    const { data: categoryServiceData } = useGetData(["Get_CategoryService"], "CategoryService.aspx");
    return (
        <section className="service" style={{ direction: "rtl", background: "url(images/service_bg.jpg)" }}>
            <div className="service_overlay pt_100 xs_pt_70 pb_100 xs_pb_70">
                <div className="container">
                    <SectionHeader
                        title="سرویس های پزشکی ما"
                        subTitle="خدمات ما"
                    />
                    <div className="row service_slider">
                        <SliderSection>
                            {categoryServiceData?.slice(0, 5)?.map(category => (
                                <ServiceBox key={category.id} {...category} colFull={true} />
                            ))}
                        </SliderSection>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default ServiceSection