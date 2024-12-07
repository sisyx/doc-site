import React from 'react'
import { Link } from 'react-router-dom'

function Error404() {
    return (
        <div className="error_text text-center">
            <h3>اوپسسسسس! چیزی پیدا نشد</h3>
            <p>با عرض پوزش این صفحه یافت نشد</p>
            <Link to="/" className="common_btn">برو به خانه</Link>
        </div>
    )
}

export default Error404