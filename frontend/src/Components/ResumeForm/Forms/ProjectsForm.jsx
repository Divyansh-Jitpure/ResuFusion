import React from "react";
import FormWrapper from "../FormWrapper";
import { MdDelete } from "react-icons/md";

const ProjectsForm = ({ projects, updateFields }) => {
  const addProject = () => {
    updateFields({
      projects: [
        ...projects,
        {
          projectName: "",
          projectLink: "",
          teckStack: "",
          description: [""],
        },
      ],
    });
  };

  const removeProject = (index) => {
    const updatedProjects = projects.filter((_, i) => i !== index);
    updateFields({ projects: updatedProjects });
  };

  const addDescription = (index) => {
    const updatedProjects = projects.map((project, i) =>
      i === index
        ? { ...project, description: [...project?.description, ""] }
        : project,
    );
    updateFields({
      projects: updatedProjects,
    });
  };

  const removeDescription = (index, descriptionIndex) => {
    const updatedProjects = projects.map((project, i) =>
      i === index
        ? {
            ...project,
            description: project.description.filter(
              (_, desIndex) => desIndex !== descriptionIndex,
            ),
          }
        : project,
    );
    updateFields({ projects: updatedProjects });
  };

  const handleChange = (index, field, value) => {
    const updatedProjects = projects.map((project, i) =>
      i === index ? { ...project, [field]: value } : project,
    );
    updateFields({ projects: updatedProjects });
  };

  return (
    <div className="flex flex-col items-center">
      {projects.map((project, index) => (
        <div key={index}>
          <FormWrapper title={`Project - ${index + 1}`}>
            <label htmlFor={`projectName-${index}`}>Project Name</label>
            <input
              autoFocus
              required
              type="text"
              name="projectName"
              placeholder="Enter Project Name"
              value={project.projectName}
              onChange={(e) =>
                handleChange(index, "projectName", e.target.value)
              }
            />
            <label htmlFor={`projectLink-${index}`}>Project Link</label>
            <input
              required
              type="text"
              name="projectLink"
              placeholder="Enter Project Link"
              value={project.projectLink}
              onChange={(e) =>
                handleChange(index, "projectLink", e.target.value)
              }
            />
            <label htmlFor={`techStack-${index}`}>Teck Stack</label>
            <input
              required
              type="text"
              name="techStack"
              placeholder="Enter Technologies"
              value={project.techStack}
              onChange={(e) => handleChange(index, "techStack", e.target.value)}
            />
            {project.description?.map((des, desIndex) => (
              <div
                className="col-span-2 grid grid-cols-2 gap-2 [&>label]:font-semibold [&>textarea]:rounded [&>textarea]:border [&>textarea]:p-1"
                key={desIndex}
              >
                <label htmlFor={`description-${desIndex}`}>
                  {desIndex + 1}. Description
                </label>
                <div className="flex items-center gap-1">
                  <textarea
                    className="w-full"
                    name="description"
                    rows="1"
                    value={des}
                    onChange={(e) => {
                      const updatedProjects = projects.map((project, i) =>
                        i === index
                          ? {
                              ...project,
                              description: project.description.map(
                                (desc, descIndex) =>
                                  descIndex === desIndex
                                    ? e.target.value
                                    : desc,
                              ),
                            }
                          : project,
                      );
                      updateFields({ projects: updatedProjects });
                    }}
                  />
                  <MdDelete
                    onClick={() => removeDescription(index, desIndex)}
                    className="cursor-pointer text-3xl"
                  />
                </div>
              </div>
            ))}

            <button
              type="button"
              className="w-max rounded-2xl bg-[#ffb0b0] px-3 py-1 text-[17px] font-medium transition-all hover:cursor-pointer hover:bg-[#ff9090]"
              onClick={() => addDescription(index)}
            >
              Add Description
            </button>
            <div></div>

            <button
              className="w-max rounded-2xl bg-[#ffb0b0] px-3 py-1 text-[17px] font-medium transition-all hover:cursor-pointer hover:bg-[#ff9090]"
              type="button"
              onClick={() => removeProject(index)}
            >
              Remove ❌
            </button>
          </FormWrapper>
        </div>
      ))}
      <button
        className="rounded-2xl bg-[#ffb0b0] px-3 py-1 text-[17px] font-medium transition-all hover:cursor-pointer hover:bg-[#ff9090]"
        onClick={addProject}
        type="button"
      >
        Add Project
      </button>
    </div>
  );
};

export default ProjectsForm;
