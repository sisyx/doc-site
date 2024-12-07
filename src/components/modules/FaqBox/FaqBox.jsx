import React from 'react'

function FaqBox(props) {
    return (
        <div className="accordion-item">
            <h2 className="accordion-header" id={`${props.id} flush-heading`}>
                <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                    data-bs-target={`#flush-collapse${props.id}`} aria-expanded="true"
                    aria-controls={`flush-collapse${props.id}`} style={{ flexDirection: "row" }}>
                 {props.soal}
                 </button>
            </h2>
            <div id={`flush-collapse${props.id}`}  className="accordion-collapse collapse show"
                aria-labelledby={`${props.id} flush-heading`} data-bs-parent="#accordionFlushExample">
                <div className="accordion-body">
                    {props.javab}
                </div>
            </div>
        </div>
    )
}

export default FaqBox