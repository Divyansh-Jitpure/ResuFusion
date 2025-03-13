import React from "react";
import ResumeTile from "./ResumeTile";

const Dashboard = () => {
  return (
    <div className="flex flex-col items-center">
      {/* Heading Section */}
      <h1 className="mt-22 cursor-default text-4xl font-semibold text-gray-50">
        Your Documents
      </h1>
      <p className="mt-2 text-xl text-gray-300">
        View, Edit or Download all your resumes here.
      </p>
      <section className="mt-10 flex w-[85%] flex-wrap justify-center gap-5 text-center">
        {/* Rendering multiple ResumeTile components */}
        {/* {[...Array(3)].map((_, index) => (
          <ResumeTile key={index} />
        ))} */}
        <ResumeTile />
        <ResumeTile />
        <ResumeTile />
      </section>
    </div>
  );
};

export default Dashboard;
