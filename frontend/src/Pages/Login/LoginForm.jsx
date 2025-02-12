import React from "react";

const LoginForm = () => {
  return (
    <div className="flex h-[80vh] w-[80vw]">
      <section className="flex w-[40%] flex-col items-center justify-center gap-10 2xl:gap-16">
        <h2 className="pb-1 text-3xl font-bold text-[#ff3a3a] 2xl:text-5xl">
          Sign In
        </h2>
        <div className="flex flex-col gap-3">
          <label className="flex flex-col gap-1 text-white">
            Email/Username
            <input
              className="w-[40vh] rounded border-1 border-slate-300 p-1"
              type="text"
              placeholder="Enter Email/Username"
            />
          </label>
          <label className="flex flex-col gap-1 text-white">
            Password
            <input
              className="rounded border-1 border-slate-300 p-1"
              type="password"
              placeholder="Enter Password"
            />
          </label>
        </div>
        <button className="mx-1 rounded-md bg-[#ff3a3a] px-4 py-1 pb-2 font-medium text-white transition-all hover:cursor-pointer hover:bg-[#ff2d2d9c] 2xl:text-xl">
          Sign In
        </button>
      </section>
      <section className="w-[60%]">
        <img className="h-full w-full" src="loginBG2.png" alt="" />
      </section>
    </div>
  );
};

export default LoginForm;
