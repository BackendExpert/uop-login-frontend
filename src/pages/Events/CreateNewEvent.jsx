import React, { useState } from 'react'
import { BsPlus } from 'react-icons/bs'
import DefultInput from '../../components/Forms/DefultInput'
import FileInput from '../../components/Forms/FileInput'


const CreateNewEvent = () => {
    const [eventdata, seteventdata] = useState({
        envetName: '',
        eventImg: '',
        eventDesc: '',
        eventLink: '',
        eventData: '',
    })
    const handleInputChange = (e) => {
        const { name, value } = e.target;
        seteventdata((prevData) => ({
          ...prevData,
          [name]: value
        }));
    };

    
    const handleImageChange = (e) => {
        const file = e.target.files[0];
        setroomdata((prevData) => ({
            ...prevData,
            image: file
        }));
    };

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
            <form method="post">
                <div className="grid grid-cols-2 gap-4">
                    <div className="">
                        <p className="">Event Name</p>
                        <div className="">
                            <DefultInput 
                                type={'text'}
                                name={'envetName'}
                                value={eventdata.envetName}
                                onChange={handleInputChange}
                                required={true}
                                placeholder={"Event Name"}
                            />
                        </div>
                    </div>
                    <div className="">
                        <p className="">Event Name</p>
                        <div className="mt-2">
                            <FileInput 
                                name={'img'}
                                accept={'image/*'}
                                required={true}
                                onChange={handleImageChange}
                            />
                        </div>
                    </div>
                </div>

            </form>
        </div>



    </div>
  )
}

export default CreateNewEvent