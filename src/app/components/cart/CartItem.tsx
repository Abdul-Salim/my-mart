import { cartState } from "@/app/recoil/cart/cartAtom";
import { getProductDetails } from "@/app/services/product";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { useQuery } from "@tanstack/react-query";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { FaMinus, FaPlus, FaRegHeart } from "react-icons/fa";
import { IoClose } from "react-icons/io5";
import { useRecoilState } from "recoil";
import CartItemLoader from "../loaders/CartItemLoader";

const CartItem = ({
  id,
  quantity,
  price = 0,
}: {
  id: string;
  quantity: number;
  price: number;
}) => {
  const [cart, setCart] = useRecoilState(cartState);
  const { data, isLoading } = useQuery({
    queryKey: ["cart-item", id],
    queryFn: async () => getProductDetails(id),
  });

  const incrementQuantity = () => {
    setCart((prev) => {
      return prev?.map((item) =>
        item.id === id ? { ...item, quantity: item?.quantity + 1 } : item
      );
    });
  };

  const decrementQuantity = () => {
    if (quantity > 1) {
      setCart((prev) => {
        return prev?.map((item) =>
          item.id === id ? { ...item, quantity: item?.quantity - 1 } : item
        );
      });
    }
  };

  return isLoading ? (
    <CartItemLoader />
  ) : (
    <Card>
      <div className="flex flex-col lg:flex-row gap-3 justify-between w-full px-5 py-3">
        <div className="w-[70px] h-[100px] flex justify-between items-start">
          <Image
            src={data?.image}
            alt="product"
            width={70}
            height={0}
            className="h-full object-contain"
          />
        </div>
        <div className="flex flex-col gap-3 h-full my-auto flex-1">
          <Link href={`/product/${id}`} className="hover:underline">
            <h2 className="font-medium text-[1rem] ">{data?.title}</h2>
          </Link>
          <div className="flex gap-4 flex-wrap lg:flex-nowrap">
            <Button className="bg-transparent hover:bg-transparent gap-2 shadow-none h-8 text-primary hover:underline">
              <FaRegHeart size={16} />
              Add To Wishlist
            </Button>
            <Button className="gap-2 bg-transparent h-8 text-red-600 hover:bg-transparent shadow-none hover:underline">
              <IoClose size={16} />
              Remove
            </Button>
          </div>
        </div>
        <div className="flex w-full lg:w-1/4 justify-between">
          <div className="flex gap-3 items-center">
            <Button
              onClick={incrementQuantity}
              className="w-5 h-5 flex items-center justify-center border p-1"
            >
              <FaPlus />
            </Button>
            <p className="text-black">{quantity}</p>
            <Button
              onClick={decrementQuantity}
              className="w-5 h-5 flex items-center justify-center border p-1"
            >
              <FaMinus />
            </Button>
          </div>
          <p className="font-extrabold text-lg my-auto">
            ${(quantity * data?.price).toFixed(2)}
          </p>
        </div>
      </div>
    </Card>
  );
};

export default CartItem;
