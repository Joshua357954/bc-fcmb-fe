
import React, { useState } from 'react';
import TopNav from '../Components/TopNav.jsx'
import BottomNav from '../Components/BottomNav.jsx'
import { PiEyeLight as Eye, PiEyeSlashLight as EyeClosed } from 'react-icons/pi'

const HomeScreen = ({ className }) => {
	
	const [ showBalance, setShowBalance] = useState(false)
    return (
    	<main className="w-screen h-screen flex justify-center bg-yellow-200">
    		<section className="w-[60%] h-full bg-red-200">
	    		<div className="h-full w-full flex flex-col relative ">
			       <TopNav />

			      	<h1 className="text-xl font-bold mt-2">Hey, Joshua </h1>
				   
				   {/* Balance */}
			       <div className='mt-5 w-full'>
			       		
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

			        <BottomNav/>

		        </div>
		    </section>
	    </main>
    );
};

<nav className="h-[10%] w-full py-2 fixed bottom-0 right-0 bg-blue-100">
      <div className="w-full h-full flex items-center justify-evenly">
        <Home size={35} />
        <Link to="/budget" className="flex items-center gap-2">
          <Budget size={35} />
        </Link>
        <Chat size={30} />
      </div>
    </nav>
export default HomeScreen;
