import React from "react";

const Home = () => {
  return (
    <div className="max-w-[1000px] mx-auto py-12 shadow-xl px-6 rounded-lg bg-white">
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
          Sign Up
        </button>
      </div>
    </div>
  );
};

export default Home;
