import React from "react";
import TemplateTile from "./TemplateTile";

//Templates Component
const Templates = () => {
  return (
    <div className="flex flex-col items-center">
      {/* Heading Section */}
      <h1 className="mt-22 cursor-default text-4xl font-semibold text-gray-50">
        Resume Templates
      </h1>
      <p className="mt-2 cursor-default text-xl text-gray-300">
        Select Any Template Of Your Choice To Create An Amazing Resume
      </p>

      {/* Templates Section */}
      <section className="mt-10 flex w-[85%] flex-wrap justify-center gap-5 text-center">
        {/* Rendering multiple TemplateTile components */}
        {/* {[...Array(3)].map((_, index) => (
          <TemplateTile key={index} />
        ))} */}
        <TemplateTile templateName="basic" />
        <TemplateTile templateName="creative" />
        <TemplateTile templateName="modern" />
      </section>
    </div>
  );
};

export default Templates;
