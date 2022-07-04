import { Product } from "./products";

export interface ProductCardProp {
    product: Product
}

export interface CustomPaginationProp {
    count: number,
    setPage: (page: number) => void
}

export interface ImageCarouselProp {
    images: string[]
}

export interface LoginProp {
    open: boolean,
    handleClose: ()=>void
}