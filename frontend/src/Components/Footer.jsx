import React, { useContext } from "react";
import { Link } from "react-router"; // For internal navigation
import { AuthContext } from "../context/AuthContext"; // Context for auth state

const Footer = () => {
  // Destructure auth-related values from context
  const { user, setShowLoginModal, setShowRegisterModal, logout } =
    useContext(AuthContext);

  return (
    // Main footer container
    <div className="flex h-55 w-full cursor-default flex-col items-center justify-between rounded-t-4xl bg-linear-to-br from-[#D84040] to-[#8E1616] print:hidden">
      {/* Top Section: Logo and Links */}
      <section className="grid h-full w-[80%] grid-cols-1 py-5 md:grid-cols-2">
        {/* Left Side: Logo and Tagline */}
        <div className="flex flex-col items-center justify-center md:justify-normal">
          <div className="text-center md:text-start">
            <Link
              className="text-4xl font-bold text-red-100 2xl:text-5xl"
              to={"/"}
            >
              ResuFusion
            </Link>
            <p className="text-xl text-red-300 2xl:text-2xl">
              Fusion of Design and Purpose
            </p>
          </div>
        </div>

        {/* Right Side: Navigation Links */}
        <div className="hidden justify-evenly md:flex">
          {/* Static Navigation Links */}
          <div>
            <p className="text-xl text-red-100 2xl:text-2xl">Links</p>
            <ul className="[&>li]:text-red-300 [&>li]:hover:text-red-200 2xl:[&>li]:text-lg">
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

          {/* Conditional Links Based on Authentication */}
          <div>
            <p className="text-xl text-red-100 2xl:text-2xl">More</p>
            <ul className="text-red-300 2xl:[&>li]:text-lg [&>li>button]:cursor-pointer [&>li>button]:hover:text-red-200">
              {!user ? (
                // If not logged in, show Login and Sign Up buttons
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
                // If logged in, show Dashboard and Logout options
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

      {/* Bottom Section: Copyright */}
      <section className="flex w-[80%] justify-between border-t-2 py-4">
        <p className="mx-auto text-center text-lg text-red-200 md:mx-0 2xl:text-xl">
          © 2025{" "}
          <span className="relative rounded-sm bg-[#EEEEEE] px-1 text-[#1D1616]">
            ResuFusion
            <span className="absolute -right-[50px] text-xs text-red-200 md:hidden">
              Beta v0.8
            </span>
          </span>{" "}
          <br className="md:hidden" />
          <a
            className="group text-white"
            href="https://divyansh-jitpure.web.app/"
            target="_blank"
          >
            @
            <span className="group-hover:text-red-300 group-hover:underline">
              Divyansh Jitpure
            </span>
          </a>
          <span className="hidden md:inline"> - </span>
          <br className="md:hidden" /> All Rights Reserved
        </p>

        {/* Version Info */}
        <span className="hidden text-red-200 md:block 2xl:text-lg">
          Beta v0.8
        </span>
      </section>
    </div>
  );
};

export default Footer;
