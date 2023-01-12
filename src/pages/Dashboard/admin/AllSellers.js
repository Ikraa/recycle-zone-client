import { useQuery } from "@tanstack/react-query";
import React from "react";
import SellerRow from "./SellerRow";

const AllSellers = () => {
  const { isLoading, error, data, refetch } = useQuery({
    queryKey: ["allusers"],
    queryFn: () =>
      fetch(`https://recyclezone.vercel.app/sellers`).then((res) => res.json()),
  });
  if (isLoading) {
    return;
  }
  return (
    <div className="mx-4">
      <h1 className="underline text-lg">All Sellers:</h1>
      <div className="table-responsive">
        <div class="overflow-x-auto">
          <table class="table table-compact w-full">
            <thead>
              <tr>
                <th>sl</th>
                <th>Name</th>
                <th>Email</th>
                <th>Type</th>

                <th className="text-center">Action</th>
              </tr>
            </thead>
            <tbody>
              {data?.map((item, i) => (
                <SellerRow refetch={refetch} item={item} i={i} key={i} />
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default AllSellers;
