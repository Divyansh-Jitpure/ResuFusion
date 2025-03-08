import React, { useContext, useEffect } from "react";
import { AuthContext } from "../../context/AuthContext";
import { useNavigate } from "react-router";

const ResumeForm = () => {
  const { user, loading, setShowLoginModal } = useContext(AuthContext);
  const navigate = useNavigate();

  useEffect(() => {
    if (!loading && !user) {
      setShowLoginModal(true);
      // navigate("/");
    }
  }, [user, setShowLoginModal]); //navigate

  return <div>Resume Form</div>;
};

export default ResumeForm;
