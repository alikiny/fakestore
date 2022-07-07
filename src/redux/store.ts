import { configureStore } from "@reduxjs/toolkit"

import { productReducer } from "./reducer/productReducer"
import { userReducer } from "./reducer/userReducer"
import { cartReducer } from "./reducer/cartReducer"
import { categoryReducer } from "./reducer/categoryReducer"
import { User } from "../types/user"
import { Cart } from "../types/cart"

let preUser: { currentUser: User | undefined } = { currentUser: undefined }
let preCart: Cart = {
    products: [],
    total: 0
}
const getUser = localStorage.getItem('user')
const getCart = localStorage.getItem('cart')
if (!!getUser) {
    preUser = JSON.parse(getUser)
}
if (!!getCart) {
    preCart = JSON.parse(getCart)
}
const preloadedState = {
    userReducer: preUser,
    cartReducer: preCart,
}
const saveState = (state: RootState) => {
    try {
        const userReducer = JSON.stringify(state.userReducer)
        const cartReducer = JSON.stringify(state.cartReducer)
        localStorage.setItem('user', userReducer)
        localStorage.setItem('cart', cartReducer)
    } catch (e) {

    }
}
export const store = configureStore({
    reducer: {
        productReducer,
        userReducer,
        cartReducer,
        categoryReducer
    },
    preloadedState: preloadedState
})
store.subscribe(()=>saveState(store.getState()))
export type RootState = ReturnType<typeof store.getState> //Type of the data in the state
export type AppDispatch = typeof store.dispatch // type of the dispatch action in the store

