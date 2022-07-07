import { PayloadAction } from "@reduxjs/toolkit";

import { productReducer, addProduct, fetchProducts, updateProduct, deleteProductAsync } from "../../redux/reducer/productReducer";
import { Product, UpdatePayloadAction } from "../../types/products";
import products from "../fixtures/products";
import createTestStore from "../utils/store";
import { server } from "../utils/server";

const initialState: Product[] = []
const defaultAction: PayloadAction = {
    type: 'default',
    payload: undefined
}
const testProduct: Product = {
    id: 100,
    title: 'test product',
    price: 100,
    description: 'test product',
    images: [],
    category: {
        id: 200,
        name: 'test category',
        image: ''
    }
}

const deleteAction: PayloadAction<string | number> = {
    type: 'productReducer/deleteProduct',
    payload: 12
}

const updateAction: PayloadAction<UpdatePayloadAction> = {
    type: 'productReducer/updateProduct',
    payload: {
        id: 12,
        update: {
            id: 112,
            title: 'New product updated'
        }
    }
}

let store = createTestStore()

beforeEach(() => {
    store = createTestStore()
    products.forEach(product => store.dispatch(addProduct(product)))
    server.listen()
})

afterEach(() => {
    server.resetHandlers()
})

afterAll(() => {
    server.close()
})

describe('Test product reducer', () => {
    test('should return the initial state', () => {
        expect(productReducer(undefined, defaultAction).products).toEqual(initialState)
    })
    test('should fetch products from API and save to store', async () => {
        await store.dispatch(fetchProducts())
        const products = store.getState().productReducer.products
        expect(products.length).toBeGreaterThan(3)
        /* expect(productReducer(undefined, fetchProducts)) */
    })
    test('should add products to state', () => {
        store.dispatch(addProduct(testProduct))
        const state = store.getState().productReducer
        expect(state.products.length).toEqual(4)
    })
    test('should delete available product from api', async () => {
        await store.dispatch(deleteProductAsync('12'))
        expect(store.getState().productReducer.products.length).toBe(2)
    })
    test('should update product', () => {
        /* const state = productReducer(products, updateAction)
        const newProduct = state.find(product => product.id === 112)
        expect(newProduct).toBeDefined() */
        store.dispatch(updateProduct(updateAction.payload))
        const state = store.getState().productReducer
        const updatedProduct = state.products.find(product => product.id === 12)
        expect(updatedProduct).toBeDefined()
    })
})