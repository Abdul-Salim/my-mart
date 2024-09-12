import React from "react";
import { FaHeart, FaShoppingCart, FaUser } from "react-icons/fa";

const Navbar = () => {
  return (
    <nav className="w-full flex justify-between items-center px-10 h-14 bg-primary text-white">
      <div className="">
        <h4 className="font-serif font-extrabold">LOGO</h4>
      </div>

      <div className="flex gap-12">
        <FaHeart size={24} />
        <FaShoppingCart size={24} />
        <FaUser size={24} />
      </div>
    </nav>
  );
};

export default Navbar;
