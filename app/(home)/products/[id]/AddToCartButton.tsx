"use client";

import useCartStore from "@/store/cartStore";
import React from "react";

export const AddToCartButton = ({ product }) => {
  const addProduct = useCartStore((state) => state.addProduct);

  return (
    <div className="flex items-center justify-between">
      <span className="title-font text-xl font-bold text-gray-900">
        ${product?.price}
      </span>
      <button
        type="button"
        onClick={() => addProduct(product)}
        className="rounded-md bg-black px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-black/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
      >
        Add to Cart
      </button>
    </div>
  );
};
