import { Card } from "@/components/ui/card";
import React from "react";

const CartItemLoader = () => {
  return (
    <Card className="">
      <div className="flex gap-2 justify-between w-full px-5 py-3">
        <div className="w-[70px] h-[100px] bg-gray-300 animate-pulse rounded-sm" />
        {/* <div className="gap-2 flex flex-col">
          <div className="h-4 w-full bg-gray-300 rounded-md animate-pulse" />
          <div className="h-4 w-full bg-gray-300 rounded-md animate-pulse" />
        </div> */}

        <div className="flex flex-col gap-3 w-full pb-5 px-5 h-full my-auto">
          <div className="bg-gray-300 rounded-md animate-pulse h-6 w-full" />
          <div className="flex gap-3 justify-start">
            <div className="bg-gray-300 rounded-md animate-pulse h-6 w-48" />
            <div className="bg-gray-300 rounded-md animate-pulse h-6 w-48" />
          </div>
        </div>
      </div>
    </Card>
  );
};

export default CartItemLoader;
