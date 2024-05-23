"use client";

import { z } from "zod";

export const addProductSchema = z.object({
  title: z.string().min(5),
  description: z.string(),
  price: z.string(),
  discountPrice: z.string(),
  brand: z.string(),
  stock: z.string(),
  category: z.string(),
  thumbnail: z.string(),
});
