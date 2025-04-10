import React, { useContext, useEffect, useRef } from "react";
import LoginForm from "./LoginForm";
import { RiCloseLargeFill } from "react-icons/ri";
import { LuLogIn } from "react-icons/lu";
import { AuthContext } from "../../context/AuthContext";

const Login = () => {
  const { showLoginModal, setShowLoginModal } = useContext(AuthContext);
  const diaRef = useRef();

  // Open/Close dialog when state changes
  useEffect(() => {
    const dialog = diaRef.current;
    if (!dialog) return;

    if (showLoginModal && !dialog.open) {
      dialog.showModal();
      document.body.style.overflow = "hidden"; // Lock scroll
    } else if (!showLoginModal && dialog.open) {
      dialog.close();
      document.body.style.overflow = ""; // Restore scroll
    }
  }, [showLoginModal]);

  // Ensure scroll unlocks when dialog is closed any other way
  useEffect(() => {
    const dialog = diaRef.current;
    if (!dialog) return;

    const handleClose = () => {
      document.body.style.overflow = "";
      setShowLoginModal(false); // Sync state
    };

    dialog.addEventListener("close", handleClose);
    return () => dialog.removeEventListener("close", handleClose);
  }, [setShowLoginModal]);

  // Auto-close login modal on mobile resize
  useEffect(() => {
    const handleResize = () => {
      const isMobile = window.innerWidth < 768;
      if (isMobile && showLoginModal) {
        setShowLoginModal(false);
      }
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [showLoginModal, setShowLoginModal]);

  return (
    <main>
      {/* Login Modal */}
      <dialog
        ref={diaRef}
        className="m-auto rounded-xl bg-[#1D1616]/80 backdrop-blur-md backdrop:bg-black/40"
      >
        {/* Close Button */}
        <button
          className="absolute right-0 z-10 m-2"
          onClick={() => setShowLoginModal(false)}
        >
          <RiCloseLargeFill className="m-2 cursor-pointer text-xl text-white" />
        </button>

        {/* Login Form */}
        <LoginForm onSuccess={() => setShowLoginModal(false)} />
      </dialog>

      {/* Login Button */}
      <button
        onClick={() => setShowLoginModal(true)}
        className="mx-1 flex items-center justify-center gap-1 rounded-2xl bg-[#D84040] px-3 py-1 font-semibold transition-all hover:cursor-pointer hover:bg-[#ff2d2d] md:text-[17px] 2xl:text-xl"
      >
        Login
        <span className="hidden md:inline">
          <LuLogIn className="md:text-xl" />
        </span>
      </button>
    </main>
  );
};

export default Login;
