import React from "react";
import { toast } from "react-toastify";

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

  const handleRunAd = () => {
    fetch("http://localhost:4000/advertise", {
      method: "POST",
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
      body: JSON.stringify(item),
    })
      .then((res) => res.json())
      .then((data) => {
        toast.success("Ad Running successfully..");
      });
  };

  const handleRemoveAdd = () => {
    fetch(`http://localhost:4000/advertise/${item._id}`, {
      method: "DELETE",
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data, "delete");
        toast.success("Ad pause successfully..");
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
          <span className="bgn btn-xs rounded-[3px] font-semibold text-green-700 ">
            available
          </span>
        ) : (
          <span className="bgn btn-xs rounded-[3px] text-yellow-700 font-semibold">
            sold
          </span>
        )}
      </td>
      <td>
        <span
          onClick={handleRunAd}
          className="bgn btn-xs rounded-[3px] cursor-pointer bg-green-700 text-white"
        >
          Run Ad
        </span>
        <span
          onClick={handleRemoveAdd}
          className="bgn btn-xs rounded-[3px] cursor-pointer bg-red-700 text-white"
        >
          Remove Ad
        </span>
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
