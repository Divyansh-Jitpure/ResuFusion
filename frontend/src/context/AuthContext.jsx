import { createContext, useEffect, useState } from "react";
import API from "../utils/api";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  const register = async (userData) => {
    try {
      const res = await API.post(`/auth/register`, userData);
      return res.data;
    } catch (err) {
      return err.res?.data || { message: "Something went wrong!!" };
    }
  };

  const login = async (userData) => {
    try {
      const res = await API.post(`/auth/login`, userData, {
        withCredentials: true,
      });
      setUser(res.data.user); // Store user info
      return res.data;
    } catch (err) {
      return err.res?.data || { message: "Something went wrong!!" };
    }
  };

  const logout = async () => {
    try {
      await API.post("/auth/logout"); // Backend should clear cookie
      setUser(null); // Reset user state
    } catch (err) {
      console.log("Logout failed!!", err);
    }
  };

  const getUser = async () => {
    try {
      const res = await API.get("/auth/me", { withCredentials: true }); // API to get user from token
      setUser(res.data.user);
    } catch (err) {
      setUser(null); // If error, reset user state
    }
  };

  useEffect(() => {
    getUser();
  }, []);

  return (
    <AuthContext.Provider value={{ user, register, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};
