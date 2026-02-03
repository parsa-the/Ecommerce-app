import React from "react";
import { useProductStore } from "../store/cartStore";

const SearchPrev = () => {
  const { products, searchQuery } = useProductStore();

  const filteredProducts = products.filter((prod) => {
    prod.title.toLowerCase().includes(searchQuery.toLowerCase());
  });
  return (
    <>
      <div className="relative flex items-center justify-center">
        <div className="absolute top-0.5 bg-white w-74 rounded-sm">
          {filteredProducts.map((products)=>{
            return <div>{products.title}</div>
          })}
        </div>
      </div>
    </>
  );
};

export default SearchPrev;
