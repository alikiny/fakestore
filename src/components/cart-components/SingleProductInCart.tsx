import Box from '@mui/material/Box'
import IconButton from '@mui/material/IconButton'
import AddBoxIcon from '@mui/icons-material/AddBox'
import IndeterminateCheckBoxIcon from '@mui/icons-material/IndeterminateCheckBox'

import { ProductInCart } from '../../types/cart'
import { useAppDispatch } from '../../hooks/storeHook'
import { updateProductAmount } from '../../redux/reducer/cartReducer'

const SingleProductInCart = ({ product }: { product: ProductInCart }) => {
    const dispatch = useAppDispatch()
    const onChangeQuantity = (command: 'increase' | 'decrease') => {
        let quantity = product.quantity
        if (command === 'decrease') {
            quantity = product.quantity - 1
        } else {
            quantity = product.quantity + 1
        }
        dispatch(updateProductAmount({
            ...product,
            quantity: quantity
        }))
    }
    return (
        <Box className='cart__product'>
            <img src={product.product.images[0]} alt="product" />
            <Box>
                <h6>{product.product.title}</h6>
                <p>{product.product.price} EUR</p>
                <Box className='cart__product__quantity'>
                    <IconButton
                        onClick={() => onChangeQuantity('increase')}
                    ><AddBoxIcon /></IconButton>
                    <p>{product.quantity}</p>
                    <IconButton
                        onClick={() => onChangeQuantity('decrease')}
                    ><IndeterminateCheckBoxIcon /></IconButton>
                </Box>
            </Box>
        </Box>
    )
}

export default SingleProductInCart