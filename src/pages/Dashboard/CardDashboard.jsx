import React from 'react'
import { BsCalendar3EventFill , BsMegaphoneFill, BsNewspaper, BsJournalBookmarkFill  } from "react-icons/bs";

const CardDashboard = () => {
    const admindata = [
        {
            id: 1,
            name: 'Events',
            icon: BsCalendar3EventFill,
            value: 500,
            bgstyle: 'bg-gradient-to-r from-[#59bdff] to-[#59d1ff]'
        },

        {
            id: 2,
            name: 'NEWS',
            icon: BsNewspaper,
            value: 500,
            bgstyle: 'bg-gradient-to-r from-[#4cdd94] to-[#55f397]'
        },

        {
            id: 3,
            name: 'Research',
            icon: BsJournalBookmarkFill,
            value: 500,
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
    <div>CardDashboard</div>
  )
}

export default CardDashboard