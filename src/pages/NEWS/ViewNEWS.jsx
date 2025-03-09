import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { FaEdit } from "react-icons/fa";
import axios from 'axios';
import UpdateNEWS from './UpdateNEWS';


const ViewNEWS = () => {
    const {id} = useParams()
    const [datanews, setdatanews] = useState([])

    useEffect(() => {
        axios.get(import.meta.env.VITE_APP_API + '/news.php', {
            params: { action: "getallNEWS" },  
            headers: { 'Content-Type': 'multipart/form-data' },
        })
        .then(res => {
            if (res.data.Result) {
                const filteredEvent = res.data.Result.filter(news => news.id === id);
                if (filteredEvent.length > 0) {
                    setdatanews(filteredEvent[0]); 
                } else {
                    setdatanews([]); 
                }
            } else {
                setdatanews([]);  
            }
        })
        .catch(err => {
            console.log(err);
            setdataevet([]); 
        });
    }, []);

  return (
    <div className="mt-4">
        <div className="flex">
            <div className="">
                <div className="inline-block p-2 bg-[#560606] rounded">
                    <FaEdit className="h-6 w-auto fill-white" />
                </div>
            </div>
            <div className="pl-4">
                <h1 className="text-[#560606] text-xl pt-1 font-semibold uppercase">Update NEWS</h1>
            </div>
        </div>

        <div className="mt-4">
            <a href="/Dashboard/NEWS">
                <button className="bg-gradient-to-r from-[#ff7e60] to-[#ffc27c] px-8 py-2 text-white rounded duration-500">
                    Back
                </button>
            </a>


            <div className="bg-white p-8 rounded shadow-md mt-8">
                <table className='w-full'>
                    <tr className='h-12 border-b border-gray-200'>
                        <td className='font-semibold w-1/4 text-gray-500'>NEWS Name</td>
                        <td>{datanews.news_title}</td>
                    </tr>
                    <tr className='h-12 border-b border-gray-200'>
                        <td className='font-semibold w-1/4 text-gray-500'>NEWS Description</td>
                        <td>{datanews.news_desc}</td>
                    </tr>
                    <tr className='h-12 border-b border-gray-200'>
                        <td className='font-semibold w-1/4 text-gray-500'>NEWS Link</td>
                        <td>{datanews.news_link} | <a href={datanews.news_link} className='text-blue-500 font-semibold' target='_blank'>click to go</a></td>
                    </tr>
                    <tr className='h-12 border-b border-gray-200'>
                        <td className='font-semibold w-1/4 text-gray-500'>NEWS Date</td>
                        <td>{datanews.news_date}</td>
                    </tr>
                </table>

                <p className="">NEWS Image</p>
                <div className="">
                    {/* {eventdata.event_img} */}
                    <img src={`${import.meta.env.VITE_APP_API}/${datanews.news_img}`} alt="" className='h-40 w-auto mt-2'/>
                </div>
            </div>


            <div className="p-8">
                <UpdateNEWS NEWSid={id}/>
            </div>

        </div>        
    </div>
  )
}

export default ViewNEWS