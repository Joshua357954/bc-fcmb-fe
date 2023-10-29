import React, { PropTypes } from 'react';
import {HiOutlineHome as Home} from 'react-icons/hi'
import {AiOutlinePieChart as Budget} from 'react-icons/ai'
import {HiOutlineChartBar as Chat } from 'react-icons/hi'

const BottomNavBar = ({ className }) => {
    return (
        <nav className="h-[10%] w-full  sticky bottom-0 right-0 bg-blue-100"> 
        	<div className="w-full h-full flex items-center justify-evenly">
	        	<Home size={35}/>
	        	<Budget size={35}/>
	        	<Chat size={30}/> 
	        </div>
        </nav>
    );
};

export default BottomNavBar;
