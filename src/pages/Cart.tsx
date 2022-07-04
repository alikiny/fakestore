import Box from '@mui/material/Box'
import { useAppSelector } from '../hooks/storeHook'

const Cart = () => {
    const cart = useAppSelector(state => state.cartReducer)
    return (
        <Box>
            {
                cart.total === 0 ? (
                    <Box>Your cart is empty</Box>
                ) : (
                    <Box>
                            {
                                cart.products.map(
                                    product => (
                                        <Box>
                                            {product.product.title}
                                            {product.quantity}
                                        </Box>
                                    )
                                )
}
                    </Box>
                )
            }
        </Box>
    )
}

export default Cart