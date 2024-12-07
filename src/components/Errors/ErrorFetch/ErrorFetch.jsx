import React from 'react'
import { Link } from 'react-router-dom'

function ErrorFetch() {
    return (
        <div className='container'>
            <div className="mt_100 xs_mt_70 pb_100 xs_pb_70">
                <div className="error_text text-center">
                    <h3>قطع ارتباط با سرور</h3>
                    <p>با عرض پوزش ارتباط با سرور قطع شده است </p>
                    <Link to="/" className="common_btn">برو به خانه</Link>
                </div>
            </div>
        </div>
    )
}

export default ErrorFetch