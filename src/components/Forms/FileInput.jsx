import React from 'react'

const FileInput = ({ name, required, onChange, accept }) => {
    return (
      <input 
          type="file"
          name={name}
          accept={accept}
          required={!!required}
          onChange={onChange}
          className='
              w-full
              h-12
              rounded
              pl-2
              duration-500
              bg-white
              focus:outline-none focus:border-slate-400
              focus:shadow
              file:h-full
              file:px-6
              file:bg-[#560606]
              file:border-none
              file:text-white
              file:cursor-pointer
              hover:border-slate-300
          '
      />
    )
  }

export default FileInput