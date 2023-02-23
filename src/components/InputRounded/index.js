import React from 'react'

export default function InputRounded({ value, onChange, placeholder, customStyle, isTextArea = false }) {
    if (isTextArea) {
        return <textarea placeholder={placeholder} value={value} onChange={e => onChange(e)} className={`rounded-full border-2 border-primary px-5 py-2 ${customStyle}`}></textarea>
    } else {
        return <input placeholder={placeholder} value={value} onChange={e => onChange(e)} className={`rounded-full border-2 border-primary px-5 py-2 ${customStyle}`} />
    }
}
