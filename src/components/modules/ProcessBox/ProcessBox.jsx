import React from 'react'
import toFarsiNumber from '../../../utils/toFarsiNumber'

function ProcessBox({id , title , desc , name}) {
    return (
        <div className="col-xl-3 col-sm-6 col-lg-3 wow fadeInUp" data-wow-duration="1s">
            <div className="single_process">
                <span className={`process_number ${name}`}>{toFarsiNumber(id)}</span>
                <h4>{title}</h4>
                <p>{desc}</p>
            </div>
        </div>
    )
}

export default ProcessBox