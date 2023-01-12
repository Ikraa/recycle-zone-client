import React from "react";

const UsersRow = ({ item, i, refetch }) => {
  const handleDelete = () => {
    fetch(`http://localhost:4000/buyers/${item?._id}`, {
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

export default UsersRow;