import React, { useState } from 'react';
import { BsPlus } from 'react-icons/bs';
import DefultInput from '../../components/Forms/DefultInput';
import FileInput from '../../components/Forms/FileInput';
import DashTextArea from '../../components/Forms/DashTextArea';
import Defaultbtn from '../../components/Button/Defaultbtn';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const CreateNewNotice = () => {
    const navigate = useNavigate();
    const [noticedata, setnoticedata] = useState({
        action: 'createnotice',
        noticeName: '',
        noticeDesc: '',
        noticeLink: '',
        noticeDate: '',
    });

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setnoticedata((prevData) => ({
            ...prevData,
            [name]: value,
        }));
    };


    const headleCreateNotice = async (e) => {
        e.preventDefault();

    
        try {
            const res = await axios.post(`${import.meta.env.VITE_APP_API}/notice.php`, noticedata, {
                headers: { 'Content-Type': 'multipart/form-data' },
            });
    
            console.log("Server Response:", res.data); // Detailed log
    
            if (res.data.Status === "Success") {
                alert("New Notice Created Successfully");
                navigate('/Dashboard/Notice');
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
                    <h1 className="text-[#560606] text-xl pt-1 font-semibold uppercase">Create New Notice</h1>
                </div>
            </div>

            <div className="mt-4">
                <a href="/Dashboard/Notice">
                    <button className="bg-gradient-to-r from-[#ff7e60] to-[#ffc27c] px-8 py-2 text-white rounded duration-500">
                        Back
                    </button>
                </a>
            </div>

            <div className="my-8">
                <form onSubmit={headleCreateNotice} method="post">
                    <div className="grid grid-cols-2 gap-4">
                        <div>
                            <p>Notice Name</p>
                            <DefultInput 
                                type="text"
                                name="noticeName"
                                value={noticedata.noticeName}
                                onChange={handleInputChange}
                                required
                                placeholder="Notice Name"
                            />
                        </div>
                    </div>

                    <div className="mt-4">
                        <p>Notice Description</p>
                        <DashTextArea 
                            name="noticeDesc"
                            value={noticedata.noticeDesc}
                            required
                            placeholder="Notice Description"
                            onChange={handleInputChange}
                        />
                    </div>

                    <div className="grid grid-cols-2 gap-4">
                        <div>
                            <p>Notice Link</p>
                            <DefultInput 
                                type="text"
                                name="noticeLink"
                                value={noticedata.noticeLink}
                                onChange={handleInputChange}
                                required
                                placeholder="Notice Link"
                            />
                        </div>
                        <div>
                            <p>Notice Date</p>
                            <DefultInput 
                                type="date"
                                name="noticeDate"
                                value={noticedata.noticeDate}
                                onChange={handleInputChange}
                                required
                            />
                        </div>
                    </div>

                    <div className="mt-8">
                        <Defaultbtn 
                            btnvalue="Create New Notice"
                            type="Submit"
                        />
                    </div>
                </form>
            </div>
        </div>
    );
};

export default CreateNewNotice;
