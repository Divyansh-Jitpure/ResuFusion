import React, { useContext, useEffect, useRef } from "react";
import { RiCloseLargeFill } from "react-icons/ri";
import RegisterForm from "./RegisterForm";
import { AuthContext } from "../../context/AuthContext";

const MobileRegister = () => {
  const { showMobileRegisterModal, setShowMobileRegisterModal } =
    useContext(AuthContext); // Register modal state from context
  const diaRef = useRef(); // Ref for the dialog element

  // Open/Close dialog when state changes
  useEffect(() => {
    const dialog = diaRef.current;
    if (!dialog) return;

    if (showMobileRegisterModal) {
      dialog.showModal();
      document.body.style.overflow = "hidden"; // Lock scroll
    } else {
      dialog.close();
      document.body.style.overflow = ""; // Restore scroll
    }
  }, [showMobileRegisterModal]);

  // Close register modal on resize to mobile
  useEffect(() => {
    const handleResize = () => {
      const isMobile = window.innerWidth >= 768;
      if (isMobile && showMobileRegisterModal) {
        setShowMobileRegisterModal(false);
      }
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [showMobileRegisterModal, setShowMobileRegisterModal]);

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
          onClick={() => setShowMobileRegisterModal(false)}
        >
          <RiCloseLargeFill className="m-2 cursor-pointer text-xl text-white" />
        </button>

        {/* Register Form Component */}
        <RegisterForm />
      </dialog>

      {/* Sign Up Button */}
      <button
        onClick={() => setShowMobileRegisterModal(true)}
        className="mx-1 mt-[2px] rounded-2xl bg-[#ffb0b0] px-3 py-1 font-semibold transition-all hover:cursor-pointer hover:bg-[#ff9090] md:mt-0 md:text-[17px] 2xl:text-xl"
      >
        SignUp
      </button>
    </main>
  );
};

export default MobileRegister;
