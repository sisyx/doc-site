import React from 'react'
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus } from '@fortawesome/free-solid-svg-icons';

function GallaryBox(props) {
    return (
        <div className="col-lg-4 col-md-6 wow fadeInUp" data-wow-duration="1s">
            <a className="venobox gallary_img1" data-gall="gallery01" href={props.image}>
                <img loading='lazy' src={props.image} alt={props.id} className="img-fluid w-100" />
                <div className="gal_img_overlay">
                    <FontAwesomeIcon icon={faPlus} />
                </div>
            </a>
        </div>
    )
}

export default GallaryBox