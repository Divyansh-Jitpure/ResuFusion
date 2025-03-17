import React, { useContext, useEffect, useRef, useState } from "react";
import API from "../../utils/api";
import { AuthContext } from "../../context/AuthContext";
import { useParams } from "react-router";
import Basic from "../../Pages/Templates/TemplateDesigns/Basic/Basic";
import { useReactToPrint } from "react-to-print";

const ResumePreview = () => {
  const { resumeId: resumeId } = useParams();
  const { user } = useContext(AuthContext);
  const [resumeData, setResumeData] = useState(null);

  const contentRef = useRef(null);

  const reactToPrintContent = () => {
    return contentRef.current;
  };

  const handlePrint = useReactToPrint({
    content: () => contentRef.current,
    documentTitle: "YourResume",
  });

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
      <div className="my-10 mt-22 flex min-h-screen flex-col items-center justify-center gap-5">
        <h2 className="mb-2 cursor-default text-4xl font-semibold text-gray-50">
          Resume Preview
        </h2>
        <button
          className="mx-1 flex items-center gap-1 rounded-2xl bg-[#D84040] px-3 py-1 text-[17px] font-medium transition-all hover:cursor-pointer hover:bg-[#ff2d2d]"
          onClick={() => handlePrint(reactToPrintContent)}
          type="button"
        >
          Download
        </button>
        {resumeData && (
          // Resume Container
          <div
            ref={contentRef}
            className="flex h-[1123px] w-[794px] flex-col gap-3 bg-white"
          >
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
