import React , {useState, useEffect} from "react";
import Sidebar from "./Sidebar";
import Navbar from "./Navbar";
import Footer from "./Footer";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import About from "./IndstructorPages/About";
import ReportAPorblem from "./IndstructorPages/ReportAPorblem";
import AddNewItem from "./IndstructorPages/AddNewItem";
import HistoryOfRequests from "./IndstructorPages/HistoryOfRequests";
import InstructorHome from "./IndstructorPages/InstructorHome";
import ViewActiveRequest from "./IndstructorPages/ViewActiveRequest";
import InstructorViewAllItems from "./IndstructorPages/InstructorViewAllItems";
// import { useState } from "react";

export default function InstructorUI() {

  const [items, setItems] = useState([]);

  

  const [isMobile, setIsMobile] = useState(window.innerWidth < 912); 
  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 912);

    window.addEventListener('resize', handleResize);

    return () => window.removeEventListener('resize', handleResize);
  }, [window.innerWidth]);
  return (
    <BrowserRouter>
      <div className="row ">
        <div className={`col-2 p-0 sticky-top ${isMobile ? 'd-none' : 'd-block'}`}>
          <div className="sticky-top">
          <Sidebar />
          </div>
        </div>
        <div className={`${isMobile ? "col": "col-10"} p-0`}>
          <div class="row">
            <div class="col sticky-top p-0">
              <Navbar isMobile={isMobile} />
            </div>
            <div class="row">
              <Routes>
                <Route path="/about" element={<About />} />
                <Route path="/new-item" element={<AddNewItem setItems={setItems} items={items}/>} />
                <Route path="/history" element={<HistoryOfRequests />} />
                <Route path="/" element={<InstructorHome />} />
                <Route path="/report" element={<ReportAPorblem />} />
                <Route path="/requests" element={<ViewActiveRequest />} />
                <Route path="/all-items" element={<InstructorViewAllItems setItems={setItems} items={items} />} />
                {/* <Route path="/report" element={<ReportAPorblem/>} /> */}
              </Routes>
            </div>
            <div class="row mt-5">
              <Footer />
            </div>
          </div>
        </div>
      </div>
    </BrowserRouter>
  );
}
