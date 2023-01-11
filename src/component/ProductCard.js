import React, { useState } from "react";
import "./Product.modules.css";
import Modal from "react-modal";
const ProductCard = ({ item }) => {
  const [showModal, setShowModal] = useState(false);
  const customStyles = {
    content: {
      top: "50%",
      left: "50%",
      right: "auto",
      bottom: "auto",
      marginRight: "-50%",
      transform: "translate(-50%, -50%)",
      width: "500px",
      height: "500px",
    },
  };
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
        <div class="modal-box">
          <h3 class="font-bold text-lg">
            Congratulations random Internet user!
          </h3>
          <p class="py-4">
            You've been selected for a chance to get one year of subscription to
            use Wikipedia for free!
          </p>
          <div class="modal-action">
            <label for="my-modal-6" class="btn">
              Yay!
            </label>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProductCard;
