"use client";
import { useQuery } from "@tanstack/react-query";

import { Product } from "./types";
import { Card } from "@/components/ui/card";
import { fetchProducts } from "./services/product";
import ProductCard from "./components/products/ProductCard";

const ProductLoader = () => {
  return (
    <Card className="flex flex-col gap-6">
      <div className="h-[200px] w-full bg-gray-300 animate-pulse rounded-sm" />
      <div className="px-5 gap-2 flex flex-col">
        <div className="h-6 w-full bg-gray-300 rounded-md animate-pulse" />
        <div className="h-6 w-full bg-gray-300 rounded-md animate-pulse" />
      </div>

      <div className="flex gap-3 w-full pb-5 px-5">
        <div className="bg-gray-300 rounded-md animate-pulse h-10 w-1/2" />
        <div className="bg-gray-300 rounded-md animate-pulse h-10 w-1/2" />
      </div>
    </Card>
  );
};
export default function HomePage() {
  const { data, isLoading, error } = useQuery<Product[]>({
    queryKey: ["products"],
    queryFn: () => fetchProducts(8),
  });
  return (
    <div className="">
      <section>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
          {isLoading ? (
            <>
              {[0, 1, 2, 3, 4, 5, 6, 7]?.map((_) => (
                <ProductLoader />
              ))}
            </>
          ) : (
            data?.map((item) => <ProductCard {...item} />)
          )}
        </div>
      </section>
    </div>
  );
}
