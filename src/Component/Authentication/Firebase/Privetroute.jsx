import React from "react";
import useAuth from "./../../../Hooks/useAuth";
import { Navigate, useLocation } from "react-router-dom";

const Privetroute = ({ children }) => {
  const { user, loding } = useAuth();
  const location = useLocation();
  if (loding) {
    return (
      <div className="text-center mt-32 text-5xl">
        <span className="loading loading-spinner text-error"></span>;
      </div>
    );
  }
  if (user) {
    return children;
  }
  return <Navigate to="/login" state={{ from: location }} replace></Navigate>;
};

export default Privetroute;
