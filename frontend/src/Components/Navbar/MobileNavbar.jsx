import React, { useContext } from "react";
import { AuthContext } from "../../context/AuthContext";
import { Link } from "react-router";
import { IoMenu } from "react-icons/io5";
import Logout from "../Logout";
import Login from "../Login/Login";

const MobileNavbar = () => {
  const {
    loading,
    showLoginModal,
    logout,
    user,
    showRegisterModal,
    isOpen,
    setIsOpen,
  } = useContext(AuthContext);
  return (
    <nav className="fixed inset-x-0 z-40 mx-2 mt-5 flex items-center justify-between rounded-full bg-slate-600/50 px-4 py-2 backdrop-blur-md md:hidden">
      {/* Brand Logo */}
      <div className="pb-1 text-xl font-bold text-[#f83232] 2xl:text-3xl">
        <Link to={"/"}>ResuFusion</Link>
      </div>
      <div className="flex gap-2">
        {user && (
          <span>
            <Logout />
          </span>
        )}
        {!user && (
          <span>
            <Login />
          </span>
        )}
        <button
          className="text-3xl text-red-300 md:hidden"
          onClick={() => setIsOpen(!isOpen)}
        >
          <IoMenu />
        </button>
      </div>
    </nav>
  );
};

export default MobileNavbar;
