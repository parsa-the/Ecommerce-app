"use client";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import { useCart } from "../contexts/CartContext";

const AllProducts = () => {
  const [products, setProducts] = useState<any[]>([]);
  const { addToCart } = useCart(); 

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const res = await fetch("https://fakestoreapi.com/products");
        const json = await res.json();
        setProducts(json);
      } catch (err) {
        console.error(err);
      }
    };
    fetchProducts();
  }, []);

  return (
    <div className="flex flex-row flex-wrap mx-auto">
      {products.map((item) => (
        <div
          key={item.id}
          className="flex m-3 items-center shadow-md border border-zinc-200 bg-zinc-100 w-40 flex-col p-3 rounded"
        >
          <Image
            src={item.image}
            width={80}
            height={80}
            alt={item.title}
            className="object-contain h-24"
          />

          <p className="text-sm font-medium line-clamp-2 mt-3 w-full text-center">
            {item.title}
          </p>

          <div className="flex items-center justify-between w-full mt-4">
            <p className="font-semibold">${item.price}</p>

            <button
              onClick={() => addToCart(item)}
              className="bg-blue-500 px-3 py-1 rounded-md text-white font-semibold
              hover:text-blue-500 hover:bg-transparent hover:border-blue-800 
              border transition-colors duration-300"
            >
              Buy
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default AllProducts;
