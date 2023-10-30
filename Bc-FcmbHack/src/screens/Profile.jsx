import React, { PropTypes } from 'react';
import { Link } from 'react-router-dom'
import Img from '../assets/avatar.jpg'
import { PiTrendUpBold as Limit }  from 'react-icons/pi'
import {MdOutlineLockOpen as Lock} from 'react-icons/md'
import { MdOutlineAutoMode as Auto }  from 'react-icons/md'
import {BiArrowBack as Back} from 'react-icons/bi';
import {MdOutlinePrivacyTip as Privacy} from 'react-icons/md'
import {TbLogout2} from "react-icons/tb"

import { BsChevronLeft as Back1 } from 'react-icons/bs'

const Profile = ({ className }) => {
    return ( 
        
        <main className='w-full md:w-3/5 mx-auto'>
        	
        	{/* Nav */}
        	<nav className="h-16 px-2 w-full flex mb-4 justify-between shadow-sm items-center">
        		<Link to="/"> 
        			<Back size={25} color='black'/>
        		</Link>

        		<p className="text-xl font-bold">Profile</p>
        		<p></p>
        	</nav>

        	<div className="ml-4 bg-gray-10 flex justify-start flex-col">
        		<div className="w-36 h-36 rounded-full bg-green-100">
        			<img src={Img} className="w-full h-full"/>
        		</div>
        		<p className="font-bold ml-7">@Joshua Boyi</p>
        	</div>

            <ul  className="mx-4 mt-5 w-full">
                <li className=" py-4 mt-1 flex items-center gap-4"> 
                 <Limit className="text-yellow-400" size={30}/> <p className="text-lg font-semibold"> Daily Limit</p>
                </li>
                
                <li className=" py-4 mt-1 flex items-center gap-4"> 
                 <Auto className="text-green-400" size={30}/> <p className="text-lg font-semibold"> Auto </p></li>
                
                <li className=" py-4 mt-1 flex items-center gap-4"> 
                 <Lock className="text-red-400" size={30}/> <p className="text-lg font-semibold">Pin Manager</p></li>
                
                <li className=" py-4 mt-1 flex items-center gap-4"> 
                 <Privacy className="text-blue-400" size={30}/> <p className="text-lg font-semibold">Privacy & Policy</p> </li>

                <li className="py-4 mt-1 w-full flex items-center gap-3 justify-center"> <p>Logout</p> <TbLogout2 color='red' size={22}/></li>
            </ul>

        </main>
    );
};  
;

export default Profile;
