import React, { useState, useEffect } from "react";
import MyCard from "../components/MyCard"; // Assuming MyCard is a reusable component
import { Spinner } from "@material-tailwind/react";
function ProductCard() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch("https://fakestoreapi.com/products");
        const data = await response.json();
        setProducts(data); // Directl y set the fetched data
        setLoading(false);
      } catch (error) {
        console.error("Error fetching products:", error);
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-screen bg-gray-100">
     <Spinner className="h-16 w-16 text-gray-900/50" />;
    </div>
    );
  }

  return (
    <div className="mt-4 mb-6 grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
    {products && products.length > 0 ? (
      products.map((product) => (
        <MyCard key={product.id} product={product} />
      ))
    ) : (
      <h1 className="text-center m-4 bg-gray-600 text-white p-4 text-3xl">No data available</h1>
    )}
  </div>
  
  );
}

export default ProductCard;
