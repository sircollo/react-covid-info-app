import React from 'react'
import spinner from "../assets/svg/spinner.svg";
export default function Spinner() {
  return (
    <div className='bg-opacity-0 flex items-center justify-center fixed left-0 right-0 bottom-0 top-0 z-51'>
        <div>
            <img src={spinner} alt="loading..." className="h-24"/>
        </div>
    </div>
  )
}