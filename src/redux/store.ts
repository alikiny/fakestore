import { configureStore } from "@reduxjs/toolkit"

import { productReducer } from "./reducer/productReducer"
import { userReducer } from "./reducer/userReducer"
import { cartReducer } from "./reducer/cartReducer"
import { categoryReducer } from "./reducer/categoryReducer"

export const store = configureStore({
    reducer: {
        productReducer,
        userReducer,
        cartReducer,
        categoryReducer
    }
})

export type RootState = ReturnType<typeof store.getState> //Type of the data in the state
export type AppDispatch = typeof store.dispatch // type of the dispatch action in the store



