import React, { useState } from 'react'
import DefultInput from '../../components/Forms/DefultInput';
import FileInput from '../../components/Forms/FileInput';
import DashTextArea from '../../components/Forms/DashTextArea';
import Defaultbtn from '../../components/Button/Defaultbtn';
import axios from 'axios';


const UpdateEvent = ({ eventID }) => {
    const [updateeventdata, setupdateeventdata] = useState({
        action: 'updateEvent',
        eventName: '',
        eventImg: null,
        eventDesc: '',
        eventLink: '',
        eventDate: '',
        eventID: eventID, // Ensure eventID is correctly passed here
    });
    
    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setupdateeventdata((prevData) => ({
            ...prevData,
            [name]: value,
        }));
    };
    
    const handleImageChange = (e) => {
        const file = e.target.files[0];
        setupdateeventdata((prevData) => ({
            ...prevData,
            eventImg: file,
        }));
    };
    
    const handleUpdateEvent = async (e) => {
        e.preventDefault();
        const formData = new FormData();
    
        // Append all fields including eventID
        Object.keys(updateeventdata).forEach((key) => {
            if (key === "eventImg" && updateeventdata[key]) {
                formData.append(key, updateeventdata[key]);
            } else {
                formData.append(key, updateeventdata[key]);
            }
        });
    
        try {
            const res = await axios.post(`${import.meta.env.VITE_APP_API}/event.php`, formData, {
                headers: { 'Content-Type': 'multipart/form-data' },
            });
    
            console.log("Server Response:", res.data); // Detailed log
    
            if (res.data.Status === "Success") {
                alert("Event Updated Successfully");
                window.location.reload();
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
        <div>
            <form onSubmit={handleUpdateEvent} method="post">
                <div className="grid grid-cols-2 gap-4">
                    <div>
                        <p>Event Name</p>
                        <DefultInput
                            type="text"
                            name="eventName"
                            value={updateeventdata.eventName}
                            onChange={handleInputChange}                            
                            placeholder="Event Name"
                        />
                    </div>
                    <div>
                        <p className='mb-2'>Event Image</p>
                        <FileInput
                            name="eventImg"
                            accept="image/*"                            
                            onChange={handleImageChange}
                        />
                    </div>
                </div>

                <div className="mt-4">
                    <p>Event Description</p>
                    <DashTextArea
                        name="eventDesc"
                        value={updateeventdata.eventDesc}                        
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
                            value={updateeventdata.eventLink}
                            onChange={handleInputChange}                            
                            placeholder="Event Link"
                        />
                    </div>
                    <div>
                        <p>Event Date</p>
                        <DefultInput
                            type="date"
                            name="eventDate"
                            value={updateeventdata.eventDate}
                            onChange={handleInputChange}                            
                        />
                    </div>
                </div>

                <div className="mt-8">
                    <Defaultbtn
                        btnvalue="Update Event Data"
                        type="Submit"
                    />
                </div>
            </form>
        </div>
    )
}

export default UpdateEvent