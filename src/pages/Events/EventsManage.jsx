import React from 'react'
import { BsCalendar3EventFill } from "react-icons/bs";

const EventsManage = () => {
  return (
    <div className='mt-4'>
        <div className="flex">
            <div className="">
                <div className="inline-block p-2 bg-[#560606] rounded">
                    <BsCalendar3EventFill className='h-6 w-auto fill-white'/>
                </div>
            </div>
            <div className="pl-4">
                <h1 className="text-[#560606] text-xl pt-1 font-semibold uppercase">Evemt Management</h1>
            </div>
        </div>

        <div className="mt-4">
            <a href="/Dashboard/CreateEvent">
                <button className='bg-gradient-to-r from-[#ff7e60] to-[#ffc27c] px-8 py-2 text-white rounded duration-500'>
                    Create New Event
                </button>
            </a>
        </div>
    </div>

  )
}

export default EventsManage