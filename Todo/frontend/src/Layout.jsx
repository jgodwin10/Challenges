import React from "react";
import { Outlet } from "react-router-dom";

const Layout = () => {
  return (
    <div className="bg-[#c1e3fe] py-16 md:py-20 px-6 w-[100%] md:h-[100vh]">
      <Outlet />
    </div>
  );
};

export default Layout;