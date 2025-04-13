import React, { useContext, useEffect, useState } from "react";
import ResumeTile from "./ResumeTile";
import { AuthContext } from "../../context/AuthContext";
import API from "../../utils/api";

const Dashboard = () => {
  const [allResumes, setAllResumes] = useState([]);
  const [loading, setLoading] = useState(true);
  const { user } = useContext(AuthContext);

  // Function to fetch resumes from the server
  const getResumeData = async () => {
    try {
      const resumes = await API.get(`/resumes/${user._id}`);
      setAllResumes(resumes.data);
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  // Fetch resumes when the component mounts or when user changes
  useEffect(() => {
    if (user) {
      getResumeData();
    }
  }, [user]);

  // Show loading indicator while resumes are being fetched
  if (loading) {
    return (
      <div className="flex h-screen flex-col items-center justify-center pb-10">
        <div className="mx-auto h-20 w-20 animate-spin rounded-full border-6 border-dashed border-[#D84040]"></div>
        <h2 className="mt-4 text-3xl text-zinc-900 dark:text-white">
          Loading Your Resumes...
        </h2>
      </div>
    );
  }

  // Render the dashboard with resume tiles
  return (
    <div className="mb-15 flex min-h-screen cursor-default flex-col items-center">
      {/* Heading Section */}
      <h1 className="mt-22 text-4xl font-semibold text-gray-50">
        Your Documents
      </h1>
      <p className="mx-5 mt-3 w-[80%] text-center text-xl text-gray-300 md:w-full">
        View, Edit or Download all your resumes here.
      </p>
      <section className="mt-10 flex w-[85%] flex-wrap justify-center gap-5 text-center">
        {/* Rendering multiple ResumeTile components */}
        {allResumes.length === 0 ? (
          // If no resumes are found, show a message
          <p className="mt-2 text-xl text-gray-300">No Resumes Found</p>
        ) : (
          allResumes.map((resume, index) => (
            <ResumeTile
              getResumeData={getResumeData}
              key={index}
              dateCreated={resume.createdAt.slice(0, 10)}
              resumeId={resume._id}
            />
          ))
        )}
      </section>
    </div>
  );
};

export default Dashboard;
