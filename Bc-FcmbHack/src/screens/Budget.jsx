

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
    <div className=''> 
      
      <div className='py-12 flex'><Link to='/'> <BiArrowBack/> Finance Manager</Link></div>
     
      <ul className='flex flex-col gap-4 p-4'>
        {budgets.map((todo, index) => (
          <li key={index} className='w-[300px] h-12 bg-blue-100 flex items-center justify-between'>
            {todo}
            <button onClick={() => handleDeleteTodo(index)}>Delete</button>
          </li>
        ))}
      </ul>
      <div className={show? 'flex' : 'hidden'}>
      <div className=' w-full md:w-5/12  bg-blue-100 flex items-center justify-between'>
      <textarea
      className='w-full h-12 bg-blue-100 flex items-center justify-between border-none outline-none' 
        type="text"
        placeholder="Add a task"
        value={task}
        onChange={(e) => setTask(e.target.value)}
      />
      <button onClick={handleAddTodo} className='py-4 px-3 bg-blue-700'>Add</button>
      </div>
      </div>
      <button onClick={showBudget} className='py-8 px-6 bg-blue-700'>Create a Budjet</button>
    </div>
  );
};

export default Budjet;
