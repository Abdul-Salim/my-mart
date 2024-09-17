import { cartState } from "@/app/recoil/cart/cartAtom";
import React from "react";
import { useRecoilState } from "recoil";
import CartItem from "./CartItem";

const Cart = () => {
  const [cart, setCart] = useRecoilState(cartState);
  return (
    <div>
      <h2>Shopping Cart</h2>
      <div className="flex flex-col gap-6">
        {cart?.length > 0
          ? cart?.map((item: string) => <CartItem key={item} id={item} />)
          : ""}
      </div>
    </div>
  );
};

export default Cart;
