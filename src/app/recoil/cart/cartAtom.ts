import { atom, selector } from "recoil";
import localStorageEffect from "../localStorageEffect";
import { CartItemInterface } from "@/app/types";

export const cartState = atom<CartItemInterface[]>({
  key: "cartState",
  default: [],
  effects_UNSTABLE: [localStorageEffect("cartState")],
});

export const cartTotal = selector({
  key: "cartTotal",
  get: ({ get }) => {
    const cartItems = get(cartState);
    return cartItems.reduce(
      (total, item) => total + item.price * item.quantity,
      0
    );
  },
});
