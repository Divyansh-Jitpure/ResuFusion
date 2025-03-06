import React, { useContext, useEffect } from "react";
import { AuthContext } from "../context/AuthContext";
import { toast, Toaster } from "sonner";

// Component to manage toast notifications based on authentication events
const ToastManager = () => {
  const {
    loginToastShown,
    setLoginToastShown,
    user,
    logoutToastShown,
    setLogoutToastShown,
    registerToastShown,
    setRegisterToastShown,
  } = useContext(AuthContext);

  // Show toast on successful login
  useEffect(() => {
    if (user && loginToastShown) {
      toast.success("Login Successful!!");
      setLoginToastShown(false);
    }
  }, [user]);

  // Show toast on successful logout
  useEffect(() => {
    if (logoutToastShown) {
      toast.success("Logout Successful!!");
      setLogoutToastShown(false);
    }
  }, [logoutToastShown]);

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
