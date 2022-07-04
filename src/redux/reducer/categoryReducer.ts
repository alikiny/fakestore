import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { Category } from "../../types/category";

const initialState:Category[]=[]
export const fetchCategory = createAsyncThunk(
    'fetCategory',
    async()=> {
        const data = await fetch('https://api.escuelajs.co/api/v1/categories')
        const result = await data.json()
        return result
    }
)
const categorySlice = createSlice({
    name: 'categrory reducder',
    initialState: initialState,
    reducers: {
        
    },
    extraReducers(builder) {
        builder.addCase(fetchCategory.fulfilled, (state, action) => {
            return action.payload
        })
    },
})

export const categoryReducer = categorySlice.reducer
