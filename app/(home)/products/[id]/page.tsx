import EditProduct from "@/components/EditProduct";
import { findProductById } from "@/lib/actions/product.actions";
import Image from "next/image";
import { AddToCartButton } from "./AddToCartButton";

async function ProductPage({ params }: { params: { id: string } }) {
  console.log(params.id);
  const product = await findProductById({
    productId: params.id,
  });

  return (
    <section className="justify-between overflow-hidden">
      <div className="mx-auto max-w-5xl px-5 py-24">
        <div className="mx-auto flex flex-wrap items-center lg:w-4/5">
          <Image
            alt={product.title}
            className="h-64 w-full rounded object-cover lg:h-96 lg:w-1/2"
            src={product.thumbnail}
            width={250}
            height={250}
          />
          <div className="mt-6 w-full lg:mt-0 lg:w-1/2 lg:pl-10">
            <h2 className="text-sm font-semibold tracking-widest text-gray-500">
              {product.brand}
            </h2>
            <h1 className="my-4 text-3xl font-semibold text-black">
              {product.title}
            </h1>
            <p className="leading-relaxed">{product.description}</p>
            <div className="mb-5 mt-6 flex items-center border-b-2 border-gray-100 pb-5">
              <div className="flex items-center">
                <span className="mr-3 text-sm font-semibold">Color</span>
                <button className="size-6 rounded-full border-2 border-gray-300 focus:outline-none"></button>
                <button className="ml-1 size-6 rounded-full border-2 border-gray-300 bg-gray-700 focus:outline-none"></button>
                <button className="ml-1 size-6 rounded-full border-2 border-gray-300 bg-green-200 focus:outline-none"></button>
              </div>
            </div>

            <AddToCartButton product={product} />
            <EditProduct product={JSON.parse(JSON.stringify(product))} />
          </div>
        </div>
      </div>
    </section>
  );
}

export default ProductPage;
