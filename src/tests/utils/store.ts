import { configureStore } from "@reduxjs/toolkit";

import { productReducer } from "../../redux/reducer/productReducer";
import { userReducer } from "../../redux/reducer/userReducer";
import { cartReducer } from "../../redux/reducer/cartReducer";
import { categoryReducer } from "../../redux/reducer/categoryReducer";

const createTestStore = () => {
    const store = configureStore({
        reducer: {
            productReducer,
            userReducer,
            cartReducer,
            categoryReducer
        }
    })
    return store;
}

export default createTestStore