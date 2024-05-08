import React from "react";
import { NavLink } from 'react-router-dom';
import { useNavigate } from "react-router-dom";
import { FaCartArrowDown } from "react-icons/fa6";
import { MdDensitySmall } from "react-icons/md";
import { HiBellAlert } from "react-icons/hi2";
import { IoAddCircleSharp } from "react-icons/io5";
import { FaHistory } from "react-icons/fa";
import { MdReport } from "react-icons/md";
import { BsFillQuestionCircleFill } from "react-icons/bs";

export default function Sidebar() {
  const navigate = useNavigate();
  return (
    <div className=" border border-right-3">
      <div className=" text-center mb-3">
        <h4>UniCart</h4>
        <h4>Instructor</h4>
        {/* <img src="" /> */}
      </div>

      <div className="d-grid gap-2 ">
        <NavLink
          className="btn btn-light text-bg-light p-3 text-start"
          to="/"
        >
          <FaCartArrowDown /> HOME
        </NavLink>
        <NavLink
          className="btn btn-light text-bg-light p-3 text-start"
          to="/all-items"
        >
          <MdDensitySmall /> View All Items
        </NavLink>
        <NavLink
          className="btn btn-light text-bg-light p-3 text-start"
          to="/requests"
        >
          <HiBellAlert /> View Active Requests
        </NavLink>
        <NavLink
          className="btn btn-light text-bg-light p-3 text-start"
          to="/new-item"
        >
          <IoAddCircleSharp /> Add An Item
        </NavLink>
        <NavLink
          className="btn btn-light text-bg-light p-3 text-start"
          to="/history"
        >
          <FaHistory /> History Of Requests
        </NavLink>
        <NavLink
          className="btn btn-light text-bg-light p-3 text-start"
          to="/report"
        >
          <MdReport /> Report A Problem
        </NavLink>
        <NavLink
          className="btn btn-light text-bg-light p-3 text-start"
          to="/about"
        >
          <BsFillQuestionCircleFill /> About
        </NavLink>
      </div>
    </div>
  );
}
