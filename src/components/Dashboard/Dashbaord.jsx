import React, { useEffect, useState } from 'react'
import { Outlet, useNavigate } from 'react-router-dom'
import secureLocalStorage from 'react-secure-storage'
import DashSide from './DashSide'
import DashNav from './DashNav'
import DashFooter from './DashFooter'
import { FaArrowCircleRight, FaChevronCircleLeft  } from "react-icons/fa";
import { TiThMenu } from "react-icons/ti";
import { MdOutlineClose } from "react-icons/md";


const Dashbaord = () => {
    const navigate = useNavigate()
    const EmailUser = secureLocalStorage.getItem('email')

    const [openside, setopenside] = useState(false);

    const headlemenuopen = () => {
        setopenside(!openside)
    }


    if(EmailUser !== ""){
        return (
            <div className='w-full bg-[#e0e1df]/50 min-h-screen'>
                <div className="xl:flex">
                    <div
                        className={`shadow-[5px_0_15px_-5px_rgba(0,0,0,0.1)] p-4 xl:block fixed top-0 left-0 h-full bg-white shadow-custom z-50 xl:w-[19%] w-[75%] overflow-y-auto transform duration-500 ${
                            openside ? " translate-x-0" : "-translate-x-full xl:translate-x-0"
                        }`}
                        >
                        <DashSide />
                    </div>
                    <button
                        className="xl:hidden fixed top-6 right-2 z-50 bg-white p-3 rounded font-semibold"
                        onClick={headlemenuopen}
                        >
                        {openside ? (
                            <MdOutlineClose className="fill-[#a4805a] h-8 w-auto" />
                        ) : (
                            <TiThMenu className="fill-[#a4805a] h-8 w-auto" />
                        )}
                    </button>
                
                    <div className="xl:ml-[20%] w-full">
                        <div className="xl:-ml-6">
                            <DashNav />
                        </div>
                        <div className="xl:ml-0 ml-4">
                            <Outlet />
                        </div>
                        <div className="xl:ml-0 ml-4">
                            <DashFooter />
                        </div>
                    </div>
                </div>
            </div>
        )
    }
    else{
        useEffect(() => {
            localStorage.clear()
            navigate('/')
        }, [])
    }
}

export default Dashbaord