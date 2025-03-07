import { createContext, useEffect, useState } from "react";
import API from "../utils/api";
import { toast } from "sonner";

// Creating authentication context
export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  // State to store user info
  const [user, setUser] = useState(null);

  const [loading, setLoading] = useState(true);

  // Toast state to prevent duplicate notifications
  const [loginToastShown, setLoginToastShown] = useState(false);
  const [logoutToastShown, setLogoutToastShown] = useState(false);
  const [registerToastShown, setRegisterToastShown] = useState(false);

  // State to handle modal visibility
  const [showLoginModal, setShowLoginModal] = useState(false);
  const [showRegisterModal, setShowRegisterModal] = useState(false);

  // Fetch the authenticated user
  const getUser = async () => {
    try {
      const res = await API.get("/auth/me", { withCredentials: true }); // Fetch user from session
      setUser(res.data.user);
    } catch (err) {
      setUser(null); // If error, reset user state
    } finally {
      setLoading(false);
    }
  };

  // Get user data on mount
  useEffect(() => {
    getUser();
  }, []);

  // Register a new user
  const register = async (userData) => {
    try {
      const res = await API.post(`/auth/register`, userData, {
        withCredentials: true,
      });
      setShowRegisterModal(false); // Close register modal on success
      setRegisterToastShown(true); // Show success toast
      return res.data;
    } catch (err) {
      return err.res?.data || { message: "Something went wrong!!" };
    }
  };

  // Login user
  const login = async (userData) => {
    try {
      const res = await API.post(`/auth/login`, userData, {
        withCredentials: true, // Ensures cookies are sent
      });
      await getUser(); // Fetch updated user data
      setUser(res.data.user); // Store user info
      setShowLoginModal(false); // Close login modal after success
      setLoginToastShown(true); // Show login success toast
      return res.data;
    } catch (err) {
      return err.res?.data || { message: "Something went wrong!!" };
    }
  };

  // Logout user
  const logout = async () => {
    try {
      await API.post(
        "/auth/logout",
        {},
        {
          withCredentials: true, // Ensures cookies are sent
        },
      ); // Backend clears cookie/session
      setUser(null); // Reset user state
      setLogoutToastShown(true); // Show logout success toast
    } catch (err) {
      console.log("Logout failed!!", err);
    }
  };

  return (
    <AuthContext.Provider
      value={{
        user,
        register,
        login,
        logout,
        loading,

        showLoginModal,
        setShowLoginModal,

        showRegisterModal,
        setShowRegisterModal,

        loginToastShown,
        setLoginToastShown,

        logoutToastShown,
        setLogoutToastShown,

        registerToastShown,
        setRegisterToastShown,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
