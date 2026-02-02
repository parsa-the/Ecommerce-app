"use client";
import { Heart, Star } from "lucide-react";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import { BsCartPlus } from "react-icons/bs";

const AllProducts = () => {
  const [products, setProducts] = useState<any[]>([]);

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
    <div className="p-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
      {/* 
        Why this works:
        1. grid - Creates a CSS Grid container
        2. grid-cols-* - Responsive columns
        3. All cards in the same row will automatically be equal height
      */}

      {products.map((item) => (
        <div
          key={item.id}
          className="flex flex-col h-full shadow-md border border-[#F5E7C6] bg-[#FAF3E1] p-4 rounded-lg"
        >
          {/* Image container with fixed height */}
          <div className="h-48 flex items-center justify-center mb-4">
            <Image
              src={item.image}
              width={120}
              height={120}
              alt={item.title}
              className="object-contain max-h-full"
              priority={false}
            />
          </div>

          {/* Text content that can grow */}
          <div className="grow mb-4">
            <p className="text-sm font-medium line-clamp-3">{item.title}</p>
          </div>

          {/* Price and button - always at bottom */}
          <div className="mt-auto pt-6">
            <div className="flex items-center justify-between mb-4">
              <div>
                <p className="font-bold text-2xl">${item.price}</p>
                <p className="text-sm text-green-600 font-medium">In stock</p>
              </div>
              <div className="flex items-center gap-1">
                <Star className="w-4 h-4 text-yellow-400 fill-yellow-400" />
                <span className="font-medium">{item.rating?.rate || 4.5}</span>
              </div>
            </div>

            <div className="space-y-2">
              <button
                className="w-full bg-linear-to-r from-[#FA8112] to-[#FF9A3D] text-white 
                py-3 rounded-xl font-semibold hover:shadow-lg transition-all duration-300"
              >
                Quick View
              </button>

              <div className="flex gap-2">
                <button
                  className="flex-1 bg-white border-2 border-[#FA8112] text-[#FA8112]
                  py-3 rounded-xl font-medium hover:bg-[#FAF3E1] transition-colors duration-300"
                >
                  Add to Cart
                </button>
                <button
                  className="px-4 bg-gray-100 hover:bg-gray-200 rounded-xl 
                  transition-colors duration-300"
                  aria-label="Wishlist"
                >
                  <Heart size={20} />
                </button>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default AllProducts;
