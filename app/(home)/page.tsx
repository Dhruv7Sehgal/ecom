import ProductCard from "@/components/Products";
import { getProducts } from "@/lib/actions/product.actions";
import React from "react";

const Home = async () => {
  const result = await getProducts({});

  console.log(result);

  const products = result.products;

  return (
    <div className="grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-1">
      {products.map((item, key) => (
        <ProductCard key={key} product={item} />
      ))}
    </div>
  );
};

export default Home;
