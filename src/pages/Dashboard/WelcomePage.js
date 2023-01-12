import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "../../firebase/firebase.config";
import useAccountType from "../../hooks/useAccountType";

const WelcomePage = () => {
  const [user, loading] = useAuthState(auth);
  const { userCheck } = useAccountType(user?.email);
  if (loading) {
    return;
  }
  return (
    <div className="h-[100%] flex items-center justify-center">
      <h1 className="lg:text-3xl font-bold common-text-color">
        Welcome to{" "}
        {(userCheck?.isAdmin && "Admin") ||
          (userCheck?.isUser && "Buyer") ||
          (userCheck?.isSeller && "Seller")}{" "}
        dashboar
      </h1>
    </div>
  );
};

export default WelcomePage;
