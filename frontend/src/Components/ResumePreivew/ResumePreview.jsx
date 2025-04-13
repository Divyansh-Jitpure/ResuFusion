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
  // Extracting resumeId from URL parameters using useParams hook
  const { resumeId } = useParams();

  // State variables to manage loading state and resume data
  const [loading, setLoading] = useState(true);

  // Context to access user data
  const { user } = useContext(AuthContext);

  // State variable to store resume data fetched from the server
  const [resumeData, setResumeData] = useState(null);

  // Ref to hold the content to be printed
  const contentRef = useRef(null);

  const navigate = useNavigate();

  // Function to handle editing the resume
  const handleEdit = () => {
    navigate(`/resumeform/${resumeId}`);
  };

  // Function to handle deleting the resume
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

  // Function to handle printing the resume
  const reactToPrintContent = () => {
    return contentRef.current;
  };

  // Using useReactToPrint hook to create a print function
  const handlePrint = useReactToPrint({
    content: () => contentRef.current,
    documentTitle: "ResuFusion",
  });

  // Function to fetch resume data from the server
  const getResumeData = async () => {
    try {
      const rData = await API.get(`/resumes/${user._id}/${resumeId}`);
      setResumeData(rData.data);
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  // Fetching resume data when the component mounts or when user changes
  useEffect(() => {
    if (user && resumeId) {
      getResumeData();
    }
  }, [user, resumeId]);

  // Show loading indicator while resume data is being fetched
  if (loading) {
    return (
      <div className="flex h-screen flex-col items-center justify-center pb-10">
        <div className="mx-auto h-20 w-20 animate-spin rounded-full border-6 border-dashed border-[#D84040]"></div>
        <h2 className="mt-4 text-3xl text-zinc-900 dark:text-white">
          Loading Resume...
        </h2>
      </div>
    );
  }

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
              className="relative flex min-h-[493px] w-[350px] flex-col bg-white pb-2 md:min-h-[1123px] md:w-[794px] md:gap-3 md:py-2 print:min-h-0 print:w-[794px] print:gap-3 print:py-2 print:pb-0"
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
