import React, { useContext } from "react";
import { LuLogOut } from "react-icons/lu";
import { useNavigate } from "react-router";
import { AuthContext } from "../context/AuthContext";

const Logout = () => {
  const { logout } = useContext(AuthContext);
  const navigate = useNavigate();

  return (
    <button
      onClick={() => {
        logout(); // Call logout function
        navigate("/"); // Redirect to homepage
      }}
      className="mx-1 flex items-center gap-1 rounded-2xl bg-[#D84040] px-3 py-1 text-[17px] font-medium transition-all hover:cursor-pointer hover:bg-[#ff2d2d]"
    >
      Logout <LuLogOut />
    </button>
  );
};

export default Logout;
