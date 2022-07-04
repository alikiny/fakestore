import createTestStore from "../utils/store";
import {
    cartReducer, addToCart,
    removeFromCart,
    updateProductAmount,
    emptyCart
} from "../../redux/reducer/cartReducer";
import { productToCart } from '../fixtures/products'

let store = createTestStore()
beforeEach(() => {
    store = createTestStore()
    store.dispatch(addToCart(productToCart))
})

describe('Test cart reducer', () => {
    test('test add same products to cart', () => {
        store.dispatch(addToCart(productToCart))
        const state = store.getState()
        expect(state.cartReducer.total).toBe(6)
        expect(state.cartReducer.products.length).toBe(1)
    })
    test('test remove product from cart', () => {
        store.dispatch(removeFromCart(productToCart))
        const state = store.getState()
        expect(state.cartReducer.total).toBe(0)
        expect(state.cartReducer.products.length).toBe(0)
    })
    test('test increase product amount in cart', () => {
        store.dispatch(updateProductAmount({
            ...productToCart,
            quantity: 2
        }))
        const state = store.getState().cartReducer
        expect(state.total).toBe(2)
    })
    test('empty cart', () => {
        store.dispatch(emptyCart())
        const state = store.getState().cartReducer
        expect(state.total).toBe(0)
        expect(state.products.length).toBe(0)
    })
})