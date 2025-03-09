import React, { useState } from 'react';
import { BsPlus } from 'react-icons/bs';
import DefultInput from '../../components/Forms/DefultInput';
import FileInput from '../../components/Forms/FileInput';
import DashTextArea from '../../components/Forms/DashTextArea';
import Defaultbtn from '../../components/Button/Defaultbtn';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const CreateNewResearch = () => {
    const navigate = useNavigate();
    const [researchdata, setresearchdata] = useState({
        action: 'createNEWS',
        resName: '',
        resImg: null,
        resDesc: '',
        resLink: '',
        resFaculty: '',
    });

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setresearchdata((prevData) => ({
            ...prevData,
            [name]: value,
        }));
    };

    const handleImageChange = (e) => {
        const file = e.target.files[0];
        setresearchdata((prevData) => ({
            ...prevData,
            eventImg: file,
        }));
    };

    const headleCreateResearch = async (e) => {
        e.preventDefault();
        const formData = new FormData();
        
        Object.keys(researchdata).forEach((key) => {
            if (key === "newsImg" && researchdata[key]) {
                formData.append(key, researchdata[key]);
            } else {
                formData.append(key, researchdata[key]);
            }
        });
    
        try {
            const res = await axios.post(`${import.meta.env.VITE_APP_API}/research.php`, formData, {
                headers: { 'Content-Type': 'multipart/form-data' },
            });
    
            console.log("Server Response:", res.data); // Detailed log
    
            if (res.data.Status === "Success") {
                alert("New NEWS Created Successfully");
                navigate('/Dashboard/NEWS');
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
                    <h1 className="text-[#560606] text-xl pt-1 font-semibold uppercase">Create New Research</h1>
                </div>
            </div>

            <div className="mt-4">
                <a href="/Dashboard/NEWS">
                    <button className="bg-gradient-to-r from-[#ff7e60] to-[#ffc27c] px-8 py-2 text-white rounded duration-500">
                        Back
                    </button>
                </a>
            </div>

            <div className="my-8">
                <form onSubmit={headleCreateResearch} method="post">
                    <div className="grid grid-cols-2 gap-4">
                        <div>
                            <p>Research Name</p>
                            <DefultInput 
                                type="text"
                                name="resName"
                                value={researchdata.resName}
                                onChange={handleInputChange}
                                required
                                placeholder="Research Name"
                            />
                        </div>
                        <div>
                            <p>Research Image</p>
                            <FileInput 
                                name="resImg"
                                accept="image/*"
                                required
                                onChange={handleImageChange}
                            />
                        </div>
                    </div>

                    <div className="mt-4">
                        <p>Research Description</p>
                        <DashTextArea 
                            name="resDesc"
                            value={researchdata.resDesc}
                            required
                            placeholder="Research Description"
                            onChange={handleInputChange}
                        />
                    </div>

                    <div className="grid grid-cols-2 gap-4">
                        <div>
                            <p>Research Link</p>
                            <DefultInput 
                                type="link"
                                name="resLink"
                                value={researchdata.resLink}
                                onChange={handleInputChange}
                                required
                                placeholder="Research Link"
                            />
                        </div>
                        <div>
                            <p>Faculty</p>
                            <DefultInput 
                                type="text"
                                name="resFaculty"
                                value={researchdata.resFaculty}
                                onChange={handleInputChange}
                                required
                                placeholder={"Faculty"}
                            />
                        </div>
                    </div>

                    <div className="mt-8">
                        <Defaultbtn 
                            btnvalue="Create New Research"
                            type="Submit"
                        />
                    </div>
                </form>
            </div>
        </div>
    );
};

export default CreateNewResearch;
