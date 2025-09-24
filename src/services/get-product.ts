
export const getProducts = async () => {
    const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/products`);
    if (!res.ok) {
        throw new Error("Failed to fetch products");
    }
    const products = await res.json();
    return products;
}

export const getProductById = async (id: string) => {
    const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/products/${id}`);
    if (!res.ok) {
        throw new Error("Failed to fetch product");
    }
    const product = await res.json();
    return product;
}

export const getCategoryProducts = async (category: string) => {
    const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/products/category/${category}`);
    if (!res.ok) {
        throw new Error("Failed to fetch category products");
    }
    const products = await res.json();
    return products;
}