import React from 'react'
import DefultInput from '../../components/Forms/DefultInput'

const StaffLogin = () => {
  return (
    <div className='mt-40 mx-28'>
        <div className="">
            <h1 className="text-2xl font-semibold text-[#560606]">Staff Login</h1>
        </div>

        <div className="w-1/2">
            <form method="post">
                <div className="my-2">
                    <h1 className="">Email</h1>
                    <DefultInput
                        type={'email'} 
                        required={true}
                        placeholder={"Email Address"}
                    />
                </div>

                <div className="my-2">
                    <h1 className="">Password</h1>
                    <DefultInput
                        type={'password'} 
                        required={true}
                        placeholder={"Password"}
                    />
                </div>
            </form>
        </div>
    </div>
  )
}

export default StaffLogin