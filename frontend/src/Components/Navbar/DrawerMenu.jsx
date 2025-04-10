import React, { useContext, useEffect, useRef } from "react";
import { AuthContext } from "../../context/AuthContext";
import { Link } from "react-router";

const DrawerMenu = () => {
  const { user, isOpen, setIsOpen } = useContext(AuthContext);
  const drawerRef = useRef();

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (drawerRef.current && !drawerRef.current.contains(e.target)) {
        setIsOpen(false);
      }
    };

    if (isOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isOpen, setIsOpen]);

  return (
    <div
      ref={drawerRef}
      className={`fixed top-[66px] right-12 z-10 w-[75%] rounded-b-xl bg-slate-600/50 py-2 text-center shadow-md backdrop-blur-md md:hidden ${isOpen ? "block" : "hidden"} `}
    >
      <ul className="flex flex-col items-center space-y-2 [&>li]:w-full [&>li]:py-1 [&>li]:text-xl [&>li]:font-semibold [&>li]:text-white">
        <li onClick={() => setIsOpen(!isOpen)}>
          <Link to={"/"}>Home</Link>
        </li>
        <li onClick={() => setIsOpen(!isOpen)}>
          <Link to={"/templates"}>Templates</Link>
        </li>
        <li onClick={() => setIsOpen(!isOpen)}>
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
