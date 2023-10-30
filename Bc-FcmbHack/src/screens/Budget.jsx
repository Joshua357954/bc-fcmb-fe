import { useState } from "react";
import { Link } from "react-router-dom";
import { BiArrowBack as Back } from "react-icons/bi";
import Modal from "react-modal";
////
import "../styles/modal.css";

const Budjet = () => {
  const [budgets, setBudgets] = useState([]);
  //const [task, setTask] = useState('');
  const [task, setTask] = useState({
    title: "",
    amount: "",
    description: "",
    priority_level: "",
    label: "",
    /*receiverBank: "",
    accNumber: "",*/
  });
  const [show, setShow] = useState(false);
  const addTaskToAPI = (task) => {
    fetch('https://bankcraft.onrender.com/api/v1/budgets', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(task),
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error('Failed to add the task to the API');
        }
        return response.json();
      })
      .then((data) => {
        // Handle the response from the API if needed
        console.log('Task added to the API:', data);
      })
      .catch((error) => {
        console.error(error);
      });
  };

  const showBudget = () => {
    setShow(true);
  };
  const closeBudget = () => {
    setShow(false);
  };

  const handleAddTodo = () => {
    //if (task.trim() === "") return;
    setBudgets([...budgets, task]);
    setTask({ title: "", amount: "", description: "", priority_level: "", label:"", /*receiverBank: "", accNumber: ""*/ });
    // Send the task data to the API
    addTaskToAPI(task);

   
  };

  const handleDeleteTodo = (index) => {
    const newBudgets = budgets.filter((_, i) => i !== index);
    setBudgets(newBudgets);
  };

  return (
    <div className="p-4 h-screen md:w-3/5 mx-auto">
      <div className="py-5 bg-blue-200">
        <Link to="/" className=" flex items-center">
          <Back size={20} />{" "}
          <span className="text-xl font-bold">Finance Manager</span>
        </Link>
      </div>

      <ul className="flex flex-col gap-4 p-4">
        {budgets.map((todo, index) => (
          <li
            key={index}
            className="flex rounded justify-between items-center px-2 py-3 mt-1 border-2 border-blue-500"
          >
           <div>
            <p className="font-bold text-lg">Title</p>
           <h3>{todo.title}</h3>
           </div>
    <div>
      <p className="font-bold text-lg">Description</p>
    <p>{todo.description}</p>
    </div>
      <div>
        <p className="font-bold text-lg">Amount</p>
      <p>
        {todo.amount}
      </p>
      </div>
      <div>
        <p className="font-bold text-lg">Priority Level</p>
      <p>
        {todo.priority_level}
      </p>
      </div>
     <div>
      <p className="font-bold text-lg">Label</p>
     <p>
        {todo.label}
      </p>
     </div>
     
            <button
              className="bg-red-600 px-2 py-1"
              onClick={() => handleDeleteTodo(index)}
            >
              Delete
            </button>
          </li>
        ))}
      </ul>
      <div className={show ? "flex" : "hidden"}>
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
      <div className="flex justify-end">
        <button
          onClick={showBudget}
          className="py-8 px-6 bg-blue-700 rounded-xl"
        >
          Create a Budget
        </button>
      </div>

      {/* Modal */}
      <Modal
        isOpen={show}
        onClose={closeBudget}
        onAdd={handleAddTodo}
        className="w-screen md:w-3/5 mx-auto bg-white bg-opacity-100 border border-black mt-4 "
      >
        <div onClick={closeBudget} className="flex justify-end">
          <Back />
        </div>

        <div className="flex flex-col gap-4 p-4">
          <span className="text-xl font-semibold">Create a Budget</span>
          <label className="text-sm font-semibold">Budget Name</label>
          <input
            type="text"
            placeholder="Budget Name"
            value={task.title}
            onChange={(e) => setTask({ ...task, title: e.target.value })}
            className="w-full h-12 bg-inherit flex items-center justify-between border-none outline-none p-4"
          />
          <label className="text-sm font-semibold">Amount</label>
          <input
            type="text"
            placeholder="Amount"
            value={task.amount}
            onChange={(e) => setTask({ ...task, amount: e.target.value })}
            className="w-full h-12 bg-inherit flex items-center justify-between border-none outline-none p-4"
          />
          <label className="text-sm font-semibold">Description</label>
          <input
            type="text"
            placeholder="Description"
            value={task.description}
            onChange={(e) => setTask({ ...task, description: e.target.value })}
            className="w-full h-12 bg-inherit flex items-center justify-between border-none outline-none p-4"
          />
          <label className="text-sm font-semibold">Priority Level</label>
          <input
            type="text"
            placeholder="Priority Level"
            value={task.priority_level}
            onChange={(e) =>
              setTask({ ...task, priority_level: e.target.value })
            }
            className="w-full h-12 bg-inherit flex items-center justify-between border-none outline-none p-4"
          />
           <label className="text-sm font-semibold">Label</label>
          <input
            type="text"
            placeholder="Label"
            value={task.label}
            onChange={(e) => setTask({ ...task, label: e.target.value })}
            className="w-full h-12 bg-inherit flex items-center justify-between border-none outline-none p-4"
          />
          {/*
          <label className="text-sm font-semibold">Account Number</label>
          <input
            type="text"
            placeholder="Account Number"
            value={task.accNumber}
            onChange={(e) => setTask({ ...task, accNumber: e.target.value })}
            className="w-full h-12 bg-inherit flex items-center justify-between border-none outline-none p-4"
          />
          <label className="text-sm font-semibold">Receiver Bank</label>
          <input
            type="text"
            placeholder="Reciever Bank"
            value={task.receiverBank}
            onChange={(e) => setTask({ ...task, receiverBank: e.target.value })}
            className="w-full h-12 bg-inherit flex items-center justify-between border-none outline-none p-4"
          />*/}

          {/* <textarea
          className='w-full h-12 bg-inherit flex items-center justify-between border-none outline-none p-4' 
            type="text"
            placeholder="create a budget"
            value={task}
            onChange={(e) => setTask(e.target.value)}
      />*/}
          <button onClick={handleAddTodo} className="py-4 px-3 bg-blue-700">
            Add
          </button>
        </div>
      </Modal>
    </div>
  );
};

export default Budjet;
