import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhone, faCommentDots } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';
import useGetData from '../../../hooks/useGetData';
import AnswersModal from '../../modules/CustomizeModal/AnswersModal';


function TwoFixedButtons() {

    const { data: contactData } = useGetData(["Get_Contact"], "ContactUs.aspx");
    const [showAnswersModal, setShowAnswersModal] = useState(false);


    const closeAnswersModal = () => {
        setShowAnswersModal(false)
    }

    return (
        <>
            <div className="bottom_section_fixed d-none d-md-flex">
                <Link id="phone_call" to={`tel:${contactData?.[0]?.tel}`}>
                    <span className="icons_bottom_section">
                        <FontAwesomeIcon icon={faPhone} />
                    </span>
                    <span>تماس تلفنی</span>
                </Link>
                <Link to="#openAnswersModal" onClick={() => setShowAnswersModal(true)} id="free_consulation">
                    <span className="icons_bottom_section">
                        <FontAwesomeIcon icon={faCommentDots} />
                    </span>
                    <span>پرسش از دکتر</span>
                </Link>
            </div>

            <div className="bottom_section_fixed_mobile d-flex d-md-none">
                <Link id="phone_call_mobile" to={`tel:${contactData?.[0]?.tel}`}>
                    <span className="icons_bottom_section-mobile">
                        <FontAwesomeIcon icon={faPhone} />
                    </span>
                    <span>تماس تلفنی</span>
                </Link>
                <Link to="#openAnswersModal" onClick={() => setShowAnswersModal(true)} id="free_consulation_mobile">
                    <span className="icons_bottom_section-mobile">
                        <FontAwesomeIcon icon={faCommentDots} />
                    </span>
                    <span>پرسش از دکتر</span>
                </Link>
            </div>

            <AnswersModal
                modalIsOpen={showAnswersModal}
                closeModal={closeAnswersModal}
            />
        </>
    )
}

export default TwoFixedButtons