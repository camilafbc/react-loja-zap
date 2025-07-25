import { Product } from "@/types/Product";
import { products } from "@/data/products";

export const getAllProducts = async (): Promise<Product[]> => {
  return new Promise((resolve) => {
    return setTimeout(() => {
      resolve(products);
    }, 2 * 1000);
  });
};
