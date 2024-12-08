import { faTimes } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";
import styles from './SideBar.module.css';
import useGetData from "../../../hooks/useGetData";
import { Link } from "react-router-dom";

function SearchBar({isVisisble, closeSearchBar}) {
    const [searchState, setSearchState] = useState({
        loading: false,
        error: false,
        phrase: "",
    });

    const { data: blogsData, isPending: blogsLoading, isError: blogsError } = useGetData(["Get_SearchBlogs"], "Blog.aspx");
    const { data: videosData, isPending: videosLoading, isError: videosError } = useGetData(["Get_Searchvideos"], "Video.aspx");
    const { data: servicesData, isPending: servicesLoading, isError: servicesError } = useGetData(["Get_SearchServices"], "Service.aspx");

    const filteredBlogs = blogsData?.filter(blog => blog.title.includes(searchState.phrase));
    const filteredvidoes = videosData?.filter(video => video.title.includes(searchState.phrase));
    const filteredServices = servicesData?.filter(service => service.title.includes(searchState.phrase));

    function handleInputChange(event) {
        setSearchState(cur => ({...cur, phrase: event.target.value}));
    }

    return (
        <div onClick={closeSearchBar} className={`menu_search ${isVisisble && "show_search"}`}>
            <div className="position-relative">
                <form onClick={e => e.stopPropagation()} onSubmit={e => e.preventDefault()}>
                    <input 
                        style={{borderBottomLeftRadius: "0", borderBottomRightRadius: "0"}} 
                        type="text" 
                        value={searchState.phrase} 
                        onChange={handleInputChange} 
                        placeholder="کلمه مورد نظر را وارد نمایید" 
                        />
                    {/* <button className="common_btn" type="submit">
                        جستجو نمایید
                    </button> */}
                    <span onClick={() => closeSearchBar()} className="close_search">
                        <FontAwesomeIcon icon={faTimes} />
                    </span>
                </form>
                <div
                    dir="rtl"
                    onClick={e => e.stopPropagation()} 
                    style={{
                        position: "absolute",
                        bottom: "0",
                        left: "0",
                        transform: "translate(0, 100%)",
                        // background: "white",
                        color: "black",
                        width: "100%"
                    }}>
                    {/* blogs */}
                        {
                            (blogsLoading || filteredBlogs?.length) 
                            ? <div className={styles.sidebar_xxxxxxxxxxxx__blogs}>
                                <div className={styles.sidebar_xxxxxxxxxxxx__blogs_title}>بلاگ ها</div>
                                {
                                    blogsLoading ? <div>در حال بارگذاری بلاگها</div>
                                    : filteredBlogs?.length ? filteredBlogs?.map(({id, title, categoryid}) => {
                                        return <Link to={`/blogs/${categoryid}/${id}`} className={styles.sidebar_xxxxxxxxxxxx__blog}>{title}</Link>
                                    })
                                    : <div>بلاگی یافت نشد</div>
                                }
                            </div>
                            : ""
                        }            
                    {/* videos */}
                    {
                        (videosLoading || filteredvidoes?.length) 
                        ? <div className={styles.sidebar_xxxxxxxxxxxx__blogs}>
                            <div className={styles.sidebar_xxxxxxxxxxxx__blogs_title}>ویدیوها</div>
                            {
                                videosLoading ? <div>در حال بارگذاری ویدیوها</div>
                                : filteredvidoes?.length ? filteredvidoes?.map(({id, title, categoryid}) => {
                                    return <Link to={`/video/${categoryid}/${id}`} className={styles.sidebar_xxxxxxxxxxxx__blog}>{title}</Link>
                                })
                                : <div>ویدیویی یافت نشد</div>
                            }
                        </div>
                        : ""
                    }
                    {/* Services */}
                    {
                        (servicesLoading || filteredServices?.length) 
                        ? <div className={styles.sidebar_xxxxxxxxxxxx__blogs}>
                            <div className={styles.sidebar_xxxxxxxxxxxx__blogs_title}>سرویسها</div>
                            {
                                servicesLoading ? <div>در حال بارگذاری سرویسها</div>
                                : filteredServices?.length ? filteredServices?.map(({id, title, categoryid}) => {
                                    return <Link to={`/services/${id}/${categoryid}`} className={styles.sidebar_xxxxxxxxxxxx__blog}>{title}</Link>
                                })
                                : <div>سرویسی یافت نشد</div>
                            }
                        </div>
                        : ""
                    }
                    {/* if nothing was found */}
                    {
                        (!filteredBlogs?.length && !filteredvidoes?.length && !filteredServices?.length && searchState.phrase.length) ?
                        <div className={styles.sidebar_notfound}>موردی مطابق  با سرچ شما یافت نشد</div>
                        : ""
                    }
                    <div className={styles.searchbar_bottom_radius}></div>
                </div>
            </div>
        </div>
    )
}

export default SearchBar;