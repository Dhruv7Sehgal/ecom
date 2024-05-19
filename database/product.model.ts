import { Document, Schema, model, models } from "mongoose";

export interface IProduct extends Document {
  title: string;
  description: string;
  price?: number;
  discountPrice?: number;
  brand?: string;
  stock?: number;
  category?: string;
  thumbnail?: string;
}

const ProductSchema = new Schema<IProduct>({
  title: {
    type: String,
    unique: true,
  },
  description: {
    type: String,
  },
  price: {
    type: Number,
  },
  discountPrice: {
    type: Number,
  },
  brand: {
    type: String,
  },
  stock: {
    type: Number,
  },
  category: {
    type: String,
  },
  thumbnail: {
    type: String,
  },
});

const Product = models.Product || model<IProduct>("Product", ProductSchema);

export default Product;
