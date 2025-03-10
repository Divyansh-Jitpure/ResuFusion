import React, { useState } from "react";
import FormWrapper from "../FormWrapper";
import { IoClose } from "react-icons/io5";

const SkillsForm = ({ skills, updateFields }) => {
  const [inputValue, setInputValue] = useState("");

  const handleDeleteSkill = (i) => {
    updateFields({ skills: skills.filter((_, index) => index !== i) });
  };
  return (
    <>
      <FormWrapper title="Skills">
        <label htmlFor="skills">Write down your skill and press "Enter"</label>
        <input
          type="text"
          name="skills"
          placeholder="Enter your skills"
          onChange={(e) => setInputValue(e.target.value)}
          value={inputValue}
          onKeyDown={(e) => {
            if (e.key === "Enter" && inputValue !== "") {
              e.preventDefault();
              updateFields({ skills: [...skills, inputValue] });
              setInputValue("");
            }
          }}
        />
      </FormWrapper>
      {/* Skill Badges */}
      <div className="flex flex-wrap gap-2">
        {skills.map((skill, index) => (
          <div
            key={index}
            className="my-4 flex gap-1 rounded-full bg-[#FF6D60] px-3 py-1 text-white"
          >
            {skill}
            <button type="button" onClick={() => handleDeleteSkill(index)}>
              <IoClose className="cursor-pointer text-xl text-gray-600" />
            </button>
          </div>
        ))}
      </div>
    </>
  );
};

export default SkillsForm;
