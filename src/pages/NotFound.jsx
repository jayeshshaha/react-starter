import React from 'react'
import Error from "../assets/page-error.jpg"
const NotFound = () => {
  return (
    <div className='h-[80vh]'>
        <img src={Error} alt="Page not found."  className='h-[80vh] mx-auto' />
        <div className='flex justify-center items-center'>
            <p className='text-xl text-slate-400 uppercase'>Page not found</p>
        </div>
    </div>
  )
}

export default NotFound