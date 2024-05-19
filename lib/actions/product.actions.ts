"use server";

import Product from "@/database/product.model";
import { connectToDatabase } from "../moongose";
import { revalidatePath } from "next/cache";

export async function getProducts(params: any) {
  try {
    connectToDatabase();

    const products = await Product.find({});

    return { products };
  } catch (err) {
    throw err;
  }
}

export async function addProduct(params: any) {
  try {
    connectToDatabase();

    const { title, description, prize, discountPrice, brand, stock, category } =
      params;

    console.log(params);

    await Product.create({
      title,
      description,
      prize,
      discountPrice,
      brand,
      stock,
      category,
    });

    revalidatePath("/");
  } catch (err) {
    throw err;
  }
}

export async function deleteProduct(params) {
  try {
    connectToDatabase();
    const { productId } = params;

    await Product.findByIdAndDelete(productId);

    revalidatePath("/");
  } catch (err) {
    throw err;
  }
}

export async function findProductById(params) {
  try {
    const { productId } = params;

    const product = await Product.findById(productId);
    return product;
  } catch (error) {
    throw error;
  }
}
