import React, { useState } from 'react'

const UpdateEvent = () => {
    const [updateeventdata, setupdateeventdata] = useState({
        action: 'updateEvent',
        eventName: '',
        eventImg: null,
        eventDesc: '',
        eventLink: '',
        eventDate: '',
    })

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setupdateeventdata((prevData) => ({
            ...prevData,
            [name]: value,
        }));
    };

    const handleImageChange = (e) => {
        const file = e.target.files[0];
        setupdateeventdata((prevData) => ({
            ...prevData,
            eventImg: file,
        }));
    };



  return (
    <div>UpdateEvent</div>
  )
}

export default UpdateEvent