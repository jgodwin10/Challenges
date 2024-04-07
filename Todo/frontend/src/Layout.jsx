import React from "react";
import { Outlet } from "react-router-dom";

const Layout = () => {
  return (
    <div className="bg-[#c1e3fe] py-10 md:py-20 px-6 w-[100%] h-[100%]">
      <Outlet />
    </div>
  );
};

export default Layout;
