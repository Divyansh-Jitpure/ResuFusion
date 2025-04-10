import React, { useState } from "react";
import { Link, useLocation, useNavigate } from "react-router";
import Login from "../Login/Login";
import Register from "../Register/Register";
import { useContext } from "react";
import { AuthContext } from "../../context/AuthContext";
import Logout from "../Logout";
import DashboardBtn from "../DashboardBtn";
import { IoMenu } from "react-icons/io5";

const Navbar = () => {
  const { user, isOpen, setIsOpen } = useContext(AuthContext);
  const location = useLocation();
  const path = location.pathname;

  // Routes where login/register should be shown if user is NOT logged in
  const showAuthButtonsRoutes = ["/", "/templates", "/about"];

  // Routes where dashboard/logout should be shown if user is logged in
  const showDashboardRoutes = ["/", "/templates", "/about"];

  // Routes where only Dashboard & Logout should be shown
  const showDashboardAndLogout = [
    "/resumePreview",
    "/resumeform",
    "/dashboard",
  ];

  return (
    // Navbar wrapper (fixed at the top with a glass effect)
    <main className="fixed inset-x-0 z-40 mx-2 mt-5 hidden items-center justify-between rounded-full bg-slate-600/50 py-2 backdrop-blur-md *:mx-6 md:mx-auto md:flex md:w-fit md:px-4">
      {/* Brand Logo */}
      <div className="pb-1 text-2xl font-bold text-[#f83232] 2xl:text-3xl">
        <Link to={"/"}>ResuFusion</Link>
      </div>

      {/* Nav Links */}
      <div className="hidden *:mx-2 *:text-[17px] *:font-medium *:text-slate-300 *:hover:underline md:block 2xl:*:text-xl">
        <Link to={"/templates"}>Templates</Link>
        <Link to={"/about"}>About</Link>
      </div>

      <div className="flex gap-2">
        {user && (
          <span className="mt-[2px] md:hidden">
            <Logout />
          </span>
        )}
        <button
          className="text-4xl text-red-300 md:hidden"
          onClick={() => setIsOpen(!isOpen)}
        >
          <IoMenu />
        </button>
      </div>

      {/* Show Login/Register if user is NOT logged in */}
      {showAuthButtonsRoutes.includes(path) && !user && (
        <div className="hidden md:flex">
          <Login />
          <Register />
        </div>
      )}

      {/* Show Dashboard/Logout if user is logged in */}
      {showDashboardRoutes.includes(path) && user && (
        <div className="hidden md:flex">
          <DashboardBtn />
          <Logout />
        </div>
      )}

      {/* Show Dashboard & Logout on resumePreview, dashboard and resumeForm */}
      {user && showDashboardAndLogout.some((route) => path.includes(route)) && (
        <div className="hidden md:flex">
          <DashboardBtn />
          <Logout />
        </div>
      )}
    </main>
  );
};

export default Navbar;
