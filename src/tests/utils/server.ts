import { rest } from 'msw'
import { setupServer } from 'msw/node'

export const handlers = [

    //This is mock api for the fetch category request
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
    }),

    //
    rest.delete(`https://api.escuelajs.co/api/v1/products/:productId`, async (req, res, ctx) => {
        if (req.params.productId === '12') {
            return res(
                ctx.status(200),
                ctx.json({ rta: true })
            )
        } else {
            return res(
                ctx.status(404),
                ctx.json({
                    message: 'product not found',
                    status: 404
                })
            )
        }

    })
]
export const server = setupServer(...handlers)

