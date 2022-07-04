import { useEffect, useState } from "react"

import { Product } from "../types/products"

const useProduct = (productId: string | undefined) => {
    const [product, setProduct] = useState<Product | undefined>(undefined)
    const [isLoading, setLoading] =useState<Boolean>(true)
    useEffect(() => {
        if (productId) {
            try {
                fetch(`https://api.escuelajs.co/api/v1/products/${productId}`).then(
                    data => data.json()
                ).then(
                    result => {
                        setProduct(result)
                        setLoading(false)
                    }
                )
            } catch (error: any) {
                console.log('error in useProduct', error.message)
            }
        }
    }, [productId])
    return {product, isLoading}
}
export default useProduct