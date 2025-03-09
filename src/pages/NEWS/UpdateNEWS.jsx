import React, { useState } from 'react'
import DefultInput from '../../components/Forms/DefultInput';
import FileInput from '../../components/Forms/FileInput';
import DashTextArea from '../../components/Forms/DashTextArea';
import Defaultbtn from '../../components/Button/Defaultbtn';
import axios from 'axios';


const UpdateNEWS = ({ NEWSid }) => {
    const [updatenewsdata, setupdatenewsdata] = useState({
        action: 'updateNEWS',
        newsName: '',
        newsImg: null,
        newsDesc: '',
        newsLink: '',
        newsDate: '',
        NEWSid: NEWSid, // Ensure eventID is correctly passed here
    });
    
    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setupdatenewsdata((prevData) => ({
            ...prevData,
            [name]: value,
        }));
    };
    
    const handleImageChange = (e) => {
        const file = e.target.files[0];
        setupdatenewsdata((prevData) => ({
            ...prevData,
            newsImg: file,
        }));
    };
    
    const headleUpdateNEWS = async (e) => {
        e.preventDefault();
        const formData = new FormData();
    
        // Append all fields including eventID
        Object.keys(updatenewsdata).forEach((key) => {
            if (key === "eventImg" && updatenewsdata[key]) {
                formData.append(key, updatenewsdata[key]);
            } else {
                formData.append(key, updatenewsdata[key]);
            }
        });
    
        try {
            const res = await axios.post(`${import.meta.env.VITE_APP_API}/news.php`, formData, {
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
            <form onSubmit={headleUpdateNEWS} method="post">
                <div className="grid grid-cols-2 gap-4">
                    <div>
                        <p>NEWS Name</p>
                        <DefultInput
                            type="text"
                            name="newsName"
                            value={updatenewsdata.newsName}
                            onChange={handleInputChange}                            
                            placeholder="NEWS Name"
                        />
                    </div>
                    <div>
                        <p className='mb-2'>NEWS Image</p>
                        <FileInput
                            name="newsImg"
                            accept="image/*"                            
                            onChange={handleImageChange}
                        />
                    </div>
                </div>

                <div className="mt-4">
                    <p>NEWS Description</p>
                    <DashTextArea
                        name="newsDesc"
                        value={updatenewsdata.newsDesc}                        
                        placeholder="NEWS Description"
                        onChange={handleInputChange}
                    />
                </div>


                <div className="grid grid-cols-2 gap-4">
                    <div>
                        <p>NEWS Link</p>
                        <DefultInput
                            type="text"
                            name="newsLink"
                            value={updatenewsdata.newsLink}
                            onChange={handleInputChange}                            
                            placeholder="NEWS Link"
                        />
                    </div>
                    <div>
                        <p>NEWS Date</p>
                        <DefultInput
                            type="date"
                            name="newsDate"
                            value={updatenewsdata.newsDate}
                            onChange={handleInputChange}                            
                        />
                    </div>
                </div>

                <div className="mt-8">
                    <Defaultbtn
                        btnvalue="Update NEWS Data"
                        type="Submit"
                    />
                </div>
            </form>
        </div>
    )
}

export default UpdateNEWS