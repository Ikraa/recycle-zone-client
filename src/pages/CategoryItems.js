import React, { useEffect, useState } from "react";
import { useLoaderData, useParams } from "react-router-dom";
import ProductCard from "../component/ProductCard";
import Navbar from "../Shared/Navbar/Navbar";

const CategoryItems = () => {
  const products = useLoaderData();

  return (
    <div>
      <Navbar />
      <h1 className="text-black mt-16 mb-4 underline text-4xl uppercase">
        {products?.name} Category Product
      </h1>

      <div>
        <div className="category-wrapper overflow-hidden">
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
