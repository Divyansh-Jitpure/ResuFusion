import React, { useContext } from "react";
import { useNavigate } from "react-router";
import { AuthContext } from "../../context/AuthContext";

// TemplateTile Component
const TemplateTile = () => {
  const navigate = useNavigate();
  const { user, setShowLoginModal } = useContext(AuthContext); // Accessing authentication state

  // Handles template selection
  const handleSelectTemplate = () => {
    !user ? setShowLoginModal(true) : navigate("/resumeform");
  };

  return (
    <div
      onClick={handleSelectTemplate}
      className="w-60 rounded-lg border-[1px] border-[#ff9090] pt-2 hover:cursor-pointer"
    >
      {/* Template Image */}
      <img className="px-2" src="SampleResume.png" alt="Resume Template" />

      {/* Template Name */}
      <p className="my-1 text-[#EEEEEE]">Template Name</p>
    </div>
  );
};

export default TemplateTile;
