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
            w-full h-28
            pl-2 mt-2 pt-2
            border border-gray-300
            rounded
            duration-500 
            focus:outline-none 
            focus:border-[#560606]
            placeholder:text-[#560606]       
        '
    ></textarea>
  )
}

export default DashTextArea