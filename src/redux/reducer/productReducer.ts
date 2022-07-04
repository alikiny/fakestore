import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Product, ProductReducerState, UpdatePayloadAction } from "../../types/products";

const initialState: ProductReducerState = {
    products: [],
    filteredProducts: []
}

export const fetchProducts = createAsyncThunk(
    'fetchProducts',
    async () => {
        const data = await fetch('https://api.escuelajs.co/api/v1/products')
        const result = await data.json()
        return result
    }
)

const userSlicer = createSlice({
    name: 'productReducer',
    initialState: initialState,
    reducers: {
        addProduct: (state, action: PayloadAction<Product>) => {
            state.products = [...state.products, action.payload]
            state.filteredProducts = [...state.products, action.payload]
        },
        deleteProduct: (state, action: PayloadAction<string | number>) => {
            state.products.filter(product => product.id !== action.payload)
            state.filteredProducts=[...state.products]
        },
        updateProduct: (state, action: PayloadAction<UpdatePayloadAction>) => {
            state.products.map(product => {
                if (product.id === action.payload.id) {
                    product = {
                        ...product,
                        ...action.payload.update
                    }
                }
                return product
            })
            state.filteredProducts=state.products
        },
        getProductByCategory: (state, action: PayloadAction<string | number>) => {
            console.log('filter products')
            state.filteredProducts=state.products.filter(product => product.category.id === action.payload)
        }
    },//sync actions
    extraReducers: (builder) => {
        builder.addCase(fetchProducts.fulfilled, (state, action) => {
            state.products = action.payload
            state.filteredProducts = action.payload
        })
    } //async actions
})

export const productReducer = userSlicer.reducer
export const {
    addProduct,
    getProductByCategory,
    deleteProduct,
    updateProduct } = userSlicer.actions //export sync reducer actions

