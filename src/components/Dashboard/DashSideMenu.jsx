import { BiSolidDashboard } from "react-icons/bi";
import { BsGearFill } from "react-icons/bs";
import { MdOutlineDryCleaning  } from "react-icons/md";
import { FaBed, FaPeopleGroup, FaUsers   } from "react-icons/fa6";
import { BsCalendar2CheckFill } from "react-icons/bs";
import { RiSecurePaymentLine } from "react-icons/ri";
import { TbReportAnalytics } from "react-icons/tb";



const sidemenu = [
    {
        id: 1,
        name: "Dashboard",
        icon: BiSolidDashboard,
        link: '/Dashboard/Home'
    },
    {
        id: 2,
        name: "Room Management",
        icon: FaBed,
        link: '/Dashboard/Rooms'
    },
    {
        id: 3,
        name: "Booking Management",
        icon: BsCalendar2CheckFill,
        link: '#'
    },
    {
        id: 4,
        name: "Guest Management",
        icon: FaPeopleGroup,
        link: '#'
    },
    {
        id: 5,
        name: "Staff Management",
        icon: FaUsers,
        link: '#'
    },
    {
        id: 6,
        name: "Housekeeping",
        icon: MdOutlineDryCleaning,
        link: '#'
    },
    {
        id: 7,
        name: "Payments & Transactions",
        icon: RiSecurePaymentLine,
        link: '#'
    },
    {
        id: 8,
        name: "Reports & Analytics",
        icon: TbReportAnalytics,
        link: '#'
    },
    {
        id: 9,
        name: "Settings",
        icon: BsGearFill,
        link: '#'
    },
]

export {sidemenu}