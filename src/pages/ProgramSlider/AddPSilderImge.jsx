import { MdEventNote } from "react-icons/md";
import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import DefultInput from '../../components/Forms/DefultInput';
import FileInput from '../../components/Forms/FileInput';
import DashTextArea from '../../components/Forms/DashTextArea';
import Defaultbtn from '../../components/Button/Defaultbtn';

const AddPSilderImge = () => {
    const navigate = useNavigate();
    const [pdataimge, setpdataimge] = useState({
        action: 'createPImge',
        ptitle: '',
        pimg: null,
        pdesc: '',
        plink: '',
    });

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setpdataimge((prevData) => ({
            ...prevData,
            [name]: value,
        }));
    };

    const handleImageChange = (e) => {
        const file = e.target.files[0];
        setpdataimge((prevData) => ({
            ...prevData,
            pimg: file,
        }));
    };

    const handleCreateHomeImge = async (e) => {
        e.preventDefault();
        const formData = new FormData();

        Object.keys(pdataimge).forEach((key) => {
            if (key === "hiimg" && pdataimge[key]) {
                formData.append(key, pdataimge[key]);
            } else {
                formData.append(key, pdataimge[key]);
            }
        });

        try {
            const res = await axios.post(`${import.meta.env.VITE_APP_API}/programsilder.php`, formData, {
                headers: { 'Content-Type': 'multipart/form-data' },
            });

            console.log("Server Response:", res.data); // Detailed log

            if (res.data.Status === "Success") {
                alert("New Image Created Successfully");
                navigate('/Dashboard/ProgramSlider');
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
                        <MdEventNote className='h-6 w-auto fill-white' />
                    </div>
                </div>
                <div className="pl-4">
                    <h1 className="text-[#560606] text-xl pt-1 font-semibold uppercase">Add Images</h1>
                </div>
            </div>
            <div className="mt-4">
                <a href="/Dashboard/ProgramSlider">
                    <button className='bg-gradient-to-r from-[#ff7e60] to-[#ffc27c] px-8 py-2 text-white rounded duration-500'>
                        Back
                    </button>
                </a>
            </div>

            <div className="">
                <form onSubmit={handleCreateHomeImge} method="post">
                    <div className="grid grid-cols-2 gap-2 mt-4">
                        <div>
                            <p>Programme Slider Name</p>
                            <DefultInput
                                type="text"
                                name="ptitle"
                                value={pdataimge.ptitle}
                                onChange={handleInputChange}
                                required
                                placeholder="Programme Title "
                            />
                        </div>
                        <div>
                            <p className='mb-2'> Image</p>
                            <FileInput
                                name="pimg"
                                accept="image/*"
                                required
                                onChange={handleImageChange}
                            />
                        </div>
                    </div>
                    <div className="mt-4">
                        <p>Programme Slider Description</p>
                        <DashTextArea
                            name="hidesc"
                            value={pdataimge.pdesc}
                            required
                            placeholder="Programme Description"
                            onChange={handleInputChange}
                        />
                    </div>
                    <div className="mt-4">
                        <p>Programme Slider Link</p>
                        <DefultInput
                            type="text"
                            name="plink"
                            value={pdataimge.plink}
                            onChange={handleInputChange}
                            required
                            placeholder="Programme Link"
                        />
                    </div>
                    <div className="mt-8">
                        <Defaultbtn
                            btnvalue="Create New Image for Programme Slider"
                            type="submit"
                        />
                    </div>
                </form>
            </div>
        </div>
    )
}

export default AddPSilderImge