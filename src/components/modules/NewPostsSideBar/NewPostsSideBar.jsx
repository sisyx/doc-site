import { faCalendarAlt } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import { Link } from 'react-router-dom'
import toFarsiNumber from '../../../utils/toFarsiNumber'
import convertToJalali from '../../../utils/convertToJalali'

function NewPostsSideBar({ link, ...props }) {
    return (
        <li>
            <Link to={`/${link}/${props.categoryid}/${props.id}`}>
                <div className="recent_post_img">
                    <img src={props?.image1} alt="post" className="img-fluid w-100" />
                </div>
                <div className="recent_post_text">
                    <p><FontAwesomeIcon icon={faCalendarAlt} />
                        {toFarsiNumber(convertToJalali(props?.date))}  </p>
                    <Link to={`/${link}/${props.categoryid}/${props.id}`}>
                        {props?.title}
                    </Link>
                </div>
            </Link>
        </li>
    )
}

export default NewPostsSideBar