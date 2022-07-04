import { createSlice, PayloadAction, Reducer } from "@reduxjs/toolkit";
import { User } from "../../types/user";

const initialUser : {currentUser:User|undefined}= {
    currentUser:undefined
}
const userSlice = createSlice({
    name: 'userReducer',
    initialState: initialUser,
    reducers: {
        addUser: (state, action: PayloadAction<User>) => {
            state.currentUser = action.payload
        }
    },
    extraReducers: (builder) => {

    }
})

export const userReducer = userSlice.reducer
export const { addUser } = userSlice.actions