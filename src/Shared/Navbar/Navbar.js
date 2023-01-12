import { signOut } from "firebase/auth";
import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { Link } from "react-router-dom";
import auth from "../../firebase/firebase.config";

const Navbar = () => {
  const [user, loading] = useAuthState(auth);
  if (loading) {
    return;
  }
  return (
    <>
      <div className="bg-[#f76b8a] min-h-[60px] flex justify-between items-center px-8">
        <ul className="flex flex-wrap  items-center ">
          <span className="text-gray-900  font-bold">
            <Link
              to="/"
              className="hover:bg-black duration-300 transition-all text-[11px]  rounded-[3px] text-[#f76b8a] mr-[10px] px-3 py-1 bg-[#eaf6f6]"
              href="/home"
            >
              Home
            </Link>
          </span>
          <span className="text-gray-900  ">
            <a className=" mr-[10px] px-3 py-1 text-white" href="/home">
              |
            </a>
          </span>
          <span className="text-gray-900  font-bold">
            <Link
              to="/blog"
              className="hover:bg-black duration-300 transition-all text-[11px]  rounded-[3px] text-[#f76b8a] mr-[10px] px-3 py-1 bg-[#eaf6f6]"
            >
              Blog
            </Link>
          </span>
          <span className="text-gray-900  ">
            <a className=" mr-[10px] px-3 py-1 text-white" href="/home">
              |
            </a>
          </span>

          <span className="text-gray-900  font-bold">
            <Link
              to="/"
              className="hover:bg-black duration-300 transition-all text-[11px]  rounded-[3px] text-[#f76b8a] mr-[10px] px-3 py-1 bg-[#eaf6f6]"
              href="/home"
            >
              About
            </Link>
          </span>
          <span className="text-gray-900  ">
            <a className=" mr-[10px] px-3 py-1 text-white" href="/home">
              |
            </a>
          </span>
          {!user && (
            <>
              {" "}
              <span className="text-gray-900  font-bold">
                <Link
                  to="/login"
                  className="hover:bg-black duration-300 transition-all text-[11px]  rounded-[3px] text-[#f76b8a] mr-[10px] px-3 py-1 bg-[#eaf6f6]"
                >
                  Login
                </Link>
              </span>
            </>
          )}
          {user && (
            <>
              <span className="text-gray-900  font-bold">
                <Link
                  to="/dashboard"
                  className="hover:bg-black duration-300 transition-all text-[11px]  rounded-[3px] text-[#f76b8a] mr-[10px] px-3 py-1 bg-[#eaf6f6]"
                  href="/home"
                >
                  Dashboard
                </Link>
              </span>
              <span className="text-gray-900  ">
                <a className=" mr-[10px] px-3 py-1 text-white" href="/home">
                  |
                </a>
              </span>

              <span className="text-gray-900  font-bold">
                <span
                  onClick={() => signOut(auth)}
                  className="hover:bg-black duration-300 transition-all text-[11px] cursor-pointer  rounded-[3px] text-[#f76b8a] mr-[10px] px-3 py-1 bg-[#eaf6f6]"
                  href="/home"
                >
                  Log Out
                </span>
              </span>
            </>
          )}
        </ul>
        <div className="hidden lg:block">
          <h1 className="text-white text-2xl">Recycle Zone</h1>
        </div>
        <label
          for="my-drawer-2"
          class="btn btn-primary drawer-button lg:hidden"
        >
          <i class="fa-solid fa-bars"></i>
        </label>
      </div>
    </>
  );
};

export default Navbar;
