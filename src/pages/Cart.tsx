import Box from '@mui/material/Box'
import Grid from '@mui/material/Grid'
import Divider from '@mui/material/Divider'

import { useAppSelector } from '../hooks/storeHook'
import SingleProductInCart from '../components/cart-components/SingleProductInCart'

const Cart = () => {
    const cart = useAppSelector(state => state.cartReducer)
    const totalPrice = cart.products.reduce((accumulator, product) => {
        return accumulator + product.product.price * product.quantity
    }, 0)
    return (
        <Box className='cart'>
            <Box className='cart__grid'>
                {
                    cart.total === 0 ? (
                        <Box>Your cart is empty</Box>
                    ) : (
                        <Grid
                            container
                            spacing={2}
                        >
                            {
                                cart.products.map(
                                    product => (
                                        <Grid
                                            key={product.product.id}
                                            item
                                            xs={3}
                                        >
                                            <SingleProductInCart product={product} />
                                        </Grid>
                                    )
                                )
                            }
                        </Grid>
                    )
                }
            </Box>
            <Divider />
            <Box className='cart__info'>
                <p>Total : {totalPrice} EUR</p>
            </Box>
        </Box>
    )
}

export default Cart