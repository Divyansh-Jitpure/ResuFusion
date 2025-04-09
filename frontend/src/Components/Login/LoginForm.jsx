import React, { useContext, useState } from "react";
import { AuthContext } from "../../context/AuthContext";
import { Toaster } from "sonner";

const LoginForm = () => {
  const { login, showLoginModal } = useContext(AuthContext); // Login function from AuthContext
  const [userData, setUserData] = useState({ email: "", password: "" }); // State to manage user input
  const [error, setError] = useState(""); // State to handle errors

  // Handle input changes and update state
  const handleChange = (e) => {
    setUserData({ ...userData, [e.target.name]: e.target.value });
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await login(userData);
    } catch (err) {
      setError(err.error);
    }
  };

  return (
    <div className="flex h-[70vh] w-[80vw] justify-center md:h-[80vh] md:w-[70vw]">
      {showLoginModal && <Toaster position="top-center" richColors />}

      {/* Left Section => Login Form */}
      <section className="flex flex-col items-center justify-center gap-5 md:w-[40%] md:gap-10 2xl:gap-16">
        <h2 className="pb-1 text-4xl font-bold text-[#ff3a3a] 2xl:text-5xl">
          Sign In
        </h2>
        <form
          onSubmit={handleSubmit}
          className="flex flex-col items-center justify-center gap-10 2xl:gap-16"
        >
          <div className="flex flex-col gap-3">
            {/* Email Input */}
            <label className="flex flex-col gap-1 text-white">Email</label>
            <input
              className="w-[60vw] rounded border-1 border-slate-300 p-1 text-white md:w-[20vw]"
              type="email"
              placeholder="Enter Email"
              name="email"
              required
              value={userData.email}
              onChange={handleChange}
            />
            {/* Password Input */}
            <label className="flex flex-col gap-1 text-white">
              Password
              <input
                className="rounded border-1 border-slate-300 p-1"
                type="password"
                required
                placeholder="Enter Password"
                name="password"
                value={userData.password}
                onChange={handleChange}
              />
            </label>
          </div>
          {/* Login Button */}
          <button
            type="submit"
            className="mx-1 rounded-md bg-[#ff3a3a] px-4 py-1 pb-2 font-medium text-white transition-all hover:cursor-pointer hover:bg-[#ff2d2d9c] 2xl:text-xl"
          >
            Login
          </button>
        </form>
      </section>

      {/* Right Section => Background Image & Text */}
      <section className="relative hidden w-[60%] md:block">
        <img
          className="h-full w-full"
          src="loginBG2.png"
          alt="Login Background"
        />
        <span className="absolute bottom-6 left-1/2 flex w-full -translate-x-1/2 transform flex-col items-center text-white 2xl:bottom-10">
          <div>
            <span className="text-4xl font-bold 2xl:text-6xl">
              Log Into Your Account
            </span>
            <br />
            <span className="text-xl text-white/60 2xl:text-3xl">
              To access all your documents
            </span>
          </div>
        </span>
      </section>
    </div>
  );
};

export default LoginForm;
