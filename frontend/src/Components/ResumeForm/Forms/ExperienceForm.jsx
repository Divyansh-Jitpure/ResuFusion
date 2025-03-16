import React from "react";
import FormWrapper from "../FormWrapper";

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

  const addDescriptions = (index) => {
    const updatedExperience = experience.map((exp, i) =>
      i === index ? { ...exp, description: [...exp.description, ""] } : exp,
    );
    updateFields({
      experience: updatedExperience,
    });
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
            <label htmlFor={`companyName-${index}`}>CompanyName</label>
            <input
              autoFocus
              required
              type="text"
              name="companyName"
              placeholder="Enter Company / Employer Name"
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
            <div className="grid grid-cols-2 [&>input]:w-30 [&>input]:rounded [&>input]:border [&>input]:p-1 [&>label]:font-semibold">
              <label htmlFor={`city-${index}`}>City</label>
              <input
                required
                type="text"
                name="city"
                placeholder="Enter City"
                value={exp.city}
                onChange={(e) => handleChange(index, "city", e.target.value)}
              />
            </div>
            <div className="grid grid-cols-2 [&>input]:w-30 [&>input]:rounded [&>input]:border [&>input]:p-1 [&>label]:font-semibold">
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
            {exp.description.map((des, desIndex) => (
              <div
                className="grid grid-cols-2 [&>label]:font-semibold [&>textarea]:w-30 [&>textarea]:rounded [&>textarea]:border [&>textarea]:p-1"
                key={desIndex}
              >
                <label htmlFor={`description-${desIndex}`}>
                  {desIndex + 1}. Description
                </label>
                <textarea
                  name="description"
                  rows="1"
                  value={des}
                  onChange={(e) => {
                    const updatedExperience = experience.map((exp, i) =>
                      i === index
                        ? {
                            ...exp,
                            description: exp.description.map(
                              (desc, descIndex) =>
                                descIndex === desIndex ? e.target.value : desc,
                            ),
                          }
                        : exp,
                    );
                    updateFields({ experience: updatedExperience });
                  }}
                ></textarea>
              </div>
            ))}

            <button
              type="button"
              className="w-max rounded-2xl bg-[#ffb0b0] px-3 py-1 text-[17px] font-medium transition-all hover:cursor-pointer hover:bg-[#ff9090]"
              onClick={() => addDescriptions(index)}
            >
              Add Description
            </button>
            <div></div>

            <button
              className="w-max rounded-2xl bg-[#ffb0b0] px-3 py-1 text-[17px] font-medium transition-all hover:cursor-pointer hover:bg-[#ff9090]"
              type="button"
              onClick={() => removeExperience(index)}
            >
              Remove ❌
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
