import React, { useState } from 'react'
import { BsPlus } from 'react-icons/bs'
import DefultInput from '../../components/Forms/DefultInput'
import FileInput from '../../components/Forms/FileInput'
import DashTextArea from '../../components/Forms/DashTextArea'
import Defaultbtn from '../../components/Button/Defaultbtn'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'


const CreateNewEvent = () => {
    const navigate = useNavigate()
    const [eventdata, seteventdata] = useState({
        action: 'createEvent',
        envetName: '',
        eventImg: null,
        eventDesc: '',
        eventLink: '',
        eventDate: '',
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
        seteventdata((prevData) => ({
            ...prevData,
            image: file
        }));
    };

    const headleCreateEvent = async (e) => {
        e.preventDefault()

        const formData = new FormData();
        Object.keys(roomdata).forEach((key) => {
            formData.append(key, roomdata[key]);
        });

        try{
            const res = await axios.post(`${import.meta.env.VITE_APP_API}/event.php`, formData, {
                headers: { 'Content-Type': 'multipart/form-data' }
            });

            if(res.data.Status === "Success"){
                alert("New Event Created Successfully")
                navigate('/Dashboard/Events')
            }
            else{
                alert(res.data.error || "Error White Create New Event");
            }
        }
        catch(err){
            console.log(err)
        }
    }

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
            <form onSubmit={headleCreateEvent} method="post">
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
                                name={'eventImg'}
                                accept={'image/*'}
                                required={true}
                                onChange={handleImageChange}
                            />
                        </div>
                    </div>
                </div>

                <div className="mt-4">
                    <p className="">Event Description</p>
                    <DashTextArea 
                        name={'eventDesc'}
                        value={eventdata.eventDesc}
                        required={true}
                        placeholder={"Event Description"}
                        onChange={handleInputChange}
                    />
                </div>

                <div className="grid grid-cols-2 gap-4">
                    <div className="">
                        <p className="">Event Name</p>
                        <div className="">
                            <DefultInput 
                                type={'link'}
                                name={'eventLink'}
                                value={eventdata.eventLink}
                                onChange={handleInputChange}
                                required={true}
                                placeholder={"Event Link"}
                            />
                        </div>
                    </div>

                    <div className="">
                        <p className="">Event Name</p>
                        <div className="">
                            <DefultInput 
                                type={'date'}
                                name={'eventDate'}
                                value={eventdata.eventDate}
                                onChange={handleInputChange}
                                required={true}
                            />
                        </div>
                    </div>
                </div>


                <div className="mt-8">
                    <Defaultbtn 
                        btnvalue={"Create New Event"}
                        type={"Submit"}
                    />
                </div>

            </form>
        </div>



    </div>
  )
}

export default CreateNewEvent