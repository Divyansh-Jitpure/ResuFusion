import React from "react";

const Projects = ({ projects }) => {
  if (projects.length === 0) return "";
  return (
    <div className="no-break">
      <h2 className="mx-5 border-b pb-1 text-center text-xl font-medium text-gray-700">
        Projects
      </h2>
      <div className="flex flex-col gap-2">
        {projects.map((item, index) => {
          return (
            <div key={index} className="mx-10">
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
                <section>
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
