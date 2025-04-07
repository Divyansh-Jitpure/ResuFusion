import React, { useContext } from "react";
import { MdDelete, MdEdit, MdRemoveRedEye } from "react-icons/md";
import API from "../../utils/api";
import { AuthContext } from "../../context/AuthContext";
import { useNavigate } from "react-router";
import { toast } from "sonner";
import { Tooltip } from "react-tooltip";

const ResumeTile = ({ dateCreated, resumeId, getResumeData }) => {
  const navigate = useNavigate();
  const { user } = useContext(AuthContext);
  const formattedDate = new Date(dateCreated).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  const handleEdit = () => {
    navigate(`/resumeform/${resumeId}`);
  };

  const handleDelete = async () => {
    const resumeDeletePromise = new Promise(async (resolve, reject) => {
      try {
        await API.delete(`/resumes/${user._id}/${resumeId}`);
        getResumeData();
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

  return (
    <div
      // onClick={() => navigate(`/resumePreview/${resumeId}`)}
      className="group relative w-64 rounded-lg border border-[#ff9090] pt-2 transition-all hover:shadow-md hover:shadow-amber-700"
    >
      <Tooltip id="delete-tooltip" style={{ padding: "2px 5px" }} />
      <span
        data-tooltip-id="delete-tooltip"
        data-tooltip-content="Delete Resume"
        onClick={() => handleDelete()}
        className="absolute top-3 right-3"
      >
        <MdDelete className="cursor-pointer text-2xl" />
      </span>
      <Tooltip id="edit-tooltip" style={{ padding: "2px 5px" }} />
      <span
        data-tooltip-id="edit-tooltip"
        data-tooltip-content="Edit Resume"
        onClick={() => handleEdit()}
        className="absolute top-3 right-11"
      >
        <MdEdit className="cursor-pointer text-2xl" />
      </span>
      <span
        onClick={() => navigate(`/resumePreview/${resumeId}`)}
        className="invisible absolute top-1/2 left-1/2 flex -translate-x-1/2 -translate-y-1/2 cursor-pointer gap-1 rounded-full border border-black bg-white/30 px-2 font-medium transition-all group-hover:visible hover:scale-125"
      >
        View <MdRemoveRedEye className="text-2xl" />
      </span>

      {/* Template Image */}
      {/* <img className="px-2" src="SampleResume.png" alt="Resume Template" /> */}
      <img
        className="h-40 w-full object-cover object-top px-2"
        src="BasicResumeBlur.jpeg"
        alt="Resume Template"
      />

      {/* Template Name */}
      <p className="my-1 text-xl text-gray-50 capitalize">
        Created on {formattedDate}
      </p>
    </div>
  );
};

export default ResumeTile;
