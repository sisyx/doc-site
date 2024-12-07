import React from 'react'

function ReviewBox(props) {
    return (
        <div className={`col-12 wow fadeInUp`} data-wow-duration="1s" style={{ direction: "rtl" }}>
            <div className="single_review">
                <p style={{ fontFamily: 'estedad-thin' }}>
                    {props.decription}
                </p>
                <div className="reviewer_info">
                    <div className="img">
                        <img src={props.profileImg} alt="reviewer" className="img-fluid w-100" />
                    </div>
                    <h3>{props.name}</h3>
                    <span style={{ fontFamily: 'estedad-thin' }}>مشتری</span>
                </div>
            </div>
        </div>
    )
}

export default ReviewBox