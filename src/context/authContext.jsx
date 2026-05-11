import { createContext, useEffect, useState } from "react";
import axios from "axios";

export const AuthContext = createContext({});

export const AuthContextProvider = ({ children }) => {
  const [currentUser, setcurrentUser] = useState(
    JSON.parse(localStorage.getItem("user")) || null,
  );

  const login = async (input) => {
    const res = await axios.post(
      "http://localhost:8800/api/auth/login",
      input,
    );
    setcurrentUser(res.data);
     localStorage.setItem("token", res.data.token);
  };

  const logout = async (input) => {
    await axios.post("http://localhost:8800/api/auth/logout");
    setcurrentUser(null);
    localStorage.removeItem("token");
  };
  useEffect(() => {
    localStorage.setItem("user", JSON.stringify(currentUser));
  }, [currentUser]);

  return (
    <AuthContext.Provider value={{ currentUser, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};
