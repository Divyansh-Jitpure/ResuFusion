import React from "react";
import { Link, useLocation, useNavigate } from "react-router";
import Login from "../Login/Login";
import Register from "../Register/Register";
import { useContext } from "react";
import { AuthContext } from "../../context/AuthContext";
import Logout from "../Logout";
import DashboardBtn from "../DashboardBtn";

const Navbar = () => {
  const { user } = useContext(AuthContext);
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
    <main className="fixed inset-x-0 z-100 mx-auto mt-5 flex w-fit items-center justify-evenly rounded-full bg-slate-600/50 px-4 py-2 backdrop-blur-md *:mx-6">
      {/* Brand Logo */}
      <div className="pb-1 text-2xl font-bold text-[#f83232] 2xl:text-3xl">
        <Link to={"/"}>ResuFusion</Link>
      </div>

      {/* Nav Links */}
      <div className="*:mx-2 *:text-[17px] *:font-medium *:text-slate-300 *:hover:underline 2xl:*:text-xl">
        <Link to={"/templates"}>Templates</Link>
        <Link to={"/about"}>About</Link>
      </div>

      {/* Show Login/Register if user is NOT logged in */}
      {showAuthButtonsRoutes.includes(path) && !user && (
        <div className="flex">
          <Login />
          <Register />
        </div>
      )}

      {/* Show Dashboard/Logout if user is logged in */}
      {showDashboardRoutes.includes(path) && user && (
        <div className="flex">
          <DashboardBtn />
          <Logout />
        </div>
      )}

      {/* Show Dashboard & Logout on resumePreview, dashboard and resumeForm */}
      {user && showDashboardAndLogout.some((route) => path.includes(route)) && (
        <div className="flex">
          <DashboardBtn />
          <Logout />
        </div>
      )}
    </main>
  );
};

export default Navbar;
