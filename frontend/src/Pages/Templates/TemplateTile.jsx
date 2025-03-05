import React, { useContext } from "react";
import { useNavigate } from "react-router";
import { AuthContext } from "../../context/AuthContext";
// import Login from "../Login/Login";

const TemplateTile = () => {
  const navigate = useNavigate();
  const { user, Login, setShowLoginModal } = useContext(AuthContext);

  const handleSelectTemplate = () => {
    !user ? setShowLoginModal(true) : navigate("/resumeform");
  };
  return (
    <div
      onClick={handleSelectTemplate}
      className="w-60 rounded-lg border-[1px] border-[#ff9090] pt-2 hover:cursor-pointer"
    >
      <img className="px-2" src="SampleResume.png" alt="" />
      <p className="my-1 text-[#EEEEEE]">Template Name</p>
    </div>
  );
};

export default TemplateTile;
