import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { Navigate, useLocation } from "react-router-dom";
import auth from "../../../firebase.init";

const RequireAuth = ({ children }) => {
  //* current user checker =============================
  const [user, loading, error] = useAuthState(auth);

  //* login howar age je location e silo seta store krbo ======
  const location = useLocation();

  //* jodi user theke thake tahole app component e requireauth er pet er vitor je route silo setate chole jabe
  if (user) {
    return children;
  } else {
    /*
     *jdi user na thake tahole login page e redirect krbo,
     * ar state ta holo login howar age je page e silo,
     * replace er mane holo login korar por, je page e silo login howar age shei page e user ke replace/redirect kre dbo
     */
    return <Navigate to="/login" state={{ from: location }} replace />;
  }
};

export default RequireAuth;
