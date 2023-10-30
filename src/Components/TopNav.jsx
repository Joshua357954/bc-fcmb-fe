import React, { PropTypes } from 'react';
import { Link } from 'react-router-dom'
import Img from '../assets/avatar.jpg'


const TopNav = ({ className }) => {
    return (
    	// sticky top-0 left-0
        <nav className=" w-full shadow-sm ">
        	<div className="w-full h-full flex items-center justify-between py-3 px-3"> 
	        	<h1 className="text-3xl font-black">BankCraft</h1> 
	        	<Link to='profile' className="flex items-center gap-1">
                    <div className="rounded-full h-14 w-14 bg-black"> 
                        <img src={Img} className="w-full h-full"/>
    	        	</div>
                    <p className="font-bold text-xs">Hey, <br/> <b className="text-sm">Joshua</b></p>
                </Link>
        	</div>
        </nav>
    );
};

export default TopNav;
