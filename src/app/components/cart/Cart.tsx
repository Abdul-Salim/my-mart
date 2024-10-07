import { cartState, cartTotal } from "@/app/recoil/cart/cartAtom";
import React from "react";
import { useRecoilState, useRecoilValue } from "recoil";
import { Card } from "@/components/ui/card";
import { formatMoney } from "@/lib/utils";
import { type CartItemInterface } from "@/app/types";
import CartItem from "./CartItem";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import Link from "next/link";

const Cart = () => {
  const [cart] = useRecoilState(cartState);
  const total = useRecoilValue(cartTotal);

  return (
    <div className="">
      <h2 className="text-lg font-bold mb-6">Shopping Cart</h2>
      {cart?.length > 0 ? (
        <div className="flex gap-6 flex-wrap lg:flex-nowrap">
          <div className="flex flex-col gap-3 w-full lg:w-4/6">
            {cart?.length > 0
              ? cart?.map((item: CartItemInterface) => (
                  <CartItem
                    key={item?.id}
                    id={item?.id}
                    quantity={item?.quantity}
                    price={item?.price}
                  />
                ))
              : ""}
          </div>
          <Card className="w-full lg:w-2/6 px-5 py-3 rounded-sm">
            <h2 className="text-lg font-bold mb-6">Order Summary</h2>
            <div className="flex w-full justify-between">
              <p className="text-gray-500">Sub Total</p>
              <p>{formatMoney(total)}</p>
            </div>
          </Card>
        </div>
      ) : (
        <Alert className="bg-white gap-4 flex flex-col items-center">
          <AlertTitle className="font-bold">Cart empty</AlertTitle>
          <AlertDescription>
            Your cart is currently empty. Explore{" "}
            <Link className="text-blue-600" href="/">
              products
            </Link>{" "}
            and add them to your cart.
          </AlertDescription>
        </Alert>
      )}
    </div>
  );
};

export default Cart;
