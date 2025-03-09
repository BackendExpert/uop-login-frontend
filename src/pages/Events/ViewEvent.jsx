import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { FaEdit } from "react-icons/fa";
import axios from 'axios';
import UpdateEvent from './UpdateEvent';


const ViewEvent = () => {
    const {id} = useParams()
    const [eventdata, setdataevet] = useState([])

    useEffect(() => {
        axios.get(import.meta.env.VITE_APP_API + '/event.php', {
            params: { action: "getallEvents" },  
            headers: { 'Content-Type': 'multipart/form-data' },
        })
        .then(res => {
            if (res.data.Result) {
                const filteredEvent = res.data.Result.filter(event => event.event_id === id);
                if (filteredEvent.length > 0) {
                    setdataevet(filteredEvent[0]); 
                } else {
                    setdataevet([]); 
                }
            } else {
                setdataevet([]);  
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
                <h1 className="text-[#560606] text-xl pt-1 font-semibold uppercase">Update Event</h1>
            </div>
        </div>

        <div className="mt-4">
            <a href="/Dashboard/Events">
                <button className="bg-gradient-to-r from-[#ff7e60] to-[#ffc27c] px-8 py-2 text-white rounded duration-500">
                    Back
                </button>
            </a>


            <div className="bg-white p-8 rounded shadow-md mt-8">
                <table className='w-full'>
                    <tr className='h-12 border-b border-gray-200'>
                        <td className='font-semibold w-1/4 text-gray-500'>Event Name</td>
                        <td>{eventdata.event_title}</td>
                    </tr>
                    <tr className='h-12 border-b border-gray-200'>
                        <td className='font-semibold w-1/4 text-gray-500'>Event Description</td>
                        <td>{eventdata.envet_desc}</td>
                    </tr>
                    <tr className='h-12 border-b border-gray-200'>
                        <td className='font-semibold w-1/4 text-gray-500'>Event Link</td>
                        <td>{eventdata.event_link} | <a href={eventdata.event_link} className='text-blue-500 font-semibold' target='_blank'>click to go</a></td>
                    </tr>
                    <tr className='h-12 border-b border-gray-200'>
                        <td className='font-semibold w-1/4 text-gray-500'>Event Date</td>
                        <td>{eventdata.event_date}</td>
                    </tr>
                </table>

                <p className="">Event Image</p>
                <div className="">
                    {/* {eventdata.event_img} */}
                    <img src={`${import.meta.env.VITE_APP_API}/${eventdata.event_img}`} alt="" className='h-40 w-auto mt-2'/>
                </div>
            </div>


            <div className="p-8">
                <UpdateEvent eventID={id}/>
            </div>

        </div>        
    </div>
  )
}

export default ViewEvent