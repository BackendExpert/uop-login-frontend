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
          </Route>
        </Routes>
        {shouldShowFooter && <Footer />}
      </BrowserRouter>
  )
}