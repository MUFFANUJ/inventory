import React from "react";
import { useNavigate } from "react-router-dom";
import { FaCartArrowDown } from "react-icons/fa6";
import { MdDensitySmall } from "react-icons/md";
import { HiBellAlert } from "react-icons/hi2";
import { IoAddCircleSharp } from "react-icons/io5";
import { FaHistory } from "react-icons/fa";
import { MdReport } from "react-icons/md";
import { BsFillQuestionCircleFill } from "react-icons/bs";

export default function Navbar({ isMobile }) {
  const navigate = useNavigate();
  return (
    <div>
      <nav class="navbar navbar-expand-lg bg-body-tertiary">
        <div class="container-fluid">
          <a class="navbar-brand" href="#">
            UniCart
          </a>
          <button
            class={`navbar-toggler ${isMobile ? 'd-block' : 'd-none'}`}
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNavAltMarkup"
            aria-controls="navbarNavAltMarkup"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse"id="navbarNavAltMarkup">
            <div class={`navbar-nav ${isMobile ? 'd-block' : 'd-none'} `}>
              <button class="nav-link text-center"  onClick={()=> navigate("/")}>
              <FaCartArrowDown /> Home
              </button>
              <button class="nav-link" onClick={()=> navigate("/all-items")}>
              <MdDensitySmall /> View All Items
              </button>
              <button class="nav-link" onClick={()=> navigate("/requests")}>
              <HiBellAlert /> View Active Requests
              </button>
              <button class="nav-link " onClick={()=> navigate("/new-item")}>
              <IoAddCircleSharp /> Add An Item
              </button>
              <button class="nav-link " onClick={()=> navigate("/history")}>
              <FaHistory /> History Of Requests
              </button>
              <button class="nav-link " onClick={()=> navigate("/report")}>
              <MdReport /> Report A Problem
              </button>
              <button class="nav-link " onClick={()=> navigate("/about")}>
              <BsFillQuestionCircleFill /> About
              </button>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
}
