import React from 'react'

function SectionHeader({ title, subTitle }) {
    return (
        <div className="row">
            <div className="col-xl-12">
                <div className="common_heading center_heading mb_25">
                    <h5>{subTitle}</h5>
                    <h2>{title}</h2>
                </div>
            </div>
        </div>
    )
}

export default SectionHeader