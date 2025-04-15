import React, { useContext, useEffect, useRef } from "react";
import MobileLoginForm from "./MobileLoginForm";
import { RiCloseLargeFill } from "react-icons/ri";
import { LuLogIn } from "react-icons/lu";
import { AuthContext } from "../../context/AuthContext";

const MobileLogin = () => {
  const { showMobileLoginModal, setShowMobileLoginModal } =
    useContext(AuthContext);
  const diaRef = useRef();

  // Open/Close dialog when state changes
  useEffect(() => {
    const dialog = diaRef.current;
    if (!dialog) return;

    if (showMobileLoginModal && !dialog.open) {
      dialog.showModal();
      document.body.style.overflow = "hidden"; // Lock scroll
    } else if (!showMobileLoginModal && dialog.open) {
      dialog.close();
      document.body.style.overflow = ""; // Restore scroll
    }
  }, [showMobileLoginModal]);

  // Ensure scroll unlocks when dialog is closed any other way
  useEffect(() => {
    const dialog = diaRef.current;
    if (!dialog) return;

    const handleClose = () => {
      document.body.style.overflow = "";
      setShowMobileLoginModal(false); // Sync state
    };

    dialog.addEventListener("close", handleClose);
    return () => dialog.removeEventListener("close", handleClose);
  }, [setShowMobileLoginModal]);

  // Auto-close login modal on mobile resize
  useEffect(() => {
    const handleResize = () => {
      const isDesktop = window.innerWidth >= 768;

      // Close mobile login modal when resizing to desktop
      if (isDesktop && showMobileLoginModal) {
        setShowMobileLoginModal(false);
      }
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [showMobileLoginModal, setShowMobileLoginModal]);

  // showMobileLoginModal ? openDia() : closeDia();

  return (
    <main>
      {/* Login Modal */}
      <dialog
        className="m-auto rounded-xl bg-[#1D1616]/80 backdrop-blur-md backdrop:bg-black/40"
        ref={diaRef}
      >
        {/* Close Button */}
        <button
          className="absolute right-0 z-10 m-2"
          onClick={() => setShowMobileLoginModal(false)}
        >
          <RiCloseLargeFill className="m-2 cursor-pointer text-xl text-white" />
        </button>

        {/* Mobile Login Form Component */}
        <MobileLoginForm />
      </dialog>

      {/* Login Button */}
      <button
        onClick={() => setShowMobileLoginModal(true)}
        className="mx-1 flex items-center justify-center gap-1 rounded-2xl bg-[#D84040] px-3 py-1 font-semibold transition-all hover:cursor-pointer hover:bg-[#ff2d2d]"
      >
        Login
        <span className="hidden md:inline">
          <LuLogIn className="md:text-xl" />
        </span>
      </button>
    </main>
  );
};

export default MobileLogin;
