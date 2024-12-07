import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faYoutube,
  faInstagram,
} from '@fortawesome/free-brands-svg-icons';
import {
  faMapMarkerAlt,
  faEnvelope,
  faPhoneAlt,
} from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';
import { SiAparat } from "react-icons/si";
import toFarsiNumber from '../../../utils/toFarsiNumber';
import { useSelector } from 'react-redux';
import { HashLink } from 'react-router-hash-link';


function Footer() {
  const { address, tel, email, instagram, youtube, aparat } = useSelector((state) => state.contacts);

  return (
    <footer
      className="mt_60"
      style={{ background: 'url(images/footer_bg.jpg)', direction: 'rtl' }}
    >
      <div className="container">
        <div className="row">
          <div className="col-xl-12 wow fadeInUp" data-wow-duration="1s">
            <div className="subscription">
              <div className="row justify-content-between align-items-center">
                <div className="col-xxl-6 col-lg-6 col-xl-7">
                  <div className="subscribe_text">
                    <h2>در شبکه های اجتماعی ما را دنبال کنید.</h2>
                  </div>
                </div>
                <div className="col-xxl-6 col-lg-6 col-xl-5">
                  <ul className="subscription-icon d-flex flex-wrap">
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
                        <SiAparat />
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="row mt_10">
          <div className="col-lg-3 col-sm-9 col-md-6">
            <div className="footer_left">
              <Link to="/" className="tf_footer_logo">
                <img
                  src="images/Logo_1.png"
                  alt="MediFax"
                  className="img-fluid w-100"
                />
              </Link>
              <p>لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ</p>
              <div className="footer_mail">
                <span>سلام به :</span>
                <Link to={`mailto:${email}`}>{email}</Link>
              </div>
            </div>
          </div>
          <div className="col-lg-2 col-sm-6 col-md-4">
            <div className="quick_link">
              <h5>شرکت</h5>
              <ul>
                <li>
                  <Link to="/">خانه</Link>
                </li>
                <li>
                  <Link to="/about-us">درباره ما</Link>
                </li>
                <li>
                  <Link to="/services">خدمات ما</Link>
                </li>
                <li>
                  <HashLink to="/#home_team">تیم ما</HashLink>
                </li>
                <li>
                  <Link to="/contact-us">تماس با ما</Link>
                </li>
              </ul>
            </div>
          </div>
          <div className="col-lg-2 col-sm-6 col-md-3">
            <div className="quick_link">
              <h5>لینک های مهم</h5>
              <ul>
                <li>
                  <HashLink to="/#appointment">نوبت دهی</HashLink>
                </li>
                <li>
                  <HashLink to="/#home_faq">سوالات متداول</HashLink>
                </li>
              </ul>
            </div>
          </div>
          <div className="col-lg-2 col-sm-6 col-md-3">
            <div className="quick_link">
              <h5>دسترسی سریع</h5>
              <ul>
                <li>
                  <HashLink to="/#">چرا ما ؟</HashLink>
                </li>
                <li>
                  <Link to="/blogs">اخبار و مقالات</Link>
                </li>
              </ul>
            </div>
          </div>
          <div className="col-lg-3 col-sm-6 col-md-6 order-md-2">
            <div className="address">
              <h5>اطلاعات شرکت</h5>
              <div className="tf_footer_address">
                <p>
                  <FontAwesomeIcon icon={faMapMarkerAlt} />
                  {address}
                </p>
                <Link to={`mailto:${email}`}>
                  <FontAwesomeIcon icon={faEnvelope} />
                  {email}
                </Link>
                <Link to={`tel:${tel}`}>
                  <FontAwesomeIcon icon={faPhoneAlt} />
                  <span dir='ltr'>
                    {toFarsiNumber(tel)}
                  </span>
                </Link>
              </div>
            </div>
          </div>
        </div>

        <div className="row mt_70 xs_mt_45 sm_margin ">
          <div className="col-xl-12">
            <div className="copyright d-flex flex-wrap justify-content-between">
              <p>همه حقوق متعلق به محسن دادار می باشد - زمستان ۱۴۰۲</p>
              {/* <ul className="d-flex flex-wrap">
                <li>
                  <Link to="terms_condition">شرایط و ضوابط</Link>
                </li>
                <li>
                  <Link to="#">کوکی</Link>
                </li>
                <li>
                  <Link to="privacy">سیاست حفظ حریم خصوصی</Link>
                </li>
              </ul> */}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
