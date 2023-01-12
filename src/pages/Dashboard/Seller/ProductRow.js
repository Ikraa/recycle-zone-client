import React from "react";

const ProductRow = ({ item, i, refetch }) => {
  const handleDelete = () => {
    fetch(
      `http://localhost:4000/product/${item?.primaryKey}?category=${item?.category}`,
      {
        method: "PATCH",
      }
    )
      .then((res) => res.json())
      .then((data) => {
        refetch();
      });
  };
  return (
    <tr>
      <th>{i + 1}</th>
      <td>{item?.name}</td>
      <td>{new Date(item?.postDate).toDateString()}</td>
      <td>{item?.category}</td>
      <td>{item?.resalePrice}</td>
      <td>{item?.location}</td>
      <td>
        {item?.status ? (
          <span className="bgn btn-xs rounded-[3px] bg-green-700 text-white">
            available
          </span>
        ) : (
          <span className="bgn btn-xs rounded-[3px] bg-yellow-700 text-white">
            sold
          </span>
        )}
      </td>
      <td className="text-center">
        <span onClick={handleDelete} className="text-red-700 text-[12px]">
          <i class="fa-solid fa-trash"></i>
        </span>
      </td>
    </tr>
  );
};

export default ProductRow;
