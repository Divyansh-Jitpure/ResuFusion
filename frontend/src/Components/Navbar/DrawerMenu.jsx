import React, { useContext } from "react";
import { AuthContext } from "../../context/AuthContext";
import { Link } from "react-router";

const DrawerMenu = () => {
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
    <div
      className={`fixed top-[66px] right-12 z-10 w-[75%] rounded-b-xl bg-slate-600/50 py-2 text-center shadow-md backdrop-blur-md md:hidden ${isOpen ? "block" : "hidden"} `}
    >
      <ul className="flex flex-col items-center space-y-2 [&>li]:w-full [&>li]:py-1 [&>li]:text-xl [&>li]:font-semibold [&>li]:text-white">
        <li>
          <Link to={"/"}>Home</Link>
        </li>
        <li>
          <Link to={"/templates"}>Templates</Link>
        </li>
        <li>
          <Link to={"/about"}>About</Link>
        </li>

        {user && (
          <li onClick={() => setIsOpen(!isOpen)}>
            <Link to={"/dashboard"}>Dashboard</Link>
          </li>
        )}
      </ul>
    </div>
  );
};

export default DrawerMenu;
