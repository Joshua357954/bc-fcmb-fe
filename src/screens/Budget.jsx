import { useState } from "react";
import { Link } from "react-router-dom";
import { FaPlus as AddNew } from 'react-icons/fa';
import { MdOutlineCreate as New } from 'react-icons/md';
import { BiArrowBack as Back } from "react-icons/bi";
import { GrFormClose as CloseMe } from "react-icons/gr";
import AddBudgetModal from '../Components/AddBudget.jsx'; // Importing the AddBudgetModal component
import Modal from "react-modal";
import "../styles/modal.css";

const Budget = () => {
  const [budgets, setBudgets] = useState([]);
  const [task, setTask] = useState({
    budgetName: "",
    amount: "",
    description: "",
    priorityLevel: "",
    budgetType:"",
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
    
    if (!task.budgetName || !task.amount || !task.description || !task.priorityLevel || !task.budgetType) {
      // You can add your validation logic here, such as displaying an error message or preventing submission.
      alert("Please fill in all required fields.");
    
    } else {
      // If all fields are filled, call the handleAddTodo function to add the budget.
      alert("Good to go")
    }

    setBudgets([...budgets, task]);
    setTask({
      budgetName: "",
      amount: "",
      description: "",
      priorityLevel: "",
      receiverBank: "",
      accNumber: "",
    });
  };

  const handleDeleteTodo = (index) => {
    const newBudgets = budgets.filter((_, i) => i !== index);
    setBudgets(newBudgets);
  };

  return (
    <div className="p-4 h-screen md:w-3/5 mx-auto">
      
      {/* Navbar */}
      <div className="py-5 flex justify-between">
        <Link to="/" className="flex items-center">
          <Back size={25} />{" "}
        </Link>
        <span className="text-xl font-bold">Finance Manager</span>
        <p>{""}</p>
      </div>

      <ul className="flex flex-col gap-4 p-4">
        {budgets.map((budget, index) => (
          <li
            key={index}
            className="flex rounded justify-between items-center px-2 py-3 mt-1 border-2 border-blue-500"
          >
            {budget.budgetName}
            <button
              className="bg-red-600 px-2 py-1"
              onClick={() => handleDeleteTodo(index)}>
              Delete
            </button>
          </li>
        ))}
      </ul>



      {/* Create Budget Button */}
      <div className="flex justify-end">
        <button
          onClick={showBudget}
          className="py-2 px-3 text-sm font-semibold bg-blue-200 rounded-lg flex items-center gap-3">
          <p> Create <br/>Budget</p> <New size={26}/> 
        </button>
      </div>

      {/* Add Budget Modal Component */}
      <AddBudgetModal show={show} closeBudget={closeBudget} handleAddTodo={handleAddTodo} task={task} setTask={setTask} />
    </div>
  );
};

export default Budget;
