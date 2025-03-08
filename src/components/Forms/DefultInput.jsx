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
            pl-2
        '
    />
  )
}

export default DefultInput