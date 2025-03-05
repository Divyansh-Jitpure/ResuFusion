import React, { useContext, useState } from "react";
import { AuthContext } from "../../context/AuthContext";

const LoginForm = () => {
  const { login } = useContext(AuthContext);
  const [userData, setUserData] = useState({ email: "", password: "" });
  const [error, setError] = useState("");

  const handleChange = (e) => {
    setUserData({ ...userData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await login(userData);
    } catch (err) {
      setError(err.error);
    }
  };

  return (
    <div className="flex h-[80vh] w-[70vw]">
      {/* Left Section => Login Form*/}
      <section className="flex w-[40%] flex-col items-center justify-center gap-10 2xl:gap-16">
        <h2 className="pb-1 text-4xl font-bold text-[#ff3a3a] 2xl:text-5xl">
          Sign In
        </h2>
        <form
          onSubmit={handleSubmit}
          className="flex flex-col items-center justify-center gap-10 2xl:gap-16"
        >
          <div className="flex flex-col gap-3">
            <label className="flex flex-col gap-1 text-white">
              Email/Username
              <input
                className="w-[40vh] rounded border-1 border-slate-300 p-1"
                type="email"
                placeholder="Enter Email/Username"
                name="email"
                value={userData.email}
                onChange={handleChange}
              />
            </label>
            <label className="flex flex-col gap-1 text-white">
              Password
              <input
                className="rounded border-1 border-slate-300 p-1"
                type="password"
                placeholder="Enter Password"
                name="password"
                value={userData.password}
                onChange={handleChange}
              />
            </label>
          </div>
          <button
            type="submit"
            className="mx-1 rounded-md bg-[#ff3a3a] px-4 py-1 pb-2 font-medium text-white transition-all hover:cursor-pointer hover:bg-[#ff2d2d9c] 2xl:text-xl"
          >
            Login
          </button>
        </form>
      </section>
      {/* Right Section */}
      <section className="relative w-[60%]">
        <img className="h-full w-full" src="loginBG2.png" alt="" />
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
