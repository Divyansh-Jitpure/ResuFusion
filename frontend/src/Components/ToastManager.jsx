import React, { useContext, useEffect } from "react";
import { AuthContext } from "../context/AuthContext";
import { toast, Toaster } from "sonner";

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

  useEffect(() => {
    if (user && loginToastShown) {
      toast.success("Login Successful!!");
      setLoginToastShown(false);
    }
  }, [user]);

  useEffect(() => {
    if (logoutToastShown) {
      toast.success("Logout Successful!!");
      setLogoutToastShown(false);
    }
  }, [logoutToastShown]);

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
