import React, { useState } from "react";
import FormWrapper from "../FormWrapper";
import { IoClose } from "react-icons/io5";
import { FaArrowDown } from "react-icons/fa";

const SkillsForm = ({ skills, updateFields }) => {
  const [inputValue, setInputValue] = useState("");

  const handleDeleteSkill = (i) => {
    updateFields({ skills: skills.filter((_, index) => index !== i) });
  };
  return (
    <>
      <FormWrapper title="Skills">
        <label className="text-center" htmlFor="skills">
          Write down your skill and press "Enter"
        </label>
        <span className="flex items-center gap-2 [&>input]:w-full [&>input]:rounded [&>input]:border [&>input]:p-1 [&>label]:font-semibold">
          <input
            type="text"
            name="skills"
            title="Enter your skills here"
            placeholder="Eg. JavaScript, React, Teamwork"
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
          <button
            type="button"
            onClick={() => {
              if (inputValue !== "") {
                updateFields({ skills: [...skills, inputValue] });
                setInputValue("");
              }
            }}
            className="flex h-10 w-10 cursor-pointer items-center justify-center rounded-lg border bg-[#FF6D60] text-white hover:bg-[#FF6D60]/80 active:bg-[#FF6D60]/90"
          >
            <FaArrowDown />
          </button>
        </span>
      </FormWrapper>
      {/* Skill Badges */}
      <div className="flex flex-wrap gap-2">
        {skills.map((skill, index) => (
          <div
            key={index}
            className="flex gap-1 rounded-full bg-[#FF6D60] px-3 py-1 text-white md:my-1"
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
