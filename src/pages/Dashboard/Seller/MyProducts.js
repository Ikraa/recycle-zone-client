import { useQuery } from "@tanstack/react-query";
import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "../../../firebase/firebase.config";
import ProductRow from "./ProductRow";
const MyProducts = () => {
  const [user, loading] = useAuthState(auth);
  const { isLoading, error, data, refetch } = useQuery({
    queryKey: ["myproduct"],
    queryFn: () =>
      fetch(`http://localhost:4000/product/${user?.email}`).then((res) =>
        res.json()
      ),
  });
  if (isLoading || loading) {
    return;
  }

  return (
    <div className="mx-4">
      <h1 className="underline text-lg">All Products:</h1>
      <div className="table-responsive">
        <div class="overflow-x-auto">
          <table class="table table-compact w-full">
            <thead>
              <tr>
                <th>sl</th>
                <th>Name</th>
                <th>Date</th>
                <th>Category</th>
                <th>Price</th>
                <th>location</th>
                <th>Status</th>
                <th className="text-center">Action</th>
              </tr>
            </thead>
            <tbody>
              {data?.map((item, i) => (
                <ProductRow refetch={refetch} item={item} i={i} key={i} />
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default MyProducts;
