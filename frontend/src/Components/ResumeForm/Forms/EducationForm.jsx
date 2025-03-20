import React from "react";
import FormWrapper from "../FormWrapper";
import { MdDelete } from "react-icons/md";

const EducationForm = ({ education, updateFields }) => {
  const addEducation = () => {
    updateFields({
      education: [
        ...education,
        {
          degree: "",
          collage: "",
          city: "",
          country: "",
          startYear: "",
          endYear: "",
        },
      ],
    });
  };

  const removeEducation = (index) => {
    const updatedEducation = education.filter((_, i) => i !== index);
    updateFields({ education: updatedEducation });
  };

  const handleChange = (index, field, value) => {
    const updatedEducation = education.map((edu, i) =>
      i === index ? { ...edu, [field]: value } : edu,
    );
    updateFields({ education: updatedEducation });
  };

  return (
    <div className="flex flex-col items-center">
      {education.map((edu, index) => (
        <div key={index}>
          <FormWrapper title={`Education - ${index + 1}`}>
            <label htmlFor={`degree-${index}`}>Degree</label>
            <input
              autoFocus
              required
              type="text"
              name="degree"
              placeholder="Enter Degree"
              value={edu.degree}
              onChange={(e) => handleChange(index, "degree", e.target.value)}
            />
            <label htmlFor={`collage-${index}`}>University/College</label>
            <input
              required
              type="text"
              name="collage"
              placeholder="Enter University/College"
              value={edu.collage}
              onChange={(e) => handleChange(index, "collage", e.target.value)}
            />
            <div className="col-span-2 grid grid-cols-4 gap-2 [&>input]:w-30 [&>input]:rounded [&>input]:border [&>input]:p-1 [&>label]:font-semibold">
              <label htmlFor={`city-${index}`}>City</label>
              <input
                required
                type="text"
                name="city"
                placeholder="Enter City"
                value={edu.city}
                onChange={(e) => handleChange(index, "city", e.target.value)}
              />
              <label htmlFor={`country-${index}`}>Country</label>
              <input
                required
                type="text"
                name="country"
                placeholder="Enter Country"
                value={edu.country}
                onChange={(e) => handleChange(index, "country", e.target.value)}
              />
            </div>
            <label htmlFor={`startYear-${index}`}>Start Year</label>
            <input
              required
              type="date"
              name="startYear"
              placeholder="Enter Start Year"
              value={edu.startYear}
              onChange={(e) => handleChange(index, "startYear", e.target.value)}
            />
            <label htmlFor={`endYear-${index}`}>End Year</label>
            <input
              required
              type="date"
              name="endYear"
              placeholder="Enter End Year"
              value={edu.endYear}
              onChange={(e) => handleChange(index, "endYear", e.target.value)}
            />

            <button
              className="col-span-2 mx-auto flex w-max items-center gap-1 rounded-2xl bg-[#D84040] px-3 py-1 text-[17px] font-medium text-white transition-all hover:cursor-pointer hover:bg-[#ff2d2d]"
              type="button"
              onClick={() => removeEducation(index)}
            >
              <MdDelete className="text-xl" /> {`Education - ${index + 1}`}
            </button>
          </FormWrapper>
        </div>
      ))}

      <button
        type="button"
        className="rounded-2xl bg-[#ffb0b0] px-3 py-1 text-[17px] font-medium transition-all hover:cursor-pointer hover:bg-[#ff9090]"
        onClick={addEducation}
      >
        Add Education
      </button>
    </div>
  );
};

export default EducationForm;
