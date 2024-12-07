import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faCalendarAlt, faLongArrowLeft } from '@fortawesome/free-solid-svg-icons';
import CustomizeModal from '../CustomizeModal/CustomizeModal';
import useGetData from '../../../hooks/useGetData';

function BlogBox(props) {

    const [showModal, setShowModal] = useState(false);
    const { data: itemCategoryBlogData } = useGetData(["Get_ItemsCategoryBlog"], `Blog.aspx?CategoryID=${props.id}`);



    const closeModal = () => {
        setShowModal(false);
    }

    return (
        <>
            <div className="col-xl-4 col-md-6 col-lg-4 wow fadeInUp" data-wow-duration="1s">
                <div onClick={() => setShowModal(true)} className="single_blog">
                    <div className="blog_img">
                        <img src={props.img} alt="blog img" className="img-fluid w-100" />
                    </div>
                    <div className="blog_text">
                        <ul className="d-flex flex-wrap blog_date">
                            <li>
                                <FontAwesomeIcon icon={faUser} /> ادمین
                            </li>
                            <li>
                                <FontAwesomeIcon icon={faCalendarAlt} /> ۲ مهر ۱۴۰۲
                            </li>
                        </ul>
                        <button onClick={() => setShowModal(true)} className="blog_heading">
                            {props.title}
                        </button>
                        <p>
                            لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است
                        </p>
                        <div className="blog_text_icon">
                            <button onClick={() => setShowModal(true)} className="blog_link">
                                بیشتر بخوانید{' '}
                                <FontAwesomeIcon icon={faLongArrowLeft} />
                            </button>
                        </div>
                    </div>
                </div>
            </div>

            <CustomizeModal
                link = "blogs"
                categoryId = {props.id}
                items={itemCategoryBlogData}
                modalIsOpen={showModal}
                closeModal={closeModal} />
        </>
    );
}

export default BlogBox;
