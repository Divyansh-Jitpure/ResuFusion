import React, { useState } from "react";
import FormWrapper from "../FormWrapper";
import { IoClose } from "react-icons/io5";

const HobbiesForm = ({ hobbies, updateFields }) => {
  const [inputValue, setInputValue] = useState("");

  const handleDeleteHobbies = (i) => {
    updateFields({ hobbies: hobbies.filter((_, index) => index !== i) });
  };

  return (
    <>
      <FormWrapper title="Hobbies">
        <label htmlFor="hobbies">
          Write down your hobbies and press "Enter"
        </label>
        <input
          type="text"
          name="hobbies"
          placeholder="Enter your hobbies"
          onChange={(e) => setInputValue(e.target.value)}
          value={inputValue}
          onKeyDown={(e) => {
            if (e.key === "Enter" && inputValue !== "") {
              e.preventDefault();
              updateFields({ hobbies: [...hobbies, inputValue] });
              setInputValue("");
            }
          }}
        />
      </FormWrapper>
      {/* Skill Badges */}
      <div className="flex flex-wrap gap-2">
        {hobbies.map((hobbie, index) => (
          <div
            key={index}
            className="my-4 flex gap-1 rounded-full bg-[#FF6D60] px-3 py-1 text-white"
          >
            {hobbie}
            <button type="button" onClick={() => handleDeleteHobbies(index)}>
              <IoClose className="cursor-pointer text-xl text-gray-600" />
            </button>
          </div>
        ))}
      </div>
    </>
  );
};

export default HobbiesForm;
