import React from "react";

const Skills = ({ skills }) => {
  if (skills.length === 0) return "";
  return (
    <div className="no-break text-center">
      <h2 className="mx-5 border-b pb-1 text-xl font-medium text-gray-700">
        Skills
      </h2>
      <section className="flex flex-wrap justify-center">
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
