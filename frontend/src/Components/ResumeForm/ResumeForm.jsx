import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../context/AuthContext";
import { useNavigate, useParams } from "react-router";
import { useMultiStepForm } from "./useMultiStepForm";
import PersonalInfoForm from "./Forms/PersonalInfoForm";
import EducationForm from "./Forms/EducationForm";
import SkillsForm from "./Forms/SkillsForm";
import API from "../../utils/api";
import SummaryForm from "./Forms/SummaryForm";
import ExperienceForm from "./Forms/ExperienceForm";
import Certifications from "./Forms/CertificationsForm";

const InitialData = {
  fullName: "",
  email: "",
  phoneNumber: "",
  address: "",
  education: [""],
  experience: [""],
  skills: [],
  certifications: [],
  summary: "",
};

const ResumeForm = () => {
  const navigate = useNavigate();
  const [data, setData] = useState(InitialData);
  const { user, loading, setShowLoginModal } = useContext(AuthContext);

  const { id: templateName } = useParams();

  const updateFields = (fields) => {
    setData((prev) => {
      return { ...prev, ...fields };
    });
  };

  const { step, steps, currentStepIndex, isFirstStep, isLastStep, back, next } =
    useMultiStepForm([
      <PersonalInfoForm {...data} updateFields={updateFields} />,
      <SummaryForm {...data} updateFields={updateFields} />,
      <EducationForm education={data.education} updateFields={updateFields} />,
      <ExperienceForm
        experience={data.experience}
        updateFields={updateFields}
      />,
      <SkillsForm {...data} updateFields={updateFields} />,
      <Certifications
        certifications={data.certifications}
        updateFields={updateFields}
      />,
    ]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!isLastStep) return next();

    const formattedData = {
      userId: user._id,
      personalInfo: {
        fullName: data.fullName,
        email: data.email,
        phone: data.phoneNumber,
        address: data.address,
      },
      experience: data.experience,
      education: data.education,
      skills: data.skills,
      certifications: data.certifications,
      summary: data.summary,
      template: templateName,
    };

    try {
      const res = await API.post("/resumes", formattedData);
      const resumeId = res.data._id;
      navigate(`/resumePreview/${resumeId}`);
    } catch (err) {
      console.error("Error submitting resume:", err);
    }
  };

  useEffect(() => {
    if (!loading && !user) {
      setShowLoginModal(true); // navigate("/");
    }
  }, [user, setShowLoginModal]); //navigate

  return (
    <div className="flex justify-center">
      <div className="relative mt-30 h-auto w-max rounded-lg border border-black bg-[#EEEEEE] px-18 py-10">
        <div className="mx-auto mb-5 h-2 rounded border">
          <div
            style={{
              width: `${Math.round(((currentStepIndex + 1) / steps.length) * 100)}%`,
            }}
            className={`h-full bg-linear-65 from-[#580c0c] to-[#D84040] transition-all`}
          ></div>
        </div>
        <form onSubmit={handleSubmit}>
          <div className="absolute top-2 right-2 font-semibold">
            {currentStepIndex + 1}/{steps.length}
          </div>
          {step}
          <div className="mt-4 flex justify-center gap-4">
            {!isFirstStep && (
              <button
                onClick={back}
                type="button"
                className="mx-1 flex items-center gap-1 rounded-lg bg-[#ffb0b0] px-3 py-1 text-lg font-medium transition-all hover:cursor-pointer hover:bg-[#ff9090]"
              >
                Back
              </button>
            )}
            <button
              type="submit"
              className={
                isLastStep
                  ? "mx-1 flex items-center gap-1 rounded-lg bg-[#D84040] px-3 py-1 text-lg font-medium transition-all hover:cursor-pointer hover:bg-[#ff2d2d]"
                  : "mx-1 flex items-center gap-1 rounded-lg bg-[#ffb0b0] px-3 py-1 text-lg font-medium transition-all hover:cursor-pointer hover:bg-[#ff9090]"
              }
            >
              {isLastStep ? "Finish" : "Next"}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ResumeForm;
