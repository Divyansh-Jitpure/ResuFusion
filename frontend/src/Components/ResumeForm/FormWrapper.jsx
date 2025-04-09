import React from "react";

const FormWrapper = ({ title, children }) => {
  return (
    <div>
      <h2 className="mb-8 text-center text-2xl font-semibold underline">
        {title}
      </h2>
      <div className="mb-5 grid grid-cols-1 justify-start gap-2 text-lg md:grid-cols-2 [&>input,textarea,select]:col-span-2 [&>input,textarea,select]:rounded [&>input,textarea,select]:border [&>input,textarea,select]:p-1 md:[&>input,textarea,select]:col-span-1 [&>label]:font-semibold">
        {children}
      </div>
    </div>
  );
};

export default FormWrapper;
