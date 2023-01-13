import { useFormik } from "formik";
import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import auth from "../../../firebase/firebase.config";

const AddProduct = () => {
  const [user, loading] = useAuthState(auth);
  const navigate = useNavigate();
  const { handleChange, values, handleSubmit } = useFormik({
    enableReinitialize: true,
    initialValues: {
      name: "",
      resalePrice: "",
      productType: "excellent",
      sellerPhone: "",
      location: "",
      originalPrice: "",
      productUrl: "",
      description: "",
      used: "",
      category: "Beds",
    },
    onSubmit: (values) => {
      const data = {
        ...values,
        email: user?.email,
        sellerName: user?.displayName,
        postDate: new Date(),
        status: true,
      };
      fetch("https://recycle-zone.onrender.com/addproduct", {
        method: "PATCH",
        headers: {
          "Content-type": "application/json; charset=UTF-8",
        },
        body: JSON.stringify(data),
      })
        .then((res) => res.json())
        .then((data) => {
          toast.success("Product added successfully");
          navigate("/dashboard/myproduct");
        });
    },
  });

  return (
    <div>
      <h1 className="text-xl font-semibold ">Add A Product:</h1>
      <div className=" h-auto flex justify-center">
        <form
          onSubmit={handleSubmit}
          className="w-[500px] h-auto overflow-scroll pb-[100px]"
        >
          <div className="mx-2">
            <label className="text-black text-[14px] mb-2 inline-block">
              Product Name:
            </label>
            <input
              name="name"
              placeholder="Name"
              onChange={handleChange}
              value={values.name}
              type="text"
              className="w-full outline-none text-gray-800 border border-[1px solid bg-gray-500] pl-[10px] py-2  rounded-[3px]"
            />
          </div>
          <div className="mx-2">
            <label className="text-black text-[14px] mb-2 inline-block">
              Price:
            </label>
            <input
              name="resalePrice"
              placeholder="Relase Price"
              value={values.resalePrice}
              onChange={handleChange}
              type="text"
              className="w-full outline-none text-gray-800 border border-[1px solid bg-gray-500] pl-[10px] py-2  rounded-[3px]"
            />
          </div>
          <div className="mx-2">
            <label className="text-black text-[14px] mb-2 inline-block">
              Product Type:
            </label>
            <select
              name="productType"
              onChange={handleChange}
              value={values.productType}
              style={{ border: "1px solid gray" }}
              className="w-full pl-[20px] py-2  outline-none"
            >
              <option value="excellent">excellent</option>
              <option value="good">good</option>
              <option value="fair">fair</option>
            </select>
          </div>
          <div className="mx-2">
            <label className="text-black text-[14px] mb-2 inline-block">
              Mobile Number:
            </label>
            <input
              name="sellerPhone"
              placeholder="Mobile number"
              value={values?.sellerPhone}
              onChange={handleChange}
              type="text"
              className="w-full outline-none text-gray-800 border border-[1px solid bg-gray-500] pl-[10px] py-2  rounded-[3px]"
            />
          </div>
          <div className="mx-2">
            <label className="text-black text-[14px] mb-2 inline-block">
              Location:
            </label>
            <input
              name="location"
              placeholder="Location"
              value={values.location}
              onChange={handleChange}
              type="text"
              className="w-full outline-none text-gray-800 border border-[1px solid bg-gray-500] pl-[10px] py-2  rounded-[3px]"
            />
          </div>
          <div className="mx-2">
            <label className="text-black text-[14px] mb-2 inline-block">
              Category:
            </label>
            <select
              name="category"
              value={values.category}
              onChange={handleChange}
              style={{ border: "1px solid gray" }}
              className="w-full pl-[20px] py-2 mt-2 outline-none"
            >
              <option value="Beds">Beds</option>
              <option value="Cabinets">Cabinets</option>
              <option value="Desks">Desks</option>
            </select>
            {/* <input
              name="category"
              placeholder="category"
              onChange={handleChange}
              value={values.category}
              type="text"
              className="w-full outline-none text-gray-800 border border-[1px solid bg-gray-500] pl-[10px] py-2  rounded-[3px]"
            /> */}
          </div>
          <div className="mx-2">
            <label className="text-black text-[14px] mb-2 inline-block">
              Price:
            </label>
            <input
              name="originalPrice"
              placeholder="Original Price"
              onChange={handleChange}
              value={values.originalPrice}
              type="text"
              className="w-full outline-none text-gray-800 border border-[1px solid bg-gray-500] pl-[10px] py-2  rounded-[3px]"
            />
          </div>
          <div className="mx-2">
            <label className="text-black text-[14px] mb-2 inline-block">
              Img Url:
            </label>
            <input
              name="productUrl"
              placeholder="Imag url"
              onChange={handleChange}
              value={values.productUrl}
              type="text"
              className="w-full outline-none text-gray-800 border border-[1px solid bg-gray-500] pl-[10px] py-2  rounded-[3px]"
            />
          </div>

          <div className="mx-2">
            <label className="text-black text-[14px] mb-2 inline-block">
              Year of used:
            </label>
            <input
              name="used"
              placeholder="Year of used"
              onChange={handleChange}
              value={values.used}
              rows="8"
              type="number"
              className="w-full outline-none text-gray-800 border border-[1px solid bg-gray-500] pl-[10px] py-2  rounded-[3px]"
            />
          </div>

          <div className="mx-2">
            <label className="text-black text-[14px] mb-2 inline-block">
              Description:
            </label>
            <textarea
              name="description"
              placeholder="Description"
              onChange={handleChange}
              value={values.description}
              rows="4"
              type="text"
              className="w-full outline-none text-gray-800 border border-[1px solid bg-gray-500] pl-[10px] py-2  rounded-[3px]"
            />
          </div>
          <div>
            <button className="btn btn-sm mt-3 mx-2" type="submit">
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddProduct;
