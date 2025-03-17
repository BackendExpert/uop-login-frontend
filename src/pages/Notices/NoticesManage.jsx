import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { BsCalendar3EventFill, BsMegaphoneFill, BsNewspaper } from "react-icons/bs";

const NoticesManage = () => {
    const [noticedata, setnoticedata] = useState([])

    useEffect(() => {
        axios.get(import.meta.env.VITE_APP_API + '/notice.php', {
            params: { action: "getallNotice" },
            headers: { 'Content-Type': 'multipart/form-data' },
        })
            .then(res => {
                console.log(res.data);
                if (res.data.Result) {
                    setnoticedata(res.data.Result);
                } else {
                    setnoticedata([]);
                }
            })
            .catch(err => {
                console.log(err);
                setnoticedata([]);
            });
    }, []);

    const headleDelete = async (id) => {
        console.log(id)
        const formData = new FormData();
        formData.append("action", "deletenotice");
        formData.append("Imgeid", id);

        try {
            const res = await axios.post(import.meta.env.VITE_APP_API + '/notice.php', formData, {
                headers: { 'Content-Type': 'multipart/form-data' },
            });

            if (res.data.Status === "Success") {
                alert("Image Deleted Successfully");
                window.location.reload();
            } else {
                alert(res.data.error || "An error occurred");
            }
        } catch (error) {
            console.error("Delete request failed:", error);
            alert("Failed to delete image");
        }
    }


    return (
        <div className='mt-4'>
            <div className="flex">
                <div className="">
                    <div className="inline-block p-2 bg-[#560606] rounded">
                        <BsMegaphoneFill className='h-6 w-auto fill-white' />
                    </div>
                </div>
                <div className="pl-4">
                    <h1 className="text-[#560606] text-xl pt-1 font-semibold uppercase">Notice Management</h1>
                </div>
            </div>

            <div className="mt-4">
                <a href="/Dashboard/CreateNotice">
                    <button className='bg-gradient-to-r from-[#ff7e60] to-[#ffc27c] px-8 py-2 text-white rounded duration-500'>
                        Create New Notice
                    </button>
                </a>
            </div>


            <table className='w-full bg-white mt-4'>
                <thead>
                    <tr className='h-12 w-full text-gray-500 border-b border-gray-200'>
                        <th>#</th>
                        <th>Title</th>
                        <th>Date</th>
                        <th></th>
                    </tr>
                </thead>
                <tbody>
                    {
                        Array.isArray(noticedata) && noticedata.length > 0 ? (
                            noticedata.map((notice, index) => (
                                <tr key={index} className='w-full h-16 text-center'>
                                    <td>{index + 1}</td>
                                    <td>{notice.notice_title}</td>
                                    <td>{notice.notice_date}</td>
                                    <td>
                                        <button onClick={() => headleDelete(notice.notice_id)} className='text-red-500 font-semibold mr-2'>Delete</button>
                                        <a href={`/Dashboard/ViewNotice/${notice.notice_id}`}><button className='text-[#560606] font-semibold'>Edit</button></a>
                                    </td>
                                </tr>
                            ))
                        ) : (
                            <tr>
                                <td colSpan="4" className="text-center">No news available</td>
                            </tr>
                        )
                    }
                </tbody>
            </table>
        </div>

    )
}

export default NoticesManage