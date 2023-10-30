import { useState } from 'react';
import { Link } from 'react-router-dom';
import {BiArrowBack as Back} from 'react-icons/bi';
import {AiOutlineClose} from 'react-icons/ai';
import Modal from'react-modal';
import '../styles/modal.css'

const Budjet = () => {
  const [budgets, setBudgets] = useState([]);
  const [task, setTask] = useState('');
  const [show, setShow] = useState(false);

  const showBudget = () => {
    setShow(true);
  }
  const closeBudget = () => {
    setShow(false);
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
    <div className='p-4 h-screen md:w-3/5 mx-auto'> 
      
      <div className='py-5 bg-blue-200'>
        <Link to='/' className=' flex items-center'>
          <Back size={20}/> <span className='text-xl font-bold'>Finance Manager</span>
        </Link>
      </div>
     
      <ul className='flex flex-col gap-4 p-4'>
        {budgets.map((todo, index) => (
          <li key={index} className='w-[300px] h-12 bg-blue-100 flex items-center justify-between'>
            {todo}
            <button onClick={() => handleDeleteTodo(index)}>Delete</button>
          </li>
        ))}
      </ul>
      <div className={show? 'flex' : 'hidden'}>
        {/*
      <div className=' w-full my-10 rounded-xl  bg-blue-100 flex items-center justify-between p-4'>
      <textarea
      className='w-full h-12 bg-inherit flex items-center justify-between border-none outline-none p-4' 
        type="text"
        placeholder="create a budget"
        value={task}
        onChange={(e) => setTask(e.target.value)}
      />
      <button onClick={handleAddTodo} className='py-4 px-3 bg-blue-700'>Add</button>
        </div>*/}
      </div>
     <div className='flex justify-end'>
     <button onClick={showBudget} className='py-8 px-6 bg-blue-700 rounded-xl'>Create a Budget</button>
     </div>
    


     {/* Modal */}
     <Modal isOpen={show} onClose={closeBudget} onAdd={handleAddTodo} className='w-screen bg-white bg-opacity-100 border border-black ' >
        
        <div onClick={closeBudget} className='flex justify-end'>
            <Back/>
        </div>
        
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
     </Modal>


    </div>
  );
};

export default Budjet;
