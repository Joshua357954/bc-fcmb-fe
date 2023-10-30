import { useState } from "react";
import { Link } from "react-router-dom";
import { FaPlus as AddNew } from 'react-icons/fa'
import { MdOutlineCreate as New } from 'react-icons/md'
import { BiArrowBack as Back } from "react-icons/bi";
import { GrFormClose as CloseMe } from "react-icons/gr";
import AddBudgetModal from '../Components/AddBudget.jsx'


import Modal from "react-modal";
////
import "../styles/modal.css";

const Budjet = () => {
  const [budgets, setBudgets] = useState([]);
  //const [task, setTask] = useState('');
  const [task, setTask] = useState({
    budgetName: "",
    amount: "",
    description: "",
    priorityLevel: "",
    receiverBank: "",
    accNumber: "",
  });
  const [show, setShow] = useState(false);

  const showBudget = () => {
    setShow(true);
  };
  const closeBudget = () => {
    setShow(false);
  };

  const handleAddTodo = () => {
    if (task.trim() === "") return;
    setBudgets([...budgets, task]);
    setTask("");
  };

  const handleDeleteTodo = (index) => {
    const newBudgets = budgets.filter((_, i) => i !== index);
    setBudgets(newBudgets);
  };

  return (
    <div className="p-4 h-screen md:w-3/5 mx-auto">

      <div className="py-5 flex justify-between">
        <Link to="/" className=" flex items-center">
          <Back size={25} />{" "}
        </Link>
        <span className="text-xl font-bold">Finance Manager</span>
        <div> </div>
      </div>

      <ul className="flex flex-col gap-4 p-4">
        {budgets.map((todo, index) => (
          <li
            key={index}
            className="flex rounded justify-between items-center px-2 py-3 mt-1 border-2 border-blue-500"
          >
            {todo}
            <button
              className="bg-red-600 px-2 py-1"
              onClick={() => handleDeleteTodo(index)}
            >
              Delete
            </button>
          </li>
        ))}
      </ul>

      {/*<div className={show ? "flex" : "hidden"}>*/}
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
   {/*   </div>*/}


      <div className="flex justify-end">
        <button
          onClick={showBudget}
          className="py-2 px-3 text-sm font-semibold bg-blue-200 rounded-lg flex items-center gap-3  "
        >
         <p> Create <br/>Budget</p> <New size={26}/> 
        </button>
      </div>

      {/* Budget Creation */}
      <AddBudgetModal show={show} closeBudget={closeBudget} handleAddTodo={handleAddTodo} task={task} setTask={setTask} />

    </div>
  );
};



export default Budjet;
