import React from 'react'

export default function Loader({ loadText, bgColor = 'bg-white', className }) {
    return (
        <div className={`w-full h-screen inset-0 flex items-center justify-center ${className}`}>
            <div className={`animate-spin w-10 h-10 rounded-xl ${bgColor}`}></div><p className='text-white ml-3'>{loadText}</p>
        </div>
    )
}
