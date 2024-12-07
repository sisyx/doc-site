import React from 'react';
import { faMapMarkerAlt, faPhoneAlt, faEnvelopeOpen, faGlobe } from '@fortawesome/free-solid-svg-icons';
import useGetData from '../../../../hooks/useGetData';
import ContactBox from '../../../modules/ContactBox/ContactBox';


function ContactSection() {

  const { data: contactData, isPending } = useGetData(["Get_Contact"], "ContactUs.aspx");


  return (
    <section className="contact mt_75 xs_mt_45 pb_100 xs_pb_70" style={{ direction: "rtl" }}>
      <div className="container">
        <div className="row">
          <ContactBox isNumber={false} isPending={isPending} data={contactData?.[0]?.address} title="آدرس شرکت" name="icon_1" icon={faMapMarkerAlt} />
          <ContactBox isNumber={true} isPending={isPending} data={contactData?.[0]?.tel} title="شماره موبایل" name="icon_2" icon={faPhoneAlt} />
          <ContactBox isNumber={false} isPending={isPending} data={contactData?.[0]?.email} title="ایمیل" name="icon_3" icon={faEnvelopeOpen} />
          <ContactBox isNumber={true} isPending={isPending} data={contactData?.[0]?.tel} title="شماره فکس" name="icon_4" icon={faGlobe} />
        </div>

        <div className="contact_form_area mt_100 xs_mt_70">
          <div className="row">
            <div className="col-lg-4 wow fadeInLeft" data-wow-duration="1s">
              <div className="contact_img">
                <img
                  src="images/contact_img.jpg"
                  alt="contact img"
                  className="img-fluid w-100"
                />
              </div>
            </div>
            <div className="col-lg-8 wow fadeInRight" data-wow-duration="1s">
              <form className="contact_form">
                <div className="row">
                  <div className="col-md-6">
                    <input type="text" placeholder="نام" />
                  </div>
                  <div className="col-md-6">
                    <input type="email" placeholder="ایمیل آدرس" />
                  </div>
                  <div className="col-md-6">
                    <input type="text" placeholder="شماره موبایل" />
                  </div>
                  <div className="col-md-6">
                    <input type="text" placeholder="موضوع" />
                  </div>
                  <div className="col-xl-12">
                    <input type="text" placeholder="خدمات" />
                  </div>
                  <div className="col-xl-12">
                    <textarea rows="5" placeholder="پیام"></textarea>
                  </div>
                  <div className="col-xl-12">
                    <button className="common_btn">ارسال کنید</button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
        <div className="row mt_100 xs_mt_70 wow fadeInUp" data-wow-duration="1s">
          <div className="col-xl-12">
            <div className="tf_contact_map">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d193595.2527999752!2d-74.14448764398652!3d40.69763123336165!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c24fa5d33f083b%3A0xc80b8f06e177fe62!2sNew%20York%2C%20NY%2C%20USA!5e0!3m2!1sen!2sbd!4v1685551467309!5m2!1sen!2sbd"
                width="600"
                height="450"
                style={{border:"0"}}
                allowfullscreen=""
                loading="lazy"
              ></iframe>

            </div>
          </div>
        </div>

      </div>
    </section>
  );
}

export default ContactSection;
