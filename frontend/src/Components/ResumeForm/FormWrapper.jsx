import React from "react";

const FormWrapper = ({ title, children }) => {
  return (
    <div>
      <h2 className="mb-8 text-center text-2xl font-semibold underline">
        {title}
      </h2>
      <div className="grid grid-cols-2 justify-start mb-5 gap-2 text-lg [&>input,textarea]:rounded [&>input,textarea]:border [&>input,textarea]:p-1 [&>label]:font-semibold">
        {children}
      </div>
    </div>
  );
};

export default FormWrapper;
