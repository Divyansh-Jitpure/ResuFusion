import React, { useRef } from "react";
import { RiCloseLargeFill } from "react-icons/ri";
import RegisterForm from "./RegisterForm";

const Register = () => {
  const diaRef = useRef();

  const closeDia = () => {
    diaRef.current?.close();
    document.body.style.overflow = "";
  };

  const openDia = () => {
    diaRef.current?.showModal();
    document.body.style.overflow = "hidden";
  };

  return (
    <main>
      <dialog
        className="m-auto rounded-xl bg-[#1D1616]/80 backdrop-blur-md backdrop:bg-black/40"
        ref={diaRef}
      >
        <button className="absolute right-0 z-10 m-2" onClick={closeDia}>
          <RiCloseLargeFill className="m-2 cursor-pointer text-xl text-white" />
        </button>
        <RegisterForm />
      </dialog>

      <button
        onClick={openDia}
        className="mx-1 rounded-2xl bg-[#ffb0b0] px-3 py-1 text-[17px] font-medium transition-all hover:cursor-pointer hover:bg-[#ff9090]"
      >
        Sign
      </button>
    </main>
  );
};

export default Register;
