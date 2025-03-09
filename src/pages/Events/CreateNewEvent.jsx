import React, { useState } from 'react';
import { BsPlus } from 'react-icons/bs';
import DefultInput from '../../components/Forms/DefultInput';
import FileInput from '../../components/Forms/FileInput';
import DashTextArea from '../../components/Forms/DashTextArea';
import Defaultbtn from '../../components/Button/Defaultbtn';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const CreateNewEvent = () => {
    const navigate = useNavigate();
    const [eventdata, setEventdata] = useState({
        action: 'createEvent',
        eventName: '',
        eventImg: null,
        eventDesc: '',
        eventLink: '',
        eventDate: '',
    });

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setEventdata((prevData) => ({
            ...prevData,
            [name]: value,
        }));
    };

    const handleImageChange = (e) => {
        const file = e.target.files[0];
        setEventdata((prevData) => ({
            ...prevData,
            eventImg: file,
        }));
    };

    const handleCreateEvent = async (e) => {
        e.preventDefault();
        const formData = new FormData();
        
        Object.keys(eventdata).forEach((key) => {
            if (key === "eventImg" && eventdata[key]) {
                formData.append(key, eventdata[key]);
            } else {
                formData.append(key, eventdata[key]);
            }
        });
    
        try {
            const res = await axios.post(`${import.meta.env.VITE_APP_API}/event.php`, formData, {
                headers: { 'Content-Type': 'multipart/form-data' },
            });
    
            console.log("Server Response:", res.data); // Detailed log
    
            if (res.data.Status === "Success") {
                alert("New Event Created Successfully");
                navigate('/Dashboard/Events');
            } else {
                console.error("Error Details:", res.data); // Detailed error log
                alert(res.data.error || "Unknown error occurred");
            }
        } catch (err) {
            console.error("Axios Error:", err);
            alert(err.response?.data?.error || "Request failed");
        }
    };
    
    

    return (
        <div className="mt-4">
            <div className="flex">
                <div className="">
                    <div className="inline-block p-2 bg-[#560606] rounded">
                        <BsPlus className="h-6 w-auto fill-white" />
                    </div>
                </div>
                <div className="pl-4">
                    <h1 className="text-[#560606] text-xl pt-1 font-semibold uppercase">Create New Event</h1>
                </div>
            </div>

            <div className="mt-4">
                <a href="/Dashboard/Events">
                    <button className="bg-gradient-to-r from-[#ff7e60] to-[#ffc27c] px-8 py-2 text-white rounded duration-500">
                        Back
                    </button>
                </a>
            </div>

            <div className="my-8">
                <form onSubmit={handleCreateEvent} method="post">
                    <div className="grid grid-cols-2 gap-4">
                        <div>
                            <p>Event Name</p>
                            <DefultInput 
                                type="text"
                                name="eventName"
                                value={eventdata.eventName}
                                onChange={handleInputChange}
                                required
                                placeholder="Event Name"
                            />
                        </div>
                        <div>
                            <p>Event Image</p>
                            <FileInput 
                                name="eventImg"
                                accept="image/*"
                                required
                                onChange={handleImageChange}
                            />
                        </div>
                    </div>

                    <div className="mt-4">
                        <p>Event Description</p>
                        <DashTextArea 
                            name="eventDesc"
                            value={eventdata.eventDesc}
                            required
                            placeholder="Event Description"
                            onChange={handleInputChange}
                        />
                    </div>

                    <div className="grid grid-cols-2 gap-4">
                        <div>
                            <p>Event Link</p>
                            <DefultInput 
                                type="text"
                                name="eventLink"
                                value={eventdata.eventLink}
                                onChange={handleInputChange}
                                required
                                placeholder="Event Link"
                            />
                        </div>
                        <div>
                            <p>Event Date</p>
                            <DefultInput 
                                type="date"
                                name="eventDate"
                                value={eventdata.eventDate}
                                onChange={handleInputChange}
                                required
                            />
                        </div>
                    </div>

                    <div className="mt-8">
                        <Defaultbtn 
                            btnvalue="Create New Event"
                            type="Submit"
                        />
                    </div>
                </form>
            </div>
        </div>
    );
};

export default CreateNewEvent;
