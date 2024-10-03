import React from "react";
import Link from "next/link";
import Image from "next/image";
import { FaRegHeart, FaShoppingCart } from "react-icons/fa";

import StarRating from "./StarRating";
import { Product } from "@/app/types";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { useRecoilState } from "recoil";
import { cartState } from "@/app/recoil/cart/cartAtom";
import { toast } from "react-toastify";

const ProductCard = (product: Product) => {
  const { title = "", id = "", rating, image = "", price = 0 } = product;
  const [cart, setCart] = useRecoilState(cartState);
  let alreadyInCart = cart?.find((item) => item?.id == id) ?? null;

  const addToCart = () => {
    let existing = cart?.find((item) => item?.id == id);
    if (existing) {
      setCart((prev) => {
        return prev?.map((item) =>
          item.id === id ? { ...item, quantity: item?.quantity + 1 } : item
        );
      });
    } else {
      setCart((prev) => [
        ...prev,
        {
          id,
          quantity: 1,
          price: price ?? 0,
        },
      ]);
    }
    toast.info("Added to cart");
  };
  return (
    <Card className="w-full flex flex-col gap-0 rounded-sm">
      <div className="flex flex-col justify-between h-full pb-5 gap-8">
        <div className="flex flex-col gap-6">
          <div className="w-full h-[200px] flex justify-center items-start">
            <Image
              src={image}
              alt="product"
              width={100}
              height={0}
              className="h-full object-contain"
            />
          </div>
          <div className="flex gap-3 items-start px-5 justify-between">
            <Link href={`/product/${id}`} className="hover:underline">
              <h2 className="font-medium text-[1rem] ">{title}</h2>
            </Link>
            <p className="font-extrabold text-lg">${price}</p>
          </div>
        </div>

        <div className="px-5">
          <StarRating rating={rating?.rate ?? 0} count={rating?.count ?? 0} />
        </div>
        <div className="flex w-full justify-between gap-3 items-center px-5 flex-nowrap">
          <Button
            disabled={alreadyInCart !== null}
            className="w-full gap-2"
            onClick={addToCart}
          >
            {alreadyInCart == null ? "Add To Cart" : "Added to cart"}
            <FaShoppingCart />
          </Button>
          <Button className="w-full gap-2 bg-transparent hover:bg-transparent border text-primary">
            Wishlist
            <FaRegHeart />
          </Button>
        </div>
      </div>
    </Card>
  );
};

export default ProductCard;
