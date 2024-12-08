import React, { useEffect, useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faCalendarAlt } from '@fortawesome/free-regular-svg-icons';
import useGetData from '../../../../hooks/useGetData';
import Loading from '../../../modules/Loading/Loading';
import ErrorFetch from '../../../Errors/ErrorFetch/ErrorFetch';
import Error404 from '../../../Errors/Error404/Error404';
import { useParams } from 'react-router-dom';
import convertToJalali from '../../../../utils/convertToJalali';
import toFarsiNumber from '../../../../utils/toFarsiNumber';
import { Helmet } from 'react-helmet-async';
import SideBarVideoDetails from '../SideBarVideoDetails/SideBarVideoDetails';
import { Link } from 'react-router-dom';
import { faPlay } from '@fortawesome/free-solid-svg-icons';

function VideoDetailsSection() {

    const [videoState, setVideoState] = useState({
        videoMode: false,
    });

    const { categoryid, id } = useParams();

    const { data: itemsCategoryVideo, isPending, isError } = useGetData(["Get_ItemsCategoryVideo", id, categoryid], `Video.aspx?CategoryID=${+categoryid}`);
    const [itemVideoData, setItemVideoData] = useState(null)

    useEffect(() => {
        const findItemVideo = itemsCategoryVideo?.find(data => data.id === +id);
        setItemVideoData(findItemVideo ? findItemVideo : null)
    }, [itemsCategoryVideo])


    if (isPending) {
        return <Loading />
    }

    if (isError) {
        return <ErrorFetch />
    }



    return (
        <section className="blog_details pt_100 xs_pt_70 pb_100 xs_pb_70" style={{ direction: "rtl" }}>
            <Helmet>
                <title>{`دکتر رادفر | ویدیو ها | ${itemVideoData?.title}`}</title>
                <meta name="description" content={`${itemVideoData?.meta}`} />
            </Helmet>
            <div className="container">
                <div className="row">
                    {(itemsCategoryVideo?.length > 0 && itemVideoData !== null) ? (
                        <>
                            <div className="col-xl-9 col-lg-8 wow fadeInLeft" data-wow-duration="1s">
                                <div className="blog_details_content">
                                    <div className="blog_details_img">
                                        {
                                            videoState.videoMode ? <video autoPlay muted style={{width: "100%", height: "100%"}} src={itemVideoData?.videoFile} controls={true} /> 
                                            : <div className='position-relative'>
                                                <div
                                                    onClick={() => setVideoState(cur => ({...cur, videoMode: true}))}
                                                     style={{
                                                        position: "absolute",
                                                        top: "50%",
                                                        left: "50%",
                                                        transform: "translate(-50%, -50%)",
                                                        cursor: "pointer"
                                                    }}>
                                                    <Link className="play_btn venobox" data-autoplay="true" data-vbtype="video" to="#">
                                                        <FontAwesomeIcon icon={faPlay} aria-hidden="true" />
                                                    </Link>
                                                    </div>
                                                <img loading='lazy' src={itemVideoData?.image1} alt="blog img" className="img-fluid w-100" />
                                            </div>
                                        }
                                    </div>

                                    <div className="blog_details_header d-flex flex-wrap justify-content-between">
                                        <ul className="blog_details_header_left d-flex flex-wrap">
                                            <li><span>{itemVideoData?.categorytitle}</span></li>
                                            <li>
                                                <FontAwesomeIcon icon={faUser} /> {itemVideoData?.adminTitle}                                            </li>
                                            <li>
                                                <FontAwesomeIcon icon={faCalendarAlt} />
                                                {toFarsiNumber(convertToJalali(itemVideoData?.date))}
                                            </li>
                                        </ul>
                                    </div>

                                    <div className="blog_details_text">
                                        <h2 className="details_title">{itemVideoData?.title}</h2>
                                        <p>{itemVideoData?.description}</p>
                                    </div>
                                </div>
                            </div>
                            <SideBarVideoDetails />
                        </>
                    ) : (
                        <Error404 />
                    )}

                </div>
            </div>
        </section>
    )
}

export default VideoDetailsSection