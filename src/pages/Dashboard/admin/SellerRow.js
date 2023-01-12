import React from "react";

const SellerRow = ({ item, i, refetch }) => {
  const handleDelete = () => {
    fetch(`https://recycle-zone.onrender.com/sellers/${item?._id}`, {
      method: "DELETE",
    })
      .then((res) => res.json())
      .then((data) => {
        refetch();
      });
  };
  return (
    <tr>
      <th>{i + 1}</th>
      <td>{item?.name}</td>

      <td>{item?.email}</td>
      <td>{item?.accountType}</td>

      <td className="text-center">
        <span onClick={handleDelete} className="text-red-700 text-[12px]">
          <i class="fa-solid fa-trash"></i>
        </span>
      </td>
    </tr>
  );
};

export default SellerRow;
