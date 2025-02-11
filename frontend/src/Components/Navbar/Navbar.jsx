import React from "react";
import { Link, useNavigate } from "react-router";

const Navbar = () => {
  return (
    // Navbar Main
    <main className="fixed inset-x-0 mx-auto mt-5 flex h-[50px] w-fit items-center justify-evenly rounded-full bg-slate-600/50 px-4 backdrop-blur-md *:mx-6">
      {/* Logo */}
      <div className="pb-1 text-2xl font-bold text-[#D84040]">
        <Link to={"/"}>ResuFusion</Link>
      </div>
      {/* Links */}
      <div className="*:mx-2 *:text-[17px] *:font-medium *:text-slate-300 *:hover:underline">
        <Link to={"/templates"}>Templates</Link>
        <Link to={"/about"}>About</Link>
      </div>
      {/* Login/Register*/}
      <div className="flex justify-between *:mx-1 *:rounded-2xl *:px-3 *:py-1 *:text-[17px] *:font-medium *:transition-all">
        <Link to={"/register"} className="bg-[#ffb0b0] hover:bg-[#ff9090]">
          Register
        </Link>
        <Link to={"/login"} className="bg-[#D84040] hover:bg-[#ff2d2d]">
          Login
        </Link>
      </div>
    </main>
  );
};

export default Navbar;
