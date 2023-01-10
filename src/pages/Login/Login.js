import { useFormik } from "formik";
import React, { useState } from "react";

const Login = () => {
  const [newUser, setNewUser] = useState(false);
  const { errors, values, handleReset, handleSubmit, handleChange } = useFormik(
    {
      enableReinitialize: true,
      initialValues: {
        name: "",
        email: "",
        password: "",
        accountType: "user",
      },
      onSubmit: (values) => {
        console.log(values);
      },
      validate: (values) => {
        let errors = {};
        if (newUser && !values.name.length) {
          errors.name = "Name is required";
        }
        if (!values.email) {
          errors.email = "Email is required";
        }
        if (!values.password) {
          errors.password = "Password is required";
        }
        if (values.password && values.password.length < 6) {
          errors.password = "Password should be more then 6 charachter";
        }

        return errors;
      },
    }
  );
  console.log(values);

  return (
    <div className="min-h-screen login-background flex items-center justify-center lg:px-1 flex-col px-4 ">
      <form className="bg-[#B4B6CD] ln-form  min-h-[300px] h-auto lg:w-[400px] w-full  rounded-[30px] p-10   flex items-center justify-center">
        <div className="w-full">
          {newUser && (
            <div className="flex flex-col mb-3">
              <div className="flex mb-1">
                <i className="fa-sharp fa-solid fa-user text-white bg-slate-700 p-3"></i>

                <input
                  value={values?.name}
                  onChange={handleChange}
                  name="name"
                  className="bg-[#E3E2E3] pl-[20px] py-3 w-full outline-none text-gray-900"
                  type="text"
                  placeholder="your name..."
                />
              </div>
              {errors?.name && (
                <span className="text-[11px] text-red-600 font-bold">
                  {errors?.name}
                </span>
              )}
            </div>
          )}
          {newUser && (
            <div className="flex flex-col mb-3">
              <div className="flex mb-1">
                <i className="fa-sharp fa-solid fa-user text-white bg-slate-700 p-3"></i>

                <select
                  name="accountType"
                  onChange={handleChange}
                  className="w-full pl-[20px]"
                  id="cars"
                >
                  <option value="seller">Seller</option>
                  <option value="user" selected>
                    User
                  </option>
                </select>
              </div>
              {/* {errors?.name && (
                <span className="text-[11px] text-red-600 font-bold">
                  {errors?.name}
                </span>
              )} */}
            </div>
          )}
          <div className="flex flex-col mb-3">
            <div className="flex mb-1">
              <i className="fa-sharp fa-solid fa-user text-white bg-slate-700 p-3"></i>
              <input
                value={values?.email}
                name="email"
                onChange={handleChange}
                className="bg-[#E3E2E3] pl-[20px] py-3 w-full outline-none text-gray-900"
                type="text"
                placeholder="your email..."
              />
            </div>
            {errors?.email && (
              <span className="text-[11px] text-red-600 font-bold">
                {errors?.email}
              </span>
            )}
          </div>
          <div className="flex flex-col mb-3">
            <div className="flex mb-1">
              <i className="fa-sharp fa-solid fa-lock text-white bg-slate-700 p-3"></i>
              <input
                value={values?.password}
                onChange={handleChange}
                name="password"
                className="bg-[#E3E2E3] pl-[20px] py-3 w-full outline-none text-gray-900"
                type="password"
                placeholder="Password..."
              />
            </div>
            {errors?.password && (
              <span className="text-[11px] text-red-600 font-bold">
                {errors?.password}
              </span>
            )}
          </div>
          <p className="text-[12px] text-gray-900 font-semibold">
            {newUser ? "Have a account?" : "Don't have a account?"}{" "}
            <strong
              onClick={() => setNewUser(!newUser)}
              className="text-blue-600 cursor-pointer"
            >
              {newUser ? "Log In" : "Sign Up"}
            </strong>
          </p>
        </div>
      </form>
      <button
        type="button"
        onClick={handleSubmit}
        className="common-bg w-[250px] py-2 login-button text-gray-900 hover:bg-gray-900 hover:text-white font-bold"
      >
        {newUser ? "Sign Up" : "Log In"}
      </button>
    </div>
  );
};

export default Login;
