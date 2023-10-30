import React, { useState } from 'react';
import TopNav from '../Components/TopNav.jsx'
import { TbPigMoney as Bud } from 'react-icons/tb'
import { FaChevronUp as Up, FaChevronDown as Down } from 'react-icons/fa'
import CompletedBudget from '../Components/CompletedBudgets.jsx'
import BottomNav from '../Components/BottomNav.jsx'
import { PiEyeLight as Eye, PiEyeSlashLight as EyeClosed } from 'react-icons/pi'

const App = () => {
  const [showBalance, setShowBalance] = useState(false);
  const transactions = [
    { id: 1, description: 'Groceries', amount: -50 },
    { id: 2, description: 'Salary', amount: 2000 },
    // Add more dummy transactions here
  ];

  const budgetItems = [
    'Vacation Fund',
    'Emergency Fund',
    'Investment Portfolio',
    // Add more budget items here
  ];

  return (
    <div className=" min-h-screen">
     <TopNav/>

      <main className="p-4 lg:w-3/5 mx-auto">
        
{/*        <h1 className="text-lg font-bold mt-1"><small>Hey</small>, Joshua </h1>
*/}				   
        <div className='mb-7 w-full flex flex-col gap-2'>	
       		<p className="font-bold">Balance</p>
       		<div className='flex items-center gap-2'>
	       		<h1 className="text-3xl flex items-center">{showBalance ? '₦ 2000' : '₦ ****'}</h1>
	       		{showBalance ? 
	       			<Eye size={20} onClick={() => setShowBalance(!showBalance)}/> 
	       			: 
	       			<EyeClosed size={20} onClick={() => setShowBalance(!showBalance)}/> 	
		       	}
	       	</div>
        </div>


	    {/* Show Recently completed budget or pending */}
        {/*<CompletedBudget  items={budgetItems}/>*/}

        <div className="flex flex-col gap-3"> 
        	<h1 className='text-xl font-semibold'>Budget </h1>
        	<div className="flex gap-4">

	        	<div className="w-[40%] md:w-[30%]  p-2 h-32 bg-black text-white rounded-lg flex flex-col justify-evenly" >
	        		<Bud size={26}/>
	        		<h2 className="font-sm font-semibold text-green-300">Completed</h2>
	        		<div className="flex gap-4">
		        		{<p className="items-center"><b className="text-sm">Number</b> <br/> 20</p>}
		        		<p className="items-center"><b className="text-sm">Amount</b> <br/> <small>₦ 5000 </small> </p>
		        	</div>
	        	</div>

	        	<div className="w-[40%] md:w-[30%]  h-32 bg-green-100 rounded-lg">
	        		
	        	</div>

	        </div>
        </div>

       
        <div className="bg-white blue-200 rounded py-2 mb-0 mt-7 w-full">
          <h1 className="text-xl font-semibold">Transactions</h1>
          <ul className="w-full">
            {transactions.map((transaction) => (
              <li key={transaction.id} className="flex rounded justify-between items-center px-2 py-3 mt-1 ">
                <div className={`${transaction.amount > 0 ? 'bg-green-200':'bg-red-200'} h-14 w-16 rounded-md flex justify-center items-center`}>
                	{transaction.amount > 0 ?
                		<Up className="text-green-600" size={20}/> : <Down className="text-red-600" size={20}/>
                	}
                </div>
                
                <div> 
	                <p className="font-semibold">{transaction.description}</p>
	                <p  className="font-light">12 May </p>
                </div>

                <p className={`${transaction.amount > 0 ? 'text-green-400':'text-red-400'} font-bold`}> {transaction.amount > 0 ? '+' : '-'} ₦{Math.abs(transaction.amount)}</p>
              </li>
            ))}
          </ul>
        </div>


        <div className="bg-white rounded w-full h-12">
          {/* Dummy space (intentional) */}
        </div>

      </main>

      <BottomNav/>
    </div>
  );
};

export default App;

