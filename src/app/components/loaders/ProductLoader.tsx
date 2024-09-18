import { Card } from "@/components/ui/card";

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

export default ProductLoader;
