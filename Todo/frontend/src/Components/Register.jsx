import React from "react";
import { Link } from "react-router-dom";

const Register = () => {
  return (
    <div className="max-w-[1000px] mx-auto py-12 px-8 bg-white rounded-lg shadow-2xl">
      <div className="text-center">
        <h2 className="text-4xl font-bold">Sign Up</h2>
        <p className="text-neutral-500 py-4">Create an account, it's free</p>
      </div>
      <form className="grid md:grid-cols-2 gap-6 w-[100%] py-8">
        <label className="flex flex-col pb-4" htmlFor="username">
          <span className="text-xl pb-2 text-neutral-600">Username</span>
          <input
            className="py-4 px-3 border-2 border-neutral-400 rounded-lg outline-[#c1e3fe] bg-white"
            type="text"
            name=""
            id=""
          />
        </label>
        <label className="flex flex-col pb-4" htmlFor="username">
          <span className="text-xl pb-2 text-neutral-600">Email</span>
          <input
            className="py-4 px-3 border-2 border-neutral-400 rounded-lg outline-[#c1e3fe] bg-white"
            type="email"
            name=""
            id=""
          />
        </label>
        <label className="flex flex-col" htmlFor="password">
          <span className="text-xl pb-2 text-neutral-600">Password</span>
          <input
            className="py-4 px-3 border-2 border-neutral-400 rounded-lg outline-[#c1e3fe] bg-white"
            type="password"
            name=""
            id=""
          />
        </label>
        <label className="flex flex-col" htmlFor="password">
          <span className="text-xl pb-2 text-neutral-600">
            Confirm Password
          </span>
          <input
            className="py-4 px-3 border-2 border-neutral-400 rounded-lg outline-[#c1e3fe] bg-white"
            type="password"
            name=""
            id=""
          />
        </label>
      </form>
      <div className="text-center py-4">
        <button className="bg-[#c1e3fe] hover:bg-white hover:border-2 hover:border-neutral-700 my-6 hover:text-neutral-800 w-[80%] font-semibold py-4 md:w-[40%] rounded-full md:text-xl">
          Sign Up
        </button>
        <p className="py-2">
          Already have an account?{" "}
          <span className="font-semibold">
            <Link to="/login">Sign In</Link>
          </span>
        </p>
      </div>
    </div>
  );
};

export default Register;