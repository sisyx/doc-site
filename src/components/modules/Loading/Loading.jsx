import React from 'react'
import { ClipLoader } from 'react-spinners'

function Loading() {
  return (
    <div className='loading_from_server'>
      <div>
        <ClipLoader
          color='#00A6FB'
        />
        <p>در حال دریافت اطلاعات از سرور</p>
      </div>
    </div>
  )
}

export default Loading