import React from 'react'

const Defaultbtn = ({ type, btnvalue, onClick }) => {
  return (
    <button type={type} className='py-2 px-6 rounded bg-[#560606] text-[#e8b910]' onClick={onClick}>
        {btnvalue}
    </button>
  )
}

export default Defaultbtn