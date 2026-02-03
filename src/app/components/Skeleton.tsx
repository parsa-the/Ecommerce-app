import React from "react";

const ProductSkeleton = () => {
  return (
    <div className="p-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
      {Array.from({ length: 8 }).map((_, index) => (
        <div
          key={index}
          className="flex flex-col h-full shadow-md border border-gray-200 bg-white/50 p-4 rounded-lg animate-pulse"
        >
          <div className="h-48 bg-gray-200/50 rounded-lg mb-4 flex items-center justify-center">
          </div>
          
          <div className="space-y-2 mb-4">
            <div className="h-4 bg-gray-200/50 rounded"></div>
            <div className="h-4 bg-gray-200/50 rounded w-5/6"></div>
            <div className="h-4 bg-gray-200/50 rounded w-4/6"></div>
          </div>
          
          <div className="mt-auto pt-4">
            <div className="flex justify-between mb-4">
              <div className="space-y-2">
                <div className="h-6 w-20 bg-gray-200/50 rounded"></div>
                <div className="h-4 w-16 bg-gray-200/50 rounded"></div>
              </div>
              <div className="h-6 w-12 bg-gray-200/50 rounded"></div>
            </div>
            
            <div className="h-10 bg-gray-200/50 rounded-xl mb-2"></div>
            <div className="flex gap-2">
              <div className="flex-1 h-10 bg-gray-200/50 rounded-xl"></div>
              <div className="w-10 h-10 bg-gray-200/50 rounded-xl"></div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ProductSkeleton;