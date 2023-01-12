import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { Navigate, useLocation } from "react-router-dom";
import auth from "../../firebase/firebase.config";

const PrivateRoute = ({ children }) => {
  const location = useLocation();
  const [user, loading] = useAuthState(auth);
  if (loading) {
    return;
  }
  if (!user) {
    return <Navigate to={"/login"} state={{ from: location }} replace />;
  } else {
    return children;
  }
};

export default PrivateRoute;
