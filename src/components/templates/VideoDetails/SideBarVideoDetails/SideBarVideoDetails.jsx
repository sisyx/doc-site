import React from 'react';
import { useParams } from 'react-router-dom';
import NewPostsSideBar from '../../../modules/NewPostsSideBar/NewPostsSideBar';
import SearchBarSideBar from '../../../modules/SearchBarSideBar/SearchBarSideBar';
import useGetData from '../../../../hooks/useGetData';

function SideBarVideoDetails() {

  const {categoryid} = useParams();

  const { data: itemsCategoryBlog} = useGetData(["Get_ItemsCategoryVideo"], `Video.aspx?CategoryID=${+categoryid}`);

  return (
    <div className="col-xl-3 col-lg-4 wow fadeInRight" data-wow-duration="1s">
      <div id="sticky_sidebar">
        {/* بخش جستجو */}
        <SearchBarSideBar />

        {/* ویدیوهای اخیر */}
        <div className="service_dtls_rightside">
          <h5>ویدیو های اخیر</h5>
          <ul className="sidebar_post">
            {itemsCategoryBlog?.slice(0, 3).map(data => (
              <NewPostsSideBar link="video" key={data.id} {...data} />
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}

export default SideBarVideoDetails;
