import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { BsCalendar3EventFill, BsNewspaper } from "react-icons/bs";

const NEWSManage = () => {
    const [newsdata, setnewsdata] = useState([])

    useEffect(() => {
        axios.get(import.meta.env.VITE_APP_API + '/news.php', {
            params: { action: "getallNEWS" },
            headers: { 'Content-Type': 'multipart/form-data' },
        })
            .then(res => {
                console.log(res.data);
                if (res.data.Result) {
                    setnewsdata(res.data.Result);
                } else {
                    setnewsdata([]);
                }
            })
            .catch(err => {
                console.log(err);
                setnewsdata([]);
            });
    }, []);

    const headleDelete = async (id) => {
        console.log(id)
        const formData = new FormData();
        formData.append("action", "deletenews");
        formData.append("Imgeid", id);

        try {
            const res = await axios.post(import.meta.env.VITE_APP_API + '/news.php', formData, {
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
                        <BsNewspaper className='h-6 w-auto fill-white' />
                    </div>
                </div>
                <div className="pl-4">
                    <h1 className="text-[#560606] text-xl pt-1 font-semibold uppercase">NEWS Management</h1>
                </div>
            </div>

            <div className="mt-4">
                <a href="/Dashboard/CreateNEWS">
                    <button className='bg-gradient-to-r from-[#ff7e60] to-[#ffc27c] px-8 py-2 text-white rounded duration-500'>
                        Create New NEWS
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
                        Array.isArray(newsdata) && newsdata.length > 0 ? (
                            newsdata.map((news, index) => (
                                <tr key={index} className='w-full h-16 text-center'>
                                    <td>{index + 1}</td>
                                    <td>{news.news_title}</td>
                                    <td>{news.news_date}</td>
                                    <td>
                                        <button className='mr-2 text-red-500 font-semibold' onClick={() => headleDelete(news.id)}>Delete</button>
                                        <a href={`/Dashboard/ViewNEWS/${news.id}`}><button className='text-[#560606] font-semibold'>Edit</button></a>
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

export default NEWSManage