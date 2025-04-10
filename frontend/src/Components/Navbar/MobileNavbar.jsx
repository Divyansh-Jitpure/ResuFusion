import React, { useContext } from "react";
import { AuthContext } from "../../context/AuthContext";
import { Link } from "react-router";
import { IoMenu } from "react-icons/io5";
import { RxCross2 } from "react-icons/rx";
import Logout from "../Logout";
import MobileLogin from "../Login/MobileLogin";
import MobileRegister from "../Register/MobileRegister";

const MobileNavbar = () => {
  const { user, isOpen, setIsOpen } = useContext(AuthContext);
  return (
    <nav className="fixed inset-x-0 z-40 mx-4 mt-5 flex items-center justify-between rounded-full bg-slate-600/50 px-4 py-2 backdrop-blur-md md:hidden print:hidden">
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
          <span className="flex">
            <MobileLogin />
            <MobileRegister />
          </span>
        )}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="text-red-300 md:hidden"
        >
          {isOpen ? (
            <RxCross2 className="text-3xl" />
          ) : (
            <IoMenu className="text-3xl" />
          )}
        </button>
      </div>
    </nav>
  );
};

export default MobileNavbar;
