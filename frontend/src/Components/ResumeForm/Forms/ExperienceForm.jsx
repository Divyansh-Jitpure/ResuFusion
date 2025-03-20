import React from "react";
import FormWrapper from "../FormWrapper";

import { MdDelete } from "react-icons/md";

const ExperienceForm = ({ experience, updateFields }) => {
  const addExperience = () => {
    updateFields({
      experience: [
        ...experience,
        {
          companyName: "",
          jobTitle: "",
          city: "",
          country: "",
          startDate: "",
          endDate: "",
          description: [],
        },
      ],
    });
  };

  const addDescription = (index) => {
    const updatedExperience = experience.map((exp, i) =>
      i === index ? { ...exp, description: [...exp?.description, ""] } : exp,
    );
    updateFields({
      experience: updatedExperience,
    });
  };

  const removeDescription = (index, descriptionIndex) => {
    const updatedExperience = experience.map((exp, i) =>
      i === index
        ? {
            ...exp,
            description: exp.description.filter(
              (_, desIndex) => desIndex !== descriptionIndex,
            ),
          }
        : exp,
    );
    updateFields({ experience: updatedExperience });
  };

  const removeExperience = (index) => {
    const updatedExperience = experience.filter((_, i) => i !== index);
    updateFields({ experience: updatedExperience });
  };

  const handleChange = (index, field, value) => {
    const updatedExperience = experience.map((exp, i) =>
      i === index ? { ...exp, [field]: value } : exp,
    );
    updateFields({ experience: updatedExperience });
  };
  return (
    <div className="flex flex-col items-center">
      {experience.map((exp, index) => (
        <div key={index}>
          <FormWrapper title={`Experience - ${index + 1}`}>
            <label htmlFor={`companyName-${index}`}>Company Name</label>
            <input
              autoFocus
              required
              type="text"
              name="companyName"
              placeholder="Enter Company Name"
              value={exp.companyName}
              onChange={(e) =>
                handleChange(index, "companyName", e.target.value)
              }
            />
            <label htmlFor={`jobTitle-${index}`}>Job Title</label>
            <input
              required
              type="text"
              name="jobTitle"
              placeholder="Enter Job Title / Role"
              value={exp.jobTitle}
              onChange={(e) => handleChange(index, "jobTitle", e.target.value)}
            />
            <div className="col-span-2 grid grid-cols-4 gap-2 [&>input]:w-30 [&>input]:rounded [&>input]:border [&>input]:p-1 [&>label]:font-semibold">
              <label htmlFor={`city-${index}`}>City</label>
              <input
                required
                type="text"
                name="city"
                placeholder="Enter City"
                value={exp.city}
                onChange={(e) => handleChange(index, "city", e.target.value)}
              />
              <label htmlFor={`country-${index}`}>Country</label>
              <input
                required
                type="text"
                name="country"
                placeholder="Enter Country"
                value={exp.country}
                onChange={(e) => handleChange(index, "country", e.target.value)}
              />
            </div>
            <label htmlFor={`startDate-${index}`}>Start Date</label>
            <input
              required
              type="date"
              name="startDate"
              placeholder="Enter Start Date"
              value={exp.startDate}
              onChange={(e) => handleChange(index, "startDate", e.target.value)}
            />
            <label htmlFor={`endDate-${index}`}>End Date</label>
            <input
              required
              type="date"
              name="endDate"
              placeholder="Enter End Date"
              value={exp.endDate}
              onChange={(e) => handleChange(index, "endDate", e.target.value)}
            />
            {exp.description?.map((des, desIndex) => (
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
                    placeholder="Enter Description"
                    rows="1"
                    value={des}
                    onChange={(e) => {
                      const updatedExperience = experience.map((exp, i) =>
                        i === index
                          ? {
                              ...exp,
                              description: exp.description.map(
                                (desc, descIndex) =>
                                  descIndex === desIndex
                                    ? e.target.value
                                    : desc,
                              ),
                            }
                          : exp,
                      );
                      updateFields({ experience: updatedExperience });
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
              className="col-span-2 mx-auto flex w-max items-center gap-1 rounded-2xl bg-[#D84040] px-3 py-1 text-[17px] font-medium text-white transition-all hover:cursor-pointer hover:bg-[#ff2d2d]"
              type="button"
              onClick={() => removeExperience(index)}
            >
              <MdDelete className="text-xl" /> {`Experience - ${index + 1}`}
            </button>
          </FormWrapper>
        </div>
      ))}
      <button
        className="rounded-2xl bg-[#ffb0b0] px-3 py-1 text-[17px] font-medium transition-all hover:cursor-pointer hover:bg-[#ff9090]"
        onClick={addExperience}
        type="button"
      >
        Add Experience
      </button>
    </div>
  );
};

export default ExperienceForm;
