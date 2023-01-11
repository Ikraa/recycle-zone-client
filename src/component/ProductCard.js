import { useFormik } from "formik";
import React from "react";
import "./Product.modules.css";

const ProductCard = ({ item }) => {
  const { handleChange, values } = useFormik({
    initialValues: {
      userName: "safasf",
      email: "sfsaf",
      mettingLocation: "",
      itemName: item?.name,
      productPrice: item?.resalePrice,
      phone: "",
    },
  });
  console.log(values);
  return (
    <>
      <div class="card">
        <div class="box">
          <div class="content">
            <h2>{item?.id}</h2>
            <img
              className="w-[200px] h-[200px] mx-auto"
              src={
                "https://stylesatlife.com/wp-content/uploads/2018/05/Beautiful-Bedroom-Furniture-Designs.jpg"
              }
              alt=""
            />
            <h4 className="text-white my-2 text-2xl text-start">
              {item?.name}
            </h4>
            <p className="text-start text-gray-500">{item?.description}</p>
            <h6 className="text-start text-white text-2xl mt-2">
              Original Price:${item?.originalPrice}
            </h6>
            <h6 className="text-start text-2xl text-white">
              Resale Price:{item?.resalePrice}
            </h6>
            <h6 className="text-start text-2xl text-white">
              User:{item?.used} Years
            </h6>
            <h5 className="text-start text-2xl text-white">
              Post Date:{item?.postDate}
            </h5>
            <p className="text-start ">
              Seller: {item?.sellerName}{" "}
              {item?.verified && (
                <i class="fa-solid fa-check bg-blue-600 text-white p-[2px] rounded-full"></i>
              )}
            </p>
            <div className="mt-10">
              <label
                className="common-bg px-8 py-2 text-white cursor-pointer rounded-[5px] "
                for="my-modal-6"
              >
                Book Now
              </label>
            </div>
          </div>
        </div>
      </div>

      <input type="checkbox" id="my-modal-6" class="modal-toggle" />
      <div class="modal modal-bottom sm:modal-middle">
        <div class="modal-box  p-5 custom-scroll">
          <div class="modal-action">
            <label for="my-modal-6" class="btn btn-xs bg-red-600">
              Close
            </label>
          </div>
          <h3 class="font-bold text-lg">Book This Product !</h3>
          <form>
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
                value={values.userName}
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
                value={values.email}
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
    </>
  );
};

export default ProductCard;
