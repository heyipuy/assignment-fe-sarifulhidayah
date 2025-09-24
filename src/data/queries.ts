import { ProductSchema } from "./schema";

export async function fetchProducts() {
  const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/products`);
  if (!res.ok) {
    throw new Error("Failed to fetch products");
  }
  const data = await res.json();
  return ProductSchema.array().parse(data);
}

export async function fetchProductById(id: string) {
  try {
    const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/products/${id}`);
    if (!res.ok) {
      throw new Error("Failed to fetch product");
    }
    const data = await res.json();
    return ProductSchema.parse(data);
  } catch {
    throw new Error("Failed to parse product data");
  }
}

export async function fetchCategories() {
  try {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_API_URL}/products/categories`
    );
    if (!res.ok) {
      throw new Error("Failed to fetch categories");
    }
    const data = await res.json();
    return data as string[];
  } catch {
    throw new Error("Failed to fetch categories");
  }
}

export async function fetchProductsByCategory(category: string) {
  try {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_API_URL}/products/category/${category}`
    );
    if (!res.ok) {
      throw new Error("Failed to fetch products by category");
    }
    const data = await res.json();
    return ProductSchema.array().parse(data);
  } catch {
    throw new Error("Failed to fetch products by category");
  }
}