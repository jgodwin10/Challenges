import React from "react";
import { Outlet } from "react-router-dom";

const Layout = () => {
  return (
    <div className="bg-[#c1e3fe] py-4 md:py-20 px-3 w-[100%] min-h-[100vh]">
      <Outlet />
    </div>
  );
};

export default Layout;
