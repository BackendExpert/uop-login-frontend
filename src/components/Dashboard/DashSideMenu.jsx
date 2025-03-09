import { BsCalendar3EventFill , BsMegaphoneFill, BsNewspaper, BsJournalBookmarkFill, BsFillGrid1X2Fill  } from "react-icons/bs";

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
]

export {sidemenu}