import React from "react";
import { Search, ShoppingCart } from "lucide-react";
import Link from "next/link";
import { GiCaterpillar } from "react-icons/gi";
import { FaCartShopping } from "react-icons/fa6";
import { BiSolidCategory } from "react-icons/bi";
const Header = () => {
  return (
    <>
      <header className="w-full bg-gray-100 relative border-b space-x-6 pl-3 items-center flex h-14">
        <div className="flex shadow-xs shadow-gray-500 bg-gray-200 pl-3 ml-3 p-2 space-x-2 placeholder-gray-400  rounded-sm">
          <Search className="text-gray-400" />
          <input
            type="text"
            className="placeholder-gray-400 focus:outline-none"
            placeholder="Search..."
          ></input>
        </div>
        <div className="absolute right-10 flex space-x-4 text-zinc-600">
          <Link href={"/cart"} className="  ">
            <FaCartShopping size={30} />
          </Link>
          <Link href={"/category"} className=" text-zinc-600">
            <BiSolidCategory size={30} />
          </Link>
        </div>
      </header>
    </>
  );
};

export default Header;
