import React, { PropTypes } from 'react';
import { FaPlus as AddNew } from 'react-icons/fa'
import { GrFormClose as CloseMe } from "react-icons/gr";
import Modal from "react-modal";

const AddBudget = ({ show,closeBudget, handleAddTodo, task, setTask }) => {
    return (

      <Modal
        isOpen={show}
        onClose={closeBudget}
        onAdd={handleAddTodo}
        className="w-screen md:w-3/5  mx-auto mb-2 flex transition-all ease-in-out flex-col justify-end bg-white mt-2 h-screen overflow-y-auto"
      >

      <div className="h-[80%] bg-gray-100 overflow-y-auto rounded-tl-lg rounded-tr-lg">
        <div onClick={closeBudget} className="flex h-4 w-14  rounded-full mx-auto mt-4 bg-white justify-center cursor-pointer"> 
          {/*<div className="flex items-center gap-2 bg-sky-50 rounded-md p-2 mt-1"> 
             <CloseMe size={23} className="text-red-500"/> 
             <p className="text-lg font-semibold text-black"> Close </p>
          </div>*/}
        </div>

        <div className="flex flex-col gap-4 p-4">
          <span className="text-xl font-bold">Create a Budget</span>
          
          <div className="flex gap-x-5">
            <div>
              <label className="text-sm font-semibold">Budget Name</label>
              <input
                type="number"
                placeholder="e.g Yam  "
                value={task.budgetName}
                onChange={(e) => setTask({ ...task, budgetName: e.target.value })}
                className="w-full h-12 bg-inherit bg-white rounded-sm flex items-center justify-between border-none outline-none p-4"
                />
            </div>

            <div>
              <label className="text-sm font-semibold">Amount</label>
              <input
                type="text"
                placeholder="₦ 0.00"
                value={task.amount}
                onChange={(e) => setTask({ ...task, amount: e.target.value })}
                className="w-full h-12 bg-inherit bg-white rounded-sm flex items-center justify-between border-none outline-none p-4"
              />
            </div>
          </div>

          <div>
            <label className="text-sm font-semibold">Description</label>
            <input
              type="text"
              placeholder="Description"
              value={task.description}
              onChange={(e) => setTask({ ...task, description: e.target.value })}
              className="w-full h-12 bg-inherit bg-white rounded-sm flex items-center justify-between border-none outline-none p-4"
            />
          </div>
          <label className="text-sm font-semibold">Priority Level</label>
          <input
            type="text"
            value={task.priorityLevel}
            onChange={(e) =>
              setTask({ ...task, priorityLevel: e.target.value })
            }
            className="w-full h-12 bg-inherit bg-white rounded flex items-center justify-between border-none outline-none p-4"
          />


{/*           <input
            type="text"
            value={task.priorityLevel}
            onChange={(e) =>
              setTask({ ...task, budgetType: e.target.value })
            }
            className="w-full h-12 bg-inherit flex items-center justify-between border-none outline-none p-4"
          />*/}
{/*          <label className="text-sm font-semibold">Account Number</label>
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

            <button onClick={handleAddTodo} className="py-4 px-3 font-semibold text-white bg-blue-400 flex items-center gap-3 justify-center  rounded">
              Add Budget <AddNew size={15}/>
            </button>
          </div>
        </div>
      </Modal>
    );
};

export default AddBudget;
