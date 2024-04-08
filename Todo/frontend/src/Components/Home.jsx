import React from "react";
import { Link } from "react-router-dom";
import useAuth from "../Hooks/useAuth";
import { IoIosAdd } from "react-icons/io";
import { FaPen } from "react-icons/fa";
import { FaTrash } from "react-icons/fa";

const Home = () => {
  const { username } = useAuth()
  
  console.log(username);

  if (username) {
    return (
      <div className="max-w-[1000px] mx-auto px-8 py-12 bg-white rounded-lg shadow-2xl">
        <h2 className="text-4xl font-bold py-6">Todo App</h2>
        <div className="flex pb-7">
          <input
            className="outline-[#c1e3fe] border border-neutral-500 w-[100%] p-3 rounded-md"
            placeholder="Add your new todo"
            type="text"
          />
          {/* <div className="bg-[#c1e3fe] ml-3 text-center rounded-md"> */}

          <IoIosAdd className="text-gray-600 cursor-pointer rounded-lg shadow-xl bg-[#c1e3fe] ml-2 size-14" />
          {/* </div> */}
        </div>
        <div className="flex justify-between w-[100%] bg-neutral-200 py-3 rounded-md">
          <div className="md:pl-8 pl-5">
            <p className="font-semibold text-neutral-600">ADD new todo</p>
            <p className="text-neutral-500">date and time</p>
          </div>
          <div className="flex pt-2 pr-4">
            <span className="bg-white mr-2 h-8 p-2 rounded-md cursor-pointer">
              <FaTrash className="size-4" />
            </span>
            <span className="bg-white h-8 mr-3 p-2 rounded-md cursor-pointer">
              <FaPen className="size-4" />
            </span>
          </div>
        </div>
      </div>
    );
  } else {
    return (
      <div className="max-w-[1000px] mx-auto py-12 shadow-2xl px-6 rounded-lg bg-white">
        <div>
          <h2 className="text-center text-3xl font-bold">
            Your Ultimate To-Do App
          </h2>
          <p className="capitalize text-[14px] sm:text-base text-center py-7 text-neutral-600 font-medium">
            a streamlined and user-friendly to-do app designed to help you stay
            organized, focused, and on top of your tasks
          </p>
        </div>
        <div className="w-[100%] py-16 ">
          <img className="mx-auto" src="../images/welcome.png" alt="" />
        </div>
        <div className="flex flex-col items-center">
          <button className="border-2 border-neutral-700 text-neutral-800 hover:bg-[#c1e3fe] hover:border-none font-semibold w-[80%] py-4 md:w-[40%] rounded-full md:text-xl">
            Login
          </button>
          <button className="bg-[#c1e3fe] hover:bg-white hover:border-2 hover:border-neutral-700 my-6 hover:text-neutral-800 w-[80%] font-semibold py-4 md:w-[40%] rounded-full md:text-xl">
            <Link to='/register'>Sign Up</Link>
          </button>
        </div>
      </div>
    );
  };
}

export default Home;
