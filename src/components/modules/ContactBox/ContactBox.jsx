import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import Skeleton from 'react-loading-skeleton'
import toFarsiNumber from '../../../utils/toFarsiNumber'
import "react-loading-skeleton/dist/skeleton.css";

function ContactBox({ icon, name, title, data, isPending , isNumber }) {
    return (
        <div className="col-xl-3 col-md-6 col-lg-4 wow fadeInUp" data-wow-duration="1s">
            <div className="contact_address">
                <span className={`contact_icon ${name}`}>
                    <FontAwesomeIcon icon={icon} />
                </span>
                <h4>{title}</h4>
                {isPending ? (
                    <p>
                        <Skeleton count={1} />
                    </p>
                ) : (
                    <p>{isNumber ? toFarsiNumber(data) : data }</p>
                )}
            </div>
        </div>
    )
}

export default ContactBox