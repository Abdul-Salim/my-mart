"use client";
import { useQuery } from "@tanstack/react-query";

import { Product } from "./types";
import { fetchProducts } from "./services/product";
import ProductCard from "./components/products/ProductCard";
import ProductLoader from "./components/loaders/ProductLoader";

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
            data?.map((item) => <ProductCard key={item?.id} {...item} />)
          )}
        </div>
      </section>
    </div>
  );
}
