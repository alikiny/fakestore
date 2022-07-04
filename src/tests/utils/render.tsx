import React from 'react'
import { Queries, queries, render as rtlRender, RenderOptions, RenderResult } from '@testing-library/react'
import { configureStore } from '@reduxjs/toolkit'
import { Provider } from 'react-redux'
import { BrowserRouter } from 'react-router-dom'

import { productReducer } from '../../redux/reducer/productReducer'
import { userReducer } from '../../redux/reducer/userReducer'

const store = configureStore({
    reducer: {
        productReducer,
        userReducer
    }
})

export function customRender(
    ui: React.ReactElement,
    options?: Omit<RenderOptions, 'queries'>,
): RenderResult {
    function Wrapper({ children }: any) {
        return <Provider store={store}><BrowserRouter>{children}</BrowserRouter></Provider>
    }
    return rtlRender(ui, { wrapper: Wrapper, ...options })
}

// re-export everything
export * from '@testing-library/react'
// override render method