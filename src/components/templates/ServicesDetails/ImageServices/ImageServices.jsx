import { faStar } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import { Link } from 'react-router-dom'

function ImageServices({image}) {
    return (
        <div className="col-xl-4 col-sm-6">
            <Link className="service_details_gallery venobox" data-gall="gallery01"
                to={image}>
                <img src={image} alt="gallery1" className="img-fluid w-100" />
                <div className="overlay">
                    <FontAwesomeIcon icon={faStar} />
                </div>
            </Link>
        </div>
    )
}

export default ImageServices