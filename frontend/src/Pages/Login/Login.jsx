import React, { useRef } from "react";
import LoginForm from "./LoginForm";
import { RiCloseLargeFill } from "react-icons/ri";

const Login = () => {
  const diaRef = useRef();

  const closeDia = () => {
    diaRef.current?.close();
    document.body.style.overflow = "";
  };

  const openDia = () => {
    diaRef.current?.showModal();
    document.body.style.overflow = "hidden";
    diaRef.current?.addEventListener("close", closeDia);

    return () => {
      diaRef.current?.removeEventListener("close", closeDia);
    };
  };

  return (
    <main>
      <dialog
        className="m-auto rounded-xl bg-[#1D1616]/80 backdrop-blur-md backdrop:bg-black/40"
        ref={diaRef}
      >
        <button className="absolute top-0 right-0 m-4" onClick={closeDia}>
          <RiCloseLargeFill className="m-2 cursor-pointer text-xl text-white" />
        </button>
        <LoginForm />
      </dialog>

      <button
        onClick={openDia}
        className="mx-1 rounded-2xl bg-[#D84040] px-3 py-1 text-[17px] font-medium transition-all hover:cursor-pointer hover:bg-[#ff2d2d]"
      >
        Login
      </button>
    </main>
  );
};

export default Login;
