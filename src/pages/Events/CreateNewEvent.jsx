import React, { useState } from 'react'
import { BsPlus } from 'react-icons/bs'


const CreateNewEvent = () => {
    const [eventdata, seteventdata] = useState({
        eventID: '',
        envetName: '',
        eventImg: '',
        eventDesc: '',
        eventLink: '',
        eventData: '',
    })


  return (
    <div className='mt-4'>
        <div className="flex">
            <div className="">
                <div className="inline-block p-2 bg-[#560606] rounded">
                    <BsPlus className='h-6 w-auto fill-white'/>
                </div>
            </div>
            <div className="pl-4">
                <h1 className="text-[#560606] text-xl pt-1 font-semibold uppercase">Create New Event</h1>
            </div>
        </div>

        <div className="mt-4">
            <a href="/Dashboard/Events">
                <button className='bg-gradient-to-r from-[#ff7e60] to-[#ffc27c] px-8 py-2 text-white rounded duration-500'>
                    Back
                </button>
            </a>
        </div>

        <div className="my-8">
            <form method="post"></form>
        </div>



    </div>
  )
}

export default CreateNewEvent