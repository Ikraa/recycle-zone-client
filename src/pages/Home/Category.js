import React, { useEffect, useState } from "react";
import CategoryCard from "../../component/CategoryCard";

const Category = ({ category }) => {
  // const [category, setCategory] = useState([]);
  // useEffect(() => {
  //   fetch("./Category.json")
  //     .then((res) => res.json())
  //     .then((data) => setCategory(data));
  // }, []);
  return (
    <div className="my-6">
      <h1 className="text-center text-4xl font-bold my-12 common-text-color uppercase">
        Product Category
      </h1>
      <div className="category-card common-bg grid lg:grid-cols-3 gap-3 py-16 lg:px-8">
        {category.length > 0 &&
          category?.map((item, i) => <CategoryCard item={item} key={i} />)}
      </div>
    </div>
  );
};

export default Category;
