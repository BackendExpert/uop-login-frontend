import React from 'react'

const DefultInput = ({ type, name, value, onChange, required, placeholder }) => {
  return (
    <input 
        type={type}
        name={name}
        value={value}
        placeholder={placeholder}
        onChange={onChange}
        required={!!required}
        className='
            w-full h-12
            pl-2 mt-2
            border border-gray-300
            rounded
            duration-500 
            focus:outline-none 
            focus:border-[#560606]
            placeholder:text-[#560606]
        '
    />
  )
}

export default DefultInput