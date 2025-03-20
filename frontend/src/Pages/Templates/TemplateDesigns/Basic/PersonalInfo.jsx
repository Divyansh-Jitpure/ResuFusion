import React from "react";

const PersonalInfo = ({ personalInfo }) => {
  return (
    <div className="mt-2 flex flex-col items-center">
      <h1 className="text-4xl font-medium">{personalInfo.fullName}</h1>
      {/* Add this in the resume Form Later \/ */}
      <h2 className="text-xl font-medium text-gray-700">
        {personalInfo.title}
      </h2>
      <section className="flex gap-2 text-gray-500">
        <div className="">{personalInfo.email}</div> |
        <div className="">{personalInfo.phone}</div> |
        <div className="">{personalInfo.address}</div>
      </section>
    </div>
  );
};

export default PersonalInfo;
