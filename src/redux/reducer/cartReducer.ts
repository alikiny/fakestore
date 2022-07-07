import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Cart, ProductInCart } from "../../types/cart";

const initialState: Cart = {
    products: [],
    total: 0
}

const cartSlice = createSlice({
    name: 'cartReducer',
    initialState: initialState,
    reducers: {
        addToCart: (state, action: PayloadAction<ProductInCart>) => {
            const foundProduct = state.products.find(product => product.product.id === action.payload.product.id)
            if (foundProduct) {
                foundProduct.quantity +=1
            } else {
                state.products.push(action.payload)
            }
            state.total += action.payload.quantity
        },
        removeFromCart: (state, action: PayloadAction<ProductInCart>) => {
            state.products = state.products.filter(product => product.product.id !== action.payload.product.id)
            state.total -= action.payload.quantity
        },
        updateProductAmount: (state, action: PayloadAction<ProductInCart>) => {
            if (action.payload.quantity == 0) {
                state.products = state.products.filter(product=>product.product.id!=action.payload.product.id)
            }
            state.products = state.products.map(product => {
                if (product.product.id === action.payload.product.id) {
                    state.total -= product.quantity
                    product.quantity = action.payload.quantity
                    state.total += product.quantity
                }
                return product
            })
        },
        emptyCart: (state, action:PayloadAction<undefined>) => {
            return initialState
        }
    },
    extraReducers: (builder) => {

    }
})

export const cartReducer = cartSlice.reducer
export const {
    addToCart,
    removeFromCart,
    updateProductAmount,
    emptyCart
} = cartSlice.actions