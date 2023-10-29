

import { useState } from 'react';
import { Link } from 'react-router-dom';
import {BiArrowBack} from 'react-icons/bi';

const Budjet = () => {
  const [budgets, setBudgets] = useState([]);
  const [task, setTask] = useState('');
  const [show, setShow] = useState(false);

  const showBudget = () => {
    setShow(!show);
  }

  const handleAddTodo = () => {
    if (task.trim() === '') return;
    setBudgets([...budgets, task]);
    setTask('');
  };

  const handleDeleteTodo = (index) => {
    const newBudgets = budgets.filter((_, i) => i !== index);
    setBudgets(newBudgets);
  };

  return (
    <div className='p-4 min-h-screen'> 
      
      <div className='py-12'><Link to='/' className=' flex items-center'> <BiArrowBack size={20}/> <span className='text-xl font-bold'>Finance Manager</span></Link></div>
     
      <ul className='flex flex-col gap-4 p-4'>
        {budgets.map((todo, index) => (
          <li key={index} className='w-[300px] h-12 bg-blue-100 flex items-center justify-between'>
            {todo}
            <button onClick={() => handleDeleteTodo(index)}>Delete</button>
          </li>
        ))}
      </ul>
      <div className={show? 'flex' : 'hidden'}>
      <div className=' w-full my-10 rounded-xl  bg-blue-100 flex items-center justify-between p-4'>
      <textarea
      className='w-full h-12 bg-inherit flex items-center justify-between border-none outline-none p-4' 
        type="text"
        placeholder="create a budget"
        value={task}
        onChange={(e) => setTask(e.target.value)}
      />
      <button onClick={handleAddTodo} className='py-4 px-3 bg-blue-700'>Add</button>
      </div>
      </div>
     <div className='flex justify-end'>
     <button onClick={showBudget} className='py-8 px-6 bg-blue-700 rounded-xl'>Create a Budget</button>
     </div>
    </div>
  );
};

export default Budjet;
