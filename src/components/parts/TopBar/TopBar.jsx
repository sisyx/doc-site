import React , {useState , useEffect} from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF, faTwitter, faYoutube, faGooglePlusG, faInstagram } from "@fortawesome/free-brands-svg-icons";
import { faPhoneAlt, faEnvelope, faMapMarkerAlt } from "@fortawesome/free-solid-svg-icons";
import { Link } from 'react-router-dom';
import { SiAparat } from 'react-icons/si';
import useGetData from '../../../hooks/useGetData';
import toFarsiNumber from '../../../utils/toFarsiNumber';

function TopBar({isVisibleTopBar}) {

    const { data: contactData, isPending } = useGetData(["Get_Contact"], "ContactUs.aspx");

    return (
        <section 
         className={`topbar ${isVisibleTopBar ? "visible" : "hidden"}`} 
         style={{ direction: "rtl", transition: "transform 0.5s ease" }}>
            <div className="container">
                <div className="row">
                    <div className="col-xl-9 col-lg-9 d-none d-md-block">
                        <ul className="topbar_link d-flex flex-wrap">
                            <li>
                                <Link to={`tel:${contactData?.[0]?.tel}`}>
                                    <FontAwesomeIcon icon={faPhoneAlt} /> 
                                    {contactData?.[0]?.tel && (
                                        toFarsiNumber(contactData[0].tel)
                                    )}
                                </Link>
                            </li>
                            <li>
                                <Link to={`mailto:${contactData?.[0]?.email}`}>
                                    <FontAwesomeIcon icon={faEnvelope} /> {contactData?.[0]?.email}
                                </Link>
                            </li>
                            <li>
                                <Link
                                    to={`https://www.google.com/maps/place/@${contactData?.[0]?.map_lat},${contactData?.[0]?.map_long},17.5z/`}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    <FontAwesomeIcon icon={faMapMarkerAlt} />
                                    {contactData?.[0]?.address}
                                </Link>
                            </li>
                        </ul>
                    </div>
                    <div className="col-xl-3 col-lg-3 d-md-none d-lg-block">
                        <ul className="topbar_icon d-flex flex-wrap">
                            <li>
                                <Link to="#">
                                    <FontAwesomeIcon icon={faYoutube} />
                                </Link>
                            </li>
                            <li>
                                <Link to={contactData?.[0]?.instagram}>
                                    <FontAwesomeIcon icon={faInstagram} />
                                </Link>
                            </li>
                            <li>
                                <Link to="#">
                                    <SiAparat style={{marginBottom : "1.75px"}} />
                                </Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default TopBar