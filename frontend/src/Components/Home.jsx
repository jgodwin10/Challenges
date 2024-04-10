import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import useAuth from "../Hooks/useAuth";
import { IoIosAdd } from "react-icons/io";
import {
  useCreateTodoMutation,
  useGetTodoQuery,
  useUpdateTodoMutation,
} from "../App/apiSlice";
import Todo from "./Todo";
import { useSelector, useDispatch } from "react-redux";
import { Logout, changeEdit } from "../App/userSlice";

const Home = () => {
  const [text, setText] = useState("");
  const [id, setId] = useState("");

  const edit = useSelector((state) => state.user.edit);
  const { username } = useAuth();
  const dispatch = useDispatch();

  const { data, isLoading, isSuccess } = useGetTodoQuery(username);

  const [todo] = useCreateTodoMutation();
  const [update] = useUpdateTodoMutation();

  if (isLoading) {
    return <p>Loading...</p>;
  }

  const handleSubmit = async (e) => {
    await todo({ text, username });
    setText("");
  };

  const handleEdit = async () => {
    await update({ text, id });
    dispatch(changeEdit(false));
    setText("");
  };

  const logoutUser = () => {
    dispatch(Logout());
  };

  if (username) {
    return (
      <div className="max-w-[1000px] mx-auto px-4 md:px-8  py-12 bg-white rounded-lg shadow-2xl">
        <div className="flex items-center justify-between">
          <h2 className="md:text-4xl text-3xl font-bold py-6">Todo App</h2>
          <div
            onClick={logoutUser}
            className="bg-[#c1e3fe] p-4 cursor-pointer font-semibold rounded-lg mb-10 shadow-xl"
          >
            Logout
          </div>
        </div>
        <div className="flex pb-7">
          <input
            className="outline-[#c1e3fe] border border-neutral-500 w-[100%] p-3 rounded-md"
            placeholder="Add your new todo"
            type="text"
            value={text}
            onChange={(e) => setText(e.target.value)}
          />
          {/* <div className="bg-[#c1e3fe] ml-3 text-center rounded-md"> */}

          {edit ? (
            <IoIosAdd
              onClick={handleEdit}
              className="text-gray-600 cursor-pointer rounded-lg shadow-xl bg-[#c1e3fe] ml-2 size-14"
            />
          ) : (
            <IoIosAdd
              onClick={handleSubmit}
              className="text-gray-600 cursor-pointer rounded-lg shadow-xl bg-[#c1e3fe] ml-2 size-14"
            />
          )}
          {/* </div> */}
        </div>
        {data?.map((todo) => {
          return <Todo key={todo._id} {...todo} input={setText} ID={setId} />;
        })}
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
          <Link
            className="border-2 border-neutral-700 text-center text-neutral-800 hover:bg-[#c1e3fe] hover:border-none font-semibold w-[80%] py-4 md:w-[40%] rounded-full md:text-xl"
            to="/login"
          >
            Login
          </Link>

          <Link
            className="bg-[#c1e3fe] hover:bg-white text-center hover:border-2 hover:border-neutral-700 my-6 hover:text-neutral-800 w-[80%] font-semibold py-4 md:w-[40%] rounded-full md:text-xl"
            to="/register"
          >
            Sign Up
          </Link>
        </div>
      </div>
    );
  }
};

export default Home;
