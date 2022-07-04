import { Product } from "./products"

export interface Cart {
    products: ProductInCart[],
    total: number
}

export interface ProductInCart {
    product: Product,
    quantity: number
}