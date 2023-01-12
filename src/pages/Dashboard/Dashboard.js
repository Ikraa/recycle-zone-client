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
          {/* <label for="my-drawer-2" class="btn btn-primary drawer-button lg:hidden">Open drawer</label> */}
          {<Outlet />}
        </div>
        <div class="drawer-side ">
          <label for="my-drawer-2" class="drawer-overlay"></label>
          <ul class="menu p-4 w-80  bg-[#f76b8a]">
            {userCheck?.isUser && (
              <li className={linkCss}>
                <a>My Orders</a>
              </li>
            )}
            {userCheck?.isSeller && (
              <>
                <li className={linkCss}>
                  <Link to={"/dashboard/addproduct"}>Add A Product</Link>
                </li>
                <li className={linkCss}>
                  <a>My Products</a>
                </li>
                <li className={linkCss}>
                  <a>My Buyers</a>
                </li>
              </>
            )}
            {userCheck?.isAdmin && (
              <>
                {" "}
                <li className={linkCss}>
                  <a>All Sellers</a>
                </li>
                <li className={linkCss}>
                  <a>Reported Items</a>
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
