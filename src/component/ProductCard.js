import { useFormik } from "formik";
import React, { useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { toast } from "react-toastify";
import auth from "../firebase/firebase.config";
import "./Product.modules.css";

const ProductCard = ({ item }) => {
  const [user, loading] = useAuthState(auth);
  const [show, setShow] = useState(false);
  const { handleChange, values, handleSubmit } = useFormik({
    initialValues: {
      mettingLocation: "",
      itemName: item?.name,
      productPrice: item?.resalePrice,
      phone: "",
    },
    onSubmit: (values) => {
      const data = {
        ...values,
        sellerEmail: item?.email,
        email: user?.email,
        userName: user?.displayName,
      };

      fetch("https://recycle-zone.onrender.com/book", {
        method: "POST",
        headers: {
          "Content-type": "application/json; charset=UTF-8",
        },
        body: JSON.stringify(data),
      })
        .then((res) => res.json())
        .then((data) => {
          toast.success("Item  booked successfully..");
          setShow(false);
        });
    },
  });
  if (loading) {
    return;
  }
  return (
    <>
      <div class="card container">
        <div class="box">
          <div class="content">
            <img
              className="w-[200px] h-[200px] mx-auto"
              src={item?.productUrl}
              alt=""
            />
            <h2>{item?.id}</h2>

            <h4 className="text-white my-2 text-2xl text-start">
              {item?.name}
            </h4>
            <p className="text-start text-sm text-gray-500">
              {item?.description?.length > 100
                ? item?.description?.slice(0, 100) + "..."
                : item?.description}
            </p>
            <p className="text-start mt-2">
              <strong>Seller:</strong> {item?.sellerName}{" "}
              {item?.verified && (
                <i class="fa-solid fa-check bg-blue-600 text-white p-[2px] rounded-full"></i>
              )}
            </p>
            <h6 className="text-start text-2xl text-white">
              Resale Price: ${item?.resalePrice}
            </h6>
            <h6 className="text-start text-gray-500 mt-2">
              <small>Original Price: ${item?.originalPrice}</small>
            </h6>

            <h6 className="text-start  text-gray-500">
              <small>User: {item?.used} Years</small>
            </h6>

            <h5 className="text-start  text-gray-500">
              <small>
                {" "}
                Post Date:{new Date(item?.postDate).toDateString()}
              </small>
            </h5>
            <div className="mt-10">
              <label
                className="common-bg px-8 py-2 text-white cursor-pointer rounded-[5px] "
                for="my-modal-6"
                onClick={() => setShow(true)}
              >
                Book Now
              </label>
            </div>
          </div>
        </div>
      </div>

      <input type="checkbox" id="my-modal-6" class="modal-toggle" />
      {show && (
        <div class="modal modal-bottom sm:modal-middle">
          <div class="modal-box  p-5 custom-scroll">
            <div class="modal-action">
              <label for="my-modal-6" class="btn btn-xs bg-red-600">
                Close
              </label>
            </div>
            <h3 class="font-bold text-lg">Book This Product !</h3>
            <form onSubmit={handleSubmit}>
              <div className="mx-2">
                <label className="text-black text-[14px] mb-2 inline-block">
                  User Name:
                </label>
                <input
                  name="userName"
                  placeholder="Name"
                  onChange={handleChange}
                  readOnly
                  disabled={true}
                  value={user?.displayName}
                  type="text"
                  className="w-full outline-none text-gray-800 border border-[1px solid bg-gray-500] pl-[10px] py-2  rounded-[3px]"
                />
              </div>
              <div className="mx-2">
                <label className="text-black text-[14px] mb-2 inline-block">
                  Email Address:
                </label>
                <input
                  name="email"
                  placeholder="email"
                  value={user?.email}
                  type="text"
                  readOnly
                  disabled={true}
                  className="w-full outline-none text-gray-800 border border-[1px solid bg-gray-500] pl-[10px] py-2  rounded-[3px]"
                />
              </div>
              <div className="mx-2">
                <label className="text-black text-[14px] mb-2 inline-block">
                  Item Name:
                </label>
                <input
                  name="itemName"
                  placeholder="Product Name"
                  value={values?.itemName}
                  readOnly
                  disabled={true}
                  type="text"
                  className="w-full outline-none text-gray-800 border border-[1px solid bg-gray-500] pl-[10px] py-2  rounded-[3px]"
                />
              </div>
              <div className="mx-2">
                <label className="text-black text-[14px] mb-2 inline-block">
                  Product Price:
                </label>
                <input
                  name="productPrice"
                  placeholder="text"
                  readOnly
                  disabled={true}
                  value={values.productPrice}
                  type="text"
                  className="w-full outline-none text-gray-800 border border-[1px solid bg-gray-500] pl-[10px] py-2  rounded-[3px]"
                />
              </div>
              <div className="mx-2">
                <label className="text-black text-[14px] mb-2 inline-block">
                  Phone:
                </label>
                <input
                  name="phone"
                  required
                  placeholder="Phone"
                  onChange={handleChange}
                  value={values.phone}
                  type="text"
                  className="w-full outline-none text-gray-800 border border-[1px solid bg-gray-500] pl-[10px] py-2  rounded-[3px]"
                />
              </div>
              <div className="mx-2">
                <label className="text-black text-[14px] mb-2 inline-block">
                  Meeting Location:
                </label>
                <input
                  required
                  name="mettingLocation"
                  placeholder="Location"
                  onChange={handleChange}
                  value={values.mettingLocation}
                  type="text"
                  className="w-full outline-none text-gray-800 border border-[1px solid bg-gray-500] pl-[10px] py-2  rounded-[3px]"
                />
              </div>
              <button className="btn btn-sm mt-3 mx-2" type="submit">
                Submit
              </button>
            </form>
          </div>
        </div>
      )}
    </>
  );
};

export default ProductCard;
