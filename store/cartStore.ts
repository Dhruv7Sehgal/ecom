import { create } from "zustand";

interface Product {
  _id: string;
  title: string;
  description: string;
  price: number;
  discountPrice: number;
  brand: string;
  stock: string;
  category: string;
  thumbnail: string;
}

interface CartItem extends Product {
  quantity: number;
}

interface CartState {
  cart: CartItem[];
  addProduct: (product: Product) => void;
  removeProduct: (_id: string) => void;
}

const useCartStore = create<CartState>((set) => ({
  cart: [],
  addProduct: (product) =>
    set((state) => {
      const existingProduct = state.cart.find(
        (item) => item._id === product._id
      );
      if (existingProduct) {
        // If the product already exists in the cart, increase its quantity
        return {
          cart: state.cart.map((item) =>
            item._id === product._id
              ? { ...item, quantity: item.quantity + 1 }
              : item
          ),
        };
      } else {
        // If the product does not exist in the cart, add it with quantity 1
        return {
          cart: [...state.cart, { ...product, quantity: 1 }],
        };
      }
    }),
  removeProduct: (_id) =>
    set((state) => ({
      cart: state.cart.filter((item) => item._id !== _id),
    })),
}));

export default useCartStore;
