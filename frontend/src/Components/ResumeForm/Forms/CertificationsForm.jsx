import React from "react";
import FormWrapper from "../FormWrapper";
import { MdDelete } from "react-icons/md";

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
              placeholder="Eg. AWS Certified Solutions Architect"
              title="Eg. AWS Certified Solutions Architect"
              value={cert.certification}
              onChange={(e) =>
                handleChange(index, "certification", e.target.value)
              }
            />
            <label htmlFor={`description-${index}`}>Description / Org.</label>
            <textarea
              type="text"
              name="description"
              rows={1}
              placeholder="Eg. Amazon Web Services"
              title="Eg. Amazon Web Services"
              value={cert.description}
              onChange={(e) =>
                handleChange(index, "description", e.target.value)
              }
            />
            <button
              onClick={() => removeCertification(index)}
              className="col-span-2 mx-auto flex w-max items-center gap-1 rounded-2xl bg-[#D84040] px-3 py-1 text-[17px] font-medium text-white transition-all hover:cursor-pointer hover:bg-[#ff2d2d]"
              type="button"
            >
              <MdDelete className="text-xl" /> {`Certification - ${index + 1}`}
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
