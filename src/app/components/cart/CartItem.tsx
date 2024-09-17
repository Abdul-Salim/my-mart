import { getProductDetails } from "@/app/services/product";
import { useQuery } from "@tanstack/react-query";
import React, { useEffect } from "react";

const CartItem = ({ id }: { id: string }) => {
  const { data } = useQuery({
    queryKey: ["cart-item", id],
    queryFn: async () => getProductDetails(id),
  });

  return <div>{data?.title}</div>;
};

export default CartItem;
