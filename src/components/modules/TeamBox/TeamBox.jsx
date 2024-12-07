import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF, faTwitter, faWhatsapp, faLinkedinIn } from '@fortawesome/free-brands-svg-icons';
import { faPlus } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';

function TeamBox(props) {
  return (
    <div className="col-xl-3 col-sm-6 col-lg-4 wow fadeInUp" data-wow-duration="1s">
      <div className="single_team">
        <div className="team_img">
          <img loading='lazy' src={props.image} alt="team" className="img-fluid w-100" />
          <div className="team_overlay">
            <ul className="team_icon">
              <li>
                <Link to="#">
                  <FontAwesomeIcon icon={faFacebookF} />
                </Link>
              </li>
              <li>
                <Link to="#">
                  <FontAwesomeIcon icon={faTwitter} />
                </Link>
              </li>
              <li>
                <Link to="#">
                  <FontAwesomeIcon icon={faWhatsapp} />
                </Link>
              </li>
              <li>
                <Link to="#">
                  <FontAwesomeIcon icon={faLinkedinIn} />
                </Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="team_designation">
          <h6>{props.name}</h6>
          <p>{props.title}</p>
          <Link to={`/doctors/${props.id}`}>
            <FontAwesomeIcon icon={faPlus} />
          </Link>
        </div>
      </div>
    </div>
  );
}

export default TeamBox;
