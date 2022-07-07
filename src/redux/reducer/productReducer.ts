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

export const deleteProductAsync = createAsyncThunk(
    'deleteProductAsync',
    async (productId: string) => {
        try {
            const data = await fetch(`https://api.escuelajs.co/api/v1/products/${productId}`, { method: 'DELETE' })
            const response = await data.json()
            if (response.rta) {
                return productId
            } else {
                throw Error('Product not found')
            }
        } catch (e) {
            console.log(e)
            return e
        }
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
            state.filteredProducts = [...state.products]
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
            state.filteredProducts = state.products
        },
        getProductByCategory: (state, action: PayloadAction<number>) => {
            if (!!action.payload) {
                state.filteredProducts = state.products.filter(product => product.category.id === action.payload)
            } else {
                state.filteredProducts = [...state.products]
            }
        }
    },//sync actions
    extraReducers: (builder) => {
        builder.addCase(fetchProducts.fulfilled, (state, action: PayloadAction<Product[]>) => {
            state.products = action.payload.sort((a, b) => a.price - b.price)
            state.filteredProducts = [...state.products]
        })
            .addCase(deleteProductAsync.fulfilled, (state, action) => {
                state.products = state.products.filter(product => product.id != action.payload)
                state.filteredProducts = [...state.products]
            })
    } //async actions
})

export const productReducer = userSlicer.reducer
export const {
    addProduct,
    getProductByCategory,
    deleteProduct,
    updateProduct } = userSlicer.actions //export sync reducer actions

