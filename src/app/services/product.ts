export const fetchProducts = async (limit: number) => {
  const response = await fetch(
    `https://fakestoreapi.com/products?limit=${limit}`
  );
  if (!response.ok) {
    throw new Error("Network response was not ok");
  }
  return response.json();
};
