import React from "react";

const FormWrapper = ({ title, children }) => {
  return (
    <>
      <h2 className="mb-8 text-center">{title}</h2>
      <div className="gap-[1rem .5rem] grid-cols-2 grid justify-start">
        {children}
      </div>
    </>
  );
};

export default FormWrapper;
