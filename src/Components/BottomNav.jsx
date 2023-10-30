//import React, { PropTypes } from "react";
import { HiOutlineHome as Home } from "react-icons/hi";
import { AiOutlinePieChart as Budget } from "react-icons/ai";
import { HiOutlineChartBar as Chat } from "react-icons/hi";
import { Link } from "react-router-dom";

const BottomNavBar = ({ className }) => {
  return (
    
    <footer className="bg-white p-4 fixed h-16 bottom-0 w-full border-t-2 border-gray-100">
      <nav className="flex justify-between  mx-auto lg:w-3/5">
        <Home size={35} />
        <Link to="/budget" className="flex items-center gap-2">
          <Budget size={35} />
        </Link>
        <Chat size={30} />
      </nav>
    </footer>
  );
};

export default BottomNavBar;
