import React, { useContext, useRef } from "react";
import { RiCloseLargeFill } from "react-icons/ri";
import RegisterForm from "./RegisterForm";
import { AuthContext } from "../../context/AuthContext";

const Register = () => {
  const { showRegisterModal, setShowRegisterModal } = useContext(AuthContext); // Register modal state from context
  const diaRef = useRef(); // Ref for the dialog element

  // Close the registration modal
  const closeDia = () => {
    diaRef.current?.close();
    document.body.style.overflow = ""; // Restore page scrolling
  };

  // Open the registration modal
  const openDia = () => {
    diaRef.current?.showModal();
    document.body.style.overflow = "hidden"; // Prevent background scrolling when modal is open
  };

  // Open/close modal based on state
  showRegisterModal ? openDia() : closeDia();

  return (
    <main>
      {/* Register Modal */}
      <dialog
        className="m-auto rounded-xl bg-[#1D1616]/80 backdrop-blur-md backdrop:bg-black/40"
        ref={diaRef}
      >
        {/* Close Button */}
        <button
          className="absolute right-0 z-10 m-2"
          onClick={() => setShowRegisterModal(false)}
        >
          <RiCloseLargeFill className="m-2 cursor-pointer text-xl text-white" />
        </button>

        {/* Register Form Component */}
        <RegisterForm />
      </dialog>

      {/* Sign Up Button */}
      <button
        onClick={() => setShowRegisterModal(true)}
        className="mx-1 rounded-2xl bg-[#ffb0b0] px-3 py-1 text-[17px] font-medium transition-all hover:cursor-pointer hover:bg-[#ff9090]"
      >
        Sign Up
      </button>
    </main>
  );
};

export default Register;
