import React from "react";
import { Link, useNavigate } from "react-router";
import Login from "../../Pages/Login/Login";
import Register from "../../Pages/Register/Register";
import { useContext } from "react";
import { AuthContext } from "../../context/AuthContext";

const Navbar = () => {
  const { user } = useContext(AuthContext);

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
      {!user ? (
        <div className="flex justify-between">
          <Login />
          <Register />
        </div>
      ) : (
        <button
          onClick={useNavigate("/templates")}
          className="mx-1 rounded-2xl bg-[#ffb0b0] px-3 py-1 text-[17px] font-medium transition-all hover:cursor-pointer hover:bg-[#ff9090]"
        >
          Create Resume
        </button>
      )}
    </main>
  );
};

export default Navbar;
