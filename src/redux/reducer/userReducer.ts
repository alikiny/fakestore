import { createAsyncThunk, createSlice, PayloadAction, Reducer } from "@reduxjs/toolkit";
import { LoginUser, User } from "../../types/user";

const initialUser: { currentUser: User | undefined } = {
    currentUser: undefined
}
export const loginAsync = createAsyncThunk(
    'loginAsync',
    async ({ email, password }: LoginUser) => {
        try {
            const data = await fetch('https://api.escuelajs.co/api/v1/auth/login', {
                method: 'POST',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ email, password })
            })
            const response = await data.json()
            if (response.access_token) {
                localStorage.setItem('token', response.access_token)
                const getUser = await fetch('https://api.escuelajs.co/api/v1/auth/profile',
                    {
                        method: 'GET',
                        headers: {
                            Authorization: `Bearer ${response.access_token}`
                        }
                    })
                return await getUser.json()
            } else {
                throw new Error('cannot log in')
            }
        } catch (e: any) {
            console.log(e.message)
        }

    }
)
const userSlice = createSlice({
    name: 'userReducer',
    initialState: initialUser,
    reducers: {
        addUser: (state, action: PayloadAction<User>) => {
            state.currentUser = action.payload
        },
        logOut: (state) => {
            localStorage.removeItem('token')
            state.currentUser = undefined
        }
    },
    extraReducers: (builder) => {
        builder.addCase(loginAsync.fulfilled, (state, action) => {
            state.currentUser=action.payload
        })
    }
})

export const userReducer = userSlice.reducer
export const { addUser, logOut } = userSlice.actions