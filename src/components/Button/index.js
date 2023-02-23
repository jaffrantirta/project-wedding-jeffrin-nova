import React from 'react'

export default function Button({ customStyle, onClick, text, disabled = false }) {
    return (
        <button disabled={disabled} onClick={e => onClick(e)} className={`transition-all duration-700 hover:bg-slate-600 px-6 py-3 rounded-full shadow-xl bg-primary text-white ${customStyle}`}>{text}</button>
    )
}
