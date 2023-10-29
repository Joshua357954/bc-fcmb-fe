import React, { useState } from 'react';
import TopNav from '../Components/TopNav.jsx'
import BottomNav from '../Components/BottomNav.jsx'
import { PiEyeLight as Eye, PiEyeSlashLight as EyeClosed } from 'react-icons/pi'


const HomeScreen = ({ className }) => {
	const [ showBalance, setShowBalance] = useState(false)
    return (
    	<main className="h-[100lvh] w-screen flex flex-col ">
	       <TopNav />
	        <div className="h-full px-2">

	       <h1 className="text-xl font-bold mt-2">Hey, Joshua </h1>

	       <div className='mt-5'>
	       		<p className="font-bold">Balance</p>
	       		<div className='flex items-center gap-2'>
		       		<h1 className="text-2xl flex items-center">{showBalance ? '₦ 2000' : '₦ ****'}</h1>
		       		{showBalance ? 
		       			<Eye size={20} onClick={() => setShowBalance(!showBalance)}/> 
		       			: 
		       			<EyeClosed size={20} onClick={() => setShowBalance(!showBalance)}/> 	
			       	}
		       	</div>
	       </div>


	        </div>
	        <BottomNav/>
	        {/*odcc9vvovkvovo-ckpifvpfvpf*/}
	    </main>
    );
};


export default HomeScreen;
