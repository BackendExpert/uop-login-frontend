import React, { useState } from 'react'
import DefultInput from '../../components/Forms/DefultInput';
import FileInput from '../../components/Forms/FileInput';
import DashTextArea from '../../components/Forms/DashTextArea';
import Defaultbtn from '../../components/Button/Defaultbtn';
import axios from 'axios';


const UpdateNotice = ({ NoticeID }) => {
    const [updatenoticedata, setupdatenoticedata] = useState({
        action: 'updateNotice',
        noticeName: '',
        noticeDesc: '',
        noticeLink: '',
        noticeDate: '',
        NoticeID: NoticeID, // Ensure eventID is correctly passed here
    });
    
    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setupdatenoticedata((prevData) => ({
            ...prevData,
            [name]: value,
        }));
    };
    
    const headleUpdateNotice = async (e) => {
        e.preventDefault();
    
        try {
            const res = await axios.post(`${import.meta.env.VITE_APP_API}/notice.php`, updatenoticedata, {
                headers: { 'Content-Type': 'multipart/form-data' },
            });
    
            console.log("Server Response:", res.data); // Detailed log
    
            if (res.data.Status === "Success") {
                alert("Notice Updated Successfully");
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
            <form onSubmit={headleUpdateNotice} method="post">
                <div className="grid grid-cols-2 gap-4">
                    <div>
                        <p>Notice Name</p>
                        <DefultInput
                            type="text"
                            name="noticeName"
                            value={updatenoticedata.noticeName}
                            onChange={handleInputChange}                            
                            placeholder="NEWS Name"
                        />
                    </div>

                </div>

                <div className="mt-4">
                    <p>Notice Description</p>
                    <DashTextArea
                        name="noticeDesc"
                        value={updatenoticedata.noticeDesc}                        
                        placeholder="Notice Description"
                        onChange={handleInputChange}
                    />
                </div>


                <div className="grid grid-cols-2 gap-4">
                    <div>
                        <p>Notice Link</p>
                        <DefultInput
                            type="link"
                            name="noticeLink"
                            value={updatenoticedata.noticeLink}
                            onChange={handleInputChange}                            
                            placeholder="Notice Link"
                        />
                    </div>
                    <div>
                        <p>Notice Date</p>
                        <DefultInput
                            type="date"
                            name="noticeDate"
                            value={updatenoticedata.noticeDate}
                            onChange={handleInputChange}                            
                        />
                    </div>
                </div>

                <div className="mt-8">
                    <Defaultbtn
                        btnvalue="Update Notice Data"
                        type="Submit"
                    />
                </div>
            </form>
        </div>
    )
}

export default UpdateNotice