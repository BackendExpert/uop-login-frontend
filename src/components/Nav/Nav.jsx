import React from 'react'
import UopLogo from '../../assets/uoplogo.png'

const Nav = () => {
  return (
    <div className='md:px-16 px-2 bg-[#560606] py-4 text-[#e8b910]'>
        <div className="flex justify-between">
            <div className="">
                <img src={UopLogo} alt="" className='xl:h-12 h-12 w-auto'/>
            </div>
            <div className="text-2xl font-semibold text-xl mt-2">
                Staff Login
            </div>
        </div> 
    </div>
  )
}

export default Nav