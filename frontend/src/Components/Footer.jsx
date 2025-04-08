import React, { useContext } from "react";
import { Link } from "react-router";
import { AuthContext } from "../context/AuthContext";

const Footer = () => {
  const { user, setShowLoginModal, setShowRegisterModal, logout } =
    useContext(AuthContext);
  return (
    <div className="flex h-50 w-full cursor-default flex-col items-center justify-between rounded-t-4xl bg-linear-to-br from-[#D84040] to-[#8E1616]">
      <section className="grid h-full w-[80%] grid-cols-2 p-2">
        <div className="flex flex-col items-center">
          <div>
            <Link
              className="text-4xl font-bold text-red-100 2xl:text-5xl"
              to={"/"}
            >
              ResuFusion
            </Link>
            <p className="text-xl text-red-300">Fusion of Design and Purpose</p>
          </div>
        </div>
        <div className="flex justify-evenly">
          <div className="">
            <p className="text-xl text-red-100">Links</p>
            <ul className="[&>li]:text-red-300 [&>li]:hover:text-red-200">
              <li>
                <Link to={"/"}>Home</Link>
              </li>
              <li>
                <Link to={"/templates"}>Templates</Link>
              </li>
              <li>
                <Link to={"/about"}>About</Link>
              </li>
            </ul>
          </div>
          <div className="">
            <p className="text-xl text-red-100">More</p>
            <ul className="text-red-300 [&>li>button]:cursor-pointer [&>li>button]:hover:text-red-200">
              {!user ? (
                <>
                  <li>
                    <button onClick={() => setShowLoginModal(true)}>
                      Login
                    </button>
                  </li>
                  <li>
                    <button onClick={() => setShowRegisterModal(true)}>
                      Sign Up
                    </button>
                  </li>
                </>
              ) : (
                <>
                  <li>
                    <Link to={"/dashboard"}>Dashboard</Link>
                  </li>
                  <li>
                    <button onClick={logout}>Logout</button>
                  </li>
                </>
              )}
            </ul>
          </div>
        </div>
      </section>
      <section className="flex w-[80%] justify-between border-t-2 py-4">
        <p className="text-lg text-red-200 2xl:text-xl">
          © 2025{" "}
          <span className="rounded-sm bg-[#EEEEEE] px-1 text-[#1D1616]">
            ResuFusion
          </span>{" "}
          <a
            className="group text-white"
            href="https://divyansh-jitpure.web.app/"
            target="_blank"
          >
            @
            <span className="group-hover:text-red-300 group-hover:underline">
              Divyansh Jitpure
            </span>
          </a>{" "}
          - All Rights Reserved
        </p>
        <span className="text-red-200">Beta v0.5</span>
      </section>
    </div>
  );
};

export default Footer;
