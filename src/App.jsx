import { BrowserRouter, Route, Router, Routes } from "react-router-dom";
import { useEffect, useState } from "react";
import Footer from "./components/Footer/Footer";
import 'aos/dist/aos.css';
import ErrorPage from "./components/ErrorPage/ErrorPage";
import StaffLogin from "./pages/Auth/StaffLogin";
import Nav from "./components/Nav/Nav";
import Dashbaord from "./components/Dashboard/Dashbaord";
import DashHome from "./pages/Dashboard/DashHome";
import PrivateRoute from "./components/auth/PrivateRoute";
import EventsManage from "./pages/Events/EventsManage";
import CreateNewEvent from "./pages/Events/CreateNewEvent";
import ViewEvent from "./pages/Events/ViewEvent";
import NoticesManage from "./pages/Notices/NoticesManage";
import CreateNewNotice from "./pages/Notices/CreateNewNotice";
import NEWSManage from "./pages/NEWS/NEWSManage";
import ResearchManage from "./pages/Research/ResearchManage";
import CreateNewNEWS from "./pages/NEWS/CreateNewNEWS";
import CreateNewResearch from "./pages/Research/CreateNewResearch";
import ViewNEWS from "./pages/NEWS/ViewNEWS";
import ViewResearch from "./pages/Research/ViewResearch";
import ViewNotice from "./pages/Notices/ViewNotice";
import HSliderImg from "./pages/HomeSliderImg/HSliderImg";
import AddImage from "./pages/HomeSliderImg/AddImage";
import ProgramSlider from "./pages/ProgramSlider/ProgramSlider";
import AddPSilderImge from "./pages/ProgramSlider/AddPSilderImge";
import UpdateHImge from "./pages/HomeSliderImg/UpdateHImge";
import UpdatePSlider from "./pages/ProgramSlider/UpdatePSlider";

export default function App() {
  const [showNavBar, setShowNavBar] = useState(true);
  const [isTopOfPage, setIsTopOfPage] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  const handleScroll = () => {
    const currentScrollY = window.scrollY;

    if (currentScrollY > lastScrollY && currentScrollY > 50) {

      setShowNavBar(false);
    } else {

      setShowNavBar(true);
    }
    setIsTopOfPage(currentScrollY === 0);
    setLastScrollY(currentScrollY);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);


    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [lastScrollY]);

  const shouldShowNavBar = !location.pathname.startsWith("/Dashboard");
  const shouldShowFooter = !location.pathname.startsWith("/Dashboard");

  return (
      <BrowserRouter>
        {shouldShowNavBar && (
          <div
          className={`fixed top-0 w-full z-50 transition-transform duration-300 ${
            showNavBar ? "translate-y-0" : "-translate-y-full"
          } ${
            isTopOfPage
              ? "xl:mt-0"
              : "shadow-md transition-colors duration-500"
          }`}
          >
            <Nav />
          </div>
        )}
        <Routes>
          <Route path="*" element={<ErrorPage /> } />
          <Route path="/" element={<StaffLogin /> } />
          
          <Route path="/Dashboard/" element={<PrivateRoute element={<Dashbaord />}  /> } >
            <Route path="Home" element={<DashHome /> } />
            <Route path="Events" element={<EventsManage /> } />
            <Route path="CreateEvent" element={<CreateNewEvent /> } /> 
            <Route path="ViewEvent/:id" element={<ViewEvent /> } />
            <Route path="Notice" element={<NoticesManage /> } />
            <Route path="CreateNotice" element={<CreateNewNotice /> } />
            <Route path="ViewNotice/:id" element={<ViewNotice /> } />
            <Route path="NEWS" element={<NEWSManage /> } />
            <Route path="CreateNEWS" element={<CreateNewNEWS /> } />
            <Route path="ViewNEWS/:id" element={<ViewNEWS /> } />
            <Route path="Research" element={<ResearchManage /> } />
            <Route path="ViewResearch/:id" element={<ViewResearch /> } />
            <Route path="CreateResearch" element={<CreateNewResearch /> } />
            <Route path="HSliderImg" element={<HSliderImg /> } />
            <Route path="UpdateHImage/:id" element={<UpdateHImge /> } />
            <Route path="AddImage" element={<AddImage /> } />
            <Route path="ProgramSlider" element={<ProgramSlider /> } />
            <Route path="AddPSilderImge" element={<AddPSilderImge /> } />
            <Route path="UpdatePSlider/:id" element={<UpdatePSlider /> } />
          </Route>
         </Routes>
        {shouldShowFooter && <Footer />}
      </BrowserRouter>
  )
}