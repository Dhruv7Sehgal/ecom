"use server";

import Product from "@/database/product.model";
import { revalidatePath } from "next/cache";
import { connectToDatabase } from "../moongose";

export async function getProducts(params: any) {
  try {
    connectToDatabase();

    const products = await Product.find({});

    console.log(products);

    return { products };
  } catch (err) {
    console.log(err);
    throw err;
  }
}

export interface ProductParams {
  title: string;
  description: string;
  price: number;
  discountPrice: number;
  brand: string;
  stock: number;
  category: string;
  thumbnail: string;
}

export async function addProduct(params: ProductParams) {
  try {
    connectToDatabase();

    const {
      title,
      thumbnail,
      description,
      price,
      discountPrice,
      brand,
      stock,
      category,
    } = params;

    console.log(params);
    await Product.create({
      title,
      description,
      price: Number(price),
      discountPrice: Number(discountPrice),
      brand,
      thumbnail,
      stock,
      category,
    });

    revalidatePath("/");
  } catch (err) {
    console.log(err);
    throw err;
  }
}

export async function deleteProduct(params: any) {
  try {
    connectToDatabase();
    const { productId } = params;

    await Product.findByIdAndDelete(productId);

    revalidatePath("/");
  } catch (err) {
    console.log(err);
    throw err;
  }
}

export async function findProductById(params: any) {
  try {
    const { productId } = params;

    const product = await Product.findById(productId);
    return product;
  } catch (error) {
    console.log(error);
    throw error;
  }
}
