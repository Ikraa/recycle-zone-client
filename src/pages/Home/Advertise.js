import { useQuery } from "@tanstack/react-query";
import React from "react";

const Advertise = () => {
  const { isLoading, error, data, refetch } = useQuery({
    queryKey: ["advertise"],
    queryFn: () =>
      fetch(`https://recycle-zone.onrender.com/advertise`).then((res) =>
        res.json()
      ),
  });
  if (isLoading) {
    return;
  }

  if (data?.length > 0) {
    return (
      <div className="my-6">
        <h1 className="text-center text-4xl font-bold my-12 common-text-color uppercase">
          Advertise
        </h1>

        <div className="common-bg py-10 px-8 grid lg:grid-cols-3 gap-3">
          {data?.map((itm) => (
            <div class="card  bg-base-100 shadow-xl">
              <div class="card-body">
                <h2 class="card-title">{itm?.name}</h2>
                <p>
                  {itm?.description?.length > 50
                    ? itm?.description?.slice(0, 50)
                    : itm?.description}
                </p>
              </div>
              <figure>
                <img
                  className="h-[250px] w-full"
                  src={itm?.productUrl}
                  alt="Shoes"
                />
              </figure>
            </div>
          ))}
        </div>
      </div>
    );
  }
};

export default Advertise;
