import React, { useContext } from "react";
import { useNavigate } from "react-router";
import { AuthContext } from "../../context/AuthContext";

// TemplateTile Component
const TemplateTile = ({ templateName }) => {
  const navigate = useNavigate();
  const { user, setShowLoginModal } = useContext(AuthContext); // Accessing authentication state

  // Handles template selection
  const handleSelectTemplate = () => {
    // !user ? setShowLoginModal(true) : navigate(`/resumeform/${templateName}`);
    if (user && templateName === "basic") {
      navigate(`/resumeform/${templateName}`);
    } else if (!user) {
      setShowLoginModal(true);
    } else {
      alert("Available Soon!!");
    }
  };

  return (
    <div
      onClick={handleSelectTemplate}
      className="w-64 cursor-pointer rounded-lg border border-[#ff9090] pt-2 transition-shadow hover:shadow-md hover:shadow-amber-700"
    >
      {/* Template Image */}
      <img className="px-2" src="SampleResume.png" alt="Resume Template" />

      {/* Template Name */}
      <p className="my-1 text-xl font-semibold text-gray-50 capitalize">
        {templateName}
      </p>
    </div>
  );
};

export default TemplateTile;
