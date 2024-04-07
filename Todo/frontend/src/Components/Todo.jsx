import React from "react";
import { IoIosAdd } from "react-icons/io";
import { FaPen } from "react-icons/fa";
import { FaTrash } from "react-icons/fa";

const Todo = () => {
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
};

export default Todo;
