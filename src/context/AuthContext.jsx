import { createContext, useEffect, useState } from "react";
import axios from 'axios'
export const AuthContext = createContext();
export function AuthProvider({ children }) {
  const [token, setToken] = useState(localStorage.getItem('token') || null)


  useEffect(() => {
    if (token) {
      localStorage.setItem('token', token)
    }
  }, [token])

  const signup = async (username, email, password) => {
    try {
      const res = await axios.post("http://localhost:5000/signup", {
        username,
        email,
        password,
      });

      setToken(res.data.token);
    } catch (error) {
      console.log(error.response?.data?.message || error.message);
    }
  };

  const login = async (email, password) => {
    try {
      const res = await axios.post("http://localhost:5000/login", {
        email,
        password,
      });

      setToken(res.data.token);

    } catch (error) {
      console.log(error.response?.data?.message || error.message);
      throw new Error(error.response?.data?.message || error.message);
    }
  };

  return <AuthContext.Provider value={{ signup, login, token }}>{children}</AuthContext.Provider>;
}
