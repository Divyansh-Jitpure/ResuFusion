import React, { useContext } from "react";
import { LuLogOut } from "react-icons/lu";
import { useNavigate } from "react-router";
import { AuthContext } from "../context/AuthContext";

const Logout = () => {
  const { logout } = useContext(AuthContext);
  const navigate = useNavigate();

  return (
    // Logout button
    <button
      onClick={async () => {
        await logout(); // Call logout function
        navigate("/"); // Redirect to homepage
      }}
      className="mx-1 flex items-center justify-center gap-1 rounded-2xl bg-[#D84040] px-3 py-1 font-semibold transition-all hover:cursor-pointer hover:bg-[#ff2d2d] md:text-[17px] 2xl:text-xl"
    >
      Logout <LuLogOut />
    </button>
  );
};

export default Logout;
