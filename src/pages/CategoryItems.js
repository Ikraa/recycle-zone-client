import React, { useEffect, useState } from "react";
import { useLoaderData, useParams } from "react-router-dom";
import ProductCard from "../component/ProductCard";
import Navbar from "../Shared/Navbar/Navbar";

const CategoryItems = () => {
  // const { id } = useParams();
  // const [products, setProducts] = useState({});
  const products = useLoaderData();
  // console.log(data, "lodar");
  // useEffect(() => {
  //   fetch("../Category.json")
  //     .then((res) => res.json())
  //     .then((data) => {
  //       const findCategory = data?.find((dt) => dt.id === +id);
  //       if (findCategory) {
  //         setProducts(findCategory);
  //       }
  //     });
  // }, []);

  return (
    <div>
      <Navbar />
      <h1 className="text-black mt-16 mb-4 underline text-4xl uppercase">
        {products?.name} Category Product
      </h1>

      <div>
        <div className="category-wrapper">
          {/* <div style={{height:"100vh"}}>

        </div> */}
          <div class="category-container">
            {products?.product?.map((item, i) => (
              <ProductCard item={item} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CategoryItems;
