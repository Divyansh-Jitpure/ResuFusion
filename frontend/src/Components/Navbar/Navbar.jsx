import React, { useEffect } from "react";
import { Link, useLocation, useNavigate } from "react-router";
import Login from "../Login/Login";
import Register from "../Register/Register";
import { useContext } from "react";
import { AuthContext } from "../../context/AuthContext";
import Logout from "../Logout";
import DashboardBtn from "../DashboardBtn";

const Navbar = () => {
  const { user, logout, setShowLoginModal } = useContext(AuthContext);
  const navigate = useNavigate();
  const location = useLocation();
  const path = location.pathname;

  return (
    // Navbar wrapper (fixed at the top with a glass effect)
    <main className="fixed inset-x-0 mx-auto mt-5 flex h-[50px] w-fit items-center justify-evenly rounded-full bg-slate-600/50 px-4 backdrop-blur-md *:mx-6">
      {/* Brand Logo */}
      <div className="pb-1 text-2xl font-bold text-[#f83232]">
        <Link to={"/"}>ResuFusion</Link>
      </div>

      {/* Nav Links */}
      <div className="*:mx-2 *:text-[17px] *:font-medium *:text-slate-300 *:hover:underline">
        <Link to={"/templates"}>Templates</Link>
        <Link to={"/about"}>About</Link>
      </div>

      {path === "/" && !user && (
        <div className="flex">
          <Login />
          <Register />
        </div>
      )}

      {path === "/" && user && (
        <div className="flex">
          <DashboardBtn />
          <Logout />
        </div>
      )}

      {path === "/templates" && !user && (
        <div className="flex">
          <Login />
          <Register />
        </div>
      )}

      {path === "/templates" && user && (
        <div className="flex">
          <DashboardBtn />
          <Logout />
        </div>
      )}

      {path === "/about" && !user && (
        <div className="flex">
          <Login />
          <Register />
        </div>
      )}

      {path === "/about" && user && (
        <div className="flex">
          <DashboardBtn />
          <Logout />
        </div>
      )}

      {path === "/dashboard" && user && (
        <div className="flex">
          <Logout />
        </div>
      )}

      {path === "/resumeform" && user && (
        <div className="flex">
          <Logout />
        </div>
      )}
    </main>
  );
};

export default Navbar;
 