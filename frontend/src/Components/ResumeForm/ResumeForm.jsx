import React, { useContext, useEffect } from "react";
import { AuthContext } from "../../context/AuthContext";
import { useNavigate } from "react-router";
import { useMultiStepForm } from "./useMultiStepForm";
import PersonalInfoForm from "./Forms/PersonalInfoForm";
import EducationForm from "./Forms/EducationForm";

const ResumeForm = () => {
  const { user, loading, setShowLoginModal } = useContext(AuthContext);
  const { step, steps, currentStepIndex, isFirstStep, isLastStep, back, next } =
    useMultiStepForm([<PersonalInfoForm />, <EducationForm />]);

  // const navigate = useNavigate();

  useEffect(() => {
    if (!loading && !user) {
      setShowLoginModal(true); // navigate("/");
    }
  }, [user, setShowLoginModal]); //navigate

  return (
    <div className="flex justify-center">
      <div className="relative mt-30 w-max rounded-lg border-[1px] border-black p-4">
        <form>
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
              onClick={next}
              type="button"
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
