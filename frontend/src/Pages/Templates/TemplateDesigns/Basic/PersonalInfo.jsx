import React from "react";

const PersonalInfo = ({ personalInfo }) => {
  return (
    <div className="no-break flex flex-col items-center">
      <h1 className="font-medium md:text-4xl">{personalInfo.fullName}</h1>
      {/* Add this in the resume Form Later \/ */}
      <h2 className="text-xs font-medium text-gray-700 md:text-xl">
        {personalInfo.title}
      </h2>
      <section className="flex gap-1 text-[10px] text-gray-500 md:gap-2 md:text-base">
        <div className="">{personalInfo.email}</div> |
        <div className="">{personalInfo.phone}</div> |
        <div className="">{personalInfo.address}</div>
      </section>
    </div>
  );
};

export default PersonalInfo;
