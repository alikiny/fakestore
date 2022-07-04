import { rest } from 'msw'
import { setupServer } from 'msw/node'
import { fireEvent, screen } from '@testing-library/react'

import createTestStore from '../utils/store'
import { fetchCategory } from '../../redux/reducer/categoryReducer'
import {server} from '../utils/server'

let store = createTestStore()
beforeEach(() => {
    store = createTestStore()
    server.listen()
})
afterEach(() => server.resetHandlers())
afterAll(() => server.close())

describe('test category reducer', () => {
    test('fetch category from api', async () => {
        await store.dispatch(fetchCategory())
        expect(store.getState().categoryReducer.length).toBe(1)
    })
})