import React from "react";
import { Search, ShoppingCart } from "lucide-react";
import Link from "next/link";
const Header = () => {
  return (
    <>
      <header className="w-full bg-gray-100 border-b items-center flex h-14">
        <h1></h1>
        <div className="flex shadow-xs shadow-gray-500 bg-gray-200 pl-3 ml-3 p-2 space-x-2 placeholder-gray-400  rounded-sm">
          <Search className="text-gray-400" />
          <input
            type="text"
            className="placeholder-gray-400 focus:outline-none"
            placeholder="Search..."
          ></input>
        </div>
        <Link href={"/cart"}>
          <ShoppingCart className="" />
        </Link>
      </header>
    </>
  );
};

export default Header;
