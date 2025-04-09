import React from "react";
import TemplateTile from "./TemplateTile";

//Templates Component
const Templates = () => {
  const templateTypes = ["basic", "creative", "modern"];
  return (
    <div className="mb-15 flex min-h-screen cursor-default flex-col items-center">
      {/* Heading Section */}
      <h1 className="mt-22 text-4xl font-semibold text-gray-50">
        Resume Templates
      </h1>
      <p className="mx-5 mt-3 w-[80%] text-center text-xl text-gray-300 md:w-full">
        Select Any Template Of Your Choice To Create An Amazing Resume
      </p>

      {/* Templates Section */}
      <section className="mt-10 flex w-[85%] flex-wrap justify-center gap-5 text-center">
        {templateTypes.map((temp, index) => {
          return <TemplateTile templateName={temp} key={index} />;
        })}
      </section>
    </div>
  );
};

export default Templates;
