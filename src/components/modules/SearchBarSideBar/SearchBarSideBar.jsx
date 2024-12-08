import { faSearch } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React, { useState } from 'react'
import SearchBar from '../../parts/MainMenu/SearchBar'

function SearchBarSideBar() {
    const [isShowSearchBar, setIsShowSearchBar] = useState(false);

    return (
        <div className="service_dtls_rightside">
            <h4>جستجو</h4>
            <form action="#" className="blog_form">
                <input type="text" placeholder="جستجو..." onFocus={() => setIsShowSearchBar(true)} />
                <button className="_blog_btn">
                    <FontAwesomeIcon icon={faSearch} />
                </button>
            </form>
            <SearchBar isVisisble={isShowSearchBar} closeSearchBar={() => setIsShowSearchBar(false)} />
        </div>
    )
}

export default SearchBarSideBar