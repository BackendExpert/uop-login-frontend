import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { RiImageAddLine } from "react-icons/ri";
import { useNavigate } from 'react-router-dom';
import DefultInput from '../../components/Forms/DefultInput';
import FileInput from '../../components/Forms/FileInput';
import DashTextArea from '../../components/Forms/DashTextArea';
import Defaultbtn from '../../components/Button/Defaultbtn';


const AddImage = () => {
    const navigate = useNavigate();
    const [sethomeimge, setsethomeimge] = useState({
        action: 'createHomeImage',
        hititile: '',
        hiimg: null,
        hidesc: '',
        hilink: '',
    });

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setsethomeimge((prevData) => ({
            ...prevData,
            [name]: value,
        }));
    };

    const handleImageChange = (e) => {
        const file = e.target.files[0];
        setsethomeimge((prevData) => ({
            ...prevData,
            hiimg: file,
        }));
    };

    const handleCreateHomeImge = async (e) => {
        e.preventDefault();
        const formData = new FormData();

        Object.keys(sethomeimge).forEach((key) => {
            if (key === "hiimg" && sethomeimge[key]) {
                formData.append(key, sethomeimge[key]);
            } else {
                formData.append(key, sethomeimge[key]);
            }
        });

        try {
            const res = await axios.post(`${import.meta.env.VITE_APP_API}/homeimge.php`, formData, {
                headers: { 'Content-Type': 'multipart/form-data' },
            });

            console.log("Server Response:", res.data); // Detailed log

            if (res.data.Status === "Success") {
                alert("New Image Created Successfully");
                navigate('/Dashboard/HSliderImg');
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
        <div className='mt-4'>
            <div className="flex">
                <div className="">
                    <div className="inline-block p-2 bg-[#560606] rounded">
                        <RiImageAddLine className='h-6 w-auto fill-white' />
                    </div>
                </div>
                <div className="pl-4">
                    <h1 className="text-[#560606] text-xl pt-1 font-semibold uppercase">Add Images</h1>
                </div>
            </div>
            <div className="mt-4">
                <a href="/Dashboard/HSliderImg">
                    <button className='bg-gradient-to-r from-[#ff7e60] to-[#ffc27c] px-8 py-2 text-white rounded duration-500'>
                        Back
                    </button>
                </a>
            </div>

            <div className="">
                <form onSubmit={handleCreateHomeImge} method="post">
                    <div className="grid grid-cols-2 gap-2 mt-4">
                        <div>
                            <p>Event Name</p>
                            <DefultInput
                                type="text"
                                name="hititile"
                                value={sethomeimge.hititile}
                                onChange={handleInputChange}
                                required
                                placeholder="Image Title Name"
                            />
                        </div>
                        <div>
                            <p className='mb-2'>Home Image</p>
                            <FileInput
                                name="hiimg"
                                accept="image/*"
                                required
                                onChange={handleImageChange}
                            />
                        </div>
                    </div>
                    <div className="mt-4">
                        <p>Image Description</p>
                        <DashTextArea
                            name="hidesc"
                            value={sethomeimge.hidesc}
                            required
                            placeholder="Image Description"
                            onChange={handleInputChange}
                        />
                    </div>
                    <div className="mt-4">
                        <p>Image Link</p>
                        <DefultInput
                            type="text"
                            name="hilink"
                            value={sethomeimge.hilink}
                            onChange={handleInputChange}
                            required
                            placeholder="Image Link"
                        />
                    </div>
                    <div className="mt-8">
                        <Defaultbtn 
                            btnvalue="Create New Image"
                            type="submit"
                        />
                    </div>
                </form>
            </div>
        </div>
    )
}

export default AddImage