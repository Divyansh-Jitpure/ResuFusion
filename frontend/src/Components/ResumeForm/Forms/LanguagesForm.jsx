import React from "react";
import FormWrapper from "../FormWrapper";

const LanguagesForm = ({ languages, updateFields }) => {
  const addLanguage = () => {
    updateFields({
      languages: [
        ...languages,
        {
          language: "",
          level: "",
        },
      ],
    });
  };

  const removeLanguage = (index) => {
    const updatedeLanguages = languages.filter((_, i) => i !== index);
    updateFields({ languages: updatedeLanguages });
  };

  const handleChange = (index, field, value) => {
    const updatedeLanguages = languages.map((language, i) =>
      i === index ? { ...language, [field]: value } : language,
    );
    updateFields({ languages: updatedeLanguages });
  };

  return (
    <div className="flex flex-col items-center">
      {languages.map((lang, index) => (
        <div key={index}>
          <FormWrapper title={`Language - ${index + 1}`}>
            <label htmlFor={`language-${index}`}>Language</label>
            <input
              type="text"
              name="language"
              autoFocus
              required
              placeholder="Enter language"
              value={lang.language}
              onChange={(e) => handleChange(index, "language", e.target.value)}
            />
            <label htmlFor={`level-${index}`}>Level</label>
            <select
              name="level"
              required
              value={lang.level}
              onChange={(e) => handleChange(index, "level", e.target.value)}
            >
              <option value="" disabled selected>
                Select one
              </option>
              <option value="Native or Bilingual Proficiency">
                Native or Bilingual Proficiency
              </option>
              <option value="Full Professional Proficiency">
                Full Professional Proficiency
              </option>
              <option value="Limited Working Proficiency">
                Limited Working Proficiency
              </option>
              <option value="Elementary Proficiency">
                Elementary Proficiency
              </option>
            </select>

            <button
              onClick={() => removeLanguage(index)}
              className="col-span-2 mx-auto mt-1 rounded-2xl bg-[#ffb0b0] px-3 py-1 text-[17px] font-medium transition-all hover:cursor-pointer hover:bg-[#ff9090]"
              type="button"
            >
              Remove Language
            </button>
          </FormWrapper>
        </div>
      ))}
      <button
        onClick={addLanguage}
        className="rounded-2xl bg-[#ffb0b0] px-3 py-1 text-[17px] font-medium transition-all hover:cursor-pointer hover:bg-[#ff9090]"
        type="button"
      >
        Add Language
      </button>
    </div>
  );
};

export default LanguagesForm;
