<<<<<<< HEAD
import React, { PropTypes } from 'react';
import { Link } from 'react-router-dom'
import Img from '../assets/avatar.jpg'
// import { FaArrowTrendUp as Limit }  from 'react-icons/fa'
import { MdOutlineAutoMode as Auto }  from 'react-icons/md'
import {BiArrowBack as Back} from 'react-icons/bi';
import {TbLogout2} from "react-icons/tb"
=======
//import React, { PropTypes } from "react";
import { Link } from "react-router-dom";
import Img from "../assets/avatar.jpg";
import { FaArrowTrendUp as Limit } from "react-icons/fa6";
import { MdOutlineAutoMode as Auto } from "react-icons/md";
import { BiArrowBack as Back } from "react-icons/bi";
//import { BsChevronLeft as Back1 } from "react-icons/bs";
>>>>>>> 70523e25f771e46ed2b27875b3303b341b7aa7a7

const Profile = () => {
  return (
    <main className="w-full md:w-3/5 mx-auto">
      {/* Nav */}
      <nav className="h-16 px-2 w-full flex mb-4 justify-between shadow-sm items-center">
        <Link to="/">
          <Back size={25} color="black" />
        </Link>

        <p className="text-xl font-bold">Profile</p>
        <p></p>
      </nav>

      <div className="ml-4 bg-gray-10 flex justify-start flex-col">
        <div className="w-36 h-36 rounded-full bg-green-100">
          <img src={Img} className="w-full h-full" />
        </div>
        <p className="font-bold ml-7">@Joshua Boyi</p>
      </div>

      <ul className="mx-4 mt-5">
        <li className=" py-4 mt-1 flex items-center gap-4">
          <Limit size={30} />{" "}
          <p className="text-lg font-semibold"> Daily Limit</p>
        </li>

        <li className=" py-4 mt-1 flex items-center gap-4">
          <Auto size={30} /> <p className="text-lg font-semibold"> Auto </p>
        </li>

<<<<<<< HEAD
                <li className="py-4 mt-1 px-auto w-full flex items-center gap-3 "> <p>Logout</p> <TbLogout2 color='red' size={22}/></li>
            </ul>
=======
        <li className=" py-4 mt-1 flex items-center gap-4">Pin Manager</li>
>>>>>>> 70523e25f771e46ed2b27875b3303b341b7aa7a7

        <li className=" py-4 mt-1 flex items-center gap-4">
          Privacy & Policy{" "}
        </li>

        <li className="px-auto"> Logout </li>
      </ul>
    </main>
  );
};
export default Profile;
