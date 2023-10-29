import React, { PropTypes } from 'react';

const TopNav = ({ className }) => {
    return (
    	// sticky top-0 left-0
        <nav className="h-[12%]  w-screen shadow-sm ">
        	<div className="w-full h-full flex items-center justify-between px-2"> 
	        	<h1 className="text-2xl font-bold">Bankie</h1> 
	        	<div className="rounded-full h-12 w-12 bg-black"> 

	        	</div>
        	</div>
        </nav>
    );
};

export default TopNav;
