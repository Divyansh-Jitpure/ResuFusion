import React, { useContext, useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router";
import { AuthContext } from "../../context/AuthContext";
import { MdRemoveRedEye } from "react-icons/md";
import TemplatePreview from "./TemplatePreview";
import { RiCloseLargeFill } from "react-icons/ri";

const TemplateTile = ({ templateName }) => {
  const [showPrevModal, setShowPrevModal] = useState(false);
  const navigate = useNavigate();
  const { user, setShowLoginModal, setShowMobileLoginModal } =
    useContext(AuthContext);
  const prevRef = useRef();

  // Sync modal with state
  useEffect(() => {
    const modal = prevRef.current;
    if (!modal) return;

    const handleDialogClose = () => {
      setShowPrevModal(false); // Reset state when closed via ESC or user interaction
      document.body.style.overflow = ""; // Restore scroll
    };

    modal.addEventListener("close", handleDialogClose);
    return () => modal.removeEventListener("close", handleDialogClose);
  }, []);

  useEffect(() => {
    if (showPrevModal) {
      prevRef.current?.showModal();
      document.body.style.overflow = "hidden";
    } else {
      prevRef.current?.close();
      document.body.style.overflow = "";
    }
  }, [showPrevModal]);

  const handleSelectTemplate = () => {
    if (user && templateName === "basic") {
      document.body.style.overflow = "";
      navigate(`/resumeform/${templateName}`);
    } else if (!user) {
      const isMobile = window.innerWidth < 768;
      if (isMobile) {
        setShowMobileLoginModal(true);
      } else {
        setShowLoginModal(true);
      }
    } else {
      alert("Available Soon!!");
    }
  };

  return (
    <div className="group relative w-64 rounded-lg border border-[#ff9090] pt-2 transition-shadow hover:shadow-md hover:shadow-amber-700">
      {/* Modal */}
      <dialog
        ref={prevRef}
        className="z-[9000] m-auto rounded-xl bg-[#1D1616]/80 backdrop-blur-md backdrop:bg-black/40"
      >
        <button
          className="absolute top-1 right-1 z-10 m-[2px] md:top-0 md:right-4"
          onClick={() => setShowPrevModal(false)}
        >
          <RiCloseLargeFill className="m-1 cursor-pointer text-xl text-white md:m-2" />
        </button>

        <TemplatePreview
          handleSelectTemplate={handleSelectTemplate}
          templateName={templateName}
        />
      </dialog>

      {/* Template image */}
      {templateName === "basic" ? (
        <img
          className="h-40 w-full object-cover object-top px-2"
          src="BasicResume.jpeg"
          alt="Resume Template"
        />
      ) : (
        <img className="px-2" src="coming soon.png" alt="Resume Template" />
      )}

      {/* Template name */}
      <p className="my-1 text-xl font-semibold text-gray-50 capitalize">
        {templateName}
      </p>

      {/* Preview Button */}
      <span
        onClick={() => setShowPrevModal(true)}
        className="absolute top-1/2 left-1/2 flex -translate-x-1/2 -translate-y-1/2 cursor-pointer gap-1 rounded-full border border-black bg-white/80 px-2 font-medium transition-all group-hover:visible hover:scale-125 md:invisible"
      >
        Preview <MdRemoveRedEye className="text-2xl" />
      </span>
    </div>
  );
};

export default TemplateTile;
