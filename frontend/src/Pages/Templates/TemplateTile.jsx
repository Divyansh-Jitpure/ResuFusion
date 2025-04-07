import React, { useContext, useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router";
import { AuthContext } from "../../context/AuthContext";
import { MdRemoveRedEye } from "react-icons/md";
import TemplatePreview from "./TemplatePreview";
import { RiCloseLargeFill } from "react-icons/ri";

// TemplateTile Component
const TemplateTile = ({ templateName }) => {
  const [showPrevModal, setShowPrevModal] = useState(false);

  const navigate = useNavigate();
  const { user, setShowLoginModal } = useContext(AuthContext); // Accessing authentication state

  const prevRef = useRef();

  // Close the login modal
  const closeDia = () => {
    prevRef.current?.close();
    document.body.style.overflow = ""; // Restore page scrolling
  };

  // Open the login modal
  const openDia = () => {
    prevRef.current?.showModal();
    document.body.style.overflow = "hidden"; // Prevent background scrolling when modal is open
  };

  // Open/close modal based on state
  useEffect(() => {
    if (showPrevModal) openDia();
    else closeDia();
  }, [showPrevModal]);

  // Handles template selection
  const handleSelectTemplate = () => {
    // !user ? setShowLoginModal(true) : navigate(`/resumeform/${templateName}`);
    if (user && templateName === "basic") {
      document.body.style.overflow = "";
      navigate(`/resumeform/${templateName}`);
    } else if (!user) {
      setShowLoginModal(true);
    } else {
      alert("Available Soon!!");
    }
  };

  return (
    <div
      // onClick={handleSelectTemplate}
      className="group relative w-64 rounded-lg border border-[#ff9090] pt-2 transition-shadow hover:shadow-md hover:shadow-amber-700"
    >
      {/* Preview Modal */}
      <dialog
        ref={prevRef}
        className="z-[9000] m-auto rounded-xl bg-[#1D1616]/80 backdrop-blur-md backdrop:bg-black/40"
      >
        {/* Close Button */}
        <button
          className="absolute right-3 z-10 m-2"
          onClick={() => setShowPrevModal(false)}
        >
          <RiCloseLargeFill className="m-2 cursor-pointer text-xl text-white" />
        </button>

        <TemplatePreview
          handleSelectTemplate={handleSelectTemplate}
          templateName={templateName}
        />
      </dialog>

      {/* Template Image */}
      {templateName === "basic" ? (
        <img
          className="h-40 w-full object-cover object-top px-2"
          src="BasicResume.jpeg"
          alt="Resume Template"
        />
      ) : (
        <img className="px-2" src="coming soon.png" alt="Resume Template" />
      )}

      {/* Template Name */}
      <p className="my-1 text-xl font-semibold text-gray-50 capitalize">
        {templateName}
      </p>

      <span
        // onClick={() => navigate(`/resumePreview/${resumeId}`)}
        onClick={() => {
          setShowPrevModal(true);
        }}
        className="invisible absolute top-1/2 left-1/2 flex -translate-x-1/2 -translate-y-1/2 cursor-pointer gap-1 rounded-full border border-black bg-white/80 px-2 font-medium transition-all group-hover:visible hover:scale-125"
      >
        Preview <MdRemoveRedEye className="text-2xl" />
      </span>
    </div>
  );
};

export default TemplateTile;
