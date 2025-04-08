import React from "react";
import { Link } from "react-router";

const Footer = () => {
  return (
    <div className="flex h-60 w-full cursor-default flex-col items-center justify-between rounded-t-4xl bg-linear-to-br from-[#D84040] to-[#8E1616]">
      <section className="flex">
        <span className="text-2xl font-bold text-[#ffb9b9] 2xl:text-3xl">
          <Link to={"/"}>ResuFusion</Link>
        </span>
      </section>
      <section className="w-[80%] border-t-2 py-4 text-center">
        <p className="text-lg text-gray-300 2xl:text-xl">
          © 2025{" "}
          <span className="rounded-sm bg-[#EEEEEE] px-1 text-[#1D1616]">
            ResuFusion
          </span>{" "}
          All Rights Reserved -{" "}
          <a
            className="group text-white"
            href="https://github.com/Divyansh-Jitpure"
            target="_blank"
          >
            @
            <span className="group-hover:text-[#ffd1d1] group-hover:underline">
              Divyansh Jitpure
            </span>
          </a>
        </p>
      </section>
    </div>
  );
};

export default Footer;
