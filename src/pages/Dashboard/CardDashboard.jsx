import axios from 'axios';
import React, { useEffect, useState } from 'react'
import CountUp from 'react-countup';
import { BsCalendar3EventFill , BsMegaphoneFill, BsNewspaper, BsJournalBookmarkFill  } from "react-icons/bs";


const CardDashboard = () => {
    // count Envets
    const [eventdata, setdataevet] = useState([]);

    const eventCount = eventdata.length;
    useEffect(() => {
        axios.get(import.meta.env.VITE_APP_API + '/event.php', {
            params: { action: "getallEvents" },  
            headers: { 'Content-Type': 'multipart/form-data' },
        })
        .then(res => {
            console.log(res.data);
            if (res.data.Result) {
                setdataevet(res.data.Result);
            } else {
                setdataevet([]);  
            }
        })
        .catch(err => {
            console.log(err);
            setdataevet([]); 
        });
    }, []);


    // count NEWS

    const [newsdata, setnewsdata] = useState([]);

    const newscount = newsdata.length;
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


    // count Reseach data

    const [resdata, setresdata] = useState([]);

    const rescount = resdata.length;
    useEffect(() => {
        axios.get(import.meta.env.VITE_APP_API + '/research.php', {
            params: { action: "getResearch" },  
            headers: { 'Content-Type': 'multipart/form-data' },
        })
        .then(res => {
            console.log(res.data);
            if (res.data.Result) {
                setresdata(res.data.Result);
            } else {
                setresdata([]);  
            }
        })
        .catch(err => {
            console.log(err);
            setresdata([]); 
        });
    }, []);



    const admindata = [
        {
            id: 1,
            name: 'Events',
            icon: BsCalendar3EventFill,
            value: eventCount,
            bgstyle: 'bg-gradient-to-r from-[#59bdff] to-[#59d1ff]'
        },

        {
            id: 2,
            name: 'NEWS',
            icon: BsNewspaper,
            value: newscount,
            bgstyle: 'bg-gradient-to-r from-[#4cdd94] to-[#55f397]'
        },

        {
            id: 3,
            name: 'Research',
            icon: BsJournalBookmarkFill,
            value: rescount,
            bgstyle: 'bg-gradient-to-r from-[#fdbf6a] to-[#fedb7f]'
        },

        {
            id: 4,
            name: 'Notices',
            icon: BsMegaphoneFill,
            value: 500,
            bgstyle: 'bg-gradient-to-r from-[#ff7e60] to-[#ffc27c]'
        },

    ]
  return (
    <div>
        <div className="mt-4">
            <div className="grid xl:grid-cols-4 md:grid-cols-2 gap-6">
                {
                    admindata.map((data, index) => {
                        return (
                            <div className={`${data.bgstyle} text-white rounded-md shadow-xl py-8 px-4`} key={index}>
                                <div className="flex justify-between">
                                    <div className="">
                                        <h1 className="text-2xl font-semibold">                                            
                                            <CountUp end={data.value} duration={5}/> + 
                                        </h1>
                                        <h1 className="font-semibold">{data.name}</h1>
                                    </div>

                                    <div className="">
                                        <data.icon className='h-12 w-auto'/>
                                    </div>
                                </div>

                            </div>
                        )
                    })
                }
            </div>
        </div>
    </div>
  )
}

export default CardDashboard