import React from "react";
import { Routes, Route } from "react-router-dom";
import LoginScreen from "../components/auth/LoginScreen";
import RegisterScreeen from "../components/auth/RegisterScreeen";

const AuthRouter = () => {
  return (
    <div className="auth__main">
      <div className="auth__box-container">
        <Routes>
          <Route exact path="auth/login" element={<LoginScreen />} />
          <Route exact path="auth/register" element={<RegisterScreeen />} />
        </Routes>
      </div>
    </div>
  );
};

export default AuthRouter;
