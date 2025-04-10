import { createContext, useEffect, useState } from "react";
import API from "../utils/api";
import { toast } from "sonner";

// Creating authentication context
export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  // State to store user info
  const [user, setUser] = useState(null);

  const [loading, setLoading] = useState(true);

  const [isOpen, setIsOpen] = useState(false);
  // State to handle modal visibility
  const [showLoginModal, setShowLoginModal] = useState(false);
  const [showRegisterModal, setShowRegisterModal] = useState(false);

  const [showMobileLoginModal, setShowMobileLoginModal] = useState(false);
  const [showMobileRegisterModal, setShowMobileRegisterModal] = useState(false);

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
    const registerPromise = new Promise(async (resolve, reject) => {
      try {
        const res = await API.post(`/auth/register`, userData, {
          withCredentials: true,
        });
        setShowRegisterModal(false); // Close register modal on success
        resolve(res.data);
      } catch (err) {
        reject(err.res?.data?.message || "Something went wrong!!");
      }
    });

    toast.promise(registerPromise, {
      loading: "Registering...",
      success: "Registration Successful!!",
      error: (errMsg) => errMsg, // Show the specific error message
    });

    return registerPromise;
  };

  // Login user
  const login = async (userData) => {
    const loginPromise = new Promise(async (resolve, reject) => {
      try {
        const res = await API.post(`/auth/login`, userData, {
          withCredentials: true, // Ensures cookies are sent
        });
        await getUser(); // Fetch updated user data
        setUser(res.data.user); // Store user info
        resolve(res.data);
        setShowLoginModal(false); // Close login modal after success
        setShowMobileLoginModal(false); // Close login modal after success
      } catch (err) {
        reject(err.res?.data?.message || "Something went wrong!!");
      }
    });

    toast.promise(loginPromise, {
      loading: "Logging in...",
      success: "Login Successful!!",
      error: (errMsg) => errMsg, // Show the specific error message
    });

    return loginPromise;
  };

  // Logout user
  const logout = async () => {
    const logoutPromise = new Promise(async (resolve, reject) => {
      try {
        const res = await API.post(
          "/auth/logout",
          {},
          {
            withCredentials: true, // Ensures cookies are sent
          },
        ); // Backend clears cookie/session
        setUser(null); // Reset user state
        resolve(res);
      } catch (err) {
        reject(err.res?.data?.message || "Logout failed!!");
      }
    });
    toast.promise(logoutPromise, {
      loading: "Logging out...",
      success: "Logout Successful!!",
      error: (errMsg) => errMsg, // Show the specific error message
    });

    return logoutPromise;
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
        isOpen,
        setIsOpen,

        showMobileLoginModal,
        setShowMobileLoginModal,

        showMobileRegisterModal,
        setShowMobileRegisterModal,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
