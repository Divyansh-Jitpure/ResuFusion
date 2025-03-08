import React from "react";

const FormWrapper = ({ title, children }) => {
  return (
    <>
      <h2 className="mb-8 text-center text-white">{title}</h2>
      <div className="gap-[1rem .5rem] grid grid-cols-2 justify-start text-white">
        {children}
      </div>
    </>
  );
};

export default FormWrapper;
