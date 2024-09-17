import { atom } from "recoil";
import localStorageEffect from "../localStorageEffect";

export const cartState = atom({
  key: "cartState",
  default: [],
  effects_UNSTABLE: [localStorageEffect("cartState")],
});
