import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { Link, Outlet } from "react-router-dom";
import auth from "../../firebase/firebase.config";
import useAccountType from "../../hooks/useAccountType";
import Navbar from "../../Shared/Navbar/Navbar";

const Dashboard = () => {
  const [user, loading] = useAuthState(auth);
  const { userCheck } = useAccountType(user?.email);
  console.log(userCheck, "user type");
  if (loading) {
    return;
  }

  const linkCss =
    "bg-white text-[#f76b8a] font-semibold text-[12px] mb-2 rounded-[6px]";
  return (
    <div>
      <Navbar />
      <div class="drawer drawer-mobile fixed mt-1">
        <input id="my-drawer-2" type="checkbox" class="drawer-toggle" />
        <div class="drawer-content custom-scroll ml-[8px]   py-[5px] overflow-scroll">
          {<Outlet />}
        </div>
        <div class="drawer-side ">
          <label for="my-drawer-2" class="drawer-overlay"></label>
          <ul class="menu p-4 w-80  bg-[#f76b8a]">
            {userCheck?.isUser && (
              <li className={linkCss}>
                <Link to="/dashboard/myorder">My Orders</Link>
              </li>
            )}
            {userCheck?.isSeller && (
              <>
                <li className={linkCss}>
                  <Link to={"/dashboard/addproduct"}>Add A Product</Link>
                </li>
                <li className={linkCss}>
                  <Link to="/dashboard/myproduct">My Products</Link>
                </li>
                <li className={linkCss}>
                  <Link to="/dashboard/mybuyers">My Buyers</Link>
                </li>
              </>
            )}
            {userCheck?.isAdmin && (
              <>
                {" "}
                <li className={linkCss}>
                  <Link to="/dashboard/allsellers">All Sellers</Link>
                </li>
                <li className={linkCss}>
                  <Link to="/dashboard/allbuyers">All Buyers</Link>
                </li>
                <li className={linkCss}>
                  <Link to="/dashboard/reporteditem">Reported Items</Link>
                </li>
              </>
            )}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
