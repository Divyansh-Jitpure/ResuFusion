import React, { useState } from "react";
import FormWrapper from "../FormWrapper";
import { IoClose } from "react-icons/io5";
import { FaArrowDown } from "react-icons/fa";

const HobbiesForm = ({ hobbies, updateFields }) => {
  const [inputValue, setInputValue] = useState("");

  const handleDeleteHobbies = (i) => {
    updateFields({ hobbies: hobbies.filter((_, index) => index !== i) });
  };

  return (
    <>
      <FormWrapper title="Hobbies">
        <label htmlFor="hobbies" className="text-center">
          Write down your hobbies and press "Enter"
        </label>
        <span className="flex items-center gap-2 [&>input]:w-full [&>input]:rounded [&>input]:border [&>input]:p-1 [&>label]:font-semibold">
          <input
            type="text"
            className="h-max"
            name="hobbies"
            placeholder="Eg. Reading, Traveling, Cooking"
            title="Eg. Reading, Traveling, Cooking"
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
          <button
            type="button"
            onClick={() => {
              if (inputValue !== "") {
                updateFields({ hobbies: [...hobbies, inputValue] });
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
        {hobbies.map((hobbie, index) => (
          <div
            key={index}
            className="flex gap-1 rounded-full bg-[#FF6D60] px-3 py-1 text-white md:my-1"
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
