"use client";
import { useCart } from "../contexts/CartContext";
import Image from "next/image";

export default function CartPage() {
  const { cart } = useCart();

  return (
    <div className="p-6">
      <h1 className="text-xl font-bold mb-4">Your Cart</h1>

      {cart.length === 0 && (
        <p className="text-gray-600">Your cart is empty.</p>
      )}

      <div className="flex flex-row flex-wrap mx-auto">
        {cart.map((item, index) => (
          <div
            key={index}
            className="flex m-3 items-center shadow-md border border-zinc-200 bg-zinc-100 w-40 flex-col p-3 rounded-2xl"
          >
            <Image
              src={item.image}
              width={80}
              height={80}
              alt={item.title}
              className="object-contain h-24"
            />
            <p className="text-sm mt-2 line-clamp-2 text-center">
              {item.title}
            </p>
            <p className="font-semibold mt-2">${item.price}</p>
          </div>
        ))}
        {cart.length > 0 && (
          <button className="mt-4 bg-blue-500 rounded-xl text-white font-bold text-xl w-full py-3">
            Pay
          </button>
        )}
      </div>
    </div>
  );
}
