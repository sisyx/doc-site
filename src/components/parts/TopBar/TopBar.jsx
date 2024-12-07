import React , {useState , useEffect} from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF, faTwitter, faYoutube, faGooglePlusG, faInstagram } from "@fortawesome/free-brands-svg-icons";
import { faPhoneAlt, faEnvelope, faMapMarkerAlt } from "@fortawesome/free-solid-svg-icons";
import { Link } from 'react-router-dom';
import { SiAparat } from 'react-icons/si';
import toFarsiNumber from '../../../utils/toFarsiNumber';
import { useSelector } from 'react-redux';

function TopBar({isVisibleTopBar}) {
    const { address, map_lat, map_long, tel, email, instagram, youtube, aparat } = useSelector((state) => state.contacts);
    
    return (
        <section 
         className={`topbar ${isVisibleTopBar ? "visible" : "hidden"}`} 
         style={{ direction: "rtl", transition: "transform 0.5s ease" }}>
            <div className="container">
                <div className="row">
                    <div className="col-xl-9 col-lg-9 d-none d-md-block">
                        <ul className="topbar_link d-flex flex-wrap">
                            <li>
                                <Link to={`tel:${tel}`}>
                                    <FontAwesomeIcon icon={faPhoneAlt} /> 
                                    {tel && (
                                        toFarsiNumber(tel)
                                    )}
                                </Link>
                            </li>
                            <li>
                                <Link to={`mailto:${email}`}>
                                    <FontAwesomeIcon icon={faEnvelope} /> {email}
                                </Link>
                            </li>
                            <li>
                                <Link
                                    to={`https://www.google.com/maps/place/@${map_lat},${map_long},17.5z/`}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    <FontAwesomeIcon icon={faMapMarkerAlt} />
                                    {address}
                                </Link>
                            </li>
                        </ul>
                    </div>
                    <div className="col-xl-3 col-lg-3 d-md-none d-lg-block">
                        <ul className="topbar_icon d-flex flex-wrap">
                            <li>
                                <Link to={youtube}>
                                    <FontAwesomeIcon icon={faYoutube} />
                                </Link>
                            </li>
                            <li>
                                <Link to={instagram}>
                                    <FontAwesomeIcon icon={faInstagram} />
                                </Link>
                            </li>
                            <li>
                                <Link to={aparat}>
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