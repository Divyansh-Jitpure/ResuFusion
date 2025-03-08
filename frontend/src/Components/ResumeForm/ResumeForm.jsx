import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../context/AuthContext";
import { useNavigate } from "react-router";
import { useMultiStepForm } from "./useMultiStepForm";
import PersonalInfoForm from "./Forms/PersonalInfoForm";
import EducationForm from "./Forms/EducationForm";

const InitialData = {
  fullName: "",
  email: "",
  phoneNumber: "",
  address: "",
  degree: "",
  collage: "",
  location: "",
  startYear: "",
  endYear: "",
};

const ResumeForm = () => {
  // const navigate = useNavigate();
  const [data, setData] = useState(InitialData);
  const { user, loading, setShowLoginModal } = useContext(AuthContext);

  const updateFields = (fields) => {
    setData((prev) => {
      return { ...prev, ...fields };
    });
  };

  const { step, steps, currentStepIndex, isFirstStep, isLastStep, back, next } =
    useMultiStepForm([
      <PersonalInfoForm {...data} updateFields={updateFields} />,
      <EducationForm {...data} updateFields={updateFields} />,
    ]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!isLastStep) return next();
    alert("Done!!");
  };

  useEffect(() => {
    if (!loading && !user) {
      setShowLoginModal(true); // navigate("/");
    }
  }, [user, setShowLoginModal]); //navigate

  return (
    <div className="flex justify-center">
      <div className="relative mt-30 w-max rounded-lg border-[1px] border-black p-4">
        <form onSubmit={handleSubmit}>
          <div className="absolute top-2 right-2">
            {currentStepIndex + 1}/{steps.length}
          </div>
          {step}
          <div className="mt-4 flex justify-center gap-4">
            {!isFirstStep && (
              <button
                onClick={back}
                type="button"
                className="mx-1 flex items-center gap-1 rounded-2xl bg-[#D84040] px-3 py-1 text-[17px] font-medium transition-all hover:cursor-pointer hover:bg-[#ff2d2d]"
              >
                Back
              </button>
            )}
            <button
              type="submit"
              className="mx-1 flex items-center gap-1 rounded-2xl bg-[#D84040] px-3 py-1 text-[17px] font-medium transition-all hover:cursor-pointer hover:bg-[#ff2d2d]"
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
