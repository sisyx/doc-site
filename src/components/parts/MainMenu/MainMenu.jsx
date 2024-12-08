import React, { useState } from 'react'
import {
    faBars,
    faTimes,
    faPlus,
    faSearch,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';
import SearchBar from './SearchBar';

const links = [
    {
        text: "دکتر",
        to: "/doctors"
    },
    {
        text: "گالری",
        to: "/gallary"
    },
    {
        text: "ویدیوها",
        to: "/videos"
    },
]

function MainMenu({isMenuSticky}) {

    const [isShowSearchBar, setIsShowSearchBar] = useState(false);

    const showSearchBarHandler = () => {
        setIsShowSearchBar(true)  //click on search icon and show search bar
    }


    return (
        <>
            <nav className={`navbar navbar-expand-lg main_menu ${isMenuSticky ? "sticky" : ""}`} style={{ direction: "rtl" ,  transition: "position 0.5s ease" }}>
                <div className="container">
                    <Link className="navbar-brand" to="/">
                        <img src="/images/Logo_1.png" alt="logo" className="img-fluid w-100" />
                    </Link>
                    <button
                        className="navbar-toggler"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#navbarSupportedContent"
                        aria-controls="navbarSupportedContent"
                        aria-expanded="false"
                        aria-label="Toggle navigation"
                    >
                        <FontAwesomeIcon icon={faBars} className="bar_icon" />
                        <FontAwesomeIcon icon={faTimes} className="close_icon" />
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav mx-auto">
                            <li className="nav-item">
                                <Link className="nav-link active" to="/">
                                    خانه
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/about-us">
                                    درباره ما
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/services">
                                    خدمات
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="#">
                                    صفحات <FontAwesomeIcon icon={faPlus} />
                                </Link>
                                <ul className="dropdown">
                                    {
                                        links.map(({text, to}) => <li><Link to={to}>{text}</Link></li>)
                                    }
                                </ul>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/blogs">
                                    وبلاگ
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/contact-us">
                                    تماس با ما
                                </Link>
                            </li>
                        </ul>
                        <ul className="menu_btn d-flex flex-wrap align-items-center">
                            <li>
                                <Link onClick={showSearchBarHandler} to="#" className="menu_search_icon">
                                    <FontAwesomeIcon icon={faSearch} />
                                </Link>
                            </li>
                            <li>
                                <HashLink to="/#appointment" className="common_btn">
                                    نوبت دکتر
                                </HashLink>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>

            {/* search bar */}
            <SearchBar isVisisble={isShowSearchBar} closeSearchBar={() => setIsShowSearchBar(false)} />
        </>
    )
}

export default MainMenu