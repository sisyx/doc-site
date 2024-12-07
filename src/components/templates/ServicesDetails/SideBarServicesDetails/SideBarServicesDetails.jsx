import { faChevronLeft, faSearch, faCalendarAlt } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import NewPostsSideBar from '../../../modules/NewPostsSideBar/NewPostsSideBar'
import SearchBarSideBar from '../../../modules/SearchBarSideBar/SearchBarSideBar';
import { HashLink } from 'react-router-hash-link';
import { useParams } from 'react-router-dom';
import useGetData from '../../../../hooks/useGetData';

function SideBarServicesDetails() {
    const {categoryid} = useParams();

    const { data: itemsCategoryService} = useGetData(["Get_ItemsCategoryService"], `Service.aspx?CategoryID=${+categoryid}`);

    return (
        <div className="col-xl-3 col-lg-4 wow fadeInRight" data-wow-duration="1s">
            <div id="sticky_sidebar">
                <SearchBarSideBar />
                <div className="service_dtls_rightside">
                    <h5>خلاصه مقالات</h5>
                    <ul className="sidebar_category">
                        <li><HashLink to="#generaldefinition">تعریف کلی بیماری
                            <FontAwesomeIcon icon={faChevronLeft} />
                        </HashLink></li>
                        <li><HashLink to="#symptoms">علائم
                            <FontAwesomeIcon icon={faChevronLeft} />
                        </HashLink></li>
                        <li><HashLink to="#treatments">درمان ها
                            <FontAwesomeIcon icon={faChevronLeft} />
                        </HashLink></li>
                    </ul>
                </div>
                <div className="service_dtls_rightside">
                    <h5>پست های جدید</h5>
                    <ul className="sidebar_post">
                        {itemsCategoryService?.map(data => (
                            <NewPostsSideBar link="services" {...data} />
                        ))}
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default SideBarServicesDetails