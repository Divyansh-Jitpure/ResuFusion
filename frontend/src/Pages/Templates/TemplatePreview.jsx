import React from "react";

const TemplatePreview = ({ templateName, handleSelectTemplate }) => {
  return (
    <div className="h-[70vh] w-[80vw] overflow-auto md:h-[90vh] md:w-[60vw]">
      {templateName === "basic" ? (
        <>
          <h2 className="my-4 text-2xl font-semibold text-white capitalize 2xl:text-3xl">
            {templateName} Template Preview
          </h2>
          <button
            className="cursor-pointer rounded bg-[#D84040] px-2 py-1 text-white hover:bg-[#ff2d2d] 2xl:text-xl"
            onClick={handleSelectTemplate}
          >
            Click To Start Crafting Resume
          </button>
          <img className="mx-auto my-4 w-[80%]" src="BasicResume.jpeg" alt="" />
        </>
      ) : (
        <div className="flex h-full flex-col justify-center">
          <span className="text-3xl text-white">Coming Soon..</span>
        </div>
      )}
    </div>
  );
};

export default TemplatePreview;
