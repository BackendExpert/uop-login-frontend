import React from 'react'

const DashTextArea = ({ name, value, placeholder, onChange, required }) => {
  return (
    <textarea 
        name={name}
        value={value}
        placeholder={placeholder}
        required={!!required}
        onChange={onChange}
        className='
            w-full
            h-24
            rounded
            pl-2 pt-2
            duration-500
            focus:outline-none focus:border-slate-400
            focus:shadow
            hover:border-slate-300            
        '
    ></textarea>
  )
}

export default DashTextArea