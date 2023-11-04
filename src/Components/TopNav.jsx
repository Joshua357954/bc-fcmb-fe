import React, { PropTypes } from 'react';
import { Link } from 'react-router-dom'
import Img from '../assets/avatar.jpg'


const TopNav = ({name}) => {
    return (
    	// sticky top-0 left-0
        <nav className=" w-full shadow-sm ">
        	<div className="w-full h-full flex items-center justify-between py-3 px-3"> 
	        	
                <div className="flex flex-col text-center h-12 mont">
                    <h1 className="text-4xl font-black text-blue-500 text-center">Jobo</h1> 
                   <small className='font-semibold sm:hidden md:block'>Finance</small>
                </div>

	        	<Link to='profile' className="flex items-center gap-1">
                    <div className="rounded-full h-14 w-14 bg-black"> 
                        <img src={Img} className="w-full h-full"/>
    	        	</div>
                    <p className="font-bold text-xs">Hey, <br/> <b className="text-sm truncate">{name || "Joshua"}</b></p>
                </Link>
        	</div>
        </nav>
    );
};

export default TopNav;
