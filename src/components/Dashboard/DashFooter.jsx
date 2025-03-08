import React from 'react'

const DashFooter = () => {
    const getcurrentyear = new Date().getFullYear()
  return (
    <div className="py-8 text-[#a4805a]">
        Copyright &copy; {getcurrentyear} MyHotel | All Right Reserved | Developed and Maintained by <a href="https://www.linkedin.com/in/jehanweerasuriya/" className='font-semibold text-[#4e5c4a]' target='_blank'>jehankandy</a>
    </div>
  )
}

export default DashFooter