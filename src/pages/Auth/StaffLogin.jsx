import React, { useState } from 'react'
import DefultInput from '../../components/Forms/DefultInput'
import Defaultbtn from '../../components/Button/Defaultbtn'
import axios from 'axios'
import secureLocalStorage  from 'react-secure-storage'
import { useNavigate } from 'react-router-dom'

const StaffLogin = () => {
    const navigate = useNavigate()
    const [logindata, setlogindata] = useState({
        action: 'login',
        email: '',
        password: '',
    })

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setlogindata((prevData) => ({
          ...prevData,
          [name]: value
        }));
    };

    const headleSubmit = async (e) => {
        e.preventDefault()

        try {
            const res = await axios.post(`${import.meta.env.VITE_APP_API}/auth.php`, logindata);

            if (res.data.status === "Success") {
                alert(res.data.message);
                localStorage.setItem("login", res.data.token);
                secureLocalStorage.setItem("email", res.data.email);
                secureLocalStorage.setItem("role", res.data.role);
                secureLocalStorage.setItem("username", res.data.username);
                localStorage.setItem("dashmenuID", 1);
                navigate('/Dashboard/home');
                window.location.reload();
                
            } else {
                alert(res.data.error || "Invalid credentials");
                console.log("Response:", res.data);
            }
        } catch (err) {
            alert(err.response?.data?.error || "Something went wrong");
            console.error(err);
        }
    }
    
  return (
    <div className='mt-40 md:mx-28 mx-4'>
        <div className="">
            <h1 className="text-2xl font-semibold text-[#560606]">Staff Login</h1>
        </div>

        <div className="xl:w-1/2">
            <form onSubmit={headleSubmit} method="post">
                <div className="my-2">
                    <h1 className="">Email</h1>
                    <DefultInput
                        type={'email'} 
                        required={true}
                        placeholder={"Email Address"}
                        name={'email'}
                        value={logindata.email}
                        onChange={handleInputChange}
                    />
                </div>

                <div className="my-2">
                    <h1 className="">Password</h1>
                    <DefultInput
                        type={'password'} 
                        required={true}
                        placeholder={"Password"}
                        name={"password"}
                        value={logindata.password}
                        onChange={handleInputChange}
                    />
                </div>

                <div className="">
                    <Defaultbtn 
                        type={'submit'}
                        btnvalue={"Login as Staff Memeber"}
                    />
                </div>
            </form>
        </div>
    </div>
  )
}

export default StaffLogin