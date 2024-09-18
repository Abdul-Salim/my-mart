import { cartState } from "@/app/recoil/cart/cartAtom";
import React from "react";
import { useRecoilState } from "recoil";
import CartItem from "./CartItem";
import { Card } from "@/components/ui/card";
import { formatMoney } from "@/lib/utils";

const Cart = () => {
  const [cart, setCart] = useRecoilState(cartState);
  const getTotal = () => {
    let sum = 0;
    cart?.forEach((item) => {
      sum = item?.quantity * item?.price;
    });
    return sum;
  };
  return (
    <div className="">
      <h2 className="text-lg font-bold mb-6">Shopping Cart</h2>
      <div className="flex gap-6 flex-wrap lg:flex-nowrap">
        <div className="flex flex-col gap-3 w-full lg:w-4/6">
          {cart?.length > 0
            ? cart?.map(
                (item: { id: string; quantity: number; price: number }) => (
                  <CartItem
                    key={item?.id}
                    id={item?.id}
                    quantity={item?.quantity}
                    price={item?.price}
                  />
                )
              )
            : ""}
        </div>
        <Card className="w-full lg:w-2/6 px-5 py-3">
          <h2 className="text-lg font-bold mb-6">Order Summary</h2>
          <div className="flex w-full justify-between">
            <p className="text-gray-500">Sub Total</p>
            <p>{formatMoney(getTotal())}</p>
          </div>
        </Card>
      </div>
    </div>
  );
};

export default Cart;
