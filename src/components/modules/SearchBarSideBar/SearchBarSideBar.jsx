import { faSearch } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'

function SearchBarSideBar() {
    return (
        <div className="service_dtls_rightside">
            <h4>جستجو</h4>
            <form action="#" className="blog_form">
                <input type="text" placeholder="جستجو..." />
                <button className="_blog_btn">
                    <FontAwesomeIcon icon={faSearch} />
                </button>
            </form>
        </div>
    )
}

export default SearchBarSideBar