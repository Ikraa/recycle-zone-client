import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "../../Shared/Navbar/Navbar";
// import Navbar from "../components/Navbar";

const Dashboard = () => {
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
            <li className={linkCss}>
              <a>My Orders</a>
            </li>
            <li className={linkCss}>
              <a>Add A Product</a>
            </li>
            <li className={linkCss}>
              <a>My Products</a>
            </li>
            <li className={linkCss}>
              <a>My Buyers</a>
            </li>
            <li className={linkCss}>
              <a>All Sellers</a>
            </li>
            <li className={linkCss}>
              <a>Reported Items</a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
