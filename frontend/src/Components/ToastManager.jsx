import React, { useContext, useEffect } from "react";
import { AuthContext } from "../context/AuthContext";
import { toast, Toaster } from "sonner";

// Component to manage toast notifications based on authentication events
const ToastManager = () => {
  const { registerToastShown, setRegisterToastShown } = useContext(AuthContext);

  // Show toast on successful signup
  useEffect(() => {
    if (registerToastShown) {
      toast.success("Signup Successful!!");
      setRegisterToastShown(false);
    }
  }, [registerToastShown]);

  return (
    <>
      <Toaster richColors />
    </>
  );
};

export default ToastManager;
