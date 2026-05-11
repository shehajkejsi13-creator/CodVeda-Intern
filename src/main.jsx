import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./style.scss";
import Navbar from "./components/Navbar.jsx";
import { AuthContextProvider } from "./context/authContext.jsx";


ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <AuthContextProvider>

      <App />
    </AuthContextProvider>
    
  </React.StrictMode>,
);
