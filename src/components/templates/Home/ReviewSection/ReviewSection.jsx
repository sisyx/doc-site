import React from 'react'
import ReviewBox from '../../../modules/ReviewBox/ReviewBox'
import SectionHeader from '../../../modules/SectionHeader/SectionHeader'
import SliderSection from '../../../modules/Slider/Slider'
import useGetData from '../../../../hooks/useGetData';

function ReviewSection() {

    const { data: listDidgahData} = useGetData(["Get_ListDidgah"], "ListDidgah.aspx");


    return (
        <section className="review pt_100 xs_pt_70 pb_100 xs_pb_70" style={{direction : "rtl"}}>
            <div className="container">
                <SectionHeader
                    title="آنچه مشتری ما می گوید"
                    subTitle="دیدگاه کاربران"
                />
                <div className="row review_slider">
                    <SliderSection>
                        {listDidgahData?.filter(data => data.replayId === 0)?.map(data => (
                            <ReviewBox key={data.id} {...data} />
                        ))}
                    </SliderSection>
                </div>
            </div>
        </section>
    )
}

export default ReviewSection