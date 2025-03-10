import React from "react";
import { useNavigate } from "react-router";

const DashboardBtn = () => {
  const navigate = useNavigate();

  return (
    <button
      onClick={() => {
        navigate("/dashboard"); // Redirect to homepage
      }}
      className="mx-1 rounded-2xl bg-[#ffb0b0] px-3 py-1 text-[17px] font-medium transition-all hover:cursor-pointer hover:bg-[#ff9090]"
    >
      Dashboard
    </button>
  );
};

export default DashboardBtn;
