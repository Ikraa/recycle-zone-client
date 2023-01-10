import React from "react";
import "./Product.modules.css";
const ProductCard = ({ item }) => {
  return (
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
          <h4 className="text-white my-2 text-2xl text-start">{item?.name}</h4>
          <p className="text-start text-gray-400">{item?.description}</p>
          <p className="text-start text-2xl">
            Original Price:${item?.originalPrice}
          </p>
          <p className="text-start text-2xl">
            Resale Price:{item?.resalePrice}
          </p>
          <h6 className="text-start text-2xl">User:{item?.used} Years</h6>
          <p className="text-start text-2xl">Post Date:{item?.postDate}</p>
          <p className="text-start ">
            Seller: {item?.sellerName}{" "}
            {item?.verified && (
              <i class="fa-solid fa-check bg-blue-600 text-white p-[2px] rounded-full"></i>
            )}
          </p>

          <a href="#">Read More</a>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
