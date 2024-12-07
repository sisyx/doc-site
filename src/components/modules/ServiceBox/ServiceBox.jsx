import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLongArrowLeft } from '@fortawesome/free-solid-svg-icons';
import useGetData from '../../../hooks/useGetData';
import CustomizeModal from '../CustomizeModal/CustomizeModal';

function ServiceBox({ colFull, ...props }) {

    const { data: itemCategoryServiceData } = useGetData(["Get_ItemsCategoryService"], `Service.aspx?CategoryID=${props.id}`);
    const [showModal, setShowModal] = useState(false);


    const closeModal = () => {
        setShowModal(false);
    }


    return (
        <>
            <div onClick={() => setShowModal(true)} className={`${colFull ? "col-12" : "col-xxl-4"} wow fadeInUp`} data-wow-duration="1s" style={{ textAlign: "right" }}>
                <div className="single_service" style={{ direction: "rtl" }}>
                    <div className="service_img">
                        <img loading='lazy' src={props.img} alt="service img" className="img-fluid w-100" />
                    </div>
                    <div className="service_text">
                        <button onClick={() => setShowModal(true)} className="service_heading">{props.title}</button>
                        <p>
                            لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان
                            گرافیک است چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است
                        </p>
                        <button onClick={() => setShowModal(true)} className="service_link">
                            بیشتر بدانید <FontAwesomeIcon icon={faLongArrowLeft} />
                        </button>
                    </div>
                </div>
            </div>

            <CustomizeModal
                categoryId={props.id}
                link="services"
                items={itemCategoryServiceData}
                modalIsOpen={showModal}
                closeModal={closeModal} />
        </>
    );
}

export default ServiceBox;
