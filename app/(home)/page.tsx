import ProductCard from "@/components/Products";
import { getProducts } from "@/lib/actions/product.actions";

const Home = async () => {
  const result = await getProducts({});

  const products = result.products;

  return (
    <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
      {products.map((item, key) => (
        <ProductCard key={key} product={JSON.parse(JSON.stringify(item))} />
      ))}
    </div>
  );
};

export default Home;
