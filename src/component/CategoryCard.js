import React from "react";
import { useNavigate } from "react-router-dom";
import "./Category.modules.css";
const CategoryCard = ({ item }) => {
  const navigate = useNavigate();
  return (
    <div class="a-box  ">
      <div class="img-container">
        <div class="img-inner">
          <div class="inner-skew">
            <img alt="" src={item?.url} />
          </div>
        </div>
      </div>
      <div class="text-container min-h-[400px]">
        <h3>{item?.name}</h3>
        <div>
          {item?.desc?.length > 300 ? item?.desc?.slice(0, 300) : item?.desc}
        </div>
        <div className="flex justify-end mt-10">
          <button
            onClick={() => navigate(`/category/${item?._id}`)}
            className="py-2 px-4 common-bg text-white font-bold uppercase rounded-[4px]

          "
          >
            Explore
          </button>
        </div>
      </div>
    </div>
  );
};

export default CategoryCard;
