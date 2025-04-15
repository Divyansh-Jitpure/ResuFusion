import React, { useContext, useEffect, useRef } from "react";
import { RiCloseLargeFill } from "react-icons/ri";
import RegisterForm from "./RegisterForm";
import { AuthContext } from "../../context/AuthContext";

const Register = () => {
  const { showRegisterModal, setShowRegisterModal } = useContext(AuthContext);
  const diaRef = useRef();

  // Open/Close dialog when state changes
  useEffect(() => {
    const dialog = diaRef.current;
    if (!dialog) return;

    if (showRegisterModal && !dialog.open) {
      dialog.showModal();
      document.body.style.overflow = "hidden"; // Lock scroll
    } else if (!showRegisterModal && dialog.open) {
      dialog.close();
      document.body.style.overflow = ""; // Restore scroll
    }
  }, [showRegisterModal]);

  // Ensure scroll unlocks when dialog is closed any other way
  useEffect(() => {
    const dialog = diaRef.current;
    if (!dialog) return;

    const handleClose = () => {
      document.body.style.overflow = "";
      setShowRegisterModal(false); // Sync state
    };

    dialog.addEventListener("close", handleClose);
    return () => dialog.removeEventListener("close", handleClose);
  }, [setShowRegisterModal]);

  // Auto-close register modal on mobile resize
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 768 && showRegisterModal) {
        setShowRegisterModal(false);
      }
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [showRegisterModal, setShowRegisterModal]);

  return (
    <main>
      <dialog
        className="m-auto rounded-xl bg-[#1D1616]/80 backdrop-blur-md backdrop:bg-black/40"
        ref={diaRef}
      >
        <button
          className="absolute right-0 z-10 m-2"
          onClick={() => setShowRegisterModal(false)}
        >
          <RiCloseLargeFill className="m-2 cursor-pointer text-xl text-white" />
        </button>
        <RegisterForm />
      </dialog>

      <button
        onClick={() => setShowRegisterModal(true)}
        className="mx-1 mt-[2px] rounded-2xl bg-[#ffb0b0] px-3 py-1 font-semibold transition-all hover:bg-[#ff9090] md:mt-0 md:text-[17px] 2xl:text-xl"
      >
        SignUp
      </button>
    </main>
  );
};

export default Register;
