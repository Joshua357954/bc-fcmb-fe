import React, { PropTypes } from 'react';
import { Link } from 'react-router-dom'
import { BsChevronLeft as Back } from 'react-icons/bs'

const Profile = ({ className }) => {
    return (
        
        <main className='w-full md:w-3/5 mx-auto'>
        	
        	{/* Nav */}
        	<nav className="h-14 px-2 w-full flex mb-4 justify-between shadow-sm items-center">
        		<Link to="/"> 
        			<Back size={25} color='black'/>
        		</Link>

        		<p className="text-xl font-bold">Profile</p>
        		<p></p>
        	</nav>

        	<div className="ml-2">
        		<div className="w-36 h-36 rounded-full bg-green-100">
        			
        		</div>
        		<p className="font-bold">Joshua Boyi</p>
        	</div>

        </main>
    );
};
;

export default Profile;
