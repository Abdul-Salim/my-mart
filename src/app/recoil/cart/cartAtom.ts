import { atom } from "recoil";
import localStorageEffect from "../localStorageEffect";
import { CartItemInterface } from "@/app/types";

export const cartState = atom<CartItemInterface[]>({
  key: "cartState",
  default: [],
  effects_UNSTABLE: [localStorageEffect("cartState")],
});
