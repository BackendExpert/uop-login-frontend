import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { FaImages } from 'react-icons/fa'
import { useParams } from 'react-router-dom'
import DefultInput from '../../components/Forms/DefultInput'
import Defaultbtn from '../../components/Button/Defaultbtn'
import DashTextArea from '../../components/Forms/DashTextArea'
import FileInput from '../../components/Forms/FileInput'

const UpdateHImge = () => {
    const { id } = useParams();
    const [imagedata, setimagedata] = useState(null);

    useEffect(() => {
        axios.get(import.meta.env.VITE_APP_API + '/homeimge.php', {
            params: { action: "getallImages" },
            headers: { 'Content-Type': 'multipart/form-data' },
        })
            .then(res => {
                console.log(res.data);
                if (res.data.Result) {
                    const filteredData = res.data.Result.find(img => img.id === id); // Filter image by ID
                    setimagedata(filteredData || null);
                } else {
                    setimagedata(null);
                }
            })
            .catch(err => {
                console.log(err);
                setimagedata(null);
            });
    }, [id]);

    const [updatehimge, setupdatehimge] = useState({
        action: 'updatehImge',
        title: '',
        img: null,
        desc: '',
        link: '',
        hImgeID: id,
    })

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setupdatehimge((prevData) => ({
            ...prevData,
            [name]: value,
        }));
    };

    const handleImageChange = (e) => {
        const file = e.target.files[0];
        setupdatehimge((prevData) => ({
            ...prevData,
            img: file,
        }));
    };

    const handleCreateHomeImge = async (e) => {
        e.preventDefault();
        const formData = new FormData();

        Object.keys(updatehimge).forEach((key) => {
            if (key === "img" && updatehimge[key]) {
                formData.append(key, updatehimge[key]);
            } else {
                formData.append(key, updatehimge[key]);
            }
        });

        try {
            const res = await axios.post(`${import.meta.env.VITE_APP_API}/homeimge.php`, formData, {
                headers: { 'Content-Type': 'multipart/form-data' },
            });

            console.log("Server Response:", res.data); // Detailed log

            if (res.data.Status === "Success") {
                alert("New Image Created Successfully");
                window.location.reload()
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
                        <FaImages className='h-6 w-auto fill-white' />
                    </div>
                </div>
                <div className="pl-4">
                    <h1 className="text-[#560606] text-xl pt-1 font-semibold uppercase">Update Image : {id}</h1>
                </div>
            </div>
            <div className="mt-4">
                <a href="/Dashboard/HSliderImg">
                    <button className='bg-gradient-to-r from-[#ff7e60] to-[#ffc27c] px-8 py-2 text-white rounded duration-500'>
                        Back
                    </button>
                </a>
            </div>

            <div className="mt-8">
                <img
                    src={imagedata?.img ? `${import.meta.env.VITE_APP_API}/${imagedata.img}` : "placeholder.jpg"}
                    alt={imagedata?.imgdesc || "Image"}
                    className="rounded-xl h-28 w-auto"
                />

                <div className="bg-white p-4 rounded-md shadow-xl mt-8">
                    <div className="text-xl font-semibold mb-2">
                        {imagedata ? imagedata.title : "Loading..."}
                    </div>
                    <div className="">
                        {imagedata ? imagedata.imgdesc : "Loading..."}
                    </div>
                    <div className="">
                        {imagedata ? imagedata.link : "Loading..."}
                    </div>
                    <div className="">
                        <a href={imagedata ? imagedata.link : "Loading..."} target='_blank' className='text-blue-500'>click to go</a>
                    </div>
                </div>
            </div>

            <div className="mt-8">
                <form onSubmit={handleCreateHomeImge} method="post">
                    <div className="">
                        <p className="">Update Title</p>
                        <DefultInput
                            type={'text'}
                            name={'title'}
                            value={updatehimge.title}
                            onChange={handleInputChange}
                            placeholder={"Title"}
                        />
                    </div>
                    <div>
                        <p className='mb-2'>Home Image</p>
                        <FileInput
                            name="img"
                            accept="image/*"
                            onChange={handleImageChange}
                        />
                    </div>
                    <div className="mt-4">
                        <p>Image Description</p>
                        <DashTextArea
                            name="desc"
                            value={updatehimge.desc}
                            placeholder="Image Description"
                            onChange={handleInputChange}
                        />
                    </div>
                    <div className="mt-4">
                        <p>Image Link</p>
                        <DefultInput
                            type="text"
                            name="link"
                            value={updatehimge.link}
                            onChange={handleInputChange}
                            placeholder="Image Link"
                        />
                    </div>
                    <div className="mt-8">
                        <Defaultbtn 
                            btnvalue="Update New Image"
                            type="submit"
                        />
                    </div>
                </form>
            </div>
        </div>
    )
}

export default UpdateHImge