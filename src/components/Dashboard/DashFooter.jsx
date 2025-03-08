import React from 'react'

const DashFooter = () => {
    const getcurrentyear = new Date().getFullYear()
  return (
    <div className="py-8 text-[#560606]">
        Copyright © {getcurrentyear} University of Peradeniya. All rights reserved.
    </div>
  )
}

export default DashFooter