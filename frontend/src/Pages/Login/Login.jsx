import React, { useRef } from "react";
import LoginForm from "./LoginForm";
import { RiCloseLargeFill } from "react-icons/ri";
import { LuLogIn } from "react-icons/lu";

const Login = () => {
  const diaRef = useRef();

  const closeDia = (islogin) => {
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
        <LoginForm closeDia={closeDia} />
      </dialog>

      <button
        onClick={openDia}
        className="mx-1 flex items-center gap-1 rounded-2xl bg-[#D84040] px-3 py-1 font-medium transition-all *:text-[17px] hover:cursor-pointer hover:bg-[#ff2d2d]"
      >
        Login <LuLogIn />
      </button>
    </main>
  );
};

export default Login;
