import { Children, createContext, useState } from "react";
import API from "../utils/api";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  const register = async (userData) => {
    try {
      const response = await API.post(`auth/register`, userData);
      return response.data;
    } catch (err) {
      return err.response?.data || { message: "Something went wrong!!" };
    }
  };

  const login = async (userData) => {
    try {
      const response = await API.post(`auth/login`, userData);
      return response.data;
    } catch (err) {
      return err.response?.data || { message: "Something went wrong!!" };
    }
  };

  return (
    <AuthContext.Provider value={{ user, register, login }}>
      {children}
    </AuthContext.Provider>
  );
};
