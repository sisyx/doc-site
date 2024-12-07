import React from 'react';
import { useParams } from 'react-router-dom';
import NewPostsSideBar from '../../../modules/NewPostsSideBar/NewPostsSideBar';
import SearchBarSideBar from '../../../modules/SearchBarSideBar/SearchBarSideBar';
import useGetData from '../../../../hooks/useGetData';

function SideBarBlogDetails() {

  const {categoryid} = useParams();

  const { data: itemsCategoryBlog} = useGetData(["Get_ItemsCategoryBlog"], `Blog.aspx?CategoryID=${+categoryid}`);

  return (
    <div className="col-xl-3 col-lg-4 wow fadeInRight" data-wow-duration="1s">
      <div id="sticky_sidebar">
        {/* بخش جستجو */}
        <SearchBarSideBar />

        {/* پست‌های اخیر */}
        <div className="service_dtls_rightside">
          <h5>پست ها اخیر</h5>
          <ul className="sidebar_post">
            {itemsCategoryBlog?.slice(0, 3).map(data => (
              <NewPostsSideBar link="blogs" key={data.id} {...data} />
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}

export default SideBarBlogDetails;
