import React, { useContext } from "react";
import { Navigate } from "react-router-dom";
import { AuthContext } from "../context/AuthContextProvider";

const PrivateRoutes = ({ children }) => {
  const { authDetails } = useContext(AuthContext);

  return authDetails.isLoggedIn ? children : <Navigate to="/login" />;
};

export default PrivateRoutes;
