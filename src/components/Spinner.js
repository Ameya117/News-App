import React from 'react'
import loading from "./Circles-menu-3.gif"

export default function Spinner() {
    return (
      <div className='text-center'>
        <img src={loading} alt="Loading" />
      </div>
    )
}


