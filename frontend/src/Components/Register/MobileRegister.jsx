import React, { useContext, useEffect, useRef } from "react";
import { RiCloseLargeFill } from "react-icons/ri";
import MobileRegisterForm from "./MobileRegisterForm";
import { AuthContext } from "../../context/AuthContext";

const MobileRegister = () => {
  const { showMobileRegisterModal, setShowMobileRegisterModal } =
    useContext(AuthContext);
  const diaRef = useRef();

  useEffect(() => {
    const dialog = diaRef.current;
    if (!dialog) return;

    if (showMobileRegisterModal) {
      dialog.showModal();
      document.body.style.overflow = "hidden";
    } else {
      dialog.close();
      document.body.style.overflow = "";
    }
  }, [showMobileRegisterModal]);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768 && showMobileRegisterModal) {
        setShowMobileRegisterModal(false);
      }
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [showMobileRegisterModal, setShowMobileRegisterModal]);

  return (
    <main>
      <dialog
        className="m-auto rounded-xl bg-[#1D1616]/80 backdrop-blur-md backdrop:bg-black/40"
        ref={diaRef}
      >
        <button
          className="absolute right-0 z-10 m-2"
          onClick={() => setShowMobileRegisterModal(false)}
        >
          <RiCloseLargeFill className="m-2 cursor-pointer text-xl text-white" />
        </button>
        <MobileRegisterForm />
      </dialog>

      <button
        onClick={() => setShowMobileRegisterModal(true)}
        className="mx-1 rounded-2xl bg-[#ffb0b0] px-3 py-1 font-semibold transition-all hover:bg-[#ff9090] md:hidden"
      >
        SignUp
      </button>
    </main>
  );
};

export default MobileRegister;
