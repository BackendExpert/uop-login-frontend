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
    const [newsdata, setnewsdata] = useState({
        action: 'createNEWS',
        newsName: '',
        newsImg: null,
        newsDesc: '',
        newsLink: '',
        newsDate: '',
    });

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setnewsdata((prevData) => ({
            ...prevData,
            [name]: value,
        }));
    };

    const handleImageChange = (e) => {
        const file = e.target.files[0];
        setnewsdata((prevData) => ({
            ...prevData,
            newsImg: file,
        }));
    };

    const headleCreateNews = async (e) => {
        e.preventDefault();
        const formData = new FormData();
        
        Object.keys(newsdata).forEach((key) => {
            if (key === "newsImg" && newsdata[key]) {
                formData.append(key, newsdata[key]);
            } else {
                formData.append(key, newsdata[key]);
            }
        });
    
        try {
            const res = await axios.post(`${import.meta.env.VITE_APP_API}/news.php`, formData, {
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
                    <h1 className="text-[#560606] text-xl pt-1 font-semibold uppercase">Create New NEWS</h1>
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
                <form onSubmit={headleCreateNews} method="post">
                    <div className="grid grid-cols-2 gap-4">
                        <div>
                            <p>NEWS Name</p>
                            <DefultInput 
                                type="text"
                                name="newsName"
                                value={newsdata.newsName}
                                onChange={handleInputChange}
                                required
                                placeholder="NEWS Name"
                            />
                        </div>
                        <div>
                            <p>NEWS Image</p>
                            <FileInput 
                                name="newsImg"
                                accept="image/*"
                                required
                                onChange={handleImageChange}
                            />
                        </div>
                    </div>

                    <div className="mt-4">
                        <p>NEWS Description</p>
                        <DashTextArea 
                            name="newsDesc"
                            value={newsdata.newsDesc}
                            required
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
                                value={newsdata.newsLink}
                                onChange={handleInputChange}
                                required
                                placeholder="NEWS Link"
                            />
                        </div>
                        <div>
                            <p>NEWS Date</p>
                            <DefultInput 
                                type="date"
                                name="newsDate"
                                value={newsdata.newsDate}
                                onChange={handleInputChange}
                                required
                            />
                        </div>
                    </div>

                    <div className="mt-8">
                        <Defaultbtn 
                            btnvalue="Create New NEWS"
                            type="Submit"
                        />
                    </div>
                </form>
            </div>
        </div>
    );
};

export default CreateNewEvent;
