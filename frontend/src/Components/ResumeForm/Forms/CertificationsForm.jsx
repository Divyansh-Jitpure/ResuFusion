import React from "react";
import FormWrapper from "../FormWrapper";

const Certifications = ({ certifications, updateFields }) => {
  const addCertification = () => {
    updateFields({
      certifications: [
        ...certifications,
        {
          certification: "",
          description: "",
        },
      ],
    });
  };

  const removeCertification = (index) => {
    const updatedCertifications = certifications.filter((_, i) => i !== index);
    updateFields({ certifications: updatedCertifications });
  };

  const handleChange = (index, field, value) => {
    const updatedCertifications = certifications.map((cert, i) =>
      i === index ? { ...cert, [field]: value } : cert,
    );
    updateFields({ certifications: updatedCertifications });
  };

  return (
    <div className="flex flex-col items-center">
      {certifications.map((cert, index) => (
        <div key={index}>
          <FormWrapper title={`Certification - ${index + 1}`}>
            <label htmlFor={`certification-${index}`}>Certification</label>
            <input
              type="text"
              name="certification"
              autoFocus
              required
              placeholder="Enter Certification Name"
              value={cert.certification}
              onChange={(e) =>
                handleChange(index, "certification", e.target.value)
              }
            />
            <label htmlFor={`description-${index}`}>Description</label>
            <textarea
              type="text"
              name="description"
              rows={1}
              required
              placeholder="Enter Description"
              value={cert.description}
              onChange={(e) =>
                handleChange(index, "description", e.target.value)
              }
            />
            <button
              onClick={() => removeCertification(index)}
              className="col-span-2 mx-auto mt-1 rounded-2xl bg-[#ffb0b0] px-3 py-1 text-[17px] font-medium transition-all hover:cursor-pointer hover:bg-[#ff9090]"
              type="button"
            >
              Remove Certification
            </button>
          </FormWrapper>
        </div>
      ))}
      <button
        onClick={addCertification}
        className="rounded-2xl bg-[#ffb0b0] px-3 py-1 text-[17px] font-medium transition-all hover:cursor-pointer hover:bg-[#ff9090]"
        type="button"
      >
        Add Certification
      </button>
    </div>
  );
};

export default Certifications;
