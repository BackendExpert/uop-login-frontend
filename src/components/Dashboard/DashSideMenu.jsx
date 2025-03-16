import { BsCalendar3EventFill , BsMegaphoneFill, BsNewspaper, BsJournalBookmarkFill, BsFillGrid1X2Fill  } from "react-icons/bs";
import { FaImages } from "react-icons/fa6";
import { MdEventNote } from "react-icons/md";

const sidemenu = [
    {
        id: 1,
        name: "Dashboard",
        icon: BsFillGrid1X2Fill,
        link: '/Dashboard/Home'
    },
    {
        id: 2,
        name: "Event Management",
        icon: BsCalendar3EventFill,
        link: '/Dashboard/Events'
    },
    {
        id: 3,
        name: "Notice Management",
        icon: BsMegaphoneFill,
        link: '/Dashboard/Notice'
    },
    {
        id: 4,
        name: "NEWS Management",
        icon: BsNewspaper,
        link: '/Dashboard/NEWS'
    },
    {
        id: 5,
        name: "Research Management",
        icon: BsJournalBookmarkFill,
        link: '/Dashboard/Research'
    },
    {
        id: 6,
        name: "Home Image Management",
        icon: FaImages,
        link: '/Dashboard/Research'
    },
    {
        id: 7,
        name: "Latest Programme Management",
        icon: MdEventNote,
        link: '/Dashboard/Research'
    },
]

export {sidemenu}