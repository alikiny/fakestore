import { rest } from 'msw'
import { setupServer } from 'msw/node'

export const handlers = [
    rest.get('https://api.escuelajs.co/api/v1/categories', (req, res, ctx) => {
        return res(
            ctx.json(
                [
                    {
                        "id": 1,
                        "name": "Clothes",
                        "image": "https://placeimg.com/640/480/any"
                    }
                ]),
            ctx.delay(150))
    })
]
export const server = setupServer(...handlers)
