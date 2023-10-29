//import React, { PropTypes } from "react";
import { HiOutlineHome as Home } from "react-icons/hi";
import { AiOutlinePieChart as Budget } from "react-icons/ai";
import { HiOutlineChartBar as Chat } from "react-icons/hi";
import { Link } from "react-router-dom";

const BottomNavBar = ({ className }) => {
  return (
    <nav className="h-[10%] w-full  sticky bottom-0 right-0 bg-blue-100">
      <div className="w-full h-full flex items-center justify-evenly">
        <Home size={35} />
        <Link to="/budget" className="flex items-center gap-2">
          <Budget size={35} />
        </Link>
        <Chat size={30} />
      </div>
    </nav>
  );
};

export default BottomNavBar;
