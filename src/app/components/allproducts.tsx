"use client";
import Image from "next/image";
import React, { useEffect, useState } from "react";

const AllProducts = () => {
  const [products, setProducts] = useState<any[]>([]);

  useEffect(() => {
    const fetchProducts = async () => {
      const res = await fetch("https://fakestoreapi.com/products");
      const json = await res.json();
      setProducts(json);
    };

    fetchProducts();
  }, []); 
  return (
    <div className="flex flex-row flex-wrap mx-auto">
      {products.map((item) => (
        <div
          key={item.id}
          className="flex m-3 bg-zinc-100 w-40 flex-col p-2 rounded"
        >
          <Image
            src={item.image}
            height={80}
            width={80}
            alt={item.title}
            className="object-contain"
          />
          <p className="text-sm mt-2 font-medium truncate w-38">{item.title}</p>
          <p className="font-semibold">${item.price}</p>
        </div>
      ))}
    </div>
  );
};

export default AllProducts;
