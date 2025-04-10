import React, { useContext, useEffect, useRef, useState } from "react";
import API from "../../utils/api";
import { AuthContext } from "../../context/AuthContext";
import { useNavigate, useParams } from "react-router";
import Basic from "../../Pages/Templates/TemplateDesigns/Basic/Basic";
import { useReactToPrint } from "react-to-print";
import { FaDownload } from "react-icons/fa6";
import { MdDelete, MdEdit } from "react-icons/md";
import { Tooltip } from "react-tooltip";
import { toast } from "sonner";

const ResumePreview = () => {
  const { resumeId } = useParams();
  const { user } = useContext(AuthContext);
  const [resumeData, setResumeData] = useState(null);

  const contentRef = useRef(null);

  const navigate = useNavigate();

  const handleEdit = () => {
    navigate(`/resumeform/${resumeId}`);
  };

  const handleDelete = async () => {
    const resumeDeletePromise = new Promise(async (resolve, reject) => {
      try {
        await API.delete(`/resumes/${user._id}/${resumeId}`);
        getResumeData();
        navigate("/dashboard");
        resolve();
      } catch (error) {
        reject(console.error(error));
      }
    });

    toast.promise(resumeDeletePromise, {
      loading: "Deleting...",
      success: "Resume Successfully Deleted!!",
      error: (errMsg) => errMsg, // Show the specific error message
    });

    return resumeDeletePromise;
  };

  const reactToPrintContent = () => {
    return contentRef.current;
  };

  const handlePrint = useReactToPrint({
    content: () => contentRef.current,
    documentTitle: "ResuFusion",
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
      <div className="my-10 mt-22 flex min-h-screen flex-col items-center gap-5">
        <h2 className="mb-5 cursor-default text-4xl font-semibold text-gray-50 md:mb-2">
          Resume Preview
        </h2>
        <section className="relative">
          {resumeData && (
            <div
              ref={contentRef}
              // print-area
              className="relative flex min-h-[493px] w-[350px] flex-col bg-white pb-2 md:min-h-[1123px] md:w-[794px] md:gap-3 md:py-2 print:min-h-0 print:w-[794px] print:gap-3 print:py-0 print:pb-0"
            >
              {resumeData.template === "basic" && (
                <Basic resumeData={resumeData} />
              )}
            </div>
          )}

          <span
            data-tooltip-id="delete-tooltip"
            data-tooltip-content="Delete Resume"
            data-tooltip-place="right"
            onClick={() => handleDelete()}
            className="absolute -top-7 right-0 text-white md:top-10 md:-right-10"
          >
            <MdDelete className="cursor-pointer text-xl md:text-2xl" />
          </span>
          <Tooltip id="delete-tooltip" style={{ padding: "2px 5px" }} />
          <span
            data-tooltip-id="edit-tooltip"
            data-tooltip-content="Edit Resume"
            data-tooltip-place="right"
            onClick={() => handleEdit()}
            className="absolute -top-7 right-8 text-white md:top-0 md:-right-10"
          >
            <MdEdit className="cursor-pointer text-xl md:text-2xl" />
          </span>
          <Tooltip id="edit-tooltip" style={{ padding: "2px 5px" }} />
        </section>

        <button
          className="col-span-2 mx-auto flex w-max items-center gap-2 rounded-2xl bg-[#D84040] px-3 py-1 font-medium text-white transition-all hover:cursor-pointer hover:bg-[#ff2d2d] md:text-[17px] print:hidden"
          onClick={() => handlePrint(reactToPrintContent)}
          type="button"
        >
          <FaDownload /> Download Resume
        </button>
      </div>
    </div>
  );
};

export default ResumePreview;
