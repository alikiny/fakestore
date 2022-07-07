import { Category } from "./category";

export interface Product {
    id: number,
    title: string,
    price: number,
    description: string,
    category: Category,
    images: string[]
}

export interface UpdatePayloadAction {
    id: string | number,
    update: Partial<Product>
}

export interface ProductReducerState {
    products: Product[],
    filteredProducts: Product[]
}