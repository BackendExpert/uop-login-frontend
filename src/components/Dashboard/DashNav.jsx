import React, { useEffect } from 'react'
import { useState } from 'react'
import secureLocalStorage from 'react-secure-storage'
import { FaChevronDown, FaChevronUp, FaPowerOff } from "react-icons/fa";
import axios from 'axios';
import userImg from '../../assets/user.png'

const DashNav = () => {
    const Username = secureLocalStorage.getItem('loginU')
    const EmailUser = secureLocalStorage.getItem('email')

    const [menu, setmenu] = useState(false)
    
    const toggleMenu = () => {
        setmenu(!menu)
    }

    const healdeLogout = () => {
        localStorage.clear()
        window.location.reload()
    }

    const loginToken = localStorage.getItem('login')

    const [getuserdata, setgetuserdata] = useState([])
  
    // useEffect(() => {
    //     axios.get(import.meta.env.VITE_APP_API + '/user/getuserdata/' + EmailUser, {
    //         headers: {
    //             'Authorization': `Bearer ${loginToken}`,
    //         }
    //     })
    //     .then(res => setgetuserdata(res.data.Result))
    //     .catch(err => console.log(err))
    // }, [])

  return (
    <div className='bg-white py-8 shadow-md'>
        <div className="flex justify-between mr-4 pl-8">
            <div className="w-full">
                <h1 className="uppercase font-semibold text-[#560606] mt-1">Dashboard</h1>
            </div>
            <div className="">
                <div className="flex xl:mr-4 md:mr-20 mr-20 cursor-pointer" onClick={toggleMenu}>
                    {/* <img 
                        src={getuserdata?.image ? `${import.meta.env.VITE_APP_API}/${getuserdata.image}` : userImg} 
                        alt="User Image" 
                        className="h-8 w-auto rounded-full" 
                    /> */}
                    <div className="flex pl-4 pt-1 uppercase text-[#560606]">
                        {Username}

                        <div className="pl-1 pt-1">
                            {
                                menu ? 
                                    <FaChevronUp className='h-4 w-auto'/>
                                :
                                    <FaChevronDown className='h-4 w-auto'/>
                            }
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <div className={`absolute bg-white right-4 top-24 py-4 px-8 mt-1 rounded shadow-xl 
                        transition-all duration-300 transform 
                        ${menu ? 'opacity-100 scale-100 pointer-events-auto' : 'opacity-0 scale-95 pointer-events-none'}`}>
            <div onClick={healdeLogout} className="cursor-pointer flex"><FaPowerOff className='h-6 w-auto fill-[#560606]'/> <p className='pl-2 uppercase text-[#560606]'>Logout</p></div>
        </div>

    </div>
  )
}

export default DashNav