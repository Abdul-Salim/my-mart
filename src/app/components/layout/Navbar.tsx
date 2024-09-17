import React from "react";
import { useRouter } from "next/navigation";
import { FaHeart, FaShoppingCart, FaUser } from "react-icons/fa";
import { useRecoilValue } from "recoil";
import { cartState } from "@/app/recoil/cart/cartAtom";
import Link from "next/link";

const Navbar = () => {
  const router = useRouter();
  const cart = useRecoilValue(cartState);

  const showCart = () => {
    router.push("/cart");
  };

  return (
    <nav className="w-full flex justify-between items-center px-10 h-14 bg-primary text-white">
      <div className="">
        <Link href="/">
          <h4 className="font-serif font-extrabold">LOGO</h4>
        </Link>
      </div>

      <div className="flex gap-12">
        <FaHeart size={16} />
        <div className="relative">
          <FaShoppingCart
            className="cursor-pointer"
            onClick={showCart}
            size={16}
          />
          <span className="absolute bottom-3 left-3 text-xs">
            {cart?.length ?? 0}
          </span>
        </div>
        <FaUser size={16} />
      </div>
    </nav>
  );
};

export default Navbar;
