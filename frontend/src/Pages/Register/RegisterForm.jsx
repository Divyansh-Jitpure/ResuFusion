import React from "react";

const RegisterForm = () => {
  return (
    <div className="flex h-[80vh] w-[70vw]">
      <section className="flex w-[40%] flex-col items-center justify-center gap-5 2xl:gap-16">
        <h2 className="pb-1 text-4xl font-bold text-[#ff3a3a] 2xl:text-5xl">
          Sign Up
        </h2>
        <div className="flex flex-col gap-2 2xl:gap-3">
          <div className="flex gap-3 2xl:gap-4">
            <label className="flex flex-col gap-1 text-white">
              First Name
              <input
                className="w-[19vh] rounded border-1 border-slate-300 p-1"
                type="text"
                placeholder="First Name"
              />
            </label>
            <label className="flex flex-col gap-1 text-white">
              Last Name
              <input
                className="w-[19vh] rounded border-1 border-slate-300 p-1"
                type="text"
                placeholder="Last Name"
              />
            </label>
          </div>
          <label className="flex flex-col gap-1 text-white">
            Email/Username
            <input
              className="w-[40vh] rounded border-1 border-slate-300 p-1"
              type="email"
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
          <label className="flex flex-col gap-1 text-white">
            Confirm Password
            <input
              className="rounded border-1 border-slate-300 p-1"
              type="password"
              placeholder="Enter Password"
            />
          </label>
        </div>
        <button className="mx-1 rounded-md bg-[#ff3a3a] px-4 py-1 pb-2 font-medium text-white transition-all hover:cursor-pointer hover:bg-[#ff2d2d9c] 2xl:text-xl">
          Sign Up
        </button>
      </section>
      <section className="w-[60%]">
        <img className="h-full w-full" src="regBG.png" alt="" />
      </section>
    </div>
  );
};

export default RegisterForm;
