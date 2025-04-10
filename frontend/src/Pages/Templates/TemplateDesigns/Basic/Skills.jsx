import React from "react";

const Skills = ({ skills }) => {
  if (skills.length === 0) return "";
  return (
    <div className="no-break text-center">
      <h2 className="mx-2 border-b pb-1 text-center text-xs font-medium text-gray-700 md:mx-5 md:text-xl print:mx-5 print:text-xl">
        Skills
      </h2>
      <section className="mx-4 flex flex-wrap justify-center text-[8px] md:mx-10 md:text-base print:mx-10 print:text-base">
        {skills.map((skill, index) => {
          return (
            <span key={index} className="text-gray-600">
              {index > 0 && <span className="mx-2">•</span>}
              {skill}
            </span>
          );
        })}
      </section>
    </div>
  );
};

export default Skills;
