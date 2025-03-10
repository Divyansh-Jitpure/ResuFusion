import React from "react";
import { Link, useNavigate } from "react-router";
import Login from "../../Pages/Login/Login";
import Register from "../../Pages/Register/Register";
import { useContext } from "react";
import { AuthContext } from "../../context/AuthContext";
import { LuLogOut } from "react-icons/lu";

const Navbar = () => {
  const { user, logout, setShowLoginModal } = useContext(AuthContext);
  const navigate = useNavigate();

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

      {/* Authentication Buttons (Login/Register or Logout) */}
      {!user ? (
        <div className="flex justify-between">
          <Login /> {/* Open login modal */}
          <Register /> {/* Open register modal */}
        </div>
      ) : (
        <div className="flex justify-between">
          {/* Create Resume Button */}
          <button
            onClick={() => navigate("/templates")}
            className="mx-1 rounded-2xl bg-[#ffb0b0] px-3 py-1 text-[17px] font-medium transition-all hover:cursor-pointer hover:bg-[#ff9090]"
          >
            Create Resume
          </button>

          {/* Logout Button */}
          <button
            onClick={() => {
              logout(); // Call logout function
              navigate("/"); // Redirect to homepage
            }}
            className="mx-1 flex items-center gap-1 rounded-2xl bg-[#D84040] px-3 py-1 text-[17px] font-medium transition-all hover:cursor-pointer hover:bg-[#ff2d2d]"
          >
            Logout <LuLogOut />
          </button>
        </div>
      )}
    </main>
  );
};

export default Navbar;
