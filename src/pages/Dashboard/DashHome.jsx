import React from 'react'
import { BsFillGrid1X2Fill  } from "react-icons/bs";
import CardDashboard from './CardDashboard';

const DashHome = () => {
  return (
    <div className='mt-4'>
        <div className="flex">
            <div className="">
                <div className="inline-block p-2 bg-[#560606]">
                    <BsFillGrid1X2Fill className='h-6 w-auto fill-white'/>
                </div>
            </div>
            <div className="pl-4">
                <h1 className="text-[#560606] text-xl pt-1 font-semibold uppercase">Dashboard</h1>
            </div>
        </div>

        <div className="">
            <CardDashboard />
        </div>


    </div>
  )
}

export default DashHome