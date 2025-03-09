import React from 'react'
import CountUp from 'react-countup';
import { BsCalendar3EventFill , BsMegaphoneFill, BsNewspaper, BsJournalBookmarkFill  } from "react-icons/bs";

const CardDashboard = () => {
    const admindata = [
        {
            id: 1,
            name: 'Events',
            icon: BsCalendar3EventFill,
            value: 500,
            bgstyle: 'bg-gradient-to-r from-[#59bdff] to-[#59d1ff]'
        },

        {
            id: 2,
            name: 'NEWS',
            icon: BsNewspaper,
            value: 500,
            bgstyle: 'bg-gradient-to-r from-[#4cdd94] to-[#55f397]'
        },

        {
            id: 3,
            name: 'Research',
            icon: BsJournalBookmarkFill,
            value: 500,
            bgstyle: 'bg-gradient-to-r from-[#fdbf6a] to-[#fedb7f]'
        },

        {
            id: 4,
            name: 'Notices',
            icon: BsMegaphoneFill,
            value: 500,
            bgstyle: 'bg-gradient-to-r from-[#ff7e60] to-[#ffc27c]'
        },

    ]
  return (
    <div>
        <div className="mt-4">
            <div className="grid xl:grid-cols-4 md:grid-cols-2 gap-6">
                {
                    admindata.map((data, index) => {
                        return (
                            <div className={`${data.bgstyle} text-white rounded-md shadow-xl py-8 px-4`} key={index}>
                                <div className="flex justify-between">
                                    <div className="">
                                        <h1 className="text-2xl">                                            
                                            <CountUp end={data.value} duration={5}/> + 
                                        </h1>
                                        <h1 className="font-semibold">{data.name}</h1>
                                    </div>

                                    <div className="">
                                        <data.icon className='h-12 w-auto'/>
                                    </div>
                                </div>

                            </div>
                        )
                    })
                }
            </div>
        </div>
    </div>
  )
}

export default CardDashboard