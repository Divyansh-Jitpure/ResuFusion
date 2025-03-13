import React, { useContext, useEffect, useState } from "react";
import API from "../../utils/api";
import { AuthContext } from "../../context/AuthContext";
import { useParams } from "react-router";
import Basic from "../../Pages/Templates/TemplateDesigns/Basic/Basic";

const ResumePreview = () => {
  const { resumeId: resumeId } = useParams();
  const { user } = useContext(AuthContext);
  const [resumeData, setResumeData] = useState(null);

  const getResumeData = async () => {
    try {
      const rData = await API.get(`/resumes/${user._id}/${resumeId}`);
      setResumeData(rData.data);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    if (user && resumeId) {
      getResumeData();
    }
  }, [user, resumeId]);

  return (
    <div className="flex flex-col items-center">
      <div className="mt-22 flex min-h-screen flex-col items-center justify-center">
        <h2 className="mb-2 cursor-default text-4xl font-semibold text-gray-50">
          Resume Preview
        </h2>
        {resumeData && (
          // Resume Container
          <div className="flex h-[1123px] w-[794px] flex-col gap-3 overflow-auto bg-white">
            {resumeData.template === "basic" && (
              <Basic resumeData={resumeData} />
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default ResumePreview;
