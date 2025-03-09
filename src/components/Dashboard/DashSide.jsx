import React, { useEffect, useState } from "react";
import secureLocalStorage from "react-secure-storage";
import { sidemenu } from "./DashSideMenu";
import { Link } from "react-router-dom";
import uoplogo from '../../assets/uoplogo.png'
import axios from "axios";
import { FaHotel } from "react-icons/fa6";


const DashSide = () => {
  const EmailUser = secureLocalStorage.getItem("email");

  const currentID = localStorage.getItem("dashmenuID") || "";

  const currentMenu = (id) => {
    localStorage.setItem("dashmenuID", id);
  };

  const loginToken = localStorage.getItem('login')

  const [getuserdata, setgetuserdata] = useState([])

//   useEffect(() => {
//       axios.get(import.meta.env.VITE_APP_API + '/user/getuserdata/' + EmailUser, {
//           headers: {
//               'Authorization': `Bearer ${loginToken}`,
//           }
//       })
//       .then(res => setgetuserdata(res.data.Result))
//       .catch(err => console.log(err))
//   }, [])

  return (
    <div className="w-full">
      <div className="flex ml-4">
        <div className="pt-3 pr-2">
          <img src={uoplogo} alt="" />
        </div>
      </div>

      <div className="flex px-4">
        <div className="my-4">
            {/* <img 
                src={getuserdata?.image ? `${import.meta.env.VITE_APP_API}/${getuserdata.image}` : userImg} 
                alt="User Image" 
                className="mt-0 rounded-full h-10 object-cover w-auto" 
            /> */}
        </div>
        <div className="mt-4 pl-4">
          <h1 className="text-sm uppercase font-semibold text-[#560606]">
            admin
          </h1>
        </div>
      </div>

      <div className="mt-4">
        {sidemenu.map((menu, index) => {
          const isActive = currentID === String(menu.id); // Ensure comparison works
            return(
                <Link to={menu.link} key={menu.id}>
                    <div
                        onClick={() => currentMenu(menu.id)}
                        className={`py-4 pl-4 cursor-pointer duration-500 flex items-center ${
                        isActive
                            ? "text-[#560606] font-semibold"
                            : "text-gray-400 hover:pl-6 hover:text-[#560606]"
                        }`}
                    >
                        <menu.icon className="h-8 w-auto" />
                        <h1 className="pt-1 pl-4">{menu.name}</h1>
                    </div>
                </Link>
            )
        })}
      </div>
    </div>
  );
};

export default DashSide;