import React, { useState } from 'react'
import DefultInput from '../../components/Forms/DefultInput';
import FileInput from '../../components/Forms/FileInput';
import DashTextArea from '../../components/Forms/DashTextArea';
import Defaultbtn from '../../components/Button/Defaultbtn';
import axios from 'axios';


const UpdateResearch = ({ ResID }) => {
    const [updateresdata, setupdateresdata] = useState({
        action: 'updateResearch',
        resName: '',
        resImg: null,
        resDesc: '',
        resLink: '',
        resFaculty: '',
        ResID: ResID, // Ensure eventID is correctly passed here
    });
    
    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setupdateresdata((prevData) => ({
            ...prevData,
            [name]: value,
        }));
    };
    
    const handleImageChange = (e) => {
        const file = e.target.files[0];
        setupdateresdata((prevData) => ({
            ...prevData,
            resImg: file,
        }));
    };
    
    const headleUpdateResearch = async (e) => {
        e.preventDefault();
        const formData = new FormData();
    
        // Append all fields including eventID
        Object.keys(updateresdata).forEach((key) => {
            if (key === "eventImg" && updateresdata[key]) {
                formData.append(key, updateresdata[key]);
            } else {
                formData.append(key, updateresdata[key]);
            }
        });
    
        try {
            const res = await axios.post(`${import.meta.env.VITE_APP_API}/research.php`, formData, {
                headers: { 'Content-Type': 'multipart/form-data' },
            });
    
            console.log("Server Response:", res.data); // Detailed log
    
            if (res.data.Status === "Success") {
                alert("Research Updated Successfully");
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
            <form onSubmit={headleUpdateResearch} method="post">
                <div className="grid grid-cols-2 gap-4">
                    <div>
                        <p>Research Name</p>
                        <DefultInput
                            type="text"
                            name="resName"
                            value={updateresdata.resName}
                            onChange={handleInputChange}                            
                            placeholder="Research Name"
                        />
                    </div>
                    <div>
                        <p className='mb-2'>Research Image</p>
                        <FileInput
                            name="resImg"
                            accept="image/*"                            
                            onChange={handleImageChange}
                        />
                    </div>
                </div>

                <div className="mt-4">
                    <p>Research Description</p>
                    <DashTextArea
                        name="resDesc"
                        value={updateresdata.resDesc}                        
                        placeholder="NEWS Description"
                        onChange={handleInputChange}
                    />
                </div>


                <div className="grid grid-cols-2 gap-4">
                    <div>
                        <p>Research Link</p>
                        <DefultInput
                            type="text"
                            name="resLink"
                            value={updateresdata.resLink}
                            onChange={handleInputChange}                            
                            placeholder="Research Link"
                        />
                    </div>
                    <div>
                        <p>Research Date</p>
                        <DefultInput
                            type="text"
                            name="resFaculty"
                            value={updateresdata.resFaculty}
                            onChange={handleInputChange}                            
                        />
                    </div>
                </div>

                <div className="mt-8">
                    <Defaultbtn
                        btnvalue="Update Research Data"
                        type="Submit"
                    />
                </div>
            </form>
        </div>
    )
}

export default UpdateResearch