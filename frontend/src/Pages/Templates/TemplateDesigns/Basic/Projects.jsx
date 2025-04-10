import React from "react";

const Projects = ({ projects }) => {
  if (projects.length === 0) return "";
  return (
    <div className="no-break">
      <h2 className="mx-2 border-b pb-1 text-center text-xs font-medium text-gray-700 md:mx-5 md:text-xl print:mx-5 print:text-xl">
        Projects
      </h2>
      <div className="flex flex-col gap-2 text-[8px] md:text-base print:text-base">
        {projects.map((item, index) => {
          return (
            <div key={index} className="mx-4 md:mx-10 print:mx-10">
              <section className="flex gap-2">
                <span>{item.projectName}</span>
                {item.projectLink && (
                  <a
                    href={item.projectLink}
                    target="_blank"
                    className="text-gray-500"
                  >
                    (Project Link)
                  </a>
                )}
              </section>
              <section>
                Skills / Tech Stack -{" "}
                <span className="text-gray-500">{item.techStack}</span>
              </section>
              {item.description.length !== 0 && item.description[0] !== "" && (
                <section className="ml-2 md:ml-5 print:ml-5">
                  {item.description.map((desc, i) => (
                    <p key={i}>
                      • <span className="text-gray-500">{desc}</span>
                    </p>
                  ))}
                </section>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Projects;
