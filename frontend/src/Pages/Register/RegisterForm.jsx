import React, { useContext, useState } from "react";
import { AuthContext } from "../../context/AuthContext";

const RegisterForm = () => {
  const { register, setShowRegisterModal } = useContext(AuthContext);
  const [userData, setUserData] = useState({ email: "", password: "" });
  const [error, setError] = useState("");

  const handleChange = (e) => {
    setUserData({ ...userData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await register(userData);
    } catch (err) {
      setError(err.error);
    }
  };

  return (
    <div className="flex h-[80vh] w-[70vw]">
      <section className="flex w-[40%] flex-col items-center justify-center gap-5 2xl:gap-16">
        <h2 className="pb-1 text-4xl font-bold text-[#ff3a3a] 2xl:text-5xl">
          Sign Up
        </h2>
        <form
          onSubmit={handleSubmit}
          className="flex flex-col items-center justify-center gap-5 2xl:gap-16"
        >
          <div className="flex flex-col gap-2 2xl:gap-3">
            <label className="flex flex-col gap-1 text-white">
              Username
              <input
                className="w-[40vh] rounded border-1 border-slate-300 p-1"
                type="text"
                placeholder="Enter Username"
                name="username"
                value={userData.username}
                onChange={handleChange}
                required
              />
            </label>
            <label className="flex flex-col gap-1 text-white">
              Email
              <input
                className="w-[40vh] rounded border-1 border-slate-300 p-1"
                type="email"
                placeholder="Enter Email"
                name="email"
                value={userData.email}
                onChange={handleChange}
                required
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
                required
              />
            </label>
            <label className="flex flex-col gap-1 text-white">
              Confirm Password
              <input
                className="rounded border-1 border-slate-300 p-1"
                type="password"
                placeholder="Enter Password"
                required
              />
            </label>
          </div>
          <button
            type="submit"
            className="mx-1 rounded-md bg-[#ff3a3a] px-4 py-1 pb-2 font-medium text-white transition-all hover:cursor-pointer hover:bg-[#ff2d2d9c] 2xl:text-xl"
          >
            Sign Up
          </button>
        </form>
      </section>
      <section className="relative w-[60%]">
        <img className="h-full w-full" src="regBG.png" alt="" />
        <span className="absolute bottom-10 left-1/2 flex w-full -translate-x-1/2 transform flex-col items-center text-white 2xl:bottom-18">
          <div>
            <span className="text-[32px] font-bold 2xl:text-5xl">
              Register To Create Your Account
            </span>
          </div>
        </span>
      </section>
    </div>
  );
};

export default RegisterForm;
