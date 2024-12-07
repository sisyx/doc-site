import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronDown, faChevronUp, faClock, faReplyAll } from '@fortawesome/free-solid-svg-icons';
import flattenComments from '../../../../utils/flattenComments';
import { HashLink } from 'react-router-hash-link';

function QuestionAndAnswers({ setDeatilsReplyUser, ...props }) {
  const [showAnwerAndQustion, setShowAnwerAndQustion] = useState(false);

  return (
    <>
      <div className="single_comment">
        <div className="comment_img">
          <img src={props.profileImg} loading="lazy" alt="review" className="img-fluid w-100" />
        </div>
        <div className="comment_text">
          <h4>
            {props.name} <span><FontAwesomeIcon icon={faClock} /> ۴ ساعت پیش</span>
          </h4>
          <p>{props.decription}</p>
          <div style={{ display: 'flex', gap: '5px' }}>
            <HashLink onClick={() => setDeatilsReplyUser({ name: props.name, replayId: props.id })} to="#addQuestion">
              <FontAwesomeIcon icon={faReplyAll} /> پاسخ
            </HashLink>
            {props?.children && props?.children.length > 0 && (
              <button className="visible_answer" onClick={() => setShowAnwerAndQustion(prev => !prev)}>
                {showAnwerAndQustion ? 'مخفی کردن پاسخ ها' : 'مشاهده پاسخ ها'}
                <FontAwesomeIcon icon={showAnwerAndQustion ? faChevronUp : faChevronDown} />
              </button>
            )}
          </div>
        </div>
      </div>

      {/* answer */}
      <div
        className={`replies ${showAnwerAndQustion ? 'show' : ''}`}
        style={{
          height: showAnwerAndQustion ? 'auto' : 0,
          overflow: 'hidden',
          transition: 'height 0.5s ease, opacity 0.5s ease',
          opacity: showAnwerAndQustion ? 1 : 0,
        }}
      >
        {props?.children && props?.children.length > 0 &&
          flattenComments(props?.children).map(reply => (
            <div key={reply.id} className="single_comment commant_reply">
              <div className="comment_img">
                <img src={reply.profileImg} loading="lazy" alt="review" className="img-fluid w-100" />
              </div>
              <div className="comment_text">
                <h4>
                  {reply.name} <span><FontAwesomeIcon icon={faClock} /> ۴ ساعت پیش</span>
                </h4>
                <p>{reply.decription}</p>
                <HashLink onClick={() => setDeatilsReplyUser({ name: reply.name, replayId: reply.id })} to="#addQuestion">
                  <FontAwesomeIcon icon={faReplyAll} /> پاسخ
                </HashLink>
              </div>
            </div>
          ))}
      </div>

    </>
  );
}

export default QuestionAndAnswers;
