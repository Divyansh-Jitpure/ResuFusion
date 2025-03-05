import React, { useContext, useEffect, useRef } from "react";
import LoginForm from "./LoginForm";
import { RiCloseLargeFill } from "react-icons/ri";
import { LuLogIn } from "react-icons/lu";
import { AuthContext } from "../../context/AuthContext";

const Login = () => {
  const { showLoginModal, setShowLoginModal } = useContext(AuthContext);
  const diaRef = useRef();
  const loginBtn = useRef();

  const closeDia = () => {
    diaRef.current?.close();
    document.body.style.overflow = "";
  };

  const openDia = () => {
    diaRef.current?.showModal();
    document.body.style.overflow = "hidden";
  };

  showLoginModal ? openDia() : closeDia();

  return (
    <main>
      <dialog
        className="m-auto rounded-xl bg-[#1D1616]/80 backdrop-blur-md backdrop:bg-black/40"
        ref={diaRef}
      >
        <button
          className="absolute right-0 z-10 m-2"
          onClick={() => {
            setShowLoginModal(false);
          }}
        >
          <RiCloseLargeFill className="m-2 cursor-pointer text-xl text-white" />
        </button>
        <LoginForm />
      </dialog>

      <button
        onClick={() => setShowLoginModal(true)}
        ref={loginBtn}
        className="mx-1 flex items-center gap-1 rounded-2xl bg-[#D84040] px-3 py-1 text-[17px] font-medium transition-all hover:cursor-pointer hover:bg-[#ff2d2d]"
      >
        Login <LuLogIn className="text-xl" />
      </button>
    </main>
  );
};

export default Login;
