import React, { useContext, useEffect, useRef } from "react";
import LoginForm from "./LoginForm";
import { RiCloseLargeFill } from "react-icons/ri";
import { LuLogIn } from "react-icons/lu";
import { AuthContext } from "../../context/AuthContext";
import { Toaster } from "sonner";

const Login = () => {
  const { showLoginModal, setShowLoginModal } = useContext(AuthContext); // Login modal state from context
  const diaRef = useRef(); // Ref for the dialog element

  // Close the login modal
  const closeDia = () => {
    diaRef.current?.close();
    document.body.style.overflow = ""; // Restore page scrolling
  };

  // Open the login modal
  const openDia = () => {
    diaRef.current?.showModal();
    document.body.style.overflow = "hidden"; // Prevent background scrolling when modal is open
  };

  // Open/close modal based on state
  showLoginModal ? openDia() : closeDia();

  return (
    <main>
      {/* Login Modal */}

      <dialog
        className="z-[9000] m-auto rounded-xl bg-[#1D1616]/80 backdrop-blur-md backdrop:bg-black/40"
        ref={diaRef}
      >
        {/* Close Button */}
        <button
          className="absolute right-0 z-10 m-2"
          onClick={() => setShowLoginModal(false)}
        >
          <RiCloseLargeFill className="m-2 cursor-pointer text-xl text-white" />
        </button>

        {/* Login Form Component */}
        <LoginForm />
      </dialog>

      {/* Login Button */}
      <button
        onClick={() => setShowLoginModal(true)}
        className="mx-1 flex items-center gap-1 rounded-2xl bg-[#D84040] px-3 py-1 text-[17px] font-medium transition-all hover:cursor-pointer hover:bg-[#ff2d2d] 2xl:text-xl"
      >
        Login <LuLogIn className="text-xl" />
      </button>
    </main>
  );
};

export default Login;
